const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function capture(html, re) {
  return [...html.matchAll(re)].map((m) => m[1]);
}

const COMMAND = ["cordoba"];
const PRIMARY = ["cato", "jomini", "rommel", "xenophon", "moltke", "colbert"];
const SPECIAL = [
  "fukuzawa",
  "vauban",
  "polybius",
  "hattori",
  "hopper",
  "faraday",
  "lovelace",
  "galen",
  "tesler",
  "licklider"
];

function theaterChunk(html, theater) {
  const re = new RegExp(
    `<section[^>]*data-theater="${theater}"[^>]*>([\\s\\S]*?)</section>`,
    "i"
  );
  const m = html.match(re);
  assert.ok(m, `missing section[data-theater="${theater}"]`);
  return m[1];
}

function idsIn(chunk) {
  return capture(chunk, /<button[^>]*\bdata-id="([^"]+)"/g);
}

test("chart uses Primary Staff, not Operations, as the middle theater", () => {
  const html = read("index.html");
  const labels = capture(html, /class="theater-label"[^>]*>([^<]+)</g);
  assert.deepEqual(labels, ["Command", "Primary Staff", "Special Staff"]);
  assert.equal(html.includes(">Operations<"), false);
  assert.equal(/\bOperations\b/.test(html), false);
});

test("theaters hold the approved people and no empty J6/J7 doors", () => {
  const html = read("index.html");
  assert.deepEqual(idsIn(theaterChunk(html, "command")), COMMAND);
  assert.deepEqual(idsIn(theaterChunk(html, "primary")), PRIMARY);
  assert.deepEqual(idsIn(theaterChunk(html, "special")), SPECIAL);
  assert.equal(html.includes("J6"), false);
  assert.equal(html.includes("J7"), false);
  assert.equal(/data-id="j[67]"/.test(html), false);
});

test("Carl sits above the theaters as a wide person chip", () => {
  const html = read("index.html");
  const carl = html.match(/<button[^>]*id="n-carl"[\s\S]*?<\/button>/);
  assert.ok(carl, "missing #n-carl button");
  assert.match(carl[0], /data-id="carl"/);
  assert.match(carl[0], /chip-wide|chip wide/);
  assert.match(html, /id="n-carl"[\s\S]*class="theaters"/);
});

test("person chips are buttons that control the dossier panel", () => {
  const html = read("index.html");
  const buttons = [...html.matchAll(/<button([^>]*)>/g)].map((m) => m[1]);
  const people = buttons.filter((attrs) => /\bdata-id="/.test(attrs));
  assert.equal(people.length, 1 + COMMAND.length + PRIMARY.length + SPECIAL.length);
  people.forEach((attrs) => {
    assert.match(attrs, /type="button"/);
    assert.match(attrs, /aria-controls="panel"/);
    assert.match(attrs, /aria-expanded="/);
  });
});

test("theater headers are non-interactive labels", () => {
  const html = read("index.html");
  const labeled = [...html.matchAll(/<([a-z0-9]+)([^>]*class="theater-label"[^>]*)>/gi)];
  assert.equal(labeled.length, 3);
  labeled.forEach(([, tag]) => {
    assert.notEqual(tag.toLowerCase(), "button");
  });
});

test("chips include circular portrait slots", () => {
  const html = read("index.html");
  const faces = capture(html, /<img([^>]*class="chip-face"[^>]*)>/g);
  assert.equal(faces.length, 1 + COMMAND.length + PRIMARY.length + SPECIAL.length);
  faces.forEach((attrs) => {
    assert.match(attrs, /alt=""/);
  });
  assert.match(read("app.js"), /bindPortrait\(img, id, ""\)/);
});

test("public copy stays sanitized", () => {
  const files = ["index.html", "styles.css", "app.js", "README.md"];
  const banned = [
    /CostPoint/i,
    /VELEN/i,
    /\bJETT\b/,
    /\bSAM\b/,
    /Outlook/i,
    /job hunt/i
  ];
  files.forEach((file) => {
    const text = read(file);
    banned.forEach((re) => {
      assert.equal(re.test(text), false, `${re} found in ${file}`);
    });
  });
});

test("emboss and reduced-motion rules exist", () => {
  const css = read("styles.css");
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /box-shadow/);
  assert.match(css, /#14110e|#1c1814/);
  assert.match(css, /#c4a46a/);
});

test("buildTreePaths draws a desktop header bar and person stubs", () => {
  const { buildTreePaths } = require("../app.js");
  const root = { x: 200, top: 0, bottom: 40, left: 140, right: 260, y: 20 };
  const headers = [
    { x: 80, top: 80, bottom: 104, left: 20, right: 140, y: 92 },
    { x: 200, top: 80, bottom: 104, left: 140, right: 260, y: 92 },
    { x: 320, top: 80, bottom: 104, left: 260, right: 380, y: 92 }
  ];
  const groups = [
    [{ x: 80, top: 140, bottom: 200, left: 40, right: 120, y: 170 }],
    [
      { x: 160, top: 140, bottom: 200, left: 120, right: 200, y: 170 },
      { x: 240, top: 140, bottom: 200, left: 200, right: 280, y: 170 }
    ],
    [
      { x: 300, top: 140, bottom: 200, left: 260, right: 340, y: 170 },
      { x: 300, top: 220, bottom: 280, left: 260, right: 340, y: 250 }
    ]
  ];
  const paths = buildTreePaths({ root, headers, groups, stacked: false });
  assert.ok(Array.isArray(paths));
  assert.ok(paths.length >= 8);
  assert.ok(paths.some((d) => d.includes(`M ${root.x} ${root.bottom} V `)));
  assert.ok(paths.some((d) => d.includes(`H ${headers[2].x}`)));
  assert.ok(paths.some((d) => d.endsWith(`V ${groups[0][0].top}`)));
  assert.ok(paths.some((d) => d.endsWith(`V ${groups[2][1].top}`)));
});

test("buildTreePaths uses a spine and stubs when stacked", () => {
  const { buildTreePaths } = require("../app.js");
  const root = { x: 160, top: 0, bottom: 40, left: 80, right: 240, y: 20 };
  const headers = [{ x: 160, top: 70, bottom: 94, left: 80, right: 240, y: 82 }];
  const groups = [
    [
      { x: 80, top: 120, bottom: 180, left: 20, right: 140, y: 150 },
      { x: 240, top: 120, bottom: 180, left: 180, right: 300, y: 150 }
    ]
  ];
  const paths = buildTreePaths({ root, headers, groups, stacked: true });
  assert.ok(paths.some((d) => d.includes(`M ${root.x} ${root.bottom} V `)));
  assert.ok(paths.some((d) => d.includes(`H ${groups[0][0].right}`)));
  assert.ok(paths.some((d) => d.includes(`H ${groups[0][1].left}`)));
});
