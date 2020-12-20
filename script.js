const kbd = document.querySelectorAll("kbd");

Array.from(kbd).forEach(el => {
  el.addEventListener("click", e => {
    const { target } = e;
    e.target.classList.add("pressed");
    document.getElementById(`${target.innerText.toLocaleLowerCase()}`).play();
  });

});
