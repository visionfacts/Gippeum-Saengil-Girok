/* =========================================================
   기쁨 생일 기록 · A birthday surprise for Khushali
   Easy edits: change the text in the CONTENT block below.
   ========================================================= */

const CONTENT = {
  // Secret code on the lock screen: her birthday, 8 November → DDMM
  passcode: "0811",

  // A reel of 22 photos that runs along a looping strip
  reel: Array.from({ length: 22 }, (_, i) => `images/reel${String(i + 1).padStart(2, "0")}.jpg`),

  // Say cheese: the camera prints these, one per tap
  snaps: [
    { img: "images/snap1.jpg", note: "Felt too pretty ✨" },
    { img: "images/snap2.jpg", note: "Certified cutie 🌸" },
    { img: "images/snap3.jpg", note: "Main character energy 🎬" }
  ],

  // Flip & match: 6 photos, each appears twice
  match: ["images/reel05.jpg", "images/reel07.jpg", "images/reel18.jpg", "images/reel19.jpg", "images/reel03.jpg", "images/reel10.jpg"],

  // Words that fly through space (keep them short)
  words: ["Happy Birthday", "Khushali", "22 ✨", "You mean so much to me", "Best friend forever", "Forever 🤍",
          "My favourite human", "Main character", "생일 축하해", "જન્મદિવસની શુભકામના", "Love you 👽", "Stay this happy",
          "Fake-smile detector", "Always here", "Happy 22nd", "Dati 🤍 Khushali"],

  // The Alien's star map: 6 stars that draw a heart. Change titles, text or photos freely.
  stars: [
    { title: "The first wish", img: "images/star1.jpg", text: "One birthday message, one month before board exams. Best timing of my life." },
    { title: "Alien", img: "images/star2.jpg", text: "You called me different, then made it my favourite name. 👽" },
    { title: "Fake-smile detector", img: "images/star3.jpg", text: "I can fool the whole world with a smile. Never you. Not even on a call." },
    { title: "Forever", img: "images/star4.jpg", text: "Some friendships fade with time. Ours just keeps getting louder." },
    { title: "Your laugh", img: "images/star5.jpg", text: "Still my favourite sound in the whole universe." },
    { title: "2am talks", img: "images/star6.jpg", text: "Good news, bad days, random gossip. You are always the first one I tell." }
  ],

  balloons: [
    "22 already looks so good on you ✨",
    "Still my favourite notification 📱",
    "Partner in every crazy plan 😂",
    "Your Alien, always on your team 👽"
  ],

  photos: [
    { src: "images/m01.jpg", caption: "golden hour queen ☀️" },
    { src: "images/m02.jpg", caption: "rangoli? she nailed it 🌼" },
    { src: "images/m03.jpg", caption: "“felt too pretty” (she always is)" },
    { src: "images/m04.jpg", caption: "this laugh = my therapy" },
    { src: "images/m05.jpg", caption: "dupatta flying, main character vibes" },
    { src: "images/m06.jpg", caption: "who allowed her to look this good 👑" },
    { src: "images/m07.jpg", caption: "sunshine in human form 🌻" },
    { src: "images/m08.jpg", caption: "K-drama heroine, confirmed" },
    { src: "images/m09.jpg", caption: "laughing at my jokes (they're not even funny)" },
    { src: "images/m10.jpg", caption: "royal energy only" },
    { src: "images/m11.jpg", caption: "flower girl 🤍" },
    { src: "images/m12.jpg", caption: "the duo 👽✨" }
  ],

  story: [
    { img: "images/m01.jpg", font: "f-cinzel", title: "Where it all began", lines: [
      "12th standard. Board exams, one month away.",
      "Everyone was drowning in books and stress…",
      "…and I sent you a birthday wish.",
      "Just one message. I had no idea it was the start of my favourite story."
    ]},
    { img: "images/scene2.jpg", pos: "50% 40%", font: "f-play", title: "The Alien", lines: [
      { who: "Khushali", t: "“તું શું છો યાર! કંઈક અલગ જ છો… સાચે તું તો Alien જ છે!”" },
      "Anyone else would have called it weird.",
      "She turned it into the sweetest nickname I have ever had.",
      "Because she loves exactly the parts of me that don't fit anywhere else. 👽"
    ]},
    { img: "images/m09.jpg", font: "f-type", title: "Her superpower", lines: [
      "I can fool the whole world with a smile.",
      "Not her. Not even over a phone call.",
      { who: "Khushali", t: "“Dati, આ તું fake ના હસજે! Life માં problem હોય તો મને કહે!”" },
      "Some people listen to your words. She hears the ones you never say."
    ]},
    { img: "images/m12.jpg", font: "f-hand", title: "Still us", lines: [
      "Years later, she is still the first person I tell everything.",
      "Good news, bad days, 2am thoughts, random gossip.",
      "Some friendships fade with time. Ours just got louder.",
      "To be continued… for a lifetime."
    ]}
  ],

  // Record a voice note, name it voice.mp3 and put it in the audio folder.
  // If the file isn't there, the voice step is skipped automatically.
  voiceFile: "audio/voice.mp3",

  letter:
`પ્રિય ખુશાલી (મારી Darling),

ખુશાલી, મને ખબર છે કે લાઈફ ક્યારેય સરળ નથી હોતી… આજે પણ નથી અને કદાચ આવતીકાલે પણ સહેલી નહીં હોય. દરેક વળાંક પર પોતાની નવી મુશ્કેલીઓ અને પડકારો હોય જ છે.

પણ આ જન્મદિવસે ભગવાનને મારી માત્ર એક જ પ્રાર્થના છે: તું જે પણ ઈચ્છે છે, જે સપના તું જુએ છે, તે બધું જ તને યોગ્ય સમયે મળે.

તારા જીવનમાં તેં જે પણ પ્લાન બનાવ્યા હોય, તે બધા જ સપના કોઈ પણ પસ્તાવા વગર પૂરા થાય. તું હસતી રહે, ખુશ રહે, અને તારી દરેક મંઝિલ તને તારા હકની ખુશીઓ સાથે મળે.

અને હા… તું મને પ્રેમથી Alien કહે છે ને? સાચું કહું તો એ મારું સૌથી ગમતું નામ છે. અને તારી આ Alien, Dati, હંમેશાં તારી સાથે જ ઊભી રહેશે. દરેક સમયે, દરેક વાતમાં.

Happy 22nd Birthday, Khushali 🤍

હંમેશાં તારી સાથે,
Dati (તારી Alien 👽)`
};

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const wait = ms => new Promise(r => setTimeout(r, ms));
const show = el => { el.hidden = false; el.style.animation = "none"; el.offsetHeight; el.style.animation = ""; };
const fmt = s => isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}` : "0:00";

/* ---------- sound effects (no files needed) ---------- */
let actx;
function ctx() {
  if (!actx) { try { actx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; } }
  if (actx.state === "suspended") actx.resume();
  return actx;
}
function sfxPop() {
  const c = ctx(); if (!c) return;
  const len = c.sampleRate * 0.12, buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
  const src = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
  f.type = "bandpass"; f.frequency.value = 1400; g.gain.value = 0.9;
  src.buffer = buf; src.connect(f).connect(g).connect(c.destination); src.start();
}
function sfxPuff() {
  const c = ctx(); if (!c) return;
  const len = c.sampleRate * 0.35, buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.sin(Math.PI * i / len) * 0.5;
  const src = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
  f.type = "lowpass"; f.frequency.value = 700; g.gain.value = 0.7;
  src.buffer = buf; src.connect(f).connect(g).connect(c.destination); src.start();
}
function sfxChime() {
  const c = ctx(); if (!c) return;
  [784, 988, 1175, 1568].forEach((hz, i) => {
    const o = c.createOscillator(), g = c.createGain(), t = c.currentTime + i * 0.09;
    o.type = "sine"; o.frequency.value = hz;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.16, t + 0.02); g.gain.exponentialRampToValueAtTime(0.001, t + 1.2);
    o.connect(g).connect(c.destination); o.start(t); o.stop(t + 1.3);
  });
}

/* ---------- background music ---------- */
const bgm = $("#bgm");
const musicBtn = $("#musicBtn");
let userMuted = false, fadeTimer;
bgm.volume = 0;
function fadeTo(target, ms = 900) {
  clearInterval(fadeTimer);
  const start = bgm.volume, steps = 20; let n = 0;
  fadeTimer = setInterval(() => {
    n++; bgm.volume = Math.max(0, Math.min(1, start + (target - start) * n / steps));
    if (n >= steps) { clearInterval(fadeTimer); if (target === 0) bgm.pause(); }
  }, ms / steps);
}
function musicOn() {
  if (userMuted) return;
  bgm.play().then(() => fadeTo(0.55)).catch(() => {});
}
function musicOff() { fadeTo(0, 500); }
musicBtn.addEventListener("click", () => {
  userMuted = !userMuted;
  musicBtn.classList.toggle("is-off", userMuted);
  musicBtn.setAttribute("aria-label", userMuted ? "Play music" : "Pause music");
  if (userMuted) musicOff();
  else if (!otherAudioPlaying()) musicOn();
});

function otherAudioPlaying() {
  const v = document.getElementById("voiceAudio"), t = document.getElementById("trailer");
  return (v && !v.paused) || (t && !t.paused);
}

/* ---------- falling petals, bokeh & sparkles ---------- */
(function sky() {
  const cv = $("#sky"), c = cv.getContext("2d");
  let W, H, dpr, parts = [];
  const petalCols = ["#f3dca5", "#e0b968", "#fcf4e4", "#ffd7a8"];
  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = cv.width = innerWidth * dpr; H = cv.height = innerHeight * dpr;
  }
  function make(kind, randomY) {
    const p = { kind, x: Math.random() * W, w: Math.random() * Math.PI * 2 };
    if (kind === "petal") {
      Object.assign(p, { y: randomY ? Math.random() * H : -30 * dpr, s: (5 + Math.random() * 8) * dpr,
        v: (0.2 + Math.random() * 0.35) * dpr, r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.02,
        col: petalCols[(Math.random() * petalCols.length) | 0], a: 0.35 + Math.random() * 0.4,
        shape: Math.random() < 0.6 ? "star" : "heart" });
    } else if (kind === "bokeh") {
      Object.assign(p, { y: Math.random() * H, s: (30 + Math.random() * 70) * dpr, v: (0.05 + Math.random() * 0.12) * dpr,
        a: 0.05 + Math.random() * 0.09 });
    } else {
      Object.assign(p, { y: randomY ? Math.random() * H : H + 10 * dpr, s: (1 + Math.random() * 2) * dpr,
        v: (0.15 + Math.random() * 0.4) * dpr, a: 0.4 + Math.random() * 0.5 });
    }
    return p;
  }
  function draw() {
    c.clearRect(0, 0, W, H);
    for (const p of parts) {
      if (p.kind === "bokeh") {
        const g = c.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.s);
        g.addColorStop(0, `rgba(255,214,150,${p.a})`); g.addColorStop(1, "rgba(255,214,150,0)");
        c.fillStyle = g; c.beginPath(); c.arc(p.x, p.y, p.s, 0, 7); c.fill();
      } else if (p.kind === "petal") {
        c.save(); c.translate(p.x, p.y); c.rotate(p.r);
        c.globalAlpha = p.a * (0.7 + 0.3 * Math.sin(p.w * 3)); c.strokeStyle = p.col; c.fillStyle = p.col;
        c.lineWidth = 1.6 * dpr; c.lineJoin = "round"; c.lineCap = "round";
        const z = p.s;
        if (p.shape === "star") {
          c.beginPath(); c.moveTo(0, -z);
          c.quadraticCurveTo(z * 0.12, -z * 0.12, z, 0); c.quadraticCurveTo(z * 0.12, z * 0.12, 0, z);
          c.quadraticCurveTo(-z * 0.12, z * 0.12, -z, 0); c.quadraticCurveTo(-z * 0.12, -z * 0.12, 0, -z);
          c.fill();
        } else {
          c.beginPath(); c.moveTo(0, z * 0.35);
          c.bezierCurveTo(0, -z * 0.15, -z * 0.8, -z * 0.15, -z * 0.8, z * 0.3);
          c.bezierCurveTo(-z * 0.8, z * 0.7, 0, z * 0.95, 0, z * 1.1);
          c.bezierCurveTo(0, z * 0.95, z * 0.8, z * 0.7, z * 0.8, z * 0.3);
          c.bezierCurveTo(z * 0.8, -z * 0.15, 0, -z * 0.15, 0, z * 0.35);
          c.stroke();
        }
        c.restore();
      } else {
        c.beginPath(); c.arc(p.x, p.y, p.s, 0, 7);
        c.fillStyle = `rgba(255,225,150,${p.a * (0.5 + 0.5 * Math.sin(p.w * 4))})`; c.fill();
      }
    }
  }
  function tick() {
    for (let i = 0; i < parts.length; i++) {
      const p = parts[i]; p.w += 0.012;
      if (p.kind === "petal") {
        p.y += p.v; p.x += Math.sin(p.w) * 0.8 * dpr; p.r += p.vr;
        if (p.y > H + 30 * dpr) parts[i] = make("petal", false);
      } else if (p.kind === "bokeh") {
        p.y -= p.v; p.x += Math.sin(p.w * 0.5) * 0.15 * dpr;
        if (p.y < -p.s) { p.y = H + p.s; p.x = Math.random() * W; }
      } else {
        p.y -= p.v; p.x += Math.sin(p.w) * 0.3 * dpr;
        if (p.y < -10 * dpr) parts[i] = make("spark", false);
      }
    }
    draw(); requestAnimationFrame(tick);
  }
  size(); addEventListener("resize", size);
  const small = innerWidth < 600;
  parts = [
    ...Array.from({ length: small ? 6 : 10 }, () => make("bokeh", true)),
    ...Array.from({ length: small ? 14 : 22 }, () => make("petal", true)),
    ...Array.from({ length: small ? 18 : 28 }, () => make("spark", true))
  ];
  reduceMotion ? draw() : tick();
})();

/* ---------- confetti ---------- */
const confetti = (function () {
  const cv = $("#confetti"), c = cv.getContext("2d");
  let W, H, dpr, bits = [], running = false;
  const colors = ["#e0b968", "#f3dca5", "#fcf4e4", "#c02634", "#ffffff", "#a97f30"];
  function size() { dpr = Math.min(devicePixelRatio || 1, 2); W = cv.width = innerWidth * dpr; H = cv.height = innerHeight * dpr; }
  size(); addEventListener("resize", size);
  function loop() {
    c.clearRect(0, 0, W, H);
    bits = bits.filter(b => b.y < H + 40 && b.life > 0);
    for (const b of bits) {
      b.vy += 0.12 * dpr; b.vx *= 0.99; b.x += b.vx; b.y += b.vy; b.r += b.vr; b.life--;
      c.save(); c.translate(b.x, b.y); c.rotate(b.r);
      c.fillStyle = b.col; c.globalAlpha = Math.min(1, b.life / 40);
      b.round ? (c.beginPath(), c.arc(0, 0, b.w / 2, 0, 7), c.fill()) : c.fillRect(-b.w / 2, -b.h / 2, b.w, b.h);
      c.restore();
    }
    if (bits.length) requestAnimationFrame(loop); else { running = false; c.clearRect(0, 0, W, H); }
  }
  return function burst(x = innerWidth / 2, y = innerHeight / 2, n = 140) {
    if (reduceMotion) return;
    for (let i = 0; i < n; i++) {
      const ang = Math.random() * Math.PI * 2, sp = (3 + Math.random() * 8) * dpr;
      bits.push({
        x: x * dpr, y: y * dpr, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp - 5 * dpr,
        w: (5 + Math.random() * 6) * dpr, h: (8 + Math.random() * 8) * dpr,
        r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3,
        col: colors[(Math.random() * colors.length) | 0], round: Math.random() < 0.3, life: 160 + Math.random() * 80
      });
    }
    if (!running) { running = true; loop(); }
  };
})();
const centerOf = el => { const r = el.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; };

/* ---------- scene navigation ---------- */
const scenes = $$(".scene");
const beads = $("#beads");
const backBtn = $("#backBtn");
let current = 0;
const sceneIndex = name => scenes.findIndex(s => s.dataset.scene === name);
scenes.forEach(() => beads.appendChild(document.createElement("i")));

const onEnter = {}, onLeave = {};
function goTo(i) {
  if (i < 0 || i >= scenes.length || i === current) return;
  const prev = scenes[current];
  onLeave[prev.dataset.scene]?.();
  prev.classList.remove("is-active");
  current = i;
  const next = scenes[current];
  next.classList.add("is-active");
  next.scrollTop = 0;
  onEnter[next.dataset.scene]?.();
  $$("i", beads).forEach((b, k) => { b.classList.toggle("on", k === i); b.classList.toggle("done", k < i); b.hidden = skipped(k) || k === 0; });
  backBtn.hidden = i <= 1;
}
const skipped = i => scenes[i] && scenes[i].dataset.skip === "1";
function step(dir) { let i = current + dir; while (skipped(i)) i += dir; goTo(i); }
const next = () => step(1);
backBtn.addEventListener("click", () => step(-1));
$$("i", beads)[0].classList.add("on");
beads.hidden = true;

/* ---------- lock: only Khushali gets in ---------- */
(function lock() {
  const el = $("#lock"), dots = $$("#lockDots i"), hint = $("#lockHint");
  const CODE = String(CONTENT.passcode);
  let typed = "", tries = 0, busy = false;
  const KEY = "khushali-22-unlocked";
  const unlockNow = () => { el.remove(); document.body.classList.remove("locked"); };
  try { if (sessionStorage.getItem(KEY)) { unlockNow(); return; } } catch (e) {}
  const paint = () => dots.forEach((d, i) => d.classList.toggle("on", i < typed.length));
  async function check() {
    busy = true;
    await wait(220);
    if (typed === CODE) {
      sfxChime();
      el.classList.add("is-open");
      hint.textContent = "Welcome, birthday girl 🤍";
      try { sessionStorage.setItem(KEY, "1"); } catch (e) {}
      await wait(1100);
      unlockNow();
      $("#prelude").focus({ preventScroll: true });
      return;
    }
    tries++;
    sfxPuff();
    el.classList.remove("is-wrong"); el.offsetWidth; el.classList.add("is-wrong");
    hint.textContent = tries === 1 ? "Not quite. Clue: the day the world got you" : "Your birthday, as DD MM 😉";
    await wait(500);
    typed = ""; paint(); busy = false;
  }
  function press(k) {
    if (busy) return;
    ctx();
    if (k === "del") { typed = typed.slice(0, -1); paint(); return; }
    if (typed.length >= CODE.length) return;
    typed += k; paint();
    if (typed.length === CODE.length) check();
  }
  $("#keypad").addEventListener("click", e => { const b = e.target.closest("button"); if (b) press(b.dataset.k); });
  addEventListener("keydown", e => {
    if (!document.body.contains(el)) return;
    if (/^[0-9]$/.test(e.key)) press(e.key);
    else if (e.key === "Backspace") press("del");
  });
})();

/* ---------- 0. prelude ---------- */
$("#prelude").addEventListener("click", () => {
  ctx();
  musicBtn.hidden = false;
  beads.hidden = false;
  musicOn();
  next();
});

/* ---------- 0b. 21 burns away, 22 rises ---------- */
(function age() {
  const cv = $("#ageCanvas"), c = cv.getContext("2d");
  const l1 = $("#ageLine1"), l2 = $("#ageLine2"), btn = $("#ageNext");
  let W, H, dpr, gap, olds = [], news = [], embers = [], t0 = 0, raf = 0, done = false, started = false;
  const FONT = '700 {S}px "Cinzel", "Cormorant Garamond", Georgia, serif';
  const lerp = (a, b, t) => a + (b - a) * t;
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  const gold = y => {                               // same gold ramp as the script headline
    const t = y / H, a = [255, 243, 207], m = [224, 185, 104], b = [169, 127, 48];
    const [p, q, k] = t < 0.55 ? [a, m, t / 0.55] : [m, b, (t - 0.55) / 0.45];
    return p.map((v, i) => Math.round(lerp(v, q[i], k)));
  };
  function size() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    const w = cv.offsetWidth, h = cv.offsetHeight;
    W = cv.width = Math.round(w * dpr); H = cv.height = Math.round(h * dpr);
    gap = Math.max(3, Math.round((w < 420 ? 2.6 : 3.2) * dpr));
  }
  function sample(txt) {
    const o = document.createElement("canvas"); o.width = W; o.height = H;
    const g = o.getContext("2d");
    g.fillStyle = "#fff"; g.textAlign = "center"; g.textBaseline = "middle";
    let fs = H * 0.92; g.font = FONT.replace("{S}", fs);
    const tw = g.measureText(txt).width; if (tw > W * 0.92) { fs *= W * 0.92 / tw; g.font = FONT.replace("{S}", fs); }
    g.fillText(txt, W / 2, H * 0.54);
    const d = g.getImageData(0, 0, W, H).data, out = [];
    for (let y = 0; y < H; y += gap) for (let x = 0; x < W; x += gap) if (d[(y * W + x) * 4 + 3] > 128) out.push({ x, y, c: gold(y) });
    return out;
  }
  function build() {
    olds = sample("21").map(p => ({ ...p, burn: 1 - p.y / H + Math.random() * 0.22 }));
    news = sample("22").map(p => ({ ...p, sx: W * (0.15 + Math.random() * 0.7), sy: H * (0.85 + Math.random() * 0.3), d: (p.x / W) * 0.35 + Math.random() * 0.25 }));
  }
  function drawCrisp() {                           // settle into clean, solid gold numerals
    c.clearRect(0, 0, W, H);
    let fs = H * 0.92; c.font = FONT.replace("{S}", fs);
    const tw = c.measureText("22").width; if (tw > W * 0.92) { fs *= W * 0.92 / tw; c.font = FONT.replace("{S}", fs); }
    const g = c.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0.1, "#fff3cf"); g.addColorStop(0.55, "#e0b968"); g.addColorStop(1, "#a97f30");
    c.fillStyle = g; c.textAlign = "center"; c.textBaseline = "middle";
    c.fillText("22", W / 2, H * 0.54);
  }
  function finish() {
    if (done) return;
    done = true; cancelAnimationFrame(raf); embers = [];
    drawCrisp(); cv.classList.add("glow");
    l2.classList.add("in");
    sfxChime(); confetti(...centerOf(cv), 120);
    setTimeout(() => show(btn), 700);
  }
  function frame(now) {
    const t = (now - t0) / 1000, s = gap * 0.9;
    c.clearRect(0, 0, W, H);
    const BURN = 1.6, LEN = 1.9, FORM = BURN + LEN + 0.3, FLEN = 1.8;
    // 21: still, then a burn front climbs from the bottom
    const front = (t - BURN) / LEN;
    for (const p of olds) {
      const k = front - p.burn;
      if (k < 0) { c.fillStyle = `rgb(${p.c})`; c.fillRect(p.x, p.y, s, s); }
      else if (!p.lit) {
        p.lit = true;
        embers.push({ x: p.x, y: p.y, vx: (Math.random() - 0.5) * 0.9 * dpr, vy: -(0.6 + Math.random() * 1.8) * dpr, life: 1, fade: 0.012 + Math.random() * 0.02, r: s * (0.6 + Math.random() * 0.9) });
      }
    }
    // embers drift up and fade
    c.globalCompositeOperation = "lighter";
    for (const e of embers) {
      if (e.life <= 0) continue;
      e.x += e.vx + Math.sin(e.y * 0.02) * 0.3; e.y += e.vy; e.vy *= 0.995; e.life -= e.fade;
      const hot = Math.max(0, e.life);
      c.fillStyle = `rgba(255,${Math.round(90 + 150 * hot)},${Math.round(40 * hot)},${hot})`;
      c.fillRect(e.x, e.y, e.r, e.r);
    }
    c.globalCompositeOperation = "source-over";
    // 22: rises out of the embers, left to right
    if (t > FORM) {
      for (const p of news) {
        const k = Math.max(0, Math.min(1, (t - FORM - p.d) / FLEN)), e = easeOut(k);
        if (k <= 0) continue;
        const heat = 1 - e;
        c.fillStyle = `rgb(${Math.round(lerp(p.c[0], 255, heat))},${Math.round(lerp(p.c[1], 130, heat))},${Math.round(lerp(p.c[2], 50, heat))})`;
        c.fillRect(lerp(p.sx, p.x, e), lerp(p.sy, p.y, e), s, s);
      }
    }
    if (t > FORM + FLEN + 0.6) { finish(); return; }
    raf = requestAnimationFrame(frame);
  }
  async function start() {
    if (started) return;
    started = true;
    try { await document.fonts.load('700 100px "Cinzel"'); } catch (e) {}
    size(); build();
    if (reduceMotion) { l1.classList.add("in"); finish(); return; }
    l1.classList.add("in");
    t0 = performance.now(); raf = requestAnimationFrame(frame);
  }
  cv.addEventListener("click", () => { if (started && !done) finish(); });
  addEventListener("resize", () => { if (done) { size(); drawCrisp(); } });
  btn.addEventListener("click", next);
  onEnter.age = () => setTimeout(start, 500);
  onLeave.age = () => { if (started && !done) finish(); };
})();

/* ---------- 1. intro ---------- */
const introScene = scenes[sceneIndex("intro")];
$("#introGift").addEventListener("click", async e => {
  const gift = e.currentTarget;
  if (gift.classList.contains("is-open")) return;
  ctx(); sfxChime();
  gift.classList.add("is-open");
  introScene.classList.add("is-opened");
  $("#introHint").hidden = true;
  await wait(450);
  $("#introReveal").setAttribute("aria-hidden", "false");
  confetti(...centerOf(gift), 160);
  await wait(1300);
  show($("#introNext"));
});
$("#introNext").addEventListener("click", next);

/* ---------- 2. balloons ---------- */
(function balloons() {
  const wrap = $("#balloons");
  const tones = ["b-gold", "b-wine", "b-ivory", "b-champ"];
  let popped = 0;
  CONTENT.balloons.forEach((msg, i) => {
    const slot = document.createElement("div");
    slot.className = "balloon-slot";
    slot.innerHTML = `<button class="balloon ${tones[i % 4]}" aria-label="Pop balloon ${i + 1}"><span class="string"></span></button><div class="medallion" role="status"></div>`;
    const b = $(".balloon", slot), m = $(".medallion", slot);
    b.addEventListener("click", () => {
      if (b.classList.contains("pop")) return;
      sfxPop(); b.classList.add("pop"); b.disabled = true;
      confetti(...centerOf(b), 40);
      m.textContent = msg;
      setTimeout(() => { m.classList.add("show"); b.style.visibility = "hidden"; }, 220);
      popped++;
      $("#balloonHint").textContent = popped < 4 ? `${4 - popped} more to go` : "All popped!";
      if (popped === 4) setTimeout(() => show($("#balloonNext")), 700);
    });
    wrap.appendChild(slot);
  });
  $("#balloonNext").addEventListener("click", next);
})();

/* ---------- 3. cake ---------- */
(function cake() {
  const candles = $$(".candle");
  let out = 0;
  candles.forEach(c => c.addEventListener("click", () => {
    if (c.classList.contains("out")) return;
    sfxPuff(); c.classList.add("out"); c.disabled = true; out++;
    if (out === candles.length) {
      setTimeout(() => {
        sfxChime();
        confetti(innerWidth / 2, innerHeight * 0.35, 220);
        $("#cakeTitle").textContent = "Make a wish, Khushali 🤍";
        $("#cakeHint").textContent = "Your 22nd year starts now";
        show($("#cakeNext"));
      }, 500);
    }
  }));
  $("#cakeNext").addEventListener("click", next);
})();

/* ---------- 3b. a reel of Khushali ---------- */
(function reel() {
  const box = $("#reel"), svg = $("#reelSvg"), path = $("#reelPath"), peek = $("#peek");
  const N = CONTENT.reel.length;
  let W = 0, H = 0, len = 0, gapLen = 0, frames = [], offset = 0, last = 0, running = false, paused = false, shownNext = false, fw = 0;

  // A strip that drifts in from one side, ties a loop in the middle and drifts out the other
  function buildPath() {
    W = box.clientWidth; H = box.clientHeight;
    const portrait = H > W * 0.9;
    const b = portrait ? 3.3 : 2.8;                          // bigger b = bigger loop
    const sx = W / (2 * Math.PI) * (portrait ? 1.25 : 1.12);
    const sy = H * (portrait ? 0.4 : 0.38) / b;
    const pts = [];
    for (let i = 0; i <= 240; i++) {
      const th = -Math.PI + (2 * Math.PI * i) / 240;
      pts.push([W / 2 + (th - b * Math.sin(th)) * sx, H * 0.52 - b * Math.cos(th) * sy]);  // loop on top, tails hang low
    }
    const P = pts;
    const ext = W * 0.35;
    const first = P[0], end = P[P.length - 1];
    let d = `M${first[0] - ext} ${first[1] + ext * 0.12} L${first[0]} ${first[1]}`;
    for (let i = 1; i < P.length; i++) d += ` L${P[i][0].toFixed(1)} ${P[i][1].toFixed(1)}`;
    d += ` L${end[0] + ext} ${end[1] + ext * 0.12}`;
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    path.setAttribute("d", d);
    len = path.getTotalLength();
    fw = Math.max(54, Math.min(92, Math.min(W, H) * 0.16));
    box.style.setProperty("--fw", fw + "px");
    gapLen = fw * 1.08;
    const need = Math.ceil(len / gapLen) + 1;
    while (frames.length < need) {
      const i = frames.length % N, f = document.createElement("button");
      f.className = "frame";
      f.setAttribute("aria-label", `Photo ${i + 1}`);
      f.innerHTML = `<img src="${CONTENT.reel[i]}" alt="" loading="lazy" draggable="false">`;
      f.addEventListener("click", () => open(i));
      box.appendChild(f); frames.push(f);
    }
    frames.forEach((f, k) => f.hidden = k >= need);
    place();
  }
  function place() {
    const active = frames.filter(f => !f.hidden), total = active.length * gapLen;
    active.forEach((f, k) => {
      let at = (k * gapLen + offset) % total;
      if (at > len) { f.style.opacity = 0; return; }
      const p = path.getPointAtLength(at), q = path.getPointAtLength(Math.min(len, at + 2));
      const ang = Math.atan2(q.y - p.y, q.x - p.x) * 180 / Math.PI;
      f.style.opacity = 1;
      f.style.transform = `translate(${p.x}px,${p.y}px) translate(-50%,-50%) rotate(${ang}deg)`;
      f.style.zIndex = Math.round(at);
    });
  }
  function tick(now) {
    if (!running) return;
    const dt = Math.min(50, now - (last || now)); last = now;
    if (!paused) { offset += dt * 0.045; place(); }
    requestAnimationFrame(tick);
  }
  function open(i) {
    paused = true;
    $("#peekImg").src = CONTENT.reel[i];
    $("#peekCap").textContent = `Frame ${i + 1} of ${N}`;
    peek.hidden = false; peek.classList.remove("in"); peek.offsetWidth; peek.classList.add("in");
    $("#peekClose").focus({ preventScroll: true });
  }
  function close() { if (peek.hidden) return; peek.hidden = true; paused = false; }
  $("#peekClose").addEventListener("click", close);
  peek.addEventListener("click", e => { if (e.target === peek) close(); });
  addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  box.addEventListener("pointerenter", e => { if (e.pointerType === "mouse") paused = true; });
  box.addEventListener("pointerleave", e => { if (e.pointerType === "mouse" && peek.hidden) paused = false; });
  addEventListener("resize", () => { if (running) buildPath(); });
  $("#reelNext").addEventListener("click", next);

  onEnter.reel = () => {
    requestAnimationFrame(() => {
      buildPath();
      if (reduceMotion) { place(); } else { running = true; last = 0; requestAnimationFrame(tick); }
      if (!shownNext) { shownNext = true; setTimeout(() => show($("#reelNext")), 3500); }
    });
  };
  onLeave.reel = () => { running = false; close(); };
})();

/* ---------- 4. story, as a movie ---------- */
(function story() {
  const S = CONTENT.story, dots = $("#storyDots"), lines = $("#cineLines");
  const imgs = [$("#cineImgA"), $("#cineImgB")];
  let k = 0, front = 0, timers = [], seenAll = false, played = false;
  S.forEach(() => dots.appendChild(document.createElement("i")));
  const clear = () => { timers.forEach(clearTimeout); timers = []; };
  function addLine(l) {
    const p = document.createElement("p");
    if (typeof l === "string") { p.className = "cine-line"; p.textContent = l; }
    else { p.className = "cine-line dialogue"; p.innerHTML = `<span class="who">${l.who}</span><span class="say guj">${l.t}</span>`; }
    lines.appendChild(p);
    requestAnimationFrame(() => p.classList.add("in"));
  }
  function done() {
    $("#cineTap").classList.add("gone");
    if (k === S.length - 1 && !seenAll) { seenAll = true; show($("#storyNext")); }
  }
  function play(n) {
    clear(); k = n; played = true;
    const sc = S[k];
    const back = imgs[1 - front]; back.src = sc.img; back.style.objectPosition = sc.pos || "50% 30%"; $("#cineBlur").style.backgroundImage = `url("${sc.img}")`; back.classList.remove("on"); back.offsetWidth; back.classList.add("on");
    imgs[front].classList.remove("on"); front = 1 - front;
    $("#cineLabel").textContent = `Scene ${k + 1}`;
    const t = $("#cineTitle"); t.className = "cine-title " + sc.font; t.textContent = sc.title;
    t.style.animation = "none"; t.offsetWidth; t.style.animation = "";
    lines.innerHTML = ""; $("#cineTap").classList.remove("gone");
    let at = 1300;
    sc.lines.forEach((l, i) => {
      timers.push(setTimeout(() => { addLine(l); if (i === sc.lines.length - 1) done(); }, at));
      at += typeof l === "string" ? 2300 : 3200;
    });
    $$("i", dots).forEach((d, i) => d.classList.toggle("on", i === k));
    $("#storyPrev").disabled = k === 0;
    $("#storyNextCh").disabled = k === S.length - 1;
  }
  function skip() {
    if (!timers.length) return;
    clear(); lines.innerHTML = ""; S[k].lines.forEach(addLine); done();
  }
  $("#cinema").addEventListener("click", skip);
  $("#storyPrev").addEventListener("click", () => { if (k > 0) play(k - 1); });
  $("#storyNextCh").addEventListener("click", () => { if (k < S.length - 1) play(k + 1); });
  swipe($("#cinema"), dir => { const n = k + dir; if (n >= 0 && n < S.length) play(n); });
  $("#storyNext").addEventListener("click", next);
  onEnter.story = () => { if (!played) play(0); };
  onLeave.story = () => { if (timers.length) skip(); };
})();

/* ---------- 4b. bestie license ---------- */
(function license() {
  const card = $("#license");
  card.addEventListener("click", async () => {
    if (card.classList.contains("is-stamped")) return;
    card.classList.add("is-stamped");
    await wait(260);
    sfxPuff(); sfxPop();
    card.classList.add("thud");
    confetti(...centerOf(card), 120);
    $("#licenseHint").textContent = "Officially official ✔";
    await wait(700);
    show($("#licenseNext"));
  });
  $("#licenseNext").addEventListener("click", next);
})();

/* ---------- 4c. the Alien's star map ---------- */
(function starMap() {
  const map = $("#starmap"), svg = $("#starLines"), modal = $("#memory");
  // six points that trace a heart, clockwise from the dip at the top
  const PTS = [[50, 30], [74, 13], [90, 40], [50, 88], [10, 40], [26, 13]];
  const S = CONTENT.stars.slice(0, PTS.length);
  const found = new Set();
  let lastBtn = null, complete = false;

  const segs = S.map((_, i) => {
    const [a, b] = [PTS[i], PTS[(i + 1) % S.length]];
    const ln = document.createElementNS("http://www.w3.org/2000/svg", "line");
    ln.setAttribute("x1", a[0]); ln.setAttribute("y1", a[1]); ln.setAttribute("x2", b[0]); ln.setAttribute("y2", b[1]);
    ln.setAttribute("pathLength", "1");
    svg.appendChild(ln);
    return ln;
  });
  const btns = S.map((st, i) => {
    const [x, y] = PTS[i];
    const b = document.createElement("button");
    b.className = "star" + (x < 25 ? " lbl-l" : x > 75 ? " lbl-r" : "");
    b.style.left = x + "%"; b.style.top = y + "%";
    b.style.setProperty("--d", `${-(i * 0.7)}s`);
    b.setAttribute("aria-label", `Star ${i + 1}: ${st.title}`);
    b.innerHTML = `<span class="star-dot" aria-hidden="true"></span><span class="star-name">${st.title}</span>`;
    b.addEventListener("click", () => open(i, b));
    map.appendChild(b);
    return b;
  });

  function open(i, b) {
    lastBtn = b;
    const st = S[i];
    $("#memImg").src = st.img; $("#memImg").alt = st.title;
    $("#memTitle").textContent = st.title; $("#memText").textContent = st.text;
    modal.hidden = false; modal.classList.remove("in"); modal.offsetWidth; modal.classList.add("in");
    sfxChime();
    if (!found.has(i)) {
      found.add(i); b.classList.add("found");
      segs.forEach((ln, k) => { if (found.has(k) && found.has((k + 1) % S.length)) ln.classList.add("on"); });
    }
    $("#memClose").focus({ preventScroll: true });
  }
  async function close() {
    if (modal.hidden) return;
    modal.hidden = true;
    lastBtn?.focus({ preventScroll: true });
    if (found.size === S.length && !complete) {
      complete = true;
      await wait(300);
      map.classList.add("complete");
      $("#ufo").classList.add("fly");
      sfxChime(); confetti(...centerOf(map), 160);
      $("#starsWhisper").textContent = "Discovered by an Alien. Named after you.";
      $("#starsTitle").textContent = "Constellation Khushali ✨";
      $("#starsHint").textContent = "Every star up there is a little bit of us";
      await wait(900);
      show($("#starsNext"));
    } else if (!complete) {
      const left = S.length - found.size;
      $("#starsHint").textContent = left === 1 ? "One last star…" : `${left} more stars hiding up there`;
    }
  }
  $("#memClose").addEventListener("click", close);
  modal.addEventListener("click", e => { if (e.target === modal) close(); });
  addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  $("#starsNext").addEventListener("click", next);

  /* twinkling deep-space background */
  const cv = $("#spaceCanvas"), c = cv.getContext("2d");
  let W, H, dpr, dots = [], running = false;
  function size() { dpr = Math.min(devicePixelRatio || 1, 2); W = cv.width = cv.offsetWidth * dpr; H = cv.height = cv.offsetHeight * dpr; }
  function draw() {
    c.clearRect(0, 0, W, H);
    for (const d of dots) {
      d.t += d.v;
      c.globalAlpha = 0.2 + 0.6 * Math.abs(Math.sin(d.t));
      c.fillStyle = d.warm ? "#ffe2a8" : "#e8ecff";
      c.beginPath(); c.arc(d.x, d.y, d.r, 0, 7); c.fill();
    }
    c.globalAlpha = 1;
    if (running) requestAnimationFrame(draw);
  }
  function start() {
    size();
    if (!dots.length) dots = Array.from({ length: innerWidth < 600 ? 110 : 180 }, () => ({
      x: Math.random() * W, y: Math.random() * H, r: (Math.random() < 0.1 ? 1.4 : 0.7) * dpr,
      t: Math.random() * 6, v: 0.005 + Math.random() * 0.02, warm: Math.random() < 0.25 }));
    if (reduceMotion) { draw(); return; }
    if (!running) { running = true; draw(); }
  }
  addEventListener("resize", () => { if (running) size(); });
  onEnter.stars = start;
  onLeave.stars = () => { running = false; modal.hidden = true; };
})();

/* ---------- 4d. say cheese ---------- */
(function camera() {
  const cam = $("#cam"), prints = $("#prints"), hint = $("#camHint"), flash = $("#camFlash");
  const S = CONTENT.snaps;
  let shot = 0, busy = false;
  function sfxShutter() {
    const c = ctx(); if (!c) return;
    const len = c.sampleRate * 0.08, buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (i < len * 0.3 ? 1 : Math.pow(1 - i / len, 2));
    const src = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
    f.type = "highpass"; f.frequency.value = 2200; g.gain.value = 0.8;
    src.buffer = buf; src.connect(f).connect(g).connect(c.destination); src.start();
  }
  cam.addEventListener("click", async () => {
    if (busy || shot >= S.length) return;
    busy = true;
    const s = S[shot];
    sfxShutter();
    cam.classList.remove("snap"); cam.offsetWidth; cam.classList.add("snap");
    flash.classList.remove("go"); flash.offsetWidth; flash.classList.add("go");
    await wait(260);
    [...prints.children].forEach((p, i, a) => p.style.setProperty("--r", `${(a.length - i) % 2 ? -7 : 6}deg`));
    const p = document.createElement("figure");
    p.className = "print";
    p.innerHTML = `<img src="${s.img}" alt=""><figcaption>${s.note}</figcaption>`;
    prints.appendChild(p);
    requestAnimationFrame(() => p.classList.add("out"));
    await wait(1400);
    p.classList.add("dev");
    shot++;
    hint.textContent = shot < S.length ? `One more! ${S.length - shot} left 📸` : "Three for your album 🤍";
    if (shot >= S.length) { cam.classList.add("done"); confetti(...centerOf(prints), 100); await wait(1600); show($("#camNext")); }
    busy = false;
  });
  $("#camNext").addEventListener("click", next);
})();

/* ---------- 5. voice / song ---------- */
const voice = $("#voiceAudio");
(function voicePlayer() {
  const player = $(".player"), wave = $("#wave"), bars = [];
  for (let i = 0; i < 34; i++) {
    const b = document.createElement("i");
    b.style.height = `${25 + Math.abs(Math.sin(i * 1.7) * 55 + Math.cos(i * 0.6) * 20)}%`;
    b.style.animationDelay = `${-(i % 7) * 0.13}s`;
    wave.appendChild(b); bars.push(b);
  }
  const voiceScene = scenes[sceneIndex("voice")];
  voiceScene.dataset.skip = "1";
  voice.addEventListener("canplay", () => { voiceScene.dataset.skip = "0"; }, { once: true });
  voice.addEventListener("error", () => { voiceScene.dataset.skip = "1"; }, { once: true });
  voice.src = CONTENT.voiceFile;
  voice.load();
  voice.addEventListener("loadedmetadata", () => { $("#voiceDur").textContent = fmt(voice.duration); });
  voice.addEventListener("timeupdate", () => {
    const p = voice.currentTime / (voice.duration || 1);
    $("#voiceProgress").style.width = `${p * 100}%`;
    $("#voiceCur").textContent = fmt(voice.currentTime);
    const lit = Math.round(p * bars.length);
    bars.forEach((b, i) => b.classList.toggle("lit", i < lit));
  });
  voice.addEventListener("play", () => { player.classList.add("is-playing"); $("#voicePlay").setAttribute("aria-label", "Pause"); musicOff(); });
  voice.addEventListener("pause", () => { player.classList.remove("is-playing"); $("#voicePlay").setAttribute("aria-label", "Play"); });
  voice.addEventListener("ended", () => { musicOn(); });
  $("#voicePlay").addEventListener("click", () => { voice.paused ? voice.play().catch(() => {}) : voice.pause(); });
  $("#voiceNext").addEventListener("click", next);
  onLeave.voice = () => { if (!voice.paused) voice.pause(); musicOn(); };
})();

/* ---------- 6. photo deck ---------- */
(function deck() {
  const box = $("#deck"), dots = $("#deckDots");
  const cards = CONTENT.photos.map((p, i) => {
    const f = document.createElement("figure");
    f.className = "card";
    f.style.setProperty("--tilt", `${[-3, 2.5, -1.5, 3, -2.5, 1.5][i % 6]}deg`);
    f.innerHTML = `<span class="tape" aria-hidden="true"></span><img src="${p.src}" alt="Khushali, photo ${i + 1}" loading="${i < 3 ? "eager" : "lazy"}"><figcaption>${p.caption}</figcaption>`;
    box.appendChild(f);
    dots.appendChild(document.createElement("i"));
    return f;
  });
  let k = 0;
  function layout(drag = 0) {
    cards.forEach((c, i) => {
      const d = i - k + drag;
      const ad = Math.abs(d);
      c.style.transform = `translateX(${d * 46}%) scale(${1 - Math.min(ad, 3) * 0.13}) rotate(calc(${d * 4}deg + var(--tilt)))`;
      c.style.opacity = ad > 2.2 ? 0 : 1 - Math.min(ad, 2) * 0.28;
      c.style.zIndex = 100 - Math.round(ad * 10);
      c.style.pointerEvents = Math.round(d) === 0 ? "auto" : "none";
    });
    $$("i", dots).forEach((d, i) => d.classList.toggle("on", i === k));
    $("#deckPrev").disabled = k === 0;
    $("#deckNext").disabled = k === cards.length - 1;
  }
  const go = n => { k = Math.max(0, Math.min(cards.length - 1, n)); layout(); };
  $("#deckPrev").addEventListener("click", () => go(k - 1));
  $("#deckNext").addEventListener("click", () => go(k + 1));
  swipe(box, dir => go(k + dir), (dx, w) => { cards.forEach(c => c.classList.add("dragging")); layout(dx / w); },
    () => cards.forEach(c => c.classList.remove("dragging")));
  addEventListener("keydown", e => {
    if (scenes[current].dataset.scene !== "moments") return;
    if (e.key === "ArrowRight") go(k + 1);
    if (e.key === "ArrowLeft") go(k - 1);
  });
  $("#momentsNext").addEventListener("click", next);
  layout();
})();

/* ---------- 6b. flip & match ---------- */
(function match() {
  const grid = $("#match"), movesEl = $("#matchMoves"), hint = $("#matchHint");
  let open = [], moves = 0, pairs = 0, lock = false, built = false;
  function build() {
    built = true;
    const deck = CONTENT.match.flatMap((src, i) => [{ src, i }, { src, i }]);
    for (let k = deck.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [deck[k], deck[j]] = [deck[j], deck[k]]; }
    deck.forEach((c, k) => {
      const b = document.createElement("button");
      b.className = "mcard"; b.dataset.i = c.i;
      b.setAttribute("aria-label", `Card ${k + 1}`);
      b.innerHTML = `<span class="mcard-in"><span class="mcard-back">K<i>♥</i>D</span><span class="mcard-front"><img src="${c.src}" alt="" draggable="false"></span></span>`;
      b.addEventListener("click", () => flip(b));
      grid.appendChild(b);
    });
  }
  async function flip(b) {
    if (lock || b.classList.contains("up")) return;
    ctx(); b.classList.add("up"); open.push(b);
    if (open.length < 2) return;
    moves++; movesEl.textContent = `Moves: ${moves}`;
    const [a, c] = open; open = [];
    if (a.dataset.i === c.dataset.i) {
      pairs++; sfxPop();
      a.classList.add("won"); c.classList.add("won");
      a.disabled = c.disabled = true;
      if (pairs === CONTENT.match.length) {
        await wait(400);
        sfxChime(); confetti(...centerOf(grid), 180);
        hint.textContent = `All matched in ${moves} moves! You know us too well 🤍`;
        await wait(900); show($("#matchNext"));
      } else hint.textContent = `${CONTENT.match.length - pairs} pairs to go`;
    } else {
      lock = true; await wait(850);
      a.classList.remove("up"); c.classList.remove("up"); lock = false;
    }
  }
  $("#matchNext").addEventListener("click", next);
  onEnter.match = () => { if (!built) build(); };
})();

/* ---------- 7. trailer ---------- */
(function trailer() {
  const ticket = $("#ticket"), screen = $("#screen"), v = $("#trailer");
  $("#ticketTear").addEventListener("click", async () => {
    sfxPuff();
    ticket.classList.add("is-torn");
    await wait(800);
    ticket.hidden = true;
    screen.hidden = false;
  });
  $("#trailerPlay").addEventListener("click", () => { v.play().catch(() => {}); });
  v.addEventListener("click", () => { v.paused ? v.play() : v.pause(); });
  v.addEventListener("play", () => { screen.classList.add("is-playing"); musicOff(); $("#trailerHint").textContent = "Tap the screen to pause"; });
  v.addEventListener("pause", () => { screen.classList.remove("is-playing"); });
  v.addEventListener("timeupdate", () => { if (v.currentTime > 20 && $("#trailerNext").hidden) show($("#trailerNext")); });
  v.addEventListener("ended", () => {
    screen.classList.remove("is-playing");
    $("#trailerHint").textContent = "Coming to your life: 8 November 🎬";
    confetti(innerWidth / 2, innerHeight * 0.3, 160);
    musicOn();
  });
  $("#trailerNext").addEventListener("click", next);
  onLeave.trailer = () => { if (!v.paused) v.pause(); musicOn(); };
})();

/* ---------- 8. letter: page by page under a sky of lanterns ---------- */
(function letter() {
  const env = $("#envelope"), pageEl = $("#letterPage");
  const parts = CONTENT.letter.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
  const pages = [];
  parts.forEach((p, i) => {
    if (i === 1) pages[0] += "\n\n" + p;           // greeting + first paragraph
    else if (i === parts.length - 1 && pages.length) pages[pages.length - 1] += "\n\n" + p; // wish + signature
    else pages.push(p);
  });
  let k = 0, seenAll = false, timers = [];

  function render(dir = 1) {
    timers.forEach(clearTimeout); timers = [];
    pageEl.classList.remove("turn-next", "turn-prev"); pageEl.offsetWidth;
    pageEl.classList.add(dir > 0 ? "turn-next" : "turn-prev");
    pageEl.innerHTML = "";
    const bits = pages[k].split(/\n/).flatMap(line => line ? (line.match(/[^.!?…]+(?:[.!?…]+|$)\s*/g) || [line]).concat(["\n"]) : ["\n"]);
    let d = 250;
    bits.forEach(t => {
      if (t === "\n") { pageEl.appendChild(document.createElement("br")); return; }
      const sp = document.createElement("span"); sp.className = "lp"; sp.textContent = t;
      pageEl.appendChild(sp);
      timers.push(setTimeout(() => sp.classList.add("in"), reduceMotion ? 0 : d));
      d += 520;
    });
    $("#letterCount").textContent = `${k + 1} / ${pages.length}`;
    $("#letterPrev").disabled = k === 0;
    $("#letterNextPg").disabled = k === pages.length - 1;
    if (k === pages.length - 1 && !seenAll) {
      seenAll = true;
      timers.push(setTimeout(() => { show($("#letterNext")); sfxChime(); }, d + 300));
    }
  }
  const go = n => { if (n < 0 || n >= pages.length || n === k) return; const dir = n > k ? 1 : -1; k = n; render(dir); };
  $("#letterPrev").addEventListener("click", e => { e.stopPropagation(); go(k - 1); });
  $("#letterNextPg").addEventListener("click", e => { e.stopPropagation(); go(k + 1); });
  pageEl.addEventListener("click", e => {
    const r = pageEl.getBoundingClientRect();
    go(e.clientX < r.left + r.width * 0.35 ? k - 1 : k + 1);
  });
  swipe(pageEl, dir => go(k + dir));

  $("#envOpen").addEventListener("click", async () => {
    if (env.classList.contains("is-open")) return;
    sfxChime();
    env.classList.add("is-open");
    $("#letterHint").hidden = true;
    await wait(900);
    env.classList.add("is-reading");
    await wait(400);
    render(1);
  });
  $("#letterNext").addEventListener("click", next);

  /* lantern sky */
  const cv = $("#lanterns"), c = cv.getContext("2d");
  let W, H, dpr, L = [], stars = [], running = false;
  function size() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.width = cv.offsetWidth * dpr; H = cv.height = cv.offsetHeight * dpr;
  }
  function lantern(randomY) {
    const z = Math.random();                 // 0 far, 1 near
    return { x: Math.random() * W, y: randomY ? Math.random() * H : H + 60 * dpr,
      s: (6 + z * z * 26) * dpr, v: (0.12 + z * 0.45) * dpr, a: 0.35 + z * 0.6,
      w: Math.random() * 6.28, f: Math.random() * 6.28, z };
  }
  function draw() {
    c.clearRect(0, 0, W, H);
    for (const st of stars) {
      st.t += 0.02;
      c.fillStyle = `rgba(255,245,225,${0.25 + 0.35 * Math.abs(Math.sin(st.t))})`;
      c.fillRect(st.x, st.y, st.r, st.r);
    }
    L.sort((a, b) => a.z - b.z);
    for (const p of L) {
      p.y -= p.v; p.w += 0.008; p.f += 0.15; p.x += Math.sin(p.w) * 0.25 * dpr;
      if (p.y < -80 * dpr) Object.assign(p, lantern(false));
      const fl = 0.85 + 0.15 * Math.sin(p.f) * Math.sin(p.f * 0.7);
      const s = p.s, x = p.x, y = p.y;
      const g = c.createRadialGradient(x, y + s * 0.4, 0, x, y + s * 0.4, s * 3.2);
      g.addColorStop(0, `rgba(255,170,80,${0.32 * p.a * fl})`); g.addColorStop(1, "rgba(255,140,60,0)");
      c.fillStyle = g; c.beginPath(); c.arc(x, y + s * 0.4, s * 3.2, 0, 7); c.fill();
      const body = c.createLinearGradient(0, y - s * 0.7, 0, y + s * 0.9);
      body.addColorStop(0, `rgba(255,214,140,${p.a})`); body.addColorStop(1, `rgba(255,128,52,${p.a})`);
      c.fillStyle = body;
      c.beginPath();
      c.moveTo(x - s * 0.36, y - s * 0.7); c.lineTo(x + s * 0.36, y - s * 0.7);
      c.quadraticCurveTo(x + s * 0.56, y, x + s * 0.48, y + s * 0.85);
      c.lineTo(x - s * 0.48, y + s * 0.85);
      c.quadraticCurveTo(x - s * 0.56, y, x - s * 0.36, y - s * 0.7);
      c.fill();
      c.fillStyle = `rgba(255,250,220,${0.8 * p.a * fl})`;
      c.beginPath(); c.ellipse(x, y + s * 0.62, s * 0.22, s * 0.13, 0, 0, 7); c.fill();
    }
    if (running) requestAnimationFrame(draw);
  }
  function start() {
    size();
    if (!L.length) {
      const n = innerWidth < 600 ? 26 : 42;
      L = Array.from({ length: n }, () => lantern(true));
      stars = Array.from({ length: 70 }, () => ({ x: Math.random() * W, y: Math.random() * H * 0.7, r: (Math.random() < 0.15 ? 2 : 1) * dpr, t: Math.random() * 6 }));
    }
    if (reduceMotion) { draw(); return; }
    if (!running) { running = true; draw(); }
  }
  addEventListener("resize", () => { if (running) size(); });
  onEnter.letter = start;
  onLeave.letter = () => { running = false; };
})();

/* ---------- 8b. words flying through space ---------- */
(function wordsTunnel() {
  const cv = $("#wordsCanvas"), c = cv.getContext("2d"), sc = scenes[sceneIndex("words")];
  const COLORS = ["#ff9fb2", "#ffd7e0", "#f3dca5", "#e0b968", "#fcf4e4"];
  const FONT = '"Cormorant Garamond", "Noto Serif Gujarati", "Noto Serif KR", Georgia, serif';
  let W, H, dpr, items = [], running = false, last = 0, speed = 1, boost = false, shown = false, t0 = 0;
  function size() { dpr = Math.min(devicePixelRatio || 1, 2); W = cv.width = cv.offsetWidth * dpr; H = cv.height = cv.offsetHeight * dpr; }
  function spawn(z) {
    const big = Math.random() < 0.12;
    return {
      t: CONTENT.words[Math.floor(Math.random() * CONTENT.words.length)],
      x: (Math.random() - 0.5) * (big ? 0.6 : 2.2), y: (Math.random() - 0.5) * (big ? 0.5 : 1.6),
      z: z ?? 1 + Math.random() * 6, size: big ? 1.6 : 0.6 + Math.random() * 0.5,
      col: COLORS[Math.floor(Math.random() * COLORS.length)], bold: big || Math.random() < 0.3
    };
  }
  function frame(now) {
    if (!running) return;
    const dt = Math.min(50, now - (last || now)) / 1000; last = now;
    speed += ((boost ? 4.2 : 1) - speed) * Math.min(1, dt * 3);
    c.clearRect(0, 0, W, H);
    const f = Math.min(W, H) * 0.9, cx = W / 2, cy = H / 2;
    items.sort((a, b) => b.z - a.z);
    for (const it of items) {
      it.z -= dt * 0.9 * speed;
      if (it.z < 0.12) { Object.assign(it, spawn(7)); continue; }
      const px = cx + it.x * f / it.z, py = cy + it.y * f / it.z;
      const fs = Math.min(150 * dpr, 34 * dpr * it.size / it.z);
      if (fs < 3 * dpr) continue;
      const a = Math.min(1, (7 - it.z) / 2.5) * Math.min(1, (it.z - 0.12) / 0.6);
      c.globalAlpha = Math.max(0, a);
      c.font = `${it.bold ? 700 : 500} ${fs}px ${FONT}`;
      c.textAlign = "center"; c.textBaseline = "middle";
      if (fs > 40 * dpr) { c.shadowColor = "rgba(255,120,160,.8)"; c.shadowBlur = 24 * dpr; } else c.shadowBlur = 0;
      c.fillStyle = it.col; c.fillText(it.t, px, py);
    }
    c.globalAlpha = 1; c.shadowBlur = 0;
    if (!shown && now - t0 > 5000) { shown = true; show($("#wordsNext")); $("#wordsHint").textContent = "Every word here is for you 🤍"; }
    requestAnimationFrame(frame);
  }
  function start() {
    size();
    if (!items.length) items = Array.from({ length: innerWidth < 600 ? 34 : 48 }, () => spawn());
    if (reduceMotion) {
      c.textAlign = "center"; c.fillStyle = "#ffd7e0";
      CONTENT.words.slice(0, 8).forEach((w, i) => { c.font = `600 ${22 * dpr}px ${FONT}`; c.fillText(w, W / 2, H * (0.2 + i * 0.08)); });
      show($("#wordsNext")); return;
    }
    running = true; last = 0; t0 = performance.now(); requestAnimationFrame(frame);
  }
  sc.addEventListener("pointerdown", e => { if (!e.target.closest("button")) boost = true; });
  addEventListener("pointerup", () => boost = false);
  addEventListener("pointercancel", () => boost = false);
  addEventListener("resize", () => { if (running) size(); });
  $("#wordsNext").addEventListener("click", next);
  onEnter.words = () => requestAnimationFrame(start);
  onLeave.words = () => { running = false; boost = false; };
})();

/* ---------- 9. last gift ---------- */
(function lastGift() {
  const scene = scenes[sceneIndex("last")];
  // "Catch me if you can": the gift dodges 3 times before it lets her open it
  const gift = $("#lastGift"), hint = $("#lastHint");
  const LINES = ["Catch me if you can 😜", "Too slow! 😆", "Almost… try again 🙈"];
  let dodges = 0, lastDodge = 0;
  function dodge() {
    const now = performance.now();
    if (now - lastDodge < 380) return;
    lastDodge = now;
    const r = scene.getBoundingClientRect(), g = gift.getBoundingClientRect();
    const mx = Math.max(30, r.width / 2 - g.width / 2 - 16), my = Math.max(30, Math.min(r.height * 0.28, 200));
    let dx, dy, cur = (gift.style.translate || "0px 0px").split(" ").map(parseFloat);
    do { dx = (Math.random() * 2 - 1) * mx; dy = (Math.random() * 2 - 1) * my; } while (Math.hypot(dx - (cur[0] || 0), dy - (cur[1] || 0)) < 90);
    gift.style.translate = `${dx}px ${dy}px`;
    hint.textContent = LINES[dodges];
    sfxPuff();
    dodges++;
    if (dodges >= LINES.length) setTimeout(() => { gift.style.translate = "0px 0px"; hint.textContent = "Okay okay… catch me 😅"; }, 900);
  }
  scene.addEventListener("click", e => {
    if (dodges < LINES.length && e.target.closest("#lastGift")) { e.stopPropagation(); e.preventDefault(); dodge(); }
  }, true);
  scene.addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse" || dodges >= LINES.length) return;
    const g = gift.getBoundingClientRect();
    if (Math.hypot(e.clientX - (g.left + g.width / 2), e.clientY - (g.top + g.height / 2)) < g.width * 0.7) dodge();
  });
  $("#lastGift").addEventListener("click", async e => {
    const g = e.currentTarget;
    if (g.classList.contains("is-open")) return;
    sfxChime(); g.classList.add("is-open");
    await wait(700);
    scene.classList.add("is-opened");
    $("#collage").setAttribute("aria-hidden", "false");
    confetti(innerWidth / 2, innerHeight * 0.4, 200);
    await wait(1200);
    show($("#lastNext"));
  });
  $("#lastNext").addEventListener("click", next);
})();

/* ---------- 10. finale ---------- */
(function finale() {
  const KEY = "khushali-22-wish";
  const saved = $("#wishSaved");
  try {
    const w = localStorage.getItem(KEY);
    if (w) { saved.textContent = `Your wish is with the stars: “${w}” ✨`; saved.hidden = false; }
  } catch (e) {}
  $("#wishSend").addEventListener("click", () => {
    const val = $("#wishInput").value.trim();
    if (!val) { $("#wishInput").focus(); return; }
    try { localStorage.setItem(KEY, val); } catch (e) {}
    saved.textContent = `Your wish is with the stars: “${val}” ✨`;
    saved.hidden = false;
    $("#wishInput").value = "";
    sfxChime(); confetti(...centerOf($("#wishSend")), 90);
  });
  $("#wishInput").addEventListener("keydown", e => { if (e.key === "Enter") $("#wishSend").click(); });

  onEnter.finale = () => setTimeout(() => { confetti(innerWidth * 0.25, innerHeight * 0.3, 120); confetti(innerWidth * 0.75, innerHeight * 0.3, 120); }, 400);

  $("#replay").addEventListener("click", () => location.reload());
})();

/* ---------- swipe helper ---------- */
function swipe(el, onSwipe, onDrag, onEnd) {
  let x0 = null, y0 = 0, dx = 0, horiz = null;
  el.addEventListener("pointerdown", e => { x0 = e.clientX; y0 = e.clientY; dx = 0; horiz = null; });
  el.addEventListener("pointermove", e => {
    if (x0 === null) return;
    dx = e.clientX - x0;
    if (horiz === null && (Math.abs(dx) > 8 || Math.abs(e.clientY - y0) > 8)) horiz = Math.abs(dx) > Math.abs(e.clientY - y0);
    if (horiz && onDrag) onDrag(dx, el.offsetWidth);
  });
  const end = () => {
    if (x0 === null) return;
    onEnd?.();
    if (horiz && Math.abs(dx) > 40) onSwipe(dx < 0 ? 1 : -1);
    else if (onDrag) onDrag(0, 1);
    x0 = null;
  };
  el.addEventListener("pointerup", end);
  el.addEventListener("pointercancel", end);
  el.addEventListener("pointerleave", end);
}
