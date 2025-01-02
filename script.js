// Method 1
const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F3FF33",
  "#FF33A1",
  "#33FFF5",
];

function showKeyCodes(e) {
  const insert = document.getElementById("insert");
  insert.innerHTML = "";

  const keyCodes = {
    "e.key": e.key === " " ? "Space" : e.key,
    "e.keyCode": e.keyCode,
    "e.code": e.code,
  };

  for (let key in keyCodes) {
    const div = document.createElement("div");
    div.className = "key";

    // Randomly select a color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    div.style.backgroundColor = randomColor;

    const small = document.createElement("small");
    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

    insert.appendChild(div);
  }
}

window.addEventListener("keydown", showKeyCodes);
