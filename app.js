function addToDoItem() {
  //create list item using input field value
  var listItem = document.createElement("li");
  
  //get text from input field
  var toDoValue = document.getElementById("to-do-input").value
  var text = document.createTextNode(`${toDoValue}`);
  
  var span = document.createElement("span");
  span.appendChild(text);

  //create checkbox for list item
  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox", "id", "test-input", "onClick", "strikeThrough()");
  checkbox.setAttribute("id", "test-input");
  checkbox.setAttribute("onClick", "strikeThrough()");
  
  //add list item to html
  var itemsList = document.getElementById("itemsList");
  itemsList.appendChild(listItem);
  listItem.appendChild(checkbox);
  listItem.appendChild(span);  
  
  //clear input field
  document.getElementById("to-do-input").value=""

}
//function for striking out text if checkbox is clicked
function strikeThrough() {
  var checked = document.querySelector("input[type='checkbox']:checked");
  var unchecked = document.querySelector("input[type='checkbox']");
  if (checked) {
    checked.addEventListener("change", function(e) {
      var span = e.target.nextSibling;
      span.style.textDecoration="line-through"
    })
    console.log("a")
  } else {
    unchecked.addEventListener("change", function(e) {
      var span = e.target.nextSibling;
      span.style.textDecoration=""
    })
    console.log("b")
  }
}