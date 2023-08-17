import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  createImcompleteList(inputText);
};

const deleteFromImcompleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

const createImcompleteList = (text) => {
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";
  completebutton.addEventListener("click", () => {
    deleteFromImcompleteList(completebutton.parentNode);

    const addTarget = completebutton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      const deretetarget = backbutton.parentNode;
      document.getElementById("complete-list").removeChild(deretetarget);

      const text = backbutton.parentNode.firstElementChild.innerText;
      createImcompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backbutton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";
  deletebutton.addEventListener("click", () => {
    deleteFromImcompleteList(deletebutton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completebutton);
  div.appendChild(deletebutton);

  document.getElementById("imcomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
