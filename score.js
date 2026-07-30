#!/usr/bin/env node
/**
 * score.js — AI-writing detector based on the /humanizer skill's 28-pattern list.
 *
 * Usage:
 *   echo "texto a evaluar" | node score.js
 *   node score.js -f archivo.txt
 *   node score.js -f archivo.txt --json
 *
 * Score: 0-100. Higher = more "AI-sounding".
 */

const fs = require('fs');

// ---------- Input ----------
function getInput() {
  const args = process.argv.slice(2);
  const fileIdx = args.indexOf('-f');
  if (fileIdx !== -1 && args[fileIdx + 1]) {
    return fs.readFileSync(args[fileIdx + 1], 'utf8');
  }
  try {
    return fs.readFileSync(0, 'utf8'); // stdin
  } catch (e) {
    console.error('Uso: echo "texto" | node score.js   o   node score.js -f archivo.txt');
    process.exit(1);
  }
}
const asJson = process.argv.includes('--json');
const text = getInput();

// ---------- Vocabulary ----------
const TIER1 = [
  'delve', 'tapestry', 'vibrant', 'crucial', 'comprehensive', 'meticulous', 'embark',
  'robust', 'seamless', 'groundbreaking', 'leverage', 'synergy', 'transformative',
  'paramount', 'multifaceted', 'myriad', 'cornerstone', 'reimagine', 'empower',
  'catalyst', 'invaluable', 'bustling', 'nestled', 'realm', 'unpack', 'deep dive',
  'actionable', 'impactful', 'learnings', 'bandwidth', 'net-net', 'value-add',
  'thought leader', 'cutting-edge', 'game-changing', 'unlock the potential'
];
const TIER2 = [
  'furthermore', 'moreover', 'paradigm', 'holistic', 'utilize', 'facilitate',
  'nuanced', 'illuminate', 'encompasses', 'catalyze', 'proactive', 'ubiquitous',
  'quintessential', 'cadence', 'best practices'
];
const AI_PHRASES = [
  "in today's digital age", 'it is worth noting', 'plays a crucial role',
  'serves as a testament', 'in the realm of', 'delve into', 'harness the power of',
  'embark on a journey', 'without further ado', "let's dive in", 'circle back',
  'key takeaways', 'paradigm shift', 'move the needle', 'low-hanging fruit',
  'pain points', 'double-click on'
];
const FILLER = [
  'in order to', 'due to the fact that', 'at this point in time',
  'it is important to note that', 'for all intents and purposes'
];
const CHATBOT_ARTIFACTS = [
  'i hope this helps', 'let me know if', 'great question', "you're absolutely right",
  'as an ai', "i'm just an ai", 'happy to help', 'feel free to ask'
];
const CUTOFF_DISCLAIMERS = [
  'as of my last training', 'while details are limited', "i don't have access to real-time",
  'my knowledge cutoff', 'i cannot browse'
];
const HEDGES = ['might', 'could', 'potentially', 'perhaps', 'possibly', 'arguably', 'may'];
const GENERIC_CONCLUSIONS = [
  'the future looks bright', 'exciting times', 'only time will tell', 'time will tell',
  'remains to be seen'
];
const REASONING_ARTIFACTS = [
  'let me think', 'step 1:', 'breaking this down', "let's break this down", 'first, let'
];
const COPULA_AVOIDANCE = ['serves as', 'boasts', 'stands as', 'functions as'];

// ---------- Helpers ----------
function countHits(str, terms) {
  let hits = [];
  const lower = str.toLowerCase();
  for (const term of terms) {
    const re = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    const matches = lower.match(re);
    if (matches) hits.push({ term, count: matches.length });
  }
  return hits;
}

function words(str) {
  return (str.toLowerCase().match(/[a-záéíóúñü']+/gi) || []);
}

function sentences(str) {
  return str.split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(Boolean);
}

function stdev(arr) {
  const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
  const variance = arr.reduce((a, b) => a + (b - mean) ** 2, 0) / arr.length;
  return { mean, sd: Math.sqrt(variance) };
}

// ---------- Category detectors ----------
const report = { categories: {}, statistics: {}, issues: [] };
let score = 0;

function addIssue(category, label, count, weight, note) {
  if (count <= 0) return;
  const pts = Math.min(weight * count, weight * 4); // cap runaway single-category inflation
  score += pts;
  report.issues.push({ category, label, count, points: Math.round(pts * 10) / 10, note });
}

// Content
addIssue('Content', 'Vaguely attributed claims ("experts believe", "studies show")',
  countHits(text, ['experts believe', 'studies show', 'industry reports', 'research suggests']).reduce((a, h) => a + h.count, 0),
  5, 'Nombra la fuente o quita la frase.');

addIssue('Content', 'Formulaic "despite challenges... continues to thrive"',
  (text.match(/despite (challenges|obstacles|setbacks)[^.]*?(continues to|remains)/gi) || []).length,
  6, 'Cliché narrativo de artículo generado.');

// Language — vocabulary
const t1 = countHits(text, TIER1);
const t1total = t1.reduce((a, h) => a + h.count, 0);
addIssue('Language', 'Vocabulario IA Tier 1 (delve, leverage, robust, seamless...)', t1total, 4,
  t1.map(h => `${h.term}×${h.count}`).join(', '));

const t2 = countHits(text, TIER2);
const t2total = t2.reduce((a, h) => a + h.count, 0);
addIssue('Language', 'Vocabulario IA Tier 2 (furthermore, utilize, holistic...)', t2total, 2,
  t2.map(h => `${h.term}×${h.count}`).join(', '));

const phrases = countHits(text, AI_PHRASES);
const phrasesTotal = phrases.reduce((a, h) => a + h.count, 0);
addIssue('Language', 'Frases hechas de IA ("delve into", "in today\'s digital age"...)', phrasesTotal, 5,
  phrases.map(h => h.term).join(', '));

addIssue('Language', 'Copula avoidance ("serves as", "boasts" en vez de "is/has")',
  countHits(text, COPULA_AVOIDANCE).reduce((a, h) => a + h.count, 0), 3);

addIssue('Language', 'Negative parallelism ("it\'s not just X, it\'s Y")',
  (text.match(/\bnot only\b[^.]*\bbut also\b/gi) || []).length +
  (text.match(/\bit'?s not just\b/gi) || []).length,
  4);

addIssue('Language', 'False ranges ("from X to Y" como relleno)',
  (text.match(/\bfrom\s+[a-z][^.,;]{3,25}\s+to\s+[a-z][^.,;]{3,25}\b/gi) || []).length > 2
    ? (text.match(/\bfrom\s+[a-z][^.,;]{3,25}\s+to\s+[a-z][^.,;]{3,25}\b/gi) || []).length - 2
    : 0,
  3);

// Style
const emDashes = (text.match(/—/g) || []).length;
const wordCount = words(text).length || 1;
const emDashRate = emDashes / (wordCount / 100);
addIssue('Style', 'Uso excesivo de guiones largos (—)', emDashRate > 1.5 ? Math.round(emDashRate - 1.5) : 0, 3,
  `${emDashes} guiones en ${wordCount} palabras`);

const bold = (text.match(/\*\*[^*]+\*\*/g) || []).length;
addIssue('Style', 'Negritas excesivas (**texto**)', bold > 6 ? bold - 6 : 0, 2);

const inlineHeaders = (text.match(/^\s*[-*]\s+\*\*[^*]+:\*\*/gm) || []).length;
addIssue('Style', 'Listas con "encabezado inline" ("- **Tema:** texto")', inlineHeaders > 4 ? inlineHeaders - 4 : 0, 2);

const emojiCount = (text.match(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu) || []).length;
addIssue('Style', 'Emojis en texto profesional', emojiCount, 5);

const curlyQuotes = (text.match(/[‘’“”]/g) || []).length;
addIssue('Style', 'Comillas curvas ("smart quotes") en vez de rectas', curlyQuotes > 0 ? 1 : 0, 3,
  `${curlyQuotes} instancias`);

const titleCaseHeadings = (text.match(/^#{1,6}\s+.+$/gm) || [])
  .filter(h => {
    const w = h.replace(/^#{1,6}\s+/, '').split(/\s+/).filter(x => x.length > 2);
    const capped = w.filter(x => /^[A-Z]/.test(x));
    return w.length >= 3 && capped.length / w.length > 0.7;
  }).length;
addIssue('Style', 'Encabezados en Title Case', titleCaseHeadings, 2);

// Communication
addIssue('Communication', 'Artefactos de chatbot ("I hope this helps!", "Great question!")',
  countHits(text, CHATBOT_ARTIFACTS).reduce((a, h) => a + h.count, 0), 8);

addIssue('Communication', 'Disclaimers de knowledge cutoff',
  countHits(text, CUTOFF_DISCLAIMERS).reduce((a, h) => a + h.count, 0), 8);

addIssue('Communication', 'Artefactos de cadena de razonamiento ("Let me think...", "Step 1:")',
  countHits(text, REASONING_ARTIFACTS).reduce((a, h) => a + h.count, 0), 6);

addIssue('Communication', 'Acknowledgment loops (repetir la pregunta antes de responder)',
  (text.match(/^(you'?re asking|so you want to know)/gim) || []).length, 4);

// Filler
addIssue('Filler', 'Muletillas ("in order to", "due to the fact that")',
  countHits(text, FILLER).reduce((a, h) => a + h.count, 0), 3);

// Hedging stacked in same sentence
let hedgeStacks = 0;
for (const s of sentences(text)) {
  const hits = HEDGES.filter(h => new RegExp(`\\b${h}\\b`, 'i').test(s)).length;
  if (hits >= 2) hedgeStacks++;
}
addIssue('Filler', 'Hedging apilado (2+ calificadores en una oración)', hedgeStacks, 4);

addIssue('Filler', 'Conclusiones genéricas ("The future looks bright")',
  countHits(text, GENERIC_CONCLUSIONS).reduce((a, h) => a + h.count, 0), 6);

// ---------- Statistics ----------
const sents = sentences(text);
const sentLengths = sents.map(s => words(s).length).filter(n => n > 0);
let burstiness = null, cov = null;
if (sentLengths.length > 2) {
  const { mean, sd } = stdev(sentLengths);
  cov = mean > 0 ? sd / mean : 0;
  burstiness = cov; // coefficient of variation as proxy
  addIssue('Statistics', 'Baja variación en longitud de oraciones (metronómico)', cov < 0.3 ? 1 : 0, 10,
    `CoV=${cov.toFixed(2)} (humano típico: 0.4-0.8)`);
}

const allWords = words(text);
const uniqueWords = new Set(allWords);
const ttr = allWords.length > 0 ? uniqueWords.size / allWords.length : 0;
if (allWords.length > 30) {
  addIssue('Statistics', 'Baja diversidad léxica (type-token ratio)', ttr < 0.4 ? 1 : 0, 10,
    `TTR=${ttr.toFixed(2)} (humano típico: 0.5-0.7)`);
}

report.statistics = {
  words: allWords.length,
  sentences: sents.length,
  avgSentenceLength: sentLengths.length ? (sentLengths.reduce((a, b) => a + b, 0) / sentLengths.length).toFixed(1) : null,
  sentenceLengthCoV: cov !== null ? cov.toFixed(2) : null,
  typeTokenRatio: ttr.toFixed(2),
};

// ---------- Final score ----------
score = Math.round(Math.min(100, score));
let label;
if (score <= 15) label = 'Suena humano — pocos o ningún indicio de IA';
else if (score <= 40) label = 'Mayormente humano, con algunos tics de IA';
else if (score <= 70) label = 'Mixto / probablemente asistido por IA';
else label = 'Fuertemente suena a IA';

report.score = score;
report.label = label;

// ---------- Output ----------
if (asJson) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.log(`\nScore IA: ${score}/100 — ${label}\n`);
  console.log(`Estadísticas: ${report.statistics.words} palabras, ${report.statistics.sentences} oraciones, ` +
    `longitud media ${report.statistics.avgSentenceLength}, TTR ${report.statistics.typeTokenRatio}` +
    (report.statistics.sentenceLengthCoV ? `, CoV oraciones ${report.statistics.sentenceLengthCoV}` : ''));

  if (report.issues.length === 0) {
    console.log('\nSin patrones de IA detectados.');
  } else {
    console.log('\nPatrones detectados:');
    const byCategory = {};
    for (const issue of report.issues) {
      byCategory[issue.category] = byCategory[issue.category] || [];
      byCategory[issue.category].push(issue);
    }
    for (const [cat, issues] of Object.entries(byCategory)) {
      console.log(`\n  [${cat}]`);
      for (const i of issues) {
        console.log(`   - ${i.label}: ${i.count} (${i.points} pts)${i.note ? ' — ' + i.note : ''}`);
      }
    }
  }
  console.log('');
}
