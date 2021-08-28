const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

//object
const learning = {};
learning.topic = "JS";
learning.learningGoals = [
  "Build JS programs",
  "practice projects",
  "owo",
  "have fun"
];
learning.category = "Front end development";
learning.topicImportance = "High";
console.log(learning);
learning.topic = "JavaScript";
learning.learningGoals.splice(1, 1);
console.log(learning);

topicElement.innerText = `I'm learning ${learning.topic}. `;
topicElement.classList.remove("hide");

countElement.innerText = `I have ${learning.learningGoals.length} learning goals.`;
countElement.classList.remove("hide");
