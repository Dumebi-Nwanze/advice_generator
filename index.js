const adviceCount = document.getElementById("advice_no");
const adviceText = document.getElementById("advice_text");
const btn = document.getElementById("advice_button");

window.onload = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  adviceCount.innerHTML = data.slip.id;
  adviceText.innerHTML = data.slip.advice;
};

btn.addEventListener("click", async () => {
  adviceText.innerHTML = "Loading...";
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  adviceCount.innerHTML = data.slip.id;
  adviceText.innerHTML = data.slip.advice;
});
