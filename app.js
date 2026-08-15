const STAFF = {
  carl: {
    door: "Carl",
    code: "CoS",
    full: "Carl von Clausewitz",
    life: "1780–1831",
    role: "Routes the staff. Holds the weekday brief. Keeps work and personal theaters apart. Only all-theater seat besides the deputy.",
    story: "Prussian general and the author of On War. Friction, fog, war as a continuation of politics. He wrote the book on staff thinking and died before finishing it.",
    duties: [
      "Route work to the right seat.",
      "Weekday morning brief.",
      "Monday opportunity scout (he owns the clock; Plans supports).",
      "Theater firewall."
    ],
    cadence: "Weekday brief, 6:00 AM. Monday scout, 7:30 AM.",
    portrait: "portraits/carl.jpg",
    alt: "Oil portrait of Carl von Clausewitz in a dark uniform with a red collar.",
    caption: "Wilhelm Wach, oil portrait. Public domain."
  },
  cordoba: {
    door: "Córdoba",
    code: "DCoS",
    full: "Gonzalo Fernández de Córdoba, El Gran Capitán",
    life: "1453–1515",
    role: "Deputy. Covers CoS across both theaters. Not a second chief, not red cell, not a product seat.",
    story: "Spanish commander of the Italian Wars. Built the tercio and the habit of winning with infantry, guns, and supply instead of a heroic charge. The staff mind of early modern Spain.",
    duties: [
      "Cover when CoS is down.",
      "Same firewall, same routing judgment.",
      "Quiet unless needed."
    ],
    cadence: "On call. No weekly clock of his own.",
    portrait: "portraits/cordoba.jpg",
    alt: "1791 engraving of Gonzalo Fernández de Córdoba in armor, holding a baton.",
    caption: "Bartolomé Vázquez after José Ximeno, 1791 engraving. Later imagining. Public domain."
  },
  cato: {
    door: "Cato",
    code: "J1",
    full: "Marcus Porcius Cato the Elder, the Censor",
    life: "234–149 BC",
    role: "Administration. Hours reminders and travel. Does not submit time or manage the calendar.",
    story: "Roman censor. No waste, every denarius on a line. He wrote on farming and spoke against luxury. The books, not the battlefield.",
    duties: [
      "Weekday hours reminder with a rough split.",
      "Morning catch-up only if the night before was unanswered.",
      "Travel research when asked.",
      "Never invents a code or books a trip unless told."
    ],
    cadence: "Weekdays 5:00 PM hours reminder. 8:30 AM catch-up only if needed.",
    portrait: "portraits/cato.jpg",
    alt: "Later engraving of Cato the Elder in profile, wearing a laurel wreath.",
    caption: "Later imagining — engraving of Cato the Elder, not the Younger. Artist unknown. Public domain."
  },
  jomini: {
    door: "Jomini",
    code: "J2",
    full: "Antoine-Henri Jomini",
    life: "1779–1869",
    role: "Intelligence and red cell. One theater per task. Never writes the original product he is asked to oppose.",
    story: "Swiss officer who served Napoleon and then the Tsar. The Art of War, lines of operation, the map as an argument. The other 19th-century staff theorist beside Clausewitz.",
    duties: [
      "Program and competitive research from live sources.",
      "Red cell: what would have to be true for a recommendation to be wrong, the real edge cases, one constructive counter."
    ],
    cadence: "On call. No weekly clock.",
    portrait: "portraits/jomini.jpg",
    alt: "Painted portrait of Antoine-Henri Jomini in a dark uniform with gold epaulettes.",
    caption: "Workshop of George Dawe. Public domain."
  },
  rommel: {
    door: "Rommel",
    code: "J3",
    full: "Erwin Rommel",
    life: "1891–1944",
    role: "Operations. Reads status, drafts, tracks work. Does not publish to customer or program surfaces. The principal posts as himself.",
    story: "German field marshal. North Africa made the reputation. He was not a staff theorist; he was a field commander. Forced to suicide in 1944 after the plot against Hitler. The name is a door, not a eulogy.",
    duties: [
      "Inspect status.",
      "Draft decision and issue prose for the principal to send.",
      "Track the live workstreams.",
      "Does not host the coding swarm or mark its tasks complete."
    ],
    cadence: "On call with the work.",
    portrait: "portraits/rommel.jpg",
    alt: "1941 painted portrait of Erwin Rommel in a field cap.",
    caption: "Wolfgang Willrich, 1941. Public domain (Commons PD tag)."
  },
  xenophon: {
    door: "Xenophon",
    code: "J4",
    full: "Xenophon of Athens",
    life: "c. 430–354 BC",
    role: "Logistics. Sync health and file-structure recommendations. No copies without an approved diff.",
    story: "Student of Socrates. After Cunaxa he helped lead the Ten Thousand home from Mesopotamia. The Anabasis is a logistics book wearing a war memoir. Get the column home. Count the wagons.",
    duties: [
      "Weekly compare of the file tree against the destination.",
      "Up to three structure notes.",
      "Never copy until a diff is approved."
    ],
    cadence: "Weekly logistics check, Monday 9:22 AM.",
    portrait: "portraits/xenophon.jpg",
    alt: "Photograph of a marble bust long identified as Xenophon.",
    caption: "Marble bust, Berlin; plate from a 1905 handbook. Later imagining — no contemporary likeness. Public domain."
  },
  moltke: {
    door: "Moltke",
    code: "J5",
    full: "Helmuth von Moltke the Elder",
    life: "1800–1891",
    role: "Plans. Decision documents. Supports the Monday scout.",
    story: "Chief of the Prussian General Staff. No plan survives contact with the enemy is the line people remember. He built the staff that could change the plan.",
    duties: [
      "PRFAQ, statements of work, courses of action.",
      "Drafts stay local.",
      "Scout support for the Monday clock.",
      "A response draft only when an owner is named."
    ],
    cadence: "On call for plans. Supports Monday 7:30 AM scout.",
    portrait: "portraits/moltke.jpg",
    alt: "Photograph of Helmuth von Moltke the Elder in a Prussian uniform.",
    caption: "Carl Günther photograph. Moltke the Elder, not the nephew. Public domain."
  },
  fukuzawa: {
    door: "Fukuzawa",
    code: "Career",
    full: "Fukuzawa Yukichi",
    life: "1835–1901",
    role: "Off the staff row. Public professional branding drafts. The principal reviews before anything goes live.",
    story: "Low-ranking samurai son who walked away from rank. Saw America in 1860 and Europe in 1862. Founded Keio. Wrote An Encouragement of Learning: heaven does not make one man above another. Independence and self-respect. Face on the ¥10,000 note.",
    duties: [
      "Draft public posts and profile copy that a stranger can understand.",
      "Pair drafts with an image.",
      "Expertise, not complaint.",
      "Never publish without an explicit go."
    ],
    cadence: "Weekday branding draft, 8:28 AM.",
    portrait: "portraits/fukuzawa.jpg",
    alt: "Studio photograph of Fukuzawa Yukichi in a dark Western jacket.",
    caption: "Unknown photographer. Solo portrait. Public domain (Japan)."
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
  fukuzawa: "https://commons.wikimedia.org/wiki/Special:FilePath/Fukuzawa_Yukichi.jpg"
};

const ORDER = ["carl", "cordoba", "cato", "jomini", "rommel", "xenophon", "moltke", "fukuzawa"];

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
  const img = $("panel-portrait");
  const packed = (window.PORTRAITS && window.PORTRAITS[id]) || COMMONS_FALLBACK[id] || p.portrait;
  img.src = packed;
  img.alt = p.alt;
  const list = $("panel-duties");
  list.replaceChildren();
  p.duties.forEach((d) => {
    const li = document.createElement("li");
    li.textContent = d;
    list.appendChild(li);
  });
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
  if (isNarrow()) {
    scrim.hidden = false;
    panel.setAttribute("aria-modal", "true");
  } else {
    scrim.hidden = true;
    panel.setAttribute("aria-modal", "false");
  }
  if (push && location.hash !== "#" + id) {
    history.pushState({ id }, "", "#" + id);
  }
  requestAnimationFrame(drawLines);
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
  requestAnimationFrame(drawLines);
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

function drawLines() {
  if (!svg || !chart) return;
  if (isNarrow()) {
    svg.replaceChildren();
    return;
  }
  const ns = "http://www.w3.org/2000/svg";
  const carl = $("n-carl");
  const cordoba = $("n-cordoba");
  const jIds = ["n-cato", "n-jomini", "n-rommel", "n-xenophon", "n-moltke"];
  const jNodes = jIds.map((id) => $(id)).filter(Boolean);
  if (!carl || !cordoba || jNodes.length < 2) return;

  const c = box(carl, chart);
  const d = box(cordoba, chart);
  const js = jNodes.map((n) => box(n, chart));
  const spineX = c.x;
  const barY = (d.bottom + js[0].top) / 2;
  const barLeft = js[0].x;
  const barRight = js[js.length - 1].x;

  svg.setAttribute("viewBox", `0 0 ${chart.clientWidth} ${chart.clientHeight}`);
  svg.setAttribute("width", String(chart.clientWidth));
  svg.setAttribute("height", String(chart.clientHeight));
  svg.replaceChildren();

  const paths = [];
  paths.push(`M ${spineX} ${c.bottom} V ${barY}`);
  paths.push(`M ${spineX} ${d.y} H ${d.right}`);
  paths.push(`M ${barLeft} ${barY} H ${barRight}`);
  js.forEach((jn) => {
    paths.push(`M ${jn.x} ${barY} V ${jn.top}`);
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
  btn.addEventListener("click", () => {
    const id = btn.dataset.id;
    if (current === id) closePanel(true);
    else openPerson(id, true);
  });
});

document.querySelectorAll(".tab").forEach((btn) => {
  btn.addEventListener("click", () => setTab(btn.dataset.tab));
});

closeBtn.addEventListener("click", () => closePanel(true));
scrim.addEventListener("click", () => closePanel(true));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && current) {
    e.preventDefault();
    closePanel(true);
    const node = $("n-" + (location.hash || "").slice(1));
    if (node) node.focus();
    else {
      const last = document.querySelector(".node.is-on") || $("n-carl");
      if (last) last.focus();
    }
    return;
  }
  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
    const tabs = [...document.querySelectorAll(".tab")];
    const i = tabs.findIndex((t) => t.getAttribute("aria-selected") === "true");
    if (i < 0 || !current) return;
    if (document.activeElement && document.activeElement.classList.contains("tab")) {
      const next = e.key === "ArrowRight" ? (i + 1) % tabs.length : (i - 1 + tabs.length) % tabs.length;
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
    if (isNarrow()) {
      scrim.hidden = false;
      panel.setAttribute("aria-modal", "true");
    } else {
      scrim.hidden = true;
      panel.setAttribute("aria-modal", "false");
    }
  }
  drawLines();
});

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(drawLines);
}

const start = location.hash.replace(/^#/, "");
if (start && STAFF[start]) openPerson(start, false);
else requestAnimationFrame(drawLines);

window.addEventListener("load", drawLines);
