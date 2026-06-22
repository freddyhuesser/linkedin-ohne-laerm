// ─── STATE ────────────────────────────────────────────────────────────────────
const state = {
  currentQ:  0,
  answers:   [], // array of { id, value, key }
  score:     0,
  stage:     null,
  weakPoints: [],
  submitted: false,
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function getStage(score) {
  return CONFIG.stages.find(s => score >= s.min && score <= s.max);
}

function calcScore() {
  return state.answers.reduce((sum, a) => sum + a.value, 0);
}

function getWeakPoints() {
  // Questions answered Nein (0), then Teilweise (0.5), up to 3 shown
  const nein      = state.answers.filter(a => a.value === 0);
  const teilweise = state.answers.filter(a => a.value === 0.5);
  return [...nein, ...teilweise].slice(0, 3);
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── RENDER FUNCTIONS ─────────────────────────────────────────────────────────

function renderQuestion(index) {
  const q    = CONFIG.questions[index];
  const total = CONFIG.questions.length;
  const prev  = state.answers[index];

  // Progress
  document.getElementById('progress-fill').style.width = ((index / total) * 100) + '%';
  document.getElementById('progress-current').textContent = index + 1;
  document.getElementById('progress-total').textContent   = total;

  // Question content
  document.getElementById('q-number').textContent = 'Frage ' + (index + 1) + ' von ' + total;
  document.getElementById('q-text').textContent   = q.text;
  document.getElementById('q-hint').textContent   = q.hint;

  // Answer buttons
  const container = document.getElementById('answer-options');
  container.innerHTML = '';
  CONFIG.answers.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn answer-' + opt.key + (prev && prev.key === opt.key ? ' selected' : '');
    btn.dataset.value = opt.value;
    btn.dataset.key   = opt.key;
    btn.innerHTML = `
      <span class="answer-icon">${opt.key === 'ja' ? '✓' : opt.key === 'teilweise' ? '~' : '✗'}</span>
      <span>${opt.label}</span>`;
    btn.addEventListener('click', () => selectAnswer(index, opt));
    container.appendChild(btn);
  });

  // Back button
  const backBtn = document.getElementById('btn-back');
  backBtn.style.visibility = index === 0 ? 'hidden' : 'visible';

  showScreen('question');
}

function selectAnswer(index, opt) {
  state.answers[index] = { id: CONFIG.questions[index].id, value: opt.value, key: opt.key };

  // Highlight selection briefly, then advance
  document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
  event.currentTarget.classList.add('selected');

  setTimeout(() => {
    if (index + 1 < CONFIG.questions.length) {
      state.currentQ = index + 1;
      renderQuestion(state.currentQ);
    } else {
      showTeaser();
    }
  }, 300);
}

function showTeaser() {
  state.score     = calcScore();
  state.stage     = getStage(state.score);
  state.weakPoints = getWeakPoints();

  const stage = state.stage;

  // Score circle
  document.getElementById('teaser-score').textContent = state.score % 1 === 0 ? state.score : state.score.toFixed(1);

  // Stage badge
  const badge = document.getElementById('teaser-stage-badge');
  badge.textContent = stage.emoji + ' ' + stage.label;
  badge.style.background = stage.color + '22';
  badge.style.color       = stage.color;
  badge.style.border      = '1.5px solid ' + stage.color + '55';

  showScreen('teaser');
}

function showGate() {
  showScreen('gate');
  document.getElementById('input-email').focus();
}

async function submitGate() {
  const email   = document.getElementById('input-email').value.trim();
  const name    = document.getElementById('input-name').value.trim();
  const company = document.getElementById('input-company').value.trim();
  const gdpr    = document.getElementById('gdpr-check').checked;

  // Validation
  let valid = true;
  document.querySelectorAll('.form-error').forEach(el => el.textContent = '');
  document.getElementById('submit-error').style.display = 'none';

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('error-email').textContent = 'Bitte eine gültige E-Mail-Adresse eingeben.';
    document.getElementById('input-email').classList.add('error');
    valid = false;
  } else {
    document.getElementById('input-email').classList.remove('error');
  }
  if (!gdpr) {
    document.getElementById('error-gdpr').textContent = 'Bitte die Einwilligung bestätigen.';
    valid = false;
  }
  if (!valid) return;

  // Show loading state
  const submitBtn = document.getElementById('btn-submit');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Wird übermittelt…';

  try {
    const payload = {
      email,
      name,
      company,
      score:      state.score,
      stufe:      state.stage.key,
      stufeName:  state.stage.label,
      answers:    state.answers.map((a, i) => ({ q: CONFIG.questions[i].id, v: a.key })),
    };

    const res = await fetch('subscribe.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok || !data.success) throw new Error(data.message || 'Fehler beim Übermitteln');

    state.submitted = true;
    showResult(name);

  } catch (err) {
    console.error(err);
    const errEl = document.getElementById('submit-error');
    errEl.textContent = 'Es ist ein Fehler aufgetreten. Bitte versuche es erneut oder schreib uns direkt.';
    errEl.style.display = 'block';
    submitBtn.disabled = false;
    submitBtn.textContent = CONFIG.gate.submitLabel;
  }
}

function showResult(name) {
  const stage = state.stage;
  const score = state.score;

  // Header
  document.getElementById('result-score').textContent = score % 1 === 0 ? score : score.toFixed(1);
  document.getElementById('result-stage-badge').textContent = stage.emoji + ' ' + stage.label;
  document.getElementById('result-stage-badge').style.background = stage.color + '33';

  // Greeting
  const greeting = name ? 'Danke, ' + name + '!' : 'Dein Ergebnis';
  document.getElementById('result-greeting').textContent = greeting;

  // Stage text
  document.getElementById('result-text').textContent = stage.text;

  // Weak points
  const wpContainer = document.getElementById('weak-points');
  wpContainer.innerHTML = '';

  if (state.weakPoints.length === 0) {
    wpContainer.innerHTML = '<div class="all-good">✅ Stark auf allen Punkten — beeindruckend!</div>';
  } else {
    const title = document.createElement('p');
    title.className = 'weak-points-title';
    title.textContent = 'Diese Punkte haben noch Potenzial:';
    wpContainer.appendChild(title);

    state.weakPoints.forEach((a, i) => {
      const q    = CONFIG.questions.find(q => q.id === a.id);
      const step = CONFIG.nextSteps[a.id];
      const div  = document.createElement('div');
      div.className = 'weak-point';
      div.innerHTML = `
        <div class="weak-point-icon">${i + 1}</div>
        <div>
          <div class="weak-point-q">${q.text}</div>
          <div class="weak-point-step"><strong>Erster Schritt:</strong> ${step}</div>
        </div>`;
      wpContainer.appendChild(div);
    });
  }

  // CTA
  document.getElementById('cta-primary').href  = CONFIG.result.ctaPrimary.url;
  document.getElementById('cta-primary').textContent = CONFIG.result.ctaPrimary.label;
  document.getElementById('cta-secondary').href = CONFIG.result.ctaSecondary.url;
  document.getElementById('cta-secondary').textContent = CONFIG.result.ctaSecondary.label;

  showScreen('result');
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Intro → Start
  document.getElementById('btn-start').addEventListener('click', () => {
    state.currentQ = 0;
    state.answers  = [];
    renderQuestion(0);
  });

  // Question → Back
  document.getElementById('btn-back').addEventListener('click', () => {
    if (state.currentQ > 0) {
      state.currentQ--;
      renderQuestion(state.currentQ);
    }
  });

  // Teaser → Gate
  document.getElementById('btn-show-result').addEventListener('click', showGate);

  // Gate → Submit
  document.getElementById('btn-submit').addEventListener('click', submitGate);
  document.getElementById('gate-form').addEventListener('keydown', e => {
    if (e.key === 'Enter') submitGate();
  });

  // Start on intro screen
  showScreen('intro');
});
