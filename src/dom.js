const hide = (selector, document) => {
  const nodes = document.querySelectorAll(selector);
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].style.display = "none";
  }
};

const show = (selector, document) => {
  const nodes = document.querySelectorAll(selector);
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].style.display = "";
  }
};

const resetAllInputs = (document) => {
  const nodes = document.querySelectorAll("input");
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].value = "";
  }
};

module.exports = {
  hide, show, resetAllInputs
}
