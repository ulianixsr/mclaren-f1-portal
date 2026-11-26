document.addEventListener('DOMContentLoaded', function () {
  var driversData = {
    norris: {
      fullName: 'Ландо Норрис (Lando Norris)',
      facts: [
        { label: 'Дата рождения', value: '13 ноября 1999 (27 лет)' },
        { label: 'Место рождения', value: 'Бристоль, Великобритания' },
        { label: 'Рост / Вес', value: '177 см / 68 кг' },
        { label: 'Гоночный номер', value: '#1 (чемпионский, базовый #4)' },
        { label: 'Дебют в Формуле-1', value: 'Гран-при Австралии 2019' },
        { label: 'Контракт с McLaren', value: 'До конца сезона 2030' },
        { label: 'Главный титул', value: 'Чемпион мира Ф-1 (2025)' }
      ],
      bio: [
        'Ландо Норрис присоединился к молодёжной программе McLaren в 2017 году после победы в Европейской Формуле-3, а уже в 2019 году дебютировал в основном составе команды в возрасте 19 лет.',
        'Свою первую победу в Формуле-1 британец одержал в Майами в 2024 году, после чего помог McLaren завоевать первый с 1998 года Кубок конструкторов. В сезоне-2025 Ландо выиграл 7 гонок, включая домашний Гран-при Великобритании, и стал чемпионом мира.',
        'В 2026 году Норрис выступает под чемпионским номером #1 на болиде McLaren MCL40. Вне трассы он увлекается графическим дизайном, сам разрабатывает раскраски своих шлемов и развивает собственную гоночную команду LN4 Fusion.'
      ],
      timeline: [
        { year: '2017 — 2018', text: 'Чемпион Европейской Формулы-3 и вице-чемпион Формулы-2. Официальный тест-пилот McLaren.' },
        { year: '2019 — 2020', text: 'Дебют в Ф-1 в составе McLaren. Первый подиум в карьере на Гран-при Австрии 2020.' },
        { year: '2024', text: 'Первая победа в Майами, 4 победы за сезон и победа McLaren в Кубке конструкторов.' },
        { year: '2025', text: 'Чемпион мира Формулы-1 (7 побед за сезон). Премия Laureus «Прорыв года».' },
        { year: '2026', text: 'Выступление под номером #1 на MCL40, победы в Венгрии, Нидерландах и Бразилии.' }
      ],
      gallery: [
        {
          url: 'https://unsplash.com',
          caption: 'Болид на стартовой прямой перед Гран-при'
        },
        {
          url: 'https://unsplash.com',
          caption: 'Аэродинамика и скорость на гоночном треке'
        },
        {
          url: 'https://unsplash.com',
          caption: 'Работа механиков на пит-лейн во время гоночного уик-энда'
        }
      ]
    },

    piastri: {
      fullName: 'Оскар Пиастри (Oscar Piastri)',
      facts: [
        { label: 'Дата рождения', value: '6 апреля 2001 (25 лет)' },
        { label: 'Место рождения', value: 'Мельбурн, Австралия' },
        { label: 'Рост / Вес', value: '178 см / 68 кг' },
        { label: 'Гоночный номер', value: '#81' },
        { label: 'Дебют в Формуле-1', value: 'Гран-при Бахрейна 2023' },
        { label: 'Контракт с McLaren', value: 'До конца сезона 2028' },
        { label: 'Лучший результат Ф-1', value: '3-е место в чемпионате (2025)' }
      ],
      bio: [
        'Оскар Пиастри прославился редким достижением в молодёжных сериях: он выиграл три престижных чемпионата подряд с первой попытки — Еврокубок Формулы-Рено (2019), Формулу-3 (2020) и Формулу-2 (2021).',
        'Дебютировав в McLaren в 2023 году, австралиец сразу завоевал два подиума. В 2024 году он одержал свои первые победы в Ф-1 в Венгрии и Азербайджане, а в 2025 году лидировал в чемпионате на протяжении 15 этапов и выиграл 7 гонок.',
        'Пиастри славится ледяным спокойствием в радиоэфире и точностью в плотной борьбе. В ноябре 2026 года в Лас-Вегасе он прорвался с 17-го места на старте на 3-ю ступень подиума.'
      ],
      timeline: [
        { year: '2019 — 2021', text: 'Хет-трик чемпионских титулов подряд: Формула-Рено, Формула-3 и Формула-2.' },
        { year: '2023', text: 'Дебют в McLaren, подиумы в Японии и Катаре, победа в спринте в Катаре.' },
        { year: '2024', text: 'Первые победы в Гран-при (Венгрия и Баку), 4-е место по итогам чемпионата.' },
        { year: '2025', text: '7 побед за сезон, первый поул в Китае и борьба за титул до финального этапа.' },
        { year: '2026', text: 'Подиумы на болиде MCL40 в Японии, Майами и прорыв с P17 на P3 в Лас-Вегасе.' }
      ],
      gallery: [
        {
          url: 'https://unsplash.com',
          caption: 'Гоночный шлем и кокпит перед выездом из боксов'
        },
        {
          url: 'https://unsplash.com',
          caption: 'Ночной этап Формулы-1 при свете прожекторов'
        },
        {
          url: 'https://unsplash.com',
          caption: 'Скоростной поворот гоночной трассы'
        }
      ]
    }
  };

  var quizQuestions = [
    {
      q: 'В каком году Ландо Норрис завоевал свой первый титул чемпиона мира Формулы-1?',
      options: ['2023', '2024', '2025', '2022'],
      correct: 2
    },
    {
      q: 'Какой постоянный гоночный номер использует Оскар Пиастри в Формуле-1?',
      options: ['#4', '#81', '#16', '#55'],
      correct: 1
    },
    {
      q: 'Как называется фирменный оранжевый цвет команды McLaren?',
      options: ['Solar Tangerine', 'Papaya Orange', 'Woking Sunset', 'Kiwi Amber'],
      correct: 1
    }
  ];

  var statWins = { label: 'Победы в Гран-при', norris: 14, piastri: 9 };
  var statPods = { label: 'Подиумы за карьеру', norris: 51, piastri: 29 };
  var statPoles = { label: 'Поул-позиции', norris: 20, piastri: 6 };
  var statPts = { label: 'Очки в сезоне 2026', norris: 264, piastri: 167 };
  var statsCompare = [statWins, statPods, statPoles, statPts];

  var currentDriver = 'norris';
  var currentTab = 'bio';
  var quizIndex = 0;
  var quizScore = 0;

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  // 1. Переключение ливрей
  var themeButtons = document.querySelectorAll('.theme-btn[data-theme]');
  themeButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      themeButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var themeClass = btn.getAttribute('data-theme');
      if (themeClass) document.body.className = themeClass;
      var radioOut = document.getElementById('radio-output');
      if (radioOut) {
        radioOut.textContent = '[MCLAREN LIVERY]: Включена цветовая схема "' + btn.textContent.trim() + '"!';
      }
    });
  });

    // 2. Фоновое аудио, плейлист треков и ползунок громкости
  var audioBtn = document.getElementById('audio-toggle-btn');
  var nextTrackBtn = document.getElementById('next-track-btn');
  var bgAudio = document.getElementById('bg-audio');
  var volumeSlider = document.getElementById('volume-slider');
  var currentVolume = volumeSlider ? Number(volumeSlider.value) / 100 : 0.25;
  var audioCtx = null;
  var synthInterval = null;
  var isPlayingAudio = false;

  // Список треков в папке audio/ (добавьте свои MP3 с такими именами)
  var playlist = [
    { title: 'F1 Main Theme', src: 'audio/f1-theme.mp3', notes: [110, 110, 130.81, 146.83, 110, 110, 164.81, 146.83] },
    { title: 'Papaya Night Drive', src: 'audio/f1-theme1.mp3', notes: [98, 116.54, 130.81, 146.83, 130.81, 116.54, 98, 87.31] },
    { title: 'Woking Pit Wall', src: 'audio/f1-theme2.mp3', notes: [130.81, 164.81, 196.00, 164.81, 146.83, 174.61, 196.00, 146.83] }
  ];
  var currentTrackIdx = 0;

  function startRacingSynth() {
    stopRacingSynth();
    var AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtx) audioCtx = new AudioContextClass();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    var notes = playlist[currentTrackIdx].notes;
    var step = 0;

    function playBeat() {
      if (!isPlayingAudio || !audioCtx) return;
      var osc = audioCtx.createOscillator();
      var gain = audioCtx.createGain();
      var filter = audioCtx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(notes[step % notes.length], audioCtx.currentTime);
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(340, audioCtx.currentTime);

      gain.gain.setValueAtTime(Math.max(0.001, currentVolume * 0.2), audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.36);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.38);
      step++;
    }

    playBeat();
    synthInterval = setInterval(playBeat, 380);
  }

  function stopRacingSynth() {
    if (synthInterval) {
      clearInterval(synthInterval);
      synthInterval = null;
    }
  }

  function playCurrentTrack() {
    var track = playlist[currentTrackIdx];
    var radioOut = document.getElementById('radio-output');

    if (bgAudio) {
      bgAudio.pause();
      stopRacingSynth();
      bgAudio.src = track.src;
      bgAudio.volume = currentVolume;

      var playPromise = bgAudio.play();
      if (playPromise !== undefined) {
        playPromise.catch(function () {
          startRacingSynth();
        });
      }
    } else {
      startRacingSynth();
    }

    if (radioOut) {
      radioOut.textContent = '[PIT WALL RADIO]: Сейчас играет трек #' + (currentTrackIdx + 1) + ' — «' + track.title + '»';
    }
  }

  if (volumeSlider) {
    volumeSlider.addEventListener('input', function () {
      currentVolume = Number(volumeSlider.value) / 100;
      if (bgAudio) bgAudio.volume = currentVolume;
      if (isPlayingAudio && audioBtn) {
        audioBtn.textContent = currentVolume === 0 ? '🔈 Звук: 0%' : '🔊 Звук: ' + volumeSlider.value + '%';
      }
    });
  }

  if (audioBtn) {
    audioBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var radioOut = document.getElementById('radio-output');
      if (!isPlayingAudio) {
        isPlayingAudio = true;
        audioBtn.classList.add('playing');
        var pct = volumeSlider ? volumeSlider.value : 25;
        audioBtn.textContent = '🔊 Звук: ' + pct + '%';
        playCurrentTrack();
      } else {
        isPlayingAudio = false;
        audioBtn.classList.remove('playing');
        audioBtn.textContent = '🔇 Звук: ВЫКЛ';
        if (bgAudio) bgAudio.pause();
        stopRacingSynth();
        if (radioOut) radioOut.textContent = '[TEAM RADIO AUDIO]: Фоновый звук выключен.';
      }
    });
  }

  if (nextTrackBtn) {
    nextTrackBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      currentTrackIdx = (currentTrackIdx + 1) % playlist.length;

      if (!isPlayingAudio) {
        isPlayingAudio = true;
        if (audioBtn) {
          audioBtn.classList.add('playing');
          var pct = volumeSlider ? volumeSlider.value : 25;
          audioBtn.textContent = '🔊 Звук: ' + pct + '%';
        }
      }
      playCurrentTrack();
    });
  }

// 3. Выбор карточки пилота
var cardNorris = document.getElementById('card-norris');
var cardPiastri = document.getElementById('card-piastri');
if (cardNorris) cardNorris.addEventListener('click', function () { selectDriver('norris'); });
if (cardPiastri) cardPiastri.addEventListener('click', function () { selectDriver('piastri'); });
function selectDriver(driverKey) {
currentDriver = driverKey;
if (cardNorris) cardNorris.classList.toggle('active', driverKey === 'norris');
if (cardPiastri) cardPiastri.classList.toggle('active', driverKey === 'piastri');
var data = driversData[driverKey];
var dossierName = document.getElementById('dossier-name');
if (dossierName) dossierName.textContent = data.fullName;
renderTabContent();
}
// 4. Вкладки досье
var tabButtons = document.querySelectorAll('.tab-btn');
tabButtons.forEach(function (btn) {
btn.addEventListener('click', function () {
tabButtons.forEach(function (b) { b.classList.remove('active'); });
btn.classList.add('active');
currentTab = btn.getAttribute('data-tab');
renderTabContent();
});
});
function renderTabContent() {
var container = document.getElementById('tab-content');
if (!container) return;
container.innerHTML = '';
var data = driversData[currentDriver];
if (currentTab === 'bio') {
var layout = el('div', 'bio-layout');
var factsTable = el('div', 'facts-table');
data.facts.forEach(function (f) {
var row = el('div', 'fact-row');
row.appendChild(el('span', '', f.label + ':'));
row.appendChild(el('strong', '', f.value));
factsTable.appendChild(row);
});
var bioWrap = el('div', 'bio-paragraphs');
data.bio.forEach(function (p) {
bioWrap.appendChild(el('p', '', p));
});
layout.appendChild(factsTable);
layout.appendChild(bioWrap);
container.appendChild(layout);
} else if (currentTab === 'timeline') {
var list = el('div', 'timeline-list');
data.timeline.forEach(function (item) {
var row = el('div', 'timeline-item');
row.appendChild(el('strong', '', item.year));
row.appendChild(document.createTextNode(' — '));
row.appendChild(el('span', '', item.text));
list.appendChild(row);
});
container.appendChild(list);
} else if (currentTab === 'gallery') {
var grid = el('div', 'gallery-grid');
data.gallery.forEach(function (photo) {
var card = el('div', 'gallery-card');
var img = el('img');
img.src = photo.url;
img.alt = photo.caption;
card.appendChild(img);
card.appendChild(el('div', 'gallery-caption', '🔍 ' + photo.caption));
card.addEventListener('click', function () {
openLightbox(photo.url, photo.caption);
});
grid.appendChild(card);
});
container.appendChild(grid);
} else if (currentTab === 'quiz') {
renderQuiz(container);
}
}
// 5. Мини-квиз в досье
function renderQuiz(container) {
container.innerHTML = '';
var box = el('div', 'dossier-quiz-box');
if (quizIndex >= quizQuestions.length) {
var resP = el('p', 'dossier-quiz-q', '🎉 Квиз завершён! Ваш результат: ' + quizScore + ' из ' + quizQuestions.length);
var restartBtn = el('button', 'action-btn orange-btn', 'Пройти заново');
restartBtn.type = 'button';
restartBtn.addEventListener('click', function () {
quizIndex = 0;
quizScore = 0;
renderTabContent();
});
box.appendChild(resP);
box.appendChild(restartBtn);
container.appendChild(box);
return;
}
var qObj = quizQuestions[quizIndex];
box.appendChild(el('div', 'dossier-quiz-step', 'ВОПРОС ' + (quizIndex + 1) + ' ИЗ ' + quizQuestions.length));
box.appendChild(el('p', 'dossier-quiz-q', qObj.q));
var grid = el('div', 'dossier-quiz-grid');
var allBtns = [];
qObj.options.forEach(function (opt, idx) {
var btn = el('button', 'dossier-quiz-opt', opt);
btn.type = 'button';
btn.addEventListener('click', function () {
allBtns.forEach(function (b, bIdx) {
b.disabled = true;
if (bIdx === qObj.correct) b.classList.add('is-correct');
});
if (idx === qObj.correct) {
quizScore++;
} else {
btn.classList.add('is-wrong');
}
setTimeout(function () {
quizIndex++;
renderTabContent();
}, 950);
});
allBtns.push(btn);
grid.appendChild(btn);
});
box.appendChild(grid);
container.appendChild(box);
}
// 6. Лайтбокс
var lightbox = document.getElementById('lightbox');
var closeLightboxBtn = document.getElementById('close-lightbox');
function openLightbox(url, caption) {
if (!lightbox) return;
document.getElementById('lightbox-img').src = url;
document.getElementById('lightbox-caption').textContent = caption;
lightbox.classList.add('open');
}
if (closeLightboxBtn && lightbox) {
closeLightboxBtn.addEventListener('click', function () { lightbox.classList.remove('open'); });
lightbox.addEventListener('click', function (e) { if (e.target === lightbox) lightbox.classList.remove('open'); });
}
// 7. Шкалы сравнения (Head-to-Head) и симулятор Гран-при
function renderH2H() {
var box = document.getElementById('h2h-bars');
if (!box) return;
box.innerHTML = '';
statsCompare.forEach(function (item) {
var total = item.norris + item.piastri;
var nPct = total > 0 ? Math.round((item.norris / total) * 100) : 50;
var pPct = 100 - nPct;
var row = el('div', 'h2h-row');
var labels = el('div', 'h2h-labels');
var leftLbl = el('span', '', 'Norris: ' + item.norris);
leftLbl.style.color = 'var(--main)';
leftLbl.style.fontWeight = '800';
var midLbl = el('span', '', item.label);
midLbl.style.color = 'var(--text-sub)';
midLbl.style.fontWeight = '700';
var rightLbl = el('span', '', item.piastri + ' :Piastri');
rightLbl.style.color = 'var(--alt)';
rightLbl.style.fontWeight = '800';
labels.appendChild(leftLbl);
labels.appendChild(midLbl);
labels.appendChild(rightLbl);
var track = el('div', 'h2h-track');
var barN = el('div', 'bar-n');
barN.style.width = nPct + '%';
var barP = el('div', 'bar-p');
barP.style.width = pPct + '%';
track.appendChild(barN);
track.appendChild(barP);
row.appendChild(labels);
row.appendChild(track);
box.appendChild(row);
});
}
var simGpBtn = document.getElementById('sim-gp-btn');
if (simGpBtn) {
simGpBtn.addEventListener('click', function () {
var norrisFirst = Math.random() > 0.48;
var radioOut = document.getElementById('radio-output');
if (norrisFirst) {
statWins.norris += 1;
statPods.norris += 1;
statPods.piastri += 1;
statPts.norris += 25;
statPts.piastri += 18;
if (radioOut) radioOut.textContent = '[GP FINISH]: Победный дубль McLaren! 1-й — Ландо Норрис (+25), 2-й — Оскар Пиастри (+18)!';
} else {
statWins.piastri += 1;
statPods.piastri += 1;
statPods.norris += 1;
statPts.piastri += 25;
statPts.norris += 18;
if (radioOut) radioOut.textContent = '[GP FINISH]: Оскар Пиастри забирает победу (+25), Ландо Норрис финиширует вторым (+18)!';
}
renderH2H();
});
}
// 8. Тест стартового светофора
var pitState = 'idle';
var pitTimer = null;
var startTime = 0;
var pitBtn = document.getElementById('pit-btn');
if (pitBtn) {
pitBtn.addEventListener('click', function () {
var lights = document.querySelectorAll('.light');
var output = document.getElementById('radio-output');
if (pitState === 'idle') {
pitState = 'waiting';
pitBtn.textContent = 'Ждите зелёный...';
lights.forEach(function (l) { l.className = 'light red'; });
pitTimer = setTimeout(function () {
lights.forEach(function (l) { l.className = 'light green'; });
pitState = 'go';
startTime = performance.now();
pitBtn.textContent = 'ЖМИ СЕЙЧАС!';
}, 1500 + Math.random() * 2500);
} else if (pitState === 'waiting') {
clearTimeout(pitTimer);
pitState = 'idle';
lights.forEach(function (l) { l.className = 'light'; });
pitBtn.textContent = '🚦 Тест реакции старта';
if (output) output.textContent = '[FIA STEWARDS]: Фальстарт! Штраф +5 секунд.';
} else if (pitState === 'go') {
var reaction = ((performance.now() - startTime) / 1000).toFixed(3);
pitState = 'idle';
lights.forEach(function (l) { l.className = 'light'; });
pitBtn.textContent = '🚦 Тест реакции старта';
if (output) output.textContent = '[START TELEMETRY]: Ваша реакция: ' + reaction + ' сек!';
}
});
}
// 9. Большой квиз «Кто ты в команде McLaren?»
var calcBtn = document.getElementById('mq-calc-btn');
var resetQuizBtn = document.getElementById('mq-reset-btn');
var mqForm = document.getElementById('mq-form');
var mqResult = document.getElementById('mq-result-screen');
if (calcBtn && mqResult) {
calcBtn.addEventListener('click', function () {
var a1 = document.querySelector('input[name="q1"]:checked');
var a2 = document.querySelector('input[name="q2"]:checked');
var a3 = document.querySelector('input[name="q3"]:checked');
var a4 = document.querySelector('input[name="q4"]:checked');
mqResult.innerHTML = '';
if (!a1 || !a2 || !a3 || !a4) {
mqResult.classList.remove('hidden');
mqResult.style.gridTemplateColumns = '1fr';
var warnInfo = el('div', 'mq-info');
warnInfo.appendChild(el('span', 'mq-badge', 'ПИТ-УОЛЛ MCLAREN'));
warnInfo.appendChild(el('h3', '', 'Выбери ответы на все 4 вопроса'));
warnInfo.appendChild(el('p', '', 'Нажми на одну из карточек в каждом пункте выше, чтобы рассчитать твой профиль пилота.'));
mqResult.appendChild(warnInfo);
return;
}
var lando = 0;
var oscar = 0;
[a1.value, a2.value, a3.value, a4.value].forEach(function (val) {
if (val === 'lando') lando++;
if (val === 'oscar') oscar++;
});
var isLando = lando >= oscar;
var imgEl = document.getElementById(isLando ? 'img-lando' : 'img-oscar');
var photo = imgEl && imgEl.src
? imgEl.src
: (isLando ? 'img/norris.jpeg' : 'img/piastri.jpeg');
var title = isLando ? 'LANDO NORRIS (#04)' : 'OSCAR PIASTRI (#81)';
var desc = isLando
? 'Твой гоночный ДНК — взрывная скорость, атакующий стиль в каждом повороте и искренние эмоции на подиуме.'
: 'Твой гоночный ДНК — ледяное хладнокровие, хирургическая точность на торможении и абсолютное спокойствие под давлением.';
var stats = [
{ label: 'Атакующий темп', val: isLando ? 96 : 86 },
{ label: 'Хладнокровие', val: isLando ? 85 : 98 },
{ label: 'Гоночный IQ', val: isLando ? 95 : 93 }
];
mqResult.style.gridTemplateColumns = '';
mqResult.classList.remove('hidden');
if (resetQuizBtn) resetQuizBtn.classList.remove('hidden');
var photoImg = el('img', 'mq-photo');
photoImg.src = photo;
photoImg.alt = title;
var info = el('div', 'mq-info');
info.appendChild(el('span', 'mq-badge', 'СОВПАДЕНИЕ С ПИЛОТОМ MCLAREN'));
info.appendChild(el('h3', '', title));
info.appendChild(el('p', '', desc));
var statsWrap = el('div', 'mq-stats');
stats.forEach(function (st) {
var row = el('div', 'mq-stat-row');
row.appendChild(el('span', '', st.label));
var track = el('div', 'mq-stat-track');
var fill = el('div', 'mq-stat-fill');
fill.style.width = st.val + '%';
track.appendChild(fill);
row.appendChild(track);
row.appendChild(el('strong', '', st.val + '%'));
statsWrap.appendChild(row);
});
info.appendChild(statsWrap);
mqResult.appendChild(photoImg);
mqResult.appendChild(info);
});
}
if (resetQuizBtn && mqForm && mqResult) {
resetQuizBtn.addEventListener('click', function () {
mqForm.reset();
mqResult.classList.add('hidden');
resetQuizBtn.classList.add('hidden');
});
}
// 10. Мини-игра «Пит-стоп за 1.80 секунды»
var startPitBtn = document.getElementById('start-pitstop-btn');
var pitTimerEl = document.getElementById('pit-timer');
var pitStatusEl = document.getElementById('pit-status');
var pitBestEl = document.getElementById('pit-best-time');
var wheelBtns = document.querySelectorAll('.wheel-btn');
var pitRunning = false;
var pitStartTimestamp = 0;
var pitRafId = null;
var wheelsChangedCount = 0;
var bestPitTime = null;
function playWheelGunSound() {
var AudioContextClass = window.AudioContext || window.webkitAudioContext;
if (!AudioContextClass) return;
try {
var ctx = new AudioContextClass();
var osc = ctx.createOscillator();
var gain = ctx.createGain();
osc.type = 'sawtooth';
osc.frequency.setValueAtTime(520, ctx.currentTime);
osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
gain.gain.setValueAtTime(0.08, ctx.currentTime);
gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);
osc.connect(gain);
gain.connect(ctx.destination);
osc.start();
osc.stop(ctx.currentTime + 0.09);
} catch (e) {}
}
function updatePitTimer() {
if (!pitRunning) return;
var elapsed = (performance.now() - pitStartTimestamp) / 1000;
if (pitTimerEl) pitTimerEl.textContent = elapsed.toFixed(2) + ' с';
pitRafId = requestAnimationFrame(updatePitTimer);
}
if (startPitBtn && wheelBtns.length > 0) {
startPitBtn.addEventListener('click', function () {
pitRunning = true;
wheelsChangedCount = 0;
pitStartTimestamp = performance.now();
startPitBtn.disabled = true;
startPitBtn.textContent = '⏱️ Идёт пит-стоп...';
if (pitStatusEl) pitStatusEl.textContent = 'Жми на все 4 подсвеченных колеса!';
wheelBtns.forEach(function (btn) {
btn.disabled = false;
btn.classList.remove('done');
btn.classList.add('needs-change');
var stateSpan = btn.querySelector('.wheel-state');
if (stateSpan) stateSpan.textContent = 'Заменить!';
});
if (pitRafId) cancelAnimationFrame(pitRafId);
pitRafId = requestAnimationFrame(updatePitTimer);
});
wheelBtns.forEach(function (btn) {
btn.addEventListener('click', function () {
if (!pitRunning || !btn.classList.contains('needs-change')) return;
playWheelGunSound();
btn.classList.remove('needs-change');
btn.classList.add('done');
btn.disabled = true;
var stateSpan = btn.querySelector('.wheel-state');
if (stateSpan) stateSpan.textContent = 'Готово ✓';
wheelsChangedCount++;
if (wheelsChangedCount === wheelBtns.length) {
pitRunning = false;
if (pitRafId) cancelAnimationFrame(pitRafId);
var finalTime = ((performance.now() - pitStartTimestamp) / 1000).toFixed(2);
if (pitTimerEl) pitTimerEl.textContent = finalTime + ' с';
var numTime = Number(finalTime);
if (bestPitTime === null || numTime < bestPitTime) {
bestPitTime = numTime;
if (pitBestEl) pitBestEl.textContent = finalTime + ' с';
}
var verdict = '';
if (numTime <= 1.80) {
verdict = '🏆 МИРОВОЙ РЕКОРД! Быстрее механиков McLaren (' + finalTime + ' с)!';
} else if (numTime <= 2.40) {
verdict = '🔥 Отличный пит-стоп уровня подиума Ф-1 (' + finalTime + ' с)!';
} else {
verdict = '⚡ Неплохо (' + finalTime + ' с), попробуй ещё быстрее!';
}
if (pitStatusEl) pitStatusEl.textContent = verdict;
var radioOut = document.getElementById('radio-output');
if (radioOut) radioOut.textContent = '[PIT CREW]: ' + verdict;
startPitBtn.disabled = false;
startPitBtn.textContent = '🔄 Повторить пит-стоп';
}
});
});
}
// 11. Интерактивный Team Radio (оригинальные аудиофайлы пилотов)
var radioClips = [
{
driver: 'lando',
badge: '📻 LANDO NORRIS (#04) • TEAM RADIO',
en: '«It’s Friday then! Saturday, Sunday, what?!»',
ru: 'Перевод: «Сегодня же пятница! А потом суббота, воскресенье — что творится?!»',
eng: '🎙️ Гоночный инженер Уилл Джозеф: «Радиопроверка прошла отлично, Ландо!»',
audio: 'audio/norris-friday.mp3'
},
{
driver: 'lando',
badge: '📻 LANDO NORRIS (#04) • TEAM RADIO',
en: '«I’m moving up and down, side to side, like a rollercoaster!»',
ru: 'Перевод: «Я еду вверх и вниз, из стороны в сторону, как на американских горках!»',
eng: '🎙️ Пит-уолл McLaren: «Отличный прогрев резины, Ландо, готовимся к старту.»',
audio: 'audio/norris1.mp3'
},
{
driver: 'lando',
badge: '📻 LANDO NORRIS (#01) • CHAMPION RADIO',
en: '«We did it! World Champions, baby! Thank you everyone in Woking!»',
ru: 'Перевод: «Мы сделали это! Чемпионы мира, детка! Спасибо каждому в Уокинге!»',
eng: '🎙️ Зак Браун: «Ты сделал это, парень! Фантастический пилотаж весь сезон!»',
audio: 'audio/norris2.mp3'
},
{
driver: 'oscar',
badge: '📻 OSCAR PIASTRI (#81) • TEAM RADIO',
en: '«Copy. Understood.»',
ru: 'Перевод: «Принято. Понял.» (Пульс 115 уд/мин на скорости 330 км/ч)',
eng: '🎙️ Гоночный инженер Том Сталлард: «Отличная работа с резиной, Оскар, отрыв 1.4 секунды.»',
audio: 'audio/piastri.mp3'
},
{
driver: 'oscar',
badge: '📻 OSCAR PIASTRI (#81) • FIRST WIN RADIO',
en: '«Very, very happy with that. Thank you, team. Great execution.»',
ru: 'Перевод: «Очень, очень доволен гонкой. Спасибо команде, отличное исполнение.»',
eng: '🎙️ Пит-уолл McLaren: «Поздравляем с первой победой в Формуле-1, Оскар!»',
audio: 'audio/piastri1.mp3'
},
{
driver: 'oscar',
badge: '📻 OSCAR PIASTRI (#81) • LAS VEGAS RADIO',
en: '«That was a bit close with the wall, all good though. Moving on.»',
ru: 'Перевод: «Было довольно близко к стене, но всё в порядке. Едем дальше.»',
eng: '🎙️ Гоночный инженер Том Сталлард: «Датчики в норме, машина цела. Продолжай в том же духе!»',
audio: 'audio/piastri2.mp3'
}
];
function playF1RadioBeep() {
var AudioContextClass = window.AudioContext || window.webkitAudioContext;
if (!AudioContextClass) return;
try {
var ctx = new AudioContextClass();
var times = [0, 0.11];
var freqs =
times.forEach(function (offset, idx) {
var osc = ctx.createOscillator();
var gain = ctx.createGain();
osc.type = 'sine';
osc.frequency.setValueAtTime(freqs[idx], ctx.currentTime + offset);
gain.gain.setValueAtTime(0.08, ctx.currentTime + offset);
gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + offset + 0.08);
osc.connect(gain);
gain.connect(ctx.destination);
osc.start(ctx.currentTime + offset);
osc.stop(ctx.currentTime + offset + 0.085);
});
} catch (e) {}
}
var trButtons = document.querySelectorAll('.tr-btn');
var trMonitor = document.getElementById('tr-monitor');
var trWave = document.getElementById('tr-wave');
var currentVoiceAudio = null;
trButtons.forEach(function (btn) {
btn.addEventListener('click', function () {
var idx = Number(btn.getAttribute('data-clip'));
var clip = radioClips[idx];
if (!clip) return;
trButtons.forEach(function (b) { b.classList.remove('active'); });
btn.classList.add('active');
if (currentVoiceAudio) {
currentVoiceAudio.pause();
currentVoiceAudio = null;
}
playF1RadioBeep();
if (trMonitor) {
trMonitor.classList.toggle('is-oscar', clip.driver === 'oscar');
}
var badgeEl = document.getElementById('tr-active-driver');
var enEl = document.getElementById('tr-quote-en');
var ruEl = document.getElementById('tr-quote-ru');
var engEl = document.getElementById('tr-engineer');
if (badgeEl) badgeEl.textContent = clip.badge;
if (enEl) enEl.textContent = clip.en;
if (ruEl) ruEl.textContent = clip.ru;
if (engEl) engEl.textContent = clip.eng;
if (trWave) trWave.classList.add('active');
if (clip.audio) {
currentVoiceAudio = new Audio(clip.audio);
currentVoiceAudio.volume = 0.95;
if (bgAudio && !bgAudio.paused) {
bgAudio.volume = currentVolume * 0.25;
}
currentVoiceAudio.play().catch(function () {
if (engEl) engEl.textContent = '⚠️ Положите файл ' + clip.audio + ' в папку audio/, чтобы услышать оригинал!';
if (trWave) trWave.classList.remove('active');
});
currentVoiceAudio.onended = function () {
if (trWave) trWave.classList.remove('active');
if (bgAudio && !bgAudio.paused) {
bgAudio.volume = currentVolume;
}
};
}
});
});
// Первичная отрисовка
renderTabContent();
renderH2H();
});
  // Подсветка активного пункта навигации при прокрутке
  var navLinks = document.querySelectorAll('.nav-pill');
  var navSections = ['drivers', 'dossier', 'comparison', 'quiz', 'pitstop-game', 'team-radio']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  if (navLinks.length > 0 && navSections.length > 0) {
    window.addEventListener('scroll', function () {
      var scrollPos = window.scrollY + 140;
      var currentId = navSections[0].id;

      navSections.forEach(function (sec) {
        if (sec.offsetTop <= scrollPos) {
          currentId = sec.id;
        }
      });

      navLinks.forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
      });
    });
  }
  // Подсветка навигации и работа кнопки «Наверх»
  var navLinks = document.querySelectorAll('.nav-pill');
  var scrollTopBtn = document.getElementById('scroll-top-btn');
  var navSections = ['drivers', 'dossier', 'comparison', 'quiz', 'pitstop-game', 'team-radio']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  window.addEventListener('scroll', function () {
    // Показываем или скрываем кнопку «Наверх»
    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
    }

    // Подсвечиваем активный пункт в меню
    if (navLinks.length > 0 && navSections.length > 0) {
      var scrollPos = window.scrollY + 140;
      var currentId = navSections[0].id;

      navSections.forEach(function (sec) {
        if (sec.offsetTop <= scrollPos) {
          currentId = sec.id;
        }
      });

      navLinks.forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
      });
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
    var scrollTopBtn = document.getElementById('scroll-top-btn');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Фильтрация стены трофеев
  var trophyFilterBtns = document.querySelectorAll('.trp-filter-btn');
  var trophyCards = document.querySelectorAll('.trp-card');

  trophyFilterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      trophyFilterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      var filter = btn.getAttribute('data-filter');
      trophyCards.forEach(function (card) {
        var cat = card.getAttribute('data-category');
        var show = filter === 'all' || cat === filter;
        card.classList.toggle('is-hidden', !show);
      });
    });
  });

  // Кнопка «Вернуться на старт ↑» в футере
  var footerTopBtn = document.getElementById('footer-top-btn');
  if (footerTopBtn) {
    footerTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
