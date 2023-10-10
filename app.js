function addToDoItem() {
  //get text from input field
  var toDoValue = document.getElementById("to-do-input").value
  
  //create list item using input field value
  var listItem = document.createElement("li");
  var text = document.createTextNode(`${toDoValue}`);
  

  //create checkbox for list item
  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  //add list item to html
  var itemsList = document.getElementById("itemsList");
  itemsList.appendChild(listItem);
  listItem.appendChild(checkbox);
  listItem.appendChild(text);
  // listItem.appendChild(text);
  
  
  //clear input field
  document.getElementById("to-do-input").value=""

}
