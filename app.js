// var toDoValue;

// function getInputValue() {
//   toDoValue = document.getElementById("to-do-input").value
//   console.log(toDoValue)
// }

function addToDoItem() {
  var toDoValue = document.getElementById("to-do-input").value
  
  var listItem = document.createElement("li");
  var text = document.createTextNode(`todo: ${toDoValue}`);
  listItem.appendChild(text);

  var itemsList = document.getElementById("itemsList");
  itemsList.appendChild(listItem);
}

