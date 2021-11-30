
// user input form
const form =document.querySelector('form')
form.addEventListener('submit',addTask)

// task list
const taskList = document.querySelector('ul');
taskList.addEventListener("click", delTask)

// delTask
function delTask(event) {

    if(event.target.textContent === 'X') {

        if(confirm('Do you really want to delete this task?')){

            event.target.parentElement.remove()
        }
        console.log(event.target.parentElement)
    }

}

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
    // crete link
    const link = document.createElement('a')
    // add css style
    link.className = 'secondary-content'
    // add text
    link.appendChild(document.createTextNode('X'))
    // add href attribute
    link.setAttribute('href' , '#')
    // add link to li
    li.appendChild(link)
    //ADD LI TO TASK LIST
    taskList.appendChild(li)
    //clear form input value
    document.querySelector('#task').value = ''
    event.preventDefault()

}
