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
  // checkbox.setAttribute("onClick", "strikeThrough()");
  checkbox.addEventListener("change", function(e) {
      var span = e.target.nextElementSibling;
      if (e.target.checked) {
        span.style.textDecoration = "line-through";
      } else {
        span.style.textDecoration = "";
      }
    })
  
  //add list item to html
  var itemsList = document.getElementById("itemsList");
  itemsList.appendChild(listItem);
  listItem.appendChild(checkbox);
  listItem.appendChild(span);  
  
  //clear input field
  document.getElementById("to-do-input").value=""

}
//function for striking out text if checkbox is clicked
// function strikeThrough(e) {
  
//   // Add event listeners to all checkboxes when the page loads
//   var checkboxes = document.querySelectorAll("input[type='checkbox']");
//   checkboxes.forEach(function(checkbox) {
//     checkbox.addEventListener("change", function(e) {
//       var span = e.target.nextElementSibling;
//       if (e.target.checked) {
//         span.style.textDecoration = "line-through";
//       } else {
//         span.style.textDecoration = "";
//       }
//     });
//   });

  
  
  // var span = e.target.nextElementSibling;
  //   if (e.target.checked) {
  //     span.style.textDecoration = "line-through";
  //   } else {
  //     span.style.textDecoration = "";
  //   }

  // var checked = document.querySelector("input[type='checkbox']:checked");
  // var unchecked = document.querySelector("input[type='checkbox']");
  // if (checked) {
  //   checked.addEventListener("change", function(e) {
  //     var span = e.target.nextElementSibling;
  //     span.style.textDecoration="line-through"
  //   })
  //   console.log("a")
  // } else if(unchecked) {
  //   unchecked.addEventListener("change", function(e) {
  //     var span = e.target.nextElementSibling;
  //     console.log(span)
  //     span.style.textDecoration=""
  //   })
  //   console.log("b")
  // }
