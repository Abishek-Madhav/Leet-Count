import { STAR_ICON_CLASS_NAME } from "./constants.js";

const isLocked = (node) => {
  if (node.childElementCount != 1)
    return node.childNodes[1].className != STAR_ICON_CLASS_NAME;
  return false; 
};

const isSolved = (parentTR) => {
  const attributeValue = parentTR.childNodes[0].getAttribute("value");
  return attributeValue === "ac";
};

const getDifficulty = (parentTR) => {
  return difficultyClassNames[
    parentTR.childNodes[4].childNodes[0].className
    // contains the class names for each difficulty type
  ];
};

const difficultyClassNames = {
  "label label-success round": "Easy",
  "label label-warning round": "Medium",
  "label label-danger round": "Hard",
};

export const numLockedProblems = {
  Easy: 0,
  Medium: 0,
  Hard: 0,
};

export const numUnlockedProblems = { ...numLockedProblems };

export const lockedProblemsACCount = { ...numLockedProblems };

export const unlockedProblemsACCount = { ...numLockedProblems };

export const getACCount = () => {
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
