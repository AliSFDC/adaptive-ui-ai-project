const experience = document.getElementById("experience");
const goal = document.getElementById("goal");
const fontSize = document.getElementById("fontSize");
const showHints = document.getElementById("showHints");
const themeToggle = document.getElementById("themeToggle");
const welcome = document.getElementById("welcome");
const recommendationText = document.getElementById("recommendationText");
const goalSummary = document.getElementById("goalSummary");
const hintBox = document.getElementById("hintBox");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const tasks = [...document.querySelectorAll(".task")];

function updatePlan() {
  const level = experience.value;
  const selectedGoal = goal.value;
  const plans = {
    beginner: {
      short: "Begin with one key idea and review the example slowly.",
      regular: "Review the basic idea, work through one example, and explain it in your own words.",
      deep: "Study the basics first, then complete two examples and write a short summary."
    },
    intermediate: {
      short: "Review your notes and answer one practice question.",
      regular: "Review the main concepts and solve two practice questions.",
      deep: "Compare related concepts, complete practice questions, and note any gaps."
    },
    advanced: {
      short: "Test your knowledge with a quick recall exercise.",
      regular: "Work on a challenging question and explain your reasoning.",
      deep: "Complete a deeper task, check alternative approaches, and summarize the result."
    }
  };
  const minutes = { short: 15, regular: 30, deep: 60 };
  welcome.textContent = `Study plan for a ${level} learner`;
  recommendationText.textContent = plans[level][selectedGoal];
  goalSummary.textContent = `Suggested session: ${minutes[selectedGoal]} minutes`;
  progressBar.style.width = `${Math.round(minutes[selectedGoal] / 60 * 100)}%`;
  hintBox.hidden = !showHints.checked;
}
function updateTaskProgress() {
  const complete = tasks.filter(task => task.checked).length;
  progressText.textContent = `${complete} of ${tasks.length} tasks completed`;
}
experience.addEventListener("change", updatePlan);
goal.addEventListener("change", updatePlan);
showHints.addEventListener("change", updatePlan);
fontSize.addEventListener("change", () => document.body.classList.toggle("large-text", fontSize.value === "large"));
themeToggle.addEventListener("click", () => {
  const enabled = document.body.classList.toggle("dark");
  themeToggle.textContent = enabled ? "Switch to light mode" : "Switch to dark mode";
  themeToggle.setAttribute("aria-pressed", String(enabled));
});
tasks.forEach(task => task.addEventListener("change", updateTaskProgress));
updatePlan();
updateTaskProgress();
