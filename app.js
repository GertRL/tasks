
// user input form
const form =document.querySelector('form')
form.addEventListener('submit',addTask)

// task list
const taskList = document.querySelector('ul');
taskList.addEventListener("click", delTask)

// delete btn-link

const deleteBtn = document.querySelector('#delete-tasks')
deleteBtn.addEventListener('click',delTasks)

function delTasks() {
   while(taskList.firstElementChild) {
       taskList.removeChild(taskList.firstChild)
   }
    removeAllStorage()
}


// page reload

document.addEventListener('DOMContentLoaded', getTasks)
function getTasks() {
    let tasks
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    // for each task in tasks - create li and add to taskList
    tasks.forEach(function (taskFromLS){
        const li = document.createElement('li')
        // ADD CSS CLASS
        li.className = 'collection-item'
        // add text to element
        const text = document.createTextNode(taskFromLS)
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
    })
}

// remove all items from local storage
function removeAllStorage() {
    localStorage.removeItem('tasks')
}

// delTask
function delTask(event) {

    if(event.target.textContent === 'X') {

        if(confirm('Do you really want to delete this task?')){

            event.target.parentElement.remove()
            let task = (event.target.parentElement.textContent.slice(0, -1))
            removeStorage(task)
        }
    }
}

// removeStorage
function removeStorage(task) {
    let tasks
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function (taskFromLS, taskIndex){
        if(taskFromLS === task) {
            tasks.splice(taskIndex, 1)
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
// ADD TASK FUNCTION

function addTask(event) {
    // get task value from form input
    const task = document.querySelector('#task').value
    console.log(task)
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
    // save task to local storage
    taskStorage(task)
    //clear form input value
    document.querySelector('#task').value = ''
    event.preventDefault()

}


// local storage funktsioon
function  taskStorage(task){

    let tasks
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    }
    else {
       tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))

}

