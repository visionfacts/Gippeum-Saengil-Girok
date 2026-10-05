/* =========================================================
   기쁨 생일 기록 · A birthday surprise for Khushali
   Easy edits: change the text in the CONTENT block below.
   ========================================================= */

const CONTENT = {
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
      "Good news, bad days, 2am thoughts, K-drama spoilers.",
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

/* ---------- 0. prelude ---------- */
$("#prelude").addEventListener("click", () => {
  ctx();
  musicBtn.hidden = false;
  beads.hidden = false;
  musicOn();
  next();
});

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

/* ---------- 8. letter ---------- */
(function letter() {
  const env = $("#envelope"), body = $("#letterBody"), scroll = $("#letterScroll");
  const seg = typeof Intl !== "undefined" && Intl.Segmenter ? new Intl.Segmenter("gu", { granularity: "grapheme" }) : null;
  const glyphs = seg ? [...seg.segment(CONTENT.letter)].map(s => s.segment) : [...CONTENT.letter];
  let typing = false, done = false, timer;

  function finish() {
    clearTimeout(timer); typing = false; done = true;
    body.textContent = CONTENT.letter;
    $("#letterSkip").hidden = true;
    show($("#letterNext"));
  }
  function type() {
    typing = true;
    let i = 0;
    const caret = document.createElement("span"); caret.className = "caret";
    const text = document.createTextNode("");
    body.append(text, caret);
    (function step() {
      if (!typing) return;
      text.data += glyphs[i++];
      scroll.scrollTop = scroll.scrollHeight;
      if (i >= glyphs.length) { caret.remove(); finish(); return; }
      const ch = glyphs[i - 1];
      timer = setTimeout(step, ch === "\n" ? 260 : /[.,…:!]/.test(ch) ? 180 : 34);
    })();
  }
  $("#envOpen").addEventListener("click", async () => {
    if (env.classList.contains("is-open")) return;
    sfxChime();
    env.classList.add("is-open");
    $("#letterHint").hidden = true;
    await wait(900);
    env.classList.add("is-reading");
    await wait(500);
    show($("#letterSkip"));
    reduceMotion ? finish() : type();
  });
  $("#letterSkip").addEventListener("click", finish);
  $("#letterNext").addEventListener("click", next);
})();

/* ---------- 9. last gift ---------- */
(function lastGift() {
  const scene = scenes[sceneIndex("last")];
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
