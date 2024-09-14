(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STAR_ICON_CLASS_NAME = exports.SOLVED_COUNT_CLASS_NAME = void 0;
const STAR_ICON_CLASS_NAME = "favor-icon__2vM7 fa fa-star";
exports.STAR_ICON_CLASS_NAME = STAR_ICON_CLASS_NAME;
const SOLVED_COUNT_CLASS_NAME = "solved-label__2sk4";
exports.SOLVED_COUNT_CLASS_NAME = SOLVED_COUNT_CLASS_NAME;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unlockedProblemsACCount = exports.numUnlockedProblems = exports.numLockedProblems = exports.lockedProblemsACCount = exports.getACCount = void 0;

var _constants = require("./constants.js");

const isLocked = node => {
  if (node.childElementCount != 1) return node.childNodes[1].className != _constants.STAR_ICON_CLASS_NAME;
  return false;
};

const isSolved = parentTR => {
  const attributeValue = parentTR.childNodes[0].getAttribute("value");
  return attributeValue === "ac";
};

const getDifficulty = parentTR => {
  return difficultyClassNames[parentTR.childNodes[4].childNodes[0].className // contains the class names for each difficulty type
  ];
};

const difficultyClassNames = {
  "label label-success round": "Easy",
  "label label-warning round": "Medium",
  "label label-danger round": "Hard"
};
const numLockedProblems = {
  Easy: 0,
  Medium: 0,
  Hard: 0
};
exports.numLockedProblems = numLockedProblems;
const numUnlockedProblems = { ...numLockedProblems
};
exports.numUnlockedProblems = numUnlockedProblems;
const lockedProblemsACCount = { ...numLockedProblems
};
exports.lockedProblemsACCount = lockedProblemsACCount;
const unlockedProblemsACCount = { ...numLockedProblems
};
exports.unlockedProblemsACCount = unlockedProblemsACCount;

const getACCount = () => {
  const problems = Array.from(document.querySelectorAll("[label='Title']"));

  for (let i = 0; i < problems.length; i++) {
    const parentTR = problems[i].parentElement;
    const problem = parentTR.childNodes[2].childNodes[0];
    const problemDifficulty = getDifficulty(parentTR);
    const hasSolved = isSolved(parentTR);

    if (isLocked(problem)) {
      numLockedProblems[problemDifficulty]++;
      if (hasSolved) lockedProblemsACCount[problemDifficulty]++;
    } else {
      numUnlockedProblems[problemDifficulty]++;
      if (hasSolved) unlockedProblemsACCount[problemDifficulty]++;
    }
  }
};

exports.getACCount = getACCount;

},{"./constants.js":1}],3:[function(require,module,exports){
"use strict";

var _constants = require("./constants.js");

var Counter = _interopRequireWildcard(require("./get-ac-count.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

setTimeout(() => {
  Counter.getACCount();
  /********* Get Status Variables **********/

  const numUnlockedProblems = Counter.numUnlockedProblems.Easy + Counter.numUnlockedProblems.Medium + Counter.numUnlockedProblems.Hard;
  const numLockedProblems = Counter.numLockedProblems.Easy + Counter.numLockedProblems.Medium + Counter.numLockedProblems.Hard;
  const unlockedProblemsACCount = Counter.unlockedProblemsACCount.Easy + Counter.unlockedProblemsACCount.Medium + Counter.unlockedProblemsACCount.Hard;
  const lockedProblemsACCount = Counter.lockedProblemsACCount.Easy + Counter.lockedProblemsACCount.Medium + Counter.lockedProblemsACCount.Hard;
  const numCombinedProblems = numUnlockedProblems + numLockedProblems;
  const combinedProblemsACCount = unlockedProblemsACCount + lockedProblemsACCount;
  const numEasyProblems = Counter.numUnlockedProblems.Easy + Counter.numLockedProblems.Easy;
  const numMediumProblems = Counter.numUnlockedProblems.Medium + Counter.numLockedProblems.Medium;
  const numHardProblems = Counter.numUnlockedProblems.Hard + Counter.numLockedProblems.Hard;
  const easyProblemsACCount = Counter.unlockedProblemsACCount.Easy + Counter.lockedProblemsACCount.Easy;
  const mediumProblemsACCount = Counter.unlockedProblemsACCount.Medium + Counter.lockedProblemsACCount.Medium;
  const hardProblemsACCount = Counter.unlockedProblemsACCount.Hard + Counter.lockedProblemsACCount.Hard;
  const unlockedTotalStatus = `${unlockedProblemsACCount}/${numUnlockedProblems}`;
  const unlockedEasyStatus = `${Counter.unlockedProblemsACCount.Easy}/${Counter.numUnlockedProblems.Easy}`;
  const unlockedMediumStatus = `${Counter.unlockedProblemsACCount.Medium}/${Counter.numUnlockedProblems.Medium}`;
  const unlockedHardStatus = `${Counter.unlockedProblemsACCount.Hard}/${Counter.numUnlockedProblems.Hard}`;
  const lockedTotalStatus = `${lockedProblemsACCount}/${numLockedProblems}`;
  const lockedEasyStatus = `${Counter.lockedProblemsACCount.Easy}/${Counter.numLockedProblems.Easy}`;
  const lockedMediumStatus = `${Counter.lockedProblemsACCount.Medium}/${Counter.numLockedProblems.Medium}`;
  const lockedHardStatus = `${Counter.lockedProblemsACCount.Hard}/${Counter.numLockedProblems.Hard}`;
  const combinedTotalStatus = `${combinedProblemsACCount}/${numCombinedProblems}`;
  const combinedEasyStatus = `${easyProblemsACCount}/${numEasyProblems}`;
  const combinedMediumStatus = `${mediumProblemsACCount}/${numMediumProblems}`;
  const combinedHardStatus = `${hardProblemsACCount}/${numHardProblems}`;
  /********* Create Status Bars **********/

  const p = Array.from(document.getElementsByClassName(_constants.SOLVED_COUNT_CLASS_NAME))[0];
  const acCountContainerHTML = `<div id="ac-count-container"></div>`;
  const showLockedCheckboxHTML = `
  <label class="tags-toggl__3H2x">
  <input type="checkbox" />Show locked problems
  </label>
  `;
  const unlockedACCountHTML = `
  <div class="unlocked-ac-count-container">
  <p>
    <span><strong>Unlocked Problems:</strong></span>
    <span class="label label-primary round">
      <span>${unlockedTotalStatus} Solved</span>
    </span>
    &nbsp;-&nbsp;
    <span class="label label-success round">
      <span>Easy&nbsp;${unlockedEasyStatus}</span>
    </span>
    &nbsp;
    <span class="label label-warning round">
      <span>Medium&nbsp;${unlockedMediumStatus}</span>
    </span>
    &nbsp;
    <span class="label label-danger round">
      <span> Hard&nbsp;${unlockedHardStatus}</span>
    </span>
  </p>
  </div>
  `;
  const lockedACCountHTML = `
  <div class="locked-ac-count-container">
  <p>
    <span><strong>Locked Problems:</strong></span>
    <span class="label label-primary round">
      <span>${lockedTotalStatus} Solved</span>
    </span>
    &nbsp;-&nbsp;
    <span class="label label-success round">
      <span>Easy&nbsp;${lockedEasyStatus}</span>
    </span>
    &nbsp;
    <span class="label label-warning round">
      <span>Medium&nbsp;${lockedMediumStatus}</span>
    </span>
    &nbsp;
    <span class="label label-danger round">
      <span> Hard&nbsp;${lockedHardStatus}</span>
    </span>
  </p>
  </div>`;
  const totalACCountHTML = `
  <div class="total-ac-count-container">
  <p>
    <span><strong>All Problems:</strong></span>
    <span class="label label-primary round">
      <span>${combinedTotalStatus} Solved</span>
    </span>
    &nbsp;-&nbsp;
    <span class="label label-success round">
      <span>Easy&nbsp;${combinedEasyStatus}</span>
    </span>
    &nbsp;
    <span class="label label-warning round">
      <span>Medium&nbsp;${combinedMediumStatus}</span>
    </span>
    &nbsp;
    <span class="label label-danger round">
      <span> Hard&nbsp;${combinedHardStatus}</span>
    </span>
  </p>
  </div>
  `;
  /********* Update UI **********/

  p.innerText = "";
  p.insertAdjacentHTML("afterend", acCountContainerHTML);
  const acCountContainer = document.getElementById("ac-count-container");
  acCountContainer.innerHTML += // TODO: Add the feature(showLockedCheckboxHTML) later
  // showLockedCheckboxHTML +
  unlockedACCountHTML + lockedACCountHTML + totalACCountHTML;
}, 10000);

},{"./constants.js":1,"./get-ac-count.js":2}]},{},[3]);
