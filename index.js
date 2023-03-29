//Using Event Bubbling for mouse clicks
document.querySelector(".set").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("drum")) {
    console.log("clicked", e.target);
    const sound = e.target.dataset.sound;
    console.log(sound);
    const audio = new Audio(`sounds/${sound}.mp3`).play();
    animation(e.target);
  }
});

//Keyboard event for key press
window.addEventListener("keydown", function (e) {
  const btn = document.getElementById(`${e.key}`);
  const sound = btn?.dataset?.sound;
  console.log(sound);
  if (sound) {
    const audio = new Audio(`sounds/${sound}.mp3`).play();
    animation(btn);
  }
});

//At line 15 using queryselector throws error for .5 or .9 so, getElementById is better approach

function animation(element) {
  element.classList.add("pressed");
  setTimeout(function () {
    element.classList.remove("pressed");
  }, 100);
}
