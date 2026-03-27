// ─── Data ────────────────────────────────────────────────────────────────────

const ROUNDS = 4;
const EXERCISE_DURATION = 60;
const REST_DURATION = 60;

function gifUrl(id) {
  return `https://media.giphy.com/media/${id}/giphy.gif`;
}
function thumbUrl(id) {
  return `https://media.giphy.com/media/${id}/200w.gif`;
}

const WORKOUTS = [
  {
    day: 1, week: 1, weekday: 'Mon',
    exercises: [
      { name: 'Rock And Kick', gif: 'KwfepF353iEfTaPCuF',
        desc: 'A fundamental movement that helps you understand how to drive your legs up to the sky to set up guard attacks like triangle choke, omoplata, or arm bar.' },
      { name: 'Backward Shoulder Roll', gif: 'pHiAnnTlXiC1rWEmpx',
        desc: 'A critical movement in Jiu Jitsu. Turn yourself into a ball, keep your elbows and knees together, and create momentum. Key to "rolling" in BJJ.' },
      { name: 'Shoulder Shuffle', gif: 'g8UHqkO6RCQB8WKCah',
        desc: 'Learn to move on your back with the shoulder shuffle. Always try to keep your hip off the floor with this movement.' },
      { name: 'The Short Knee Cut', gif: 'e8t3kyOY8pfUGSB5gb',
        desc: 'The knee cut guard pass is the most common guard pass in BJJ. This exercise helps you understand how to turn your hips to execute the knee cut.' },
    ]
  },
  {
    day: 2, week: 1, weekday: 'Wed',
    exercises: [
      { name: 'Kicking Up', gif: '6NYUybDSM9jDYrXOic',
        desc: 'Isolating your upper body and driving your legs up to the sky is critical for attacking from guard. Try to keep your head still!' },
      { name: 'The Knee Cut', gif: 'i9HnwJhqe6rcznUmQ5',
        desc: 'The full movement of the knee cut (also known as a sit out in wrestling). Kick across \u2013 your right foot goes to where your left hand was, then vice versa.' },
      { name: 'The Bear Crawl', gif: 'KkpQQLab5FFhEXpTY9',
        desc: 'An exercise to help you develop speed and agility as you pass guard. Stay on your toes and keep your feet fast!' },
      { name: 'Step Up From Kneeling', gif: 'UlybUdEFNltTrOpxUB',
        desc: 'Popping one foot up is a critical part of passing closed guard. Keep your back straight and maintain a steady rhythm.' },
    ]
  },
  {
    day: 3, week: 1, weekday: 'Fri',
    exercises: [
      { name: '180 Rock', gif: 'iTkQLlLSUKDdlOqUSy',
        desc: 'Change the angle of your hips so your guard always points towards your partner. The 180 rock lets you change directions quickly on your back.' },
      { name: 'Quick Knee Cut', gif: 'OB0odNrnhytasAp62B',
        desc: 'The knee cut is the most popular guard pass on the planet, typically done with speed and suddenness. Do it as fast as you can!' },
      { name: 'Technical Standup (Left)', gif: 'GaqqN9rFuMROpzAxYL',
        desc: 'The most important technique in BJJ. Standing up from your back safely and effectively is critical. Keep your back straight throughout.' },
      { name: 'Technical Standup (Right)', gif: '3DOlUZEZMrbS6260aC',
        desc: 'It is imperative that you can do the technical standup on both sides. Focus on keeping your back straight.' },
    ]
  },
  {
    day: 4, week: 2, weekday: 'Mon',
    exercises: [
      { name: 'Rocking S Sit', gif: 'bNtwDYaayzQYRK16HJ',
        desc: 'The S sit mimics the action of an omoplata shoulder lock. Also a great dynamic stretch for your glutes!' },
      { name: 'Knee Cut With Follow Through', gif: 'FrIgR8kibMOQVeaYFQ',
        desc: 'A more advanced knee cut. Kick across with your left leg, then kick over with your right. Mimics completing a guard pass into cross side.' },
      { name: 'The Sprawl', gif: 'yf0LgJPK5OZy5txLJ1',
        desc: 'An effective defense to a double leg takedown. Also a great way to get your heart and lungs pumping!' },
      { name: 'Alternating Technical Standups', gif: '5pshb146g2SofEUkUJ',
        desc: 'The technical standup alternating right hand forward and left hand forward.' },
    ]
  },
  {
    day: 5, week: 2, weekday: 'Wed',
    exercises: [
      { name: 'Alternating S Sit', gif: 'FxlR3fkb3eF7XEi0bN',
        desc: 'Builds balance and core strength while raising the coordination in your legs. Critical for Jiu Jitsu.' },
      { name: 'Monkey Shuffle', gif: 'BxQU8biRrAl5c7DriI',
        desc: 'Helps with guard passing. Be able to switch from side to side as you try to go around your partner\'s guard.' },
      { name: 'The Sprawl', gif: 'xL2UHigQfqdov617Pe',
        desc: 'Once again we have the sprawl. This is a grappling staple.' },
      { name: 'The Triangle Choke', gif: 'wnKqZuC3Ad33Jv0kW7',
        desc: 'One of the most powerful submissions from your guard. Kick both legs up to the sky. As your legs come down, bring your foot behind your knee.' },
    ]
  },
  {
    day: 6, week: 2, weekday: 'Fri',
    exercises: [
      { name: 'Rope Pull', gif: 'MJ3moOqRnKfUsUkCOw',
        desc: 'Mimics your attacks from Butterfly Guard. Imagine hitting an Arm Drag or attacking with a Seated Single Leg.' },
      { name: 'Push The Wall', gif: 'Ph7dHi9ELWLSPQVaI0',
        desc: 'You\'re defending a Guard Pass or creating space from an attempted takedown. Combine with rope pull for a 2 minute round!' },
      { name: 'Long Step', gif: 'fnts6lR8jyKygmY8ur',
        desc: 'A dynamic way to pass the guard. Imagine having control of your partner\'s neck as you step back to complete the pass.' },
      { name: 'Standing Up From Kneeling', gif: 'tk6XxoK317ErUYX1WF',
        desc: 'One of the most practical ways to pass closed guard is to stand up. Start on your knees and pop up on your feet.' },
    ]
  },
  {
    day: 7, week: 3, weekday: 'Mon',
    exercises: [
      { name: 'Triangle Choke', gif: 'EQgeFGtbNEBeL6kl2Z',
        desc: 'Coordinating your legs and driving your hips up to the sky is critical for Jiu Jitsu.' },
      { name: 'Bridging', gif: 'Ye69qYDaAvFbla7uyd',
        desc: 'The basis for developing power on your back. Slam your toes into the floor, drive your hips up to the sky, and bring your eyes to the mat.' },
      { name: 'Crab Walk', gif: 'wwc4awaSI3FyKJpHuR',
        desc: 'An upside down bear crawl. Keep your hips off the floor as you walk forward and back on your heels and hands.' },
      { name: 'Donkey Kick', gif: 'ib9sHT6FQ7rwgS3y49',
        desc: 'An explosive movement that simulates how you would jump over your partner\'s guard.' },
    ]
  },
  {
    day: 8, week: 3, weekday: 'Wed',
    exercises: [
      { name: 'One Legged Bridge (Left)', gif: '1bVDrNKxzzqLn7KkYI',
        desc: 'An explosive, sudden Bridge helps you escape sticky situations. Try with just your left foot as you bridge into your right shoulder.' },
      { name: 'One Legged Bridge (Right)', gif: 'qKihW2c7gMtnhuNpPn',
        desc: 'Same as before, now with the right foot. Focus on bringing your hips up to the sky as you look to the left!' },
      { name: 'Leg Circles (Right)', gif: 'Miv3htEcHfmTrOWa19',
        desc: 'Helps retain your guard and set up spider guard attacks. Draw a big circle with your big toe. Go clockwise and counter clockwise.' },
      { name: 'Leg Circles (Left)', gif: 'DtsxTv4mrTad1uAgoy',
        desc: 'Same with your left leg. For added difficulty, try to keep your hip off the floor the entire time.' },
    ]
  },
  {
    day: 9, week: 3, weekday: 'Fri',
    exercises: [
      { name: 'Double Leg Takedown', gif: 'mk7dRDKFsN2X9n6CoX',
        desc: 'A primary takedown in wrestling and critical in BJJ. From a low stance, drop your left knee, walk forward with your right leg, and drive up!' },
      { name: 'Bridging', gif: 'Ye69qYDaAvFbla7uyd',
        desc: 'Slam your toes into the floor, drive your hips up to the sky, and bring your eyes to the mat. Work both sides!' },
      { name: 'Forward Shoulder Rolls', gif: 'l7FaeehOje0z6N1s1V',
        desc: 'Same as backward rolls but going forwards. Keep your body like a ball, tuck your chin and keep your head off the mat. Roll over both shoulders!' },
      { name: 'Ski Slopes', gif: 'C9DZaLrp0N4JK2TrI5',
        desc: 'Develops the agility you need to switch directions quickly when Passing Guard.' },
    ]
  },
  {
    day: 10, week: 4, weekday: 'Mon',
    exercises: [
      { name: '180 Triangle Choke', gif: 'E3TEe4yfNXUeki07I3',
        desc: 'Triangle Choke drill with a 180 degree turn. Mimics the angle you need when hitting the Triangle Choke in class.' },
      { name: 'Bridge And Turn', gif: '002zPQpVVhsaodOe9n',
        desc: 'Mimics escaping from bottom cross side to all fours. Do this on both your right and left side.' },
      { name: 'Sumo Step', gif: 'AkmPddTETaEI5IwGsS',
        desc: 'Strong legs are imperative for grappling. Keep your back straight, hips low, and feet always moving.' },
      { name: 'Egg Beaters', gif: '5iIzufrfqAteYiPUOg',
        desc: 'Leg circles with both legs simultaneously. Focus on moving your hips side to side!' },
    ]
  },
  {
    day: 11, week: 4, weekday: 'Wed',
    exercises: [
      { name: 'Shrimping (Right Side)', gif: '6YxYbFS02nbQB3mxes',
        desc: 'Like footwork for Boxing, Shrimping is footwork on your back. Use it to maintain distance from your partner. A critical skill to practice every class.' },
      { name: 'Shrimping (Left Side)', gif: 'oKK7DAaew17ZuExJoh',
        desc: 'Same on your left side. Keep your left elbow and left knee together.' },
      { name: 'Seated Break Fall', gif: '9VPySWKO3RlpGog4d3',
        desc: 'Learn to fall safely. Start seated and hit the mat with your hand as you rock backwards.' },
      { name: 'Sprawl Into Double Leg Combo', gif: '40KAe6mqj9HRs0Ay5L',
        desc: 'Combining defense with offense. After your sprawl, drive your left knee to the ground for the double leg takedown.' },
    ]
  },
  {
    day: 12, week: 4, weekday: 'Fri',
    exercises: [
      { name: 'Stationary Shrimp One Foot (Left)', gif: 'zbojXqoYKYeQPcm9HR',
        desc: 'Keep your knees close to your chest. Make it harder by keeping your hip off the ground. Focus on keeping your elbow and knee together.' },
      { name: 'Stationary Shrimp One Foot (Right)', gif: 'VZtl6ziri0r94BcMLg',
        desc: 'Now with just your right foot. Keep your left elbow and left knee together. Try keeping your hip off the ground the entire time!' },
      { name: 'Breakfall From Your Feet', gif: 'CJS7pLqjPkEvmv8dXG',
        desc: 'The next progression in learning to fall safely. Start on your feet in a low stance.' },
      { name: 'Sprawl/Double Leg Combo', gif: '40KAe6mqj9HRs0Ay5L',
        desc: 'A foundational movement for grappling! Combine the sprawl defense with the double leg takedown.' },
    ]
  },
];

// ─── Audio & Haptics ─────────────────────────────────────────────────────────

let audioCtx;
function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function beep(freq, ms) {
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.value = 0.3;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + ms / 1000);
    osc.stop(ctx.currentTime + ms / 1000);
  } catch (_) {}
}

function vibrate(pattern) {
  try { navigator.vibrate(pattern); } catch (_) {}
}

function beepTick() { beep(660, 100); vibrate(50); }
function beepGo() { beep(880, 300); vibrate([100, 50, 100]); }
function beepRest() { beep(440, 400); vibrate(200); }
function beepDone() {
  beep(880, 200);
  setTimeout(() => beep(1100, 200), 250);
  setTimeout(() => beep(1320, 400), 500);
  vibrate([100, 80, 100, 80, 200]);
}

// ─── Wake Lock ───────────────────────────────────────────────────────────────

let wakeLock = null;

async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => { wakeLock = null; });
    }
  } catch (_) {}
}

function releaseWakeLock() {
  if (wakeLock) { wakeLock.release().catch(() => {}); wakeLock = null; }
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && state.view === 'workout' && state.workout && !state.workout.done) {
    requestWakeLock();
  }
});

// ─── State & Navigation ─────────────────────────────────────────────────────

const state = {
  view: 'home',
  dayIndex: null,
  exerciseDetail: null,
  workout: null,
  _history: [],
};

function navigate(view, opts) {
  state._history.push({ view: state.view, dayIndex: state.dayIndex, exerciseDetail: state.exerciseDetail });
  Object.assign(state, { view, ...opts });
  render();
  window.history.pushState(null, '', '');
}

function goBack() {
  const prev = state._history.pop();
  if (prev) {
    state.view = prev.view;
    state.dayIndex = prev.dayIndex;
    state.exerciseDetail = prev.exerciseDetail;
  } else {
    state.view = 'home';
  }
  render();
}

window.addEventListener('popstate', (e) => {
  e.preventDefault();
  if (state.view === 'workout' && state.workout && !state.workout.done) {
    // During workout, back = pause
    state.workout.isPaused = true;
    renderWorkoutContent();
    window.history.pushState(null, '', '');
    return;
  }
  goBack();
});

// Push initial state
window.history.pushState(null, '', '');

// ─── Rendering ───────────────────────────────────────────────────────────────

const app = document.getElementById('app');

function render() {
  app.scrollTop = 0;
  switch (state.view) {
    case 'home': return renderHome();
    case 'day': return renderDay();
    case 'workout': return renderWorkout();
    case 'encyclopedia': return renderEncyclopedia();
    case 'exercise-detail': return renderExerciseDetail();
  }
}

function renderHome() {
  releaseWakeLock();
  app.innerHTML = `
    <div class="home-view">
      <h1 class="home-title">BJJ Home Workout</h1>
      <p class="home-subtitle">4-Week At-Home Plan &middot; 19 min / session</p>
      ${[1, 2, 3, 4].map(w => `
        <div class="week-section">
          <div class="week-label">Week ${w}</div>
          <div class="day-grid">
            ${WORKOUTS.filter(d => d.week === w).map(d => `
              <div class="day-card" data-day="${d.day}">
                <div class="day-num">${d.day}</div>
                <div class="day-weekday">${d.weekday}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
      <button class="encyclopedia-btn" id="enc-btn">Browse All Exercises</button>
    </div>
  `;

  app.querySelectorAll('.day-card').forEach(card => {
    card.addEventListener('click', () => {
      navigate('day', { dayIndex: parseInt(card.dataset.day) - 1 });
    });
  });
  document.getElementById('enc-btn').addEventListener('click', () => navigate('encyclopedia'));
}

function renderDay() {
  const workout = WORKOUTS[state.dayIndex];
  app.innerHTML = `
    <div class="header">
      <button class="back-btn" id="back">\u2190</button>
      <h1>Day ${workout.day} \u00b7 Week ${workout.week}</h1>
    </div>
    <div class="day-view">
      <div class="day-info">
        <div class="workout-num">${workout.weekday} \u2014 Workout #${workout.day}</div>
        <div class="structure">${ROUNDS} rounds \u00d7 4 exercises \u00d7 1 min + 1 min rest = 19 min</div>
      </div>
      <div class="exercise-list">
        ${workout.exercises.map((ex, i) => `
          <div class="exercise-card" data-idx="${i}">
            <div class="exercise-card-inner">
              <img class="exercise-thumb" src="${thumbUrl(ex.gif)}" alt="" loading="lazy">
              <div class="exercise-card-text">
                <div class="num">Exercise ${i + 1}</div>
                <div class="name">${ex.name}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      <button class="start-workout-btn" id="start-btn">Start Workout</button>
    </div>
  `;

  document.getElementById('back').addEventListener('click', goBack);
  document.getElementById('start-btn').addEventListener('click', () => {
    // Unlock audio on user gesture
    getAudioCtx();
    startWorkout();
  });

  app.querySelectorAll('.exercise-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.idx);
      navigate('exercise-detail', {
        exerciseDetail: {
          exercise: workout.exercises[idx],
          context: `Day ${workout.day} \u2022 Exercise ${idx + 1}`,
        }
      });
    });
  });
}

function renderExerciseDetail() {
  const { exercise, context } = state.exerciseDetail;
  app.innerHTML = `
    <div class="exercise-modal">
      <div class="header">
        <button class="back-btn" id="back">\u2190</button>
        <h1>${exercise.name}</h1>
      </div>
      <div class="exercise-modal-content">
        <div class="meta">${context}</div>
        <img src="${gifUrl(exercise.gif)}" alt="${exercise.name}" loading="lazy">
        <p>${exercise.desc}</p>
      </div>
    </div>
  `;
  document.getElementById('back').addEventListener('click', goBack);
}

// ─── Workout Timer ───────────────────────────────────────────────────────────

function startWorkout() {
  state.workout = {
    dayIndex: state.dayIndex,
    round: 0,
    exercise: 0,
    timeLeft: EXERCISE_DURATION,
    isResting: false,
    isPaused: false,
    intervalId: null,
    done: false,
  };
  state._history.push({ view: state.view, dayIndex: state.dayIndex });
  state.view = 'workout';
  requestWakeLock();
  window.history.pushState(null, '', '');
  renderWorkout();

  // Preload all GIFs for this workout
  WORKOUTS[state.dayIndex].exercises.forEach(ex => {
    const img = new Image();
    img.src = gifUrl(ex.gif);
  });

  showCountdown(3, () => {
    beepGo();
    state.workout.intervalId = setInterval(tick, 1000);
    renderWorkoutContent();
  });
}

function showCountdown(n, onDone) {
  if (n <= 0) { onDone(); return; }
  const overlay = document.createElement('div');
  overlay.className = 'countdown-overlay';
  overlay.innerHTML = `
    <div class="countdown-num">${n}</div>
    <div class="countdown-label">Get ready!</div>
  `;
  document.body.appendChild(overlay);
  beepTick();
  setTimeout(() => {
    overlay.remove();
    showCountdown(n - 1, onDone);
  }, 1000);
}

function tick() {
  const w = state.workout;
  if (!w || w.isPaused) return;

  w.timeLeft--;

  if (w.timeLeft <= 3 && w.timeLeft > 0) beepTick();

  if (w.timeLeft <= 0) {
    if (w.isResting) {
      w.isResting = false;
      w.round++;
      w.exercise = 0;
      w.timeLeft = EXERCISE_DURATION;
      beepGo();
    } else {
      w.exercise++;
      if (w.exercise >= 4) {
        if (w.round >= ROUNDS - 1) {
          clearInterval(w.intervalId);
          w.done = true;
          releaseWakeLock();
          beepDone();
          renderWorkoutContent();
          return;
        }
        w.isResting = true;
        w.exercise = 0;
        w.timeLeft = REST_DURATION;
        beepRest();
      } else {
        w.timeLeft = EXERCISE_DURATION;
        beepGo();
      }
    }
  }

  renderWorkoutContent();
}

function renderWorkout() {
  app.innerHTML = `<div class="workout-view" id="workout-container"></div>`;
  renderWorkoutContent();
}

// Track the current gif to avoid re-setting the img src every second
let currentGifId = null;

function renderWorkoutContent() {
  const container = document.getElementById('workout-container');
  if (!container) return;
  const w = state.workout;
  if (!w) return;

  const workout = WORKOUTS[w.dayIndex];
  const circumference = 2 * Math.PI * 44;

  if (w.done) {
    currentGifId = null;
    container.className = 'workout-view';
    container.innerHTML = `
      <div class="done-view">
        <div class="done-check">\u2714</div>
        <h2>Workout Complete!</h2>
        <p>Day ${workout.day} done. Great work!</p>
        <button id="done-btn">Back to Home</button>
      </div>
    `;
    document.getElementById('done-btn').addEventListener('click', () => {
      state.workout = null;
      state._history = [{ view: 'home', dayIndex: state.dayIndex, exerciseDetail: null }];
      state.view = 'day';
      render();
    });
    return;
  }

  const exerciseIdx = w.isResting ? 0 : w.exercise;
  const exercise = workout.exercises[exerciseIdx];
  const duration = w.isResting ? REST_DURATION : EXERCISE_DURATION;
  const progress = w.timeLeft / duration;
  const dashOffset = circumference * (1 - progress);
  const totalDone = w.round * 4 + (w.isResting ? 4 : w.exercise);
  const totalAll = ROUNDS * 4;
  const overallProgress = ((totalDone * EXERCISE_DURATION + (duration - w.timeLeft)) /
    (totalAll * EXERCISE_DURATION + (ROUNDS - 1) * REST_DURATION)) * 100;

  container.className = `workout-view${w.isResting ? ' resting' : ''}${w.isPaused ? ' paused' : ''}`;

  // Only rebuild DOM when exercise/state changes, update timer in-place
  const needsRebuild = container.dataset.state !== `${w.round}-${w.exercise}-${w.isResting}-${w.isPaused}`;

  if (needsRebuild) {
    container.dataset.state = `${w.round}-${w.exercise}-${w.isResting}-${w.isPaused}`;
    currentGifId = null;

    if (w.isResting) {
      const nextEx = workout.exercises[0];
      container.innerHTML = `
        <div class="workout-progress-bar"><div class="workout-progress-fill" id="progress-fill"></div></div>
        <div class="workout-top">
          <div class="workout-round">Round <span>${w.round + 1}/${ROUNDS}</span> done</div>
          <div class="workout-controls">
            <button id="pause-btn">${w.isPaused ? '\u25B6' : '\u23F8'}</button>
            <button id="skip-btn">\u23ED</button>
            <button id="stop-btn">\u23F9</button>
          </div>
        </div>
        <div class="rest-display" id="tap-area">
          <div class="rest-label">Rest</div>
          <div class="timer-ring-container">
            <svg class="timer-ring" viewBox="0 0 100 100">
              <circle class="timer-ring-bg" cx="50" cy="50" r="44"/>
              <circle class="timer-ring-progress" cx="50" cy="50" r="44"
                stroke-dasharray="${circumference}" stroke-dashoffset="${dashOffset}" id="ring"/>
            </svg>
            <div class="timer-text" id="timer-num">${w.timeLeft}</div>
          </div>
          <div class="next-up">Next round:</div>
          <div class="next-name">${nextEx.name}</div>
          <img class="next-thumb" src="${thumbUrl(nextEx.gif)}" alt="">
          ${w.isPaused ? '<div style="margin-top:12px;color:var(--text-dim);font-size:13px">Tap to resume</div>' : ''}
        </div>
        <div class="workout-bottom"></div>
      `;
    } else {
      container.innerHTML = `
        <div class="workout-progress-bar"><div class="workout-progress-fill" id="progress-fill"></div></div>
        <div class="workout-top">
          <div class="workout-round">Round <span>${w.round + 1}/${ROUNDS}</span> \u00b7 Exercise <span>${w.exercise + 1}/4</span></div>
          <div class="workout-controls">
            <button id="pause-btn">${w.isPaused ? '\u25B6' : '\u23F8'}</button>
            <button id="skip-btn">\u23ED</button>
            <button id="stop-btn">\u23F9</button>
          </div>
        </div>
        <div class="workout-gif-area" id="tap-area">
          <img class="workout-gif" id="gif-img" src="${gifUrl(exercise.gif)}" alt="${exercise.name}">
          ${w.isPaused ? '<div class="pause-overlay">\u23F8</div>' : ''}
        </div>
        <div class="workout-bottom">
          <div class="timer-ring-container">
            <svg class="timer-ring" viewBox="0 0 100 100">
              <circle class="timer-ring-bg" cx="50" cy="50" r="44"/>
              <circle class="timer-ring-progress" cx="50" cy="50" r="44"
                stroke-dasharray="${circumference}" stroke-dashoffset="${dashOffset}" id="ring"/>
            </svg>
            <div class="timer-text${w.timeLeft <= 5 ? ' warning' : ''}" id="timer-num">${w.timeLeft}</div>
          </div>
          <div class="workout-exercise-name">${exercise.name}</div>
          <div class="workout-exercise-desc">${exercise.desc}</div>
          <div class="workout-exercise-counter">${totalDone + 1} / ${totalAll}</div>
        </div>
      `;
      currentGifId = exercise.gif;
    }

    // Bind controls
    document.getElementById('tap-area').addEventListener('click', (e) => {
      if (e.target.closest('.workout-controls')) return;
      w.isPaused = !w.isPaused;
      vibrate(30);
      renderWorkoutContent();
    });

    document.getElementById('pause-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      w.isPaused = !w.isPaused;
      vibrate(30);
      renderWorkoutContent();
    });

    document.getElementById('skip-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      w.timeLeft = 0;
      tick();
    });

    document.getElementById('stop-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm('Stop workout?')) {
        clearInterval(w.intervalId);
        releaseWakeLock();
        state.workout = null;
        state._history = [{ view: 'home', dayIndex: state.dayIndex, exerciseDetail: null }];
        state.view = 'day';
        render();
      }
    });
  } else {
    // Fast update: just timer number, ring, and progress bar
    const timerNum = document.getElementById('timer-num');
    const ring = document.getElementById('ring');
    if (timerNum) {
      timerNum.textContent = w.timeLeft;
      timerNum.className = `timer-text${w.timeLeft <= 5 && !w.isResting ? ' warning' : ''}`;
    }
    if (ring) ring.setAttribute('stroke-dashoffset', dashOffset);
  }

  const progressFill = document.getElementById('progress-fill');
  if (progressFill) progressFill.style.width = `${overallProgress}%`;
}

// ─── Encyclopedia ────────────────────────────────────────────────────────────

function renderEncyclopedia() {
  const allExercises = [];
  WORKOUTS.forEach(w => {
    w.exercises.forEach((ex, i) => {
      allExercises.push({ ...ex, day: w.day, week: w.week, weekday: w.weekday, index: i });
    });
  });

  app.innerHTML = `
    <div class="header">
      <button class="back-btn" id="back">\u2190</button>
      <h1>Encyclopedia</h1>
    </div>
    <div class="encyclopedia-view">
      <input class="search-box" id="search" type="text" placeholder="Search exercises..." autocomplete="off">
      <div id="enc-list"></div>
    </div>
  `;

  const listEl = document.getElementById('enc-list');
  const searchEl = document.getElementById('search');

  function renderList(filter) {
    const q = (filter || '').toLowerCase();
    const filtered = q
      ? allExercises.filter(ex => ex.name.toLowerCase().includes(q) || ex.desc.toLowerCase().includes(q))
      : allExercises;

    let html = '';
    let currentWeek = 0;
    let currentDay = 0;

    filtered.forEach(ex => {
      if (ex.week !== currentWeek) {
        currentWeek = ex.week;
        html += `<div class="enc-week-label">Week ${ex.week}</div>`;
        currentDay = 0;
      }
      if (ex.day !== currentDay) {
        currentDay = ex.day;
        html += `<div class="enc-day-label">Day ${ex.day} (${ex.weekday})</div>`;
      }
      html += `
        <div class="enc-exercise">
          <div class="enc-exercise-header">
            <span class="name">${ex.name}</span>
            <span class="chevron">\u25B6</span>
          </div>
          <div class="enc-exercise-detail">
            <img src="${gifUrl(ex.gif)}" alt="${ex.name}" loading="lazy">
            <p>${ex.desc}</p>
          </div>
        </div>
      `;
    });

    listEl.innerHTML = html || '<p style="color:var(--text-dim);text-align:center;padding:40px">No exercises found</p>';

    listEl.querySelectorAll('.enc-exercise-header').forEach(header => {
      header.addEventListener('click', () => {
        header.parentElement.classList.toggle('open');
      });
    });
  }

  renderList('');
  let debounceTimer;
  searchEl.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => renderList(searchEl.value), 150);
  });

  document.getElementById('back').addEventListener('click', goBack);
}

// ─── Init ────────────────────────────────────────────────────────────────────

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

render();
