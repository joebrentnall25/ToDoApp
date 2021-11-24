let tasks = [];

const inputText = document.getElementById('form__input');
const addTaskBtn = document.getElementById('form__btn');
const tasksContainer = document.getElementById('tasks__container');
const tasksCounter = document.getElementById('tasks__counter');
let checkboxes = [];
const navReset = document.getElementById('nav__reset');

addTaskBtn.addEventListener('click', () => {
    const task = { 
        name: inputText.value, 
        isChecked: false
    };
    tasks.push(task);
    addToScreen(task);
})

const addToScreen = (task) => {
    let html = '';
    html += `
        <div class="label-font tasks__task">
            <div class="tasks__check">
                <input type="checkbox" name="select" class="tasks__select">
            </div>
            <div class="tasks__name">
                ${task.name}
            </div>
            <i class="fas fa-pen tasks__edit"></i>
        </div>`;      
    refreshCheckboxesVariable();   
    tasksContainer.innerHTML+=html;
    updateTaskCounter();
}

const updateTaskCounter = () => {
    if (tasks.length != 0){
        let html = `<p class="para-font">Tasks to Complete: ${tasks.length}</p>`
        tasksCounter.innerHTML = html;
    } else {
        let html = "<p class='para-font'>All tasks have been completed. Great Job!</p>"
        tasksCounter.innerHTML = html;
    }
}

const refreshCheckboxesVariable = () => {
    checkboxes = document.getElementsByClassName('tasks__select');
    //console.log(checkboxes.length)
    for (let i = 0; i<checkboxes.length; i++) {
        console.log(checkboxes[i]);
        checkboxes[i].addEventListener('change', () => {
            console.log('checkbox changed');
        })
    }
}

const clearScreen = () => {
    tasksContainer.innerHTML='';
}

navReset.addEventListener('click', () => {
    tasks = [];
    updateTaskCounter();
    refreshCheckboxesVariable();
    clearScreen();
})

window.onload = updateTaskCounter;