const contentBoxes = document.getElementsByClassName("ex-content");

const bt1 = document.getElementById("bt1");
const bt2 = document.getElementById("bt2");
const bt3 = document.getElementById("bt3");

const toggleOtherItem = (id) => {
  for (let box of contentBoxes) {
    if (box.id !== id) {
      box.classList.remove('show');
    }
  }
}

bt1.onclick = () => {
  const id = bt1.attributes["aria-controls"].value;
  toggleOtherItem(id);
};

bt2.onclick = () => {
  const id = bt2.attributes["aria-controls"].value;
  toggleOtherItem(id);
};

bt3.onclick = () => {
  const id = bt3.attributes["aria-controls"].value;
  toggleOtherItem(id);
};