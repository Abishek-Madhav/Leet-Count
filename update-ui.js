import { SOLVED_COUNT_CLASS_NAME } from "./constants.js";
import * as Counter from "./get-ac-count.js";

setTimeout(() => {
  Counter.getACCount();

  /********* Get Status Variables **********/
  const numUnlockedProblems =
    Counter.numUnlockedProblems.Easy +
    Counter.numUnlockedProblems.Medium +
    Counter.numUnlockedProblems.Hard;

  const numLockedProblems =
    Counter.numLockedProblems.Easy +
    Counter.numLockedProblems.Medium +
    Counter.numLockedProblems.Hard;

  const unlockedProblemsACCount =
    Counter.unlockedProblemsACCount.Easy +
    Counter.unlockedProblemsACCount.Medium +
    Counter.unlockedProblemsACCount.Hard;

  const lockedProblemsACCount =
    Counter.lockedProblemsACCount.Easy +
    Counter.lockedProblemsACCount.Medium +
    Counter.lockedProblemsACCount.Hard;

  const numCombinedProblems = numUnlockedProblems + numLockedProblems;
  const combinedProblemsACCount =
    unlockedProblemsACCount + lockedProblemsACCount;

  const numEasyProblems =
    Counter.numUnlockedProblems.Easy + Counter.numLockedProblems.Easy;
  const numMediumProblems =
    Counter.numUnlockedProblems.Medium + Counter.numLockedProblems.Medium;
  const numHardProblems =
    Counter.numUnlockedProblems.Hard + Counter.numLockedProblems.Hard;

  const easyProblemsACCount =
    Counter.unlockedProblemsACCount.Easy + Counter.lockedProblemsACCount.Easy;
  const mediumProblemsACCount =
    Counter.unlockedProblemsACCount.Medium +
    Counter.lockedProblemsACCount.Medium;
  const hardProblemsACCount =
    Counter.unlockedProblemsACCount.Hard + Counter.lockedProblemsACCount.Hard;

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
  const p = Array.from(
    document.getElementsByClassName(SOLVED_COUNT_CLASS_NAME)
  )[0];

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

  acCountContainer.innerHTML +=
    // TODO: Add the feature(showLockedCheckboxHTML) later
    // showLockedCheckboxHTML +
    unlockedACCountHTML +
    lockedACCountHTML +
    totalACCountHTML;
}, 10000);