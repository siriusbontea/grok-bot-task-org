const STAFF = {
  carl: {
    door: "Carl",
    code: "CoS",
    full: "Carl von Clausewitz",
    life: "1780–1831",
    role: "Routes the staff. Holds the weekday brief. Keeps work and personal theaters apart. Only all-theater seat besides the deputy.",
    story: "He wrote how a staff thinks when the plan hits friction, and when force has to stay under politics. On War is that method. He never treated it as a finished manual, which is why this door routes the brief instead of reciting one.",
    duties: [
      "Route work to the right seat.",
      "Weekday morning brief.",
      "Monday opportunity scout (he owns the clock; Plans supports).",
      "Theater firewall."
    ],
    cadence: "Weekday brief, 6:00 AM. Monday scout, 7:30 AM.",
    portrait: "portraits/carl-imagine.jpg",
    alt: "Generated photoreal reimagining of Carl von Clausewitz in a high-collar uniform. Not a historical photograph.",
    caption: "Generated reimagining. Not a historical photograph."
  },
  cordoba: {
    door: "Córdoba",
    code: "DCoS",
    full: "Gonzalo Fernández de Córdoba, El Gran Capitán",
    life: "1453–1515",
    role: "Deputy. Covers CoS across both theaters. Not a second chief, not red cell, not a product seat.",
    story: "A French charge beat his first Italian army, so he rebuilt the infantry around pikes, guns, and supply. The later tercio grew from that habit. A deputy covers the whole field so the chief is not the only moving part.",
    duties: [
      "Cover when CoS is down.",
      "Same firewall, same routing judgment.",
      "Quiet unless needed."
    ],
    cadence: "On call. No weekly clock of his own.",
    portrait: "portraits/cordoba-imagine.jpg",
    alt: "Generated photoreal reimagining of Gonzalo Fernández de Córdoba in engraved armor. Not a historical photograph.",
    caption: "Generated reimagining. Not a historical photograph."
  },
  cato: {
    door: "Cato",
    code: "J1",
    full: "Marcus Porcius Cato the Elder, the Censor",
    life: "234–149 BC",
    role: "Administration. Hours reminders and travel. Does not submit time or manage the calendar.",
    story: "He kept the household and the state on the same ledger. As censor he cut waste. He wrote a farming manual, not a battle narrative. Administration is the line-item.",
    duties: [
      "Weekday hours reminder with a rough split.",
      "Morning catch-up only if the night before was unanswered.",
      "Travel research when asked.",
      "Never invents a code or books a trip unless told."
    ],
    cadence: "Weekdays 5:00 PM hours reminder. 8:30 AM catch-up only if needed.",
    portrait: "portraits/cato-imagine.jpg",
    alt: "Generated photoreal reimagining of Cato the Elder in dark robes. Not a historical photograph.",
    caption: "Generated reimagining. Not a historical photograph."
  },
  jomini: {
    door: "Jomini",
    code: "J2",
    full: "Antoine-Henri Jomini",
    life: "1779–1869",
    role: "Intelligence and red cell. One theater per task. Never writes the original product he is asked to oppose.",
    story: "He served Napoleon, then the Tsar, and wrote The Art of War as a map you can argue with: lines of operation, the geometry of a campaign. That is a red cell. He does not write the plan he is asked to break.",
    duties: [
      "Program and competitive research from live sources.",
      "Red cell: what would have to be true for a recommendation to be wrong, the real edge cases, one constructive counter."
    ],
    cadence: "On call. No weekly clock.",
    portrait: "portraits/jomini-imagine.jpg",
    alt: "Generated photoreal reimagining of Antoine-Henri Jomini in a dark uniform. Not a historical photograph.",
    caption: "Generated reimagining. Not a historical photograph."
  },
  rommel: {
    door: "Rommel",
    code: "J3",
    full: "Erwin Rommel",
    life: "1891–1944",
    role: "Operations. Reads status, drafts, tracks work. Does not publish to customer or program surfaces. The principal posts as himself.",
    story: "He ran operations from the front. Tempo was the method: see the ground, move the units, write it down after. Infantry Attacks is a field notebook. North Africa is the reputation because he was there, not because he wrote a doctrine.",
    duties: [
      "Inspect status.",
      "Draft decision and issue prose for the principal to send.",
      "Track the live workstreams.",
      "Does not host the coding swarm or mark its tasks complete."
    ],
    cadence: "On call with the work.",
    portrait: "portraits/rommel-imagine.jpg",
    alt: "Generated photoreal reimagining of Erwin Rommel in a field cap. Not a historical photograph.",
    caption: "Generated reimagining. Not a historical photograph."
  },
  xenophon: {
    door: "Xenophon",
    code: "J4",
    full: "Xenophon of Athens",
    life: "c. 430–354 BC",
    role: "Logistics. Sync health and file-structure recommendations. No copies without an approved diff.",
    story: "After Cunaxa the army was stranded in Mesopotamia. He helped walk the Ten Thousand home and wrote the Anabasis as the count: marches, food, the column intact. It is a logistics book wearing a war memoir.",
    duties: [
      "Weekly compare of the file tree against the destination.",
      "Up to three structure notes.",
      "Never copy until a diff is approved."
    ],
    cadence: "Weekly logistics check, Monday 9:22 AM.",
    portrait: "portraits/xenophon-imagine.jpg",
    alt: "Generated photoreal reimagining of Xenophon in a cloak. Not a historical photograph.",
    caption: "Generated reimagining. Not a historical photograph."
  },
  moltke: {
    door: "Moltke",
    code: "J5",
    full: "Helmuth von Moltke the Elder",
    life: "1800–1891",
    role: "Plans. Decision documents. Supports the Monday scout.",
    story: "Chief of the Prussian General Staff. He wrote that a plan of operations does not hold with any certainty past first contact with the main force. He built the staff whose job was the next plan, in time.",
    duties: [
      "PRFAQ, statements of work, courses of action.",
      "Drafts stay local.",
      "Scout support for the Monday clock.",
      "A response draft only when an owner is named."
    ],
    cadence: "On call for plans. Supports Monday 7:30 AM scout.",
    portrait: "portraits/moltke-imagine.jpg",
    alt: "Generated photoreal reimagining of Helmuth von Moltke the Elder in uniform. Not a historical photograph.",
    caption: "Generated reimagining. Not a historical photograph."
  },
  fukuzawa: {
    door: "Fukuzawa",
    code: "Career",
    full: "Fukuzawa Yukichi",
    life: "1835–1901",
    role: "Special Staff. Public professional branding drafts. The principal reviews before anything goes live.",
    story: "Low-ranking samurai son who left inherited rank. He saw America in 1860 and Europe in 1862, founded Keio, and wrote An Encouragement of Learning: heaven does not create one man above another. He declined government office and taught in public, under his own name. This door drafts a face. The principal still approves it.",
    duties: [
      "Draft public posts and profile copy that a stranger can understand.",
      "Pair drafts with an image.",
      "Expertise, not complaint.",
      "Never publish without an explicit go."
    ],
    cadence: "Weekday branding draft, 8:28 AM.",
    portrait: "portraits/fukuzawa-imagine.jpg",
    alt: "Generated photoreal reimagining of Fukuzawa Yukichi in a Western jacket. Not a historical photograph.",
    caption: "Generated reimagining. Not a historical photograph."
  },
  vauban: {
    door: "Vauban",
    code: "Design",
    full: "Sébastien Le Prestre de Vauban",
    life: "1633–1707",
    role: "Special Staff. Design. The shape of a thing, then the change. The principal still publishes.",
    story: "He spent a career making and unmaking walls. A fortress was geometry and supply. He wrote that a place well sited is already half held. Design is the line before the fight.",
    duties: [
      "Keep the rules consistent.",
      "Surgical edits only.",
      "Flag what is out of balance.",
      "Do not write the career packet or the staff brief."
    ],
    cadence: "On call with the work.",
    portrait: "portraits/vauban-imagine.jpg",
    alt: "Generated photoreal reimagining of Sébastien Le Prestre de Vauban in engraved armor. Not a historical photograph.",
    caption: "Generated reimagining. Not a historical photograph."
  },
  polybius: {
    door: "Polybius",
    code: "Continuity",
    full: "Polybius of Megalopolis",
    life: "c. 200–c. 118 BC",
    role: "Special Staff. Continuity. Keeps later books honest to the first. The principal still publishes.",
    story: "He wrote the Histories so a reader could see why Rome rose: mixed constitution, the accident, the habit. Continuity is that job. One book must still mean the same thing in the next.",
    duties: [
      "Cross-book alignment.",
      "Keep terminology consistent.",
      "Flag a contradiction.",
      "Do not rewrite the argument unless Design or the chief asked."
    ],
    cadence: "On call with the work.",
    portrait: "portraits/polybius-imagine.jpg",
    alt: "Generated photoreal reimagining of Polybius of Megalopolis in a cloak. Not a historical photograph.",
    caption: "Generated reimagining. Not a historical photograph."
  },
  hattori: {
    door: "Hattori",
    code: "Certs",
    full: "Hattori Hanzō",
    life: "c. 1542–1596",
    role: "Special Staff. Instructor. Official free IBM credentials. Reports to CoS. Not a J-seat.",
    story: "He taught Ieyasu's men how to read a path, not how to hold a line. Official credentials are that lesson: live issuers, nothing claimed that was not issued.",
    duties: [
      "Instruct on official free IBM credentials.",
      "Never claim a credential that is not issued.",
      "Do not sit a paid exam unless told.",
      "Do not write the staff brief or a public branding draft."
    ],
    cadence: "On call with the work.",
    portrait: "portraits/hattori-imagine.jpg",
    alt: "Generated photoreal reimagining of Hattori Hanzō in a high-collar jacket. Not a historical photograph.",
    caption: "Generated reimagining. Not a historical photograph."
  },
  hopper: {
    door: "Hopper",
    code: "Learn",
    full: "Grace Hopper",
    life: "1906–1992",
    role: "Special Staff. Instructor. Official free Microsoft Learn. Reports to CoS. Not a J-seat.",
    story: "She taught a machine to take English instead of octal. COBOL came from that habit. This door tutors Microsoft Learn the same way: a path you can walk, not a title you buy.",
    duties: [
      "Instruct on official free Microsoft Learn paths.",
      "Record issued trophies and modules only.",
      "Do not sit a paid exam unless told.",
      "Do not write the staff brief or a public branding draft."
    ],
    cadence: "On call with the work.",
    portrait: "portraits/hopper-imagine.jpg",
    alt: "Generated photoreal reimagining of Grace Hopper in a high-collar jacket. Not a historical photograph.",
    caption: "Generated reimagining. Not a historical photograph."
  },
  faraday: {
    door: "Faraday",
    code: "Agents",
    full: "Michael Faraday",
    life: "1791–1867",
    role: "Special Staff. Instructor. Official free Hugging Face AI Agents Course. Reports to CoS. Not a J-seat.",
    story: "He taught from the bench. Almost no formal schooling, then Davy's lab, then Christmas lectures you could feel without a formula first. This door tutors the agents course that way: build, measure, keep going.",
    duties: [
      "Instruct on the official Hugging Face AI Agents Course.",
      "Keep issued units only.",
      "Do not sit a paid exam unless told.",
      "Do not write the staff brief or a public branding draft."
    ],
    cadence: "On call with the work.",
    portrait: "portraits/faraday-imagine.jpg",
    alt: "Generated photoreal reimagining of Michael Faraday in a wet overcoat. Not a historical photograph.",
    caption: "Generated reimagining. Not a historical photograph."
  },
  lovelace: {
    door: "Lovelace",
    code: "LangChain",
    full: "Ada Lovelace",
    life: "1815–1852",
    role: "Special Staff. Instructor. Official free LangChain Academy. Reports to CoS. Not a J-seat.",
    story: "She taught that a machine might compose, not only calculate, if you gave it the right notes. The Notes on the Analytical Engine are that lesson. This door tutors LangChain Academy the same way: agents as composition, not magic.",
    duties: [
      "Instruct on official free LangChain Academy courses.",
      "Keep issued certificates only.",
      "Do not sit a paid exam unless told.",
      "Do not write the staff brief or a public branding draft."
    ],
    cadence: "On call with the work.",
    portrait: "portraits/lovelace-imagine.jpg",
    alt: "Generated photoreal reimagining of Ada Lovelace in a Victorian dress. Not a historical photograph.",
    caption: "Generated reimagining. Not a historical photograph."
  },
  galen: {
    door: "Galen",
    code: "Health",
    full: "Galen of Pergamon",
    life: "129–c. 216",
    role: "Special Staff. Nutrition and exercise. Reports to CoS. Not a J-seat.",
    story: "He treated gladiators in Pergamon and later the emperors in Rome. Diet and training were the same problem as a wound: keep the body able. This door is that seat. Not a physician of record.",
    duties: [
      "Nutrition and training questions.",
      "Keep advice practical.",
      "Do not write the staff brief or a public branding draft."
    ],
    cadence: "On call.",
    portrait: "portraits/galen-imagine.jpg",
    alt: "Generated photoreal reimagining of Galen of Pergamon in dark robes. Not a historical photograph.",
    caption: "Generated reimagining. Not a historical photograph."
  },
  tesler: {
    door: "Tesler",
    code: "Swift",
    full: "Larry Tesler",
    life: "1945–2020",
    role: "Special Staff. Instructor. Official free Apple Swift tutorials. Reports to CoS. Not a J-seat.",
    story: "He taught the machine to drop its modes. Cut, copy, paste were the lesson: move text without switching worlds. This door tutors official free Swift the same way: one language, no ceremony. Nothing issued.",
    duties: [
      "Instruct on official free Apple Swift tutorials.",
      "Tutor Swift, Swift Playground, Pathways, and free WWDC sessions.",
      "Nothing is issued. Do not claim a credential.",
      "Do not write the staff brief or a public branding draft."
    ],
    cadence: "On call with the work.",
    portrait: "portraits/tesler-imagine.jpg",
    alt: "Generated photoreal reimagining of Larry Tesler in a high-collar jacket. Not a historical photograph.",
    caption: "Generated reimagining. Not a historical photograph."
  },
  licklider: {
    door: "Licklider",
    code: "AWS",
    full: "J.C.R. Licklider",
    life: "1915–1990",
    role: "Special Staff. Instructor. Official free AWS Skill Builder. Reports to CoS. Not a J-seat.",
    story: "He taught that people and machines should think together, not in turns. He called the mesh an Intergalactic Computer Network before the net had a name. This door tutors that habit on free AWS Skill Builder. Nothing issued until the issuer says so.",
    duties: [
      "Instruct on official free AWS Skill Builder courses.",
      "Record issued digital badges only.",
      "Do not sit a paid exam unless told.",
      "Do not write the staff brief or a public branding draft."
    ],
    cadence: "On call with the work.",
    portrait: "portraits/licklider-imagine.jpg",
    alt: "Generated photoreal reimagining of J.C.R. Licklider in a high-collar jacket. Not a historical photograph.",
    caption: "Generated reimagining. Not a historical photograph."
  }
};

const COMMONS_FALLBACK = {
  carl: "https://commons.wikimedia.org/wiki/Special:FilePath/Clausewitz.jpg",
  cordoba: "https://commons.wikimedia.org/wiki/Special:FilePath/Gonzalo_Fern%C3%A1ndez_de_C%C3%B3rdoba.jpg",
  cato: "https://commons.wikimedia.org/wiki/Special:FilePath/Cato_der_%C3%84ltere.jpg",
  jomini: "https://commons.wikimedia.org/wiki/Special:FilePath/Jomini_Antoine-Henri.jpg",
  rommel: "https://commons.wikimedia.org/wiki/Special:FilePath/Wolfgang_Willrich_-_Portr%C3%A4t_Erwin_Rommel,_1941.jpg",
  xenophon: "https://commons.wikimedia.org/wiki/Special:FilePath/Xenophon.jpg",
  moltke: "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_Helmuth_von_Moltke_the_Elder_(by_Carl_G%C3%BCnther)_-_BNF_Gallica.jpg",
  fukuzawa: "https://commons.wikimedia.org/wiki/Special:FilePath/Fukuzawa_Yukichi.jpg",
  vauban: "https://commons.wikimedia.org/wiki/Special:FilePath/Vauban_picture.jpg",
  polybius: "https://commons.wikimedia.org/wiki/Special:FilePath/Polybios_head.JPG",
  hattori: "https://commons.wikimedia.org/wiki/Special:FilePath/Hattori_Hanzo.jpg",
  hopper: "https://commons.wikimedia.org/wiki/Special:FilePath/Commodore_Grace_M._Hopper,_USN_(covered).jpg",
  faraday: "https://commons.wikimedia.org/wiki/Special:FilePath/M_Faraday_Th_Phillips_oil_1842.jpg",
  lovelace: "https://commons.wikimedia.org/wiki/Special:FilePath/Ada_Lovelace_portrait.jpg",
  galen: "https://commons.wikimedia.org/wiki/Special:FilePath/Galenus.jpg",
  tesler: "https://commons.wikimedia.org/wiki/Special:FilePath/Larry_Tesler_Smiles_at_Whisper_(cropped).jpeg",
  licklider: "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_J._C._R._Licklider.jpg"
};

const ORDER = ["carl", "cordoba", "cato", "jomini", "rommel", "xenophon", "moltke", "fukuzawa", "vauban", "polybius", "hattori", "hopper", "faraday", "lovelace", "galen", "tesler", "licklider"];

const shell = document.getElementById("shell");
const panel = document.getElementById("panel");
const scrim = document.getElementById("scrim");
const chart = document.getElementById("chart");
const svg = document.getElementById("lines");
const closeBtn = document.getElementById("panel-close");

let current = null;
let activeTab = "story";

function $(id) {
  return document.getElementById(id);
}

function isNarrow() {
  return window.matchMedia("(max-width: 860px)").matches;
}

function setTab(name) {
  activeTab = name;
  document.querySelectorAll(".tab").forEach((btn) => {
    const on = btn.dataset.tab === name;
    btn.setAttribute("aria-selected", on ? "true" : "false");
  });
  document.querySelectorAll(".tab-panel").forEach((el) => {
    const on = el.id === "tab-" + name;
    el.hidden = !on;
    el.classList.toggle("is-active", on);
  });
}

function fillPanel(id) {
  const p = STAFF[id];
  if (!p) return;
  $("panel-code").textContent = p.code;
  $("panel-door").textContent = p.door;
  $("panel-full").textContent = p.full;
  $("panel-life").textContent = p.life;
  $("panel-role").textContent = p.role;
  $("panel-story").textContent = p.story;
  $("panel-cadence").textContent = p.cadence;
  $("panel-caption").textContent = p.caption;
  setPortrait(id, p);
  const list = $("panel-duties");
  list.replaceChildren();
  p.duties.forEach((d) => {
    const li = document.createElement("li");
    li.textContent = d;
    list.appendChild(li);
  });
}

function setPortrait(id, p) {
  const img = $("panel-portrait");
  const sources = [];
  if (p.portrait) sources.push(p.portrait);
  if (COMMONS_FALLBACK[id]) sources.push(COMMONS_FALLBACK[id]);
  const unique = [...new Set(sources.filter(Boolean))];
  let i = 0;
  img.onload = () => {
    img.onerror = null;
  };
  img.onerror = () => {
    i += 1;
    if (i < unique.length) img.src = unique[i];
    else img.onerror = null;
  };
  img.alt = p.alt;
  img.src = unique[0] || "";
}

function scheduleLines() {
  requestAnimationFrame(() => requestAnimationFrame(drawLines));
}

function openPerson(id, push) {
  if (!STAFF[id]) return;
  current = id;
  fillPanel(id);
  setTab("story");
  panel.hidden = false;
  shell.classList.add("is-open");
  document.querySelectorAll(".node").forEach((n) => {
    const on = n.dataset.id === id;
    n.classList.toggle("is-on", on);
    n.setAttribute("aria-expanded", on ? "true" : "false");
  });
  panel.setAttribute("aria-modal", "false");
  if (isNarrow()) scrim.hidden = false;
  else scrim.hidden = true;
  if (push && location.hash !== "#" + id) {
    history.pushState({ id }, "", "#" + id);
  }
  scheduleLines();
}

function closePanel(push) {
  current = null;
  panel.hidden = true;
  scrim.hidden = true;
  shell.classList.remove("is-open");
  panel.setAttribute("aria-modal", "false");
  document.querySelectorAll(".node").forEach((n) => {
    n.classList.remove("is-on");
    n.setAttribute("aria-expanded", "false");
  });
  if (push && location.hash) {
    history.pushState({}, "", location.pathname + location.search);
  }
  scheduleLines();
}

function box(el, root) {
  const a = el.getBoundingClientRect();
  const b = root.getBoundingClientRect();
  return {
    x: a.left + a.width / 2 - b.left,
    y: a.top + a.height / 2 - b.top,
    top: a.top - b.top,
    bottom: a.top + a.height - b.top,
    left: a.left - b.left,
    right: a.left + a.width - b.left
  };
}

function rowGroups(boxes, tol) {
  const rows = [];
  boxes.forEach((b) => {
    const row = rows.find((r) => Math.abs(r[0].top - b.top) < tol);
    if (row) row.push(b);
    else rows.push([b]);
  });
  rows.forEach((r) => r.sort((a, c) => a.x - c.x));
  return rows;
}

function drawLines() {
  if (!svg || !chart) return;
  const ns = "http://www.w3.org/2000/svg";
  const carl = $("n-carl");
  const cordoba = $("n-cordoba");
  const jIds = ["n-cato", "n-jomini", "n-rommel", "n-xenophon", "n-moltke"];
  const jNodes = jIds.map((id) => $(id)).filter(Boolean);
  if (!carl || !cordoba || jNodes.length < 2) return;

  const c = box(carl, chart);
  const d = box(cordoba, chart);
  const js = jNodes.map((n) => box(n, chart));
  const rows = rowGroups(js, 10);
  const first = rows[0];
  const spineX = c.x;
  const barY = (d.bottom + first[0].top) / 2;

  svg.setAttribute("viewBox", `0 0 ${chart.clientWidth} ${chart.clientHeight}`);
  svg.setAttribute("width", String(chart.clientWidth));
  svg.setAttribute("height", String(chart.clientHeight));
  svg.replaceChildren();

  const paths = [];
  paths.push(`M ${spineX} ${c.bottom} V ${barY}`);
  if (d.right < spineX - 1) paths.push(`M ${spineX} ${d.y} H ${d.right}`);
  else if (d.left > spineX + 1) paths.push(`M ${spineX} ${d.y} H ${d.left}`);

  let prevBar = barY;
  rows.forEach((row, i) => {
    const y = i === 0 ? barY : (rows[i - 1][0].bottom + row[0].top) / 2;
    if (i > 0) paths.push(`M ${spineX} ${prevBar} V ${y}`);
    const left = row[0].x;
    const right = row[row.length - 1].x;
    let barLeft = left;
    let barRight = right;
    if (i > 0) {
      barLeft = Math.min(left, spineX);
      barRight = Math.max(right, spineX);
    }
    paths.push(`M ${barLeft} ${y} H ${barRight}`);
    row.forEach((jn) => {
      paths.push(`M ${jn.x} ${y} V ${jn.top}`);
    });
    prevBar = y;
  });

  paths.forEach((dAttr) => {
    const p = document.createElementNS(ns, "path");
    p.setAttribute("d", dAttr);
    p.setAttribute("fill", "none");
    p.setAttribute("stroke", "#c4a46a");
    p.setAttribute("stroke-width", "1.15");
    p.setAttribute("stroke-linejoin", "miter");
    p.setAttribute("stroke-linecap", "square");
    p.setAttribute("opacity", "0.72");
    svg.appendChild(p);
  });
}

document.querySelectorAll(".node").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const id = btn.dataset.id;
    if (current === id) closePanel(true);
    else openPerson(id, true);
  });
});

document.getElementById("board").addEventListener("click", () => {
  if (current) closePanel(true);
});

document.querySelectorAll(".tab").forEach((btn) => {
  btn.addEventListener("click", () => setTab(btn.dataset.tab));
});

closeBtn.addEventListener("click", () => closePanel(true));
scrim.addEventListener("click", () => closePanel(true));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && current) {
    e.preventDefault();
    const was = current;
    closePanel(true);
    const node = $("n-" + was);
    if (node) node.focus();
    return;
  }
  if (e.key === "ArrowRight" || e.key === "ArrowLeft" || e.key === "Home" || e.key === "End") {
    const tabs = [...document.querySelectorAll(".tab")];
    const i = tabs.findIndex((t) => t.getAttribute("aria-selected") === "true");
    if (i < 0 || !current) return;
    if (document.activeElement && document.activeElement.classList.contains("tab")) {
      let next = i;
      if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
      if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
      if (e.key === "Home") next = 0;
      if (e.key === "End") next = tabs.length - 1;
      e.preventDefault();
      tabs[next].focus();
      setTab(tabs[next].dataset.tab);
    }
  }
});

window.addEventListener("hashchange", () => {
  const id = location.hash.replace(/^#/, "");
  if (id && STAFF[id]) openPerson(id, false);
  else closePanel(false);
});

window.addEventListener("popstate", () => {
  const id = location.hash.replace(/^#/, "");
  if (id && STAFF[id]) openPerson(id, false);
  else closePanel(false);
});

window.addEventListener("resize", () => {
  if (current) {
    panel.setAttribute("aria-modal", "false");
    scrim.hidden = !isNarrow();
  }
  scheduleLines();
});

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(drawLines);
}

const start = location.hash.replace(/^#/, "");
if (start && STAFF[start]) openPerson(start, false);
else openPerson("carl", false);

window.addEventListener("load", drawLines);
