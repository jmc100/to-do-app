function onReady() {
  //a list of to-do
  let toDos = [];
  //a number to keep track of the id of each item on the list
  let toDoId = 1;

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // get the text
    let title = newToDoText.value;

    let toDoObj = {
      name: title,
      id: toDoId
    }

    toDoId++;

    toDos.push(toDoObj);

    // create a new li
    let newLi = document.createElement('li');
    // create a new input
    let checkbox = document.createElement('input');
    // set the input's type to checkbox
    checkbox.type = "checkbox";
    //create a delete button
    let deleteButton = document.createElement('button');
    //give the delete button a name -- "Delete"
    deleteButton.textContent = "Delete";

    //create the delete function
    deleteButton.addEventListener('click', function(event){
      // this.parentElement represents the button's <li> parent
      toDoList.removeChild(this.parentElement);
    })

    // set the title
    newLi.textContent = title;
    // attach the checkbox to the li
    newLi.appendChild(checkbox);
    //attach the delete button to the li
    newLi.appendChild(deleteButton);
    // attach the li to the ul
    toDoList.appendChild(newLi);
    //empty the input
    newToDoText.value = "";
  });
}

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
