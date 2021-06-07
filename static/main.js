
function addTask() {
      let form = document.getElementById("task-input");
      let task_value = form.elements[0].value;
      console.log(task_value);
      tasklist = document.querySelector(".tasks-list");
      return task_value;
      /*TODO: need to access the values that have been submitted, then send them to this function, where they are made into the task.  */
      }
const siblings = (elem) => {
    // create an empty array
    let siblings = [];

    // if no parent, return empty list
    if (!elem.parentNode) {
        return siblings;
    }

    // first child of the parent node
    let sibling = elem.parentNode.firstElementChild;

    // loop through next siblings until `null`
    do {
        // push sibling to array
        if (sibling != elem) {
            siblings.push(sibling);
        }
    } while (sibling = sibling.nextElementSibling);
		
    return siblings;
};

function crossOut($this){
  task = siblings($this)[0];
  if(task.classList.contains('crossout')){
    task.classList.remove('crossout');
  }
  else {
    task.classList.add('crossout');
  }
}

