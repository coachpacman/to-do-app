function addToDoItem() {
  
  //get text from input field, then clear it
  var toDoValue = document.getElementById("to-do-input").value;
  document.getElementById("to-do-input").value="";
  
  //create list item using input field value
  var listItem = document.createElement("li");
  
  //create checkbox for list item
  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  listItem.appendChild(checkbox);
  
  //create todo text
  var text = document.createTextNode(`${toDoValue}`);
  var toDoText = document.createElement("span");
  toDoText.appendChild(text);
  listItem.appendChild(toDoText);

  //create delete button for list item
  var delButton = document.createElement("button");
  var buttonLabel = document.createTextNode("delete");
  delButton.setAttribute("value", "delete");
  delButton.appendChild(buttonLabel);
  delButton.style.display = "none";
  listItem.appendChild(delButton);

  //event listener for removing list item
  delButton.addEventListener("click", function(e) {
    listItem.remove();
  });


  //event listener for displaying delete button if checked
  checkbox.addEventListener("click", function(e) {
    if (e.target.checked) {
      toDoText.style.textDecoration = "line-through";
      delButton.style.display = "";
    } else {
      toDoText.style.textDecoration = ""; 
      delButton.style.display = "none";
    }
  });

  //add list item to html
  var itemsList = document.getElementById("itemsList");
  itemsList.appendChild(listItem);
}