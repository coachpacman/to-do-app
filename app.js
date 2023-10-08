function getInputValue() {
  var toDoValue = document.getElementById("to-do-input").value
  console.log(toDoValue)
}

function addToDoItem() {
  var listItem = document.createElement("li");
  var text = document.createTextNode("list item");
  listItem.appendChild(text);

  var itemsList = document.getElementById("itemsList");
  itemsList.appendChild(listItem);
}

