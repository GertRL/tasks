
// user input form
const form =document.querySelector('form')
form.addEventListener('submit',addTask)

// ADD TASK FUNCTION

function addTask(event) {
    // get task value from form input
    const task = document.querySelector('#task').value
    console.log(event.type)
    //get element from document object
    const taskList = document.querySelector('ul');
    //create element to DOM
    const li = document.createElement('li')
    // ADD CSS CLASS
    li.className = 'collection-item'
    // add text to element
    const text = document.createTextNode(task)
    li.appendChild(text)
    //ADD LI TO TASK LIST
    taskList.appendChild(li)
    //clear form input value
    document.querySelector('#task').value = ''
    event.preventDefault()

}
