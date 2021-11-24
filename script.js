const tasks = [];

const inputText = document.getElementById('form__input');
const addTaskBtn = document.getElementById('form__btn');
const tasksContainer = document.getElementById('tasks__container');
const tasksCounter = document.getElementById('tasks__counter');

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
                <input type="checkbox" name="select" class="form__selct">
            </div>
            <div class="tasks__name">
                ${task.name}
            </div>
            <i class="fas fa-pen tasks__edit"></i>
        </div>`;          
    tasksContainer.innerHTML+=html;
    updateTaskCounter();
}

const updateTaskCounter = () => {
    if (tasks.length != 0){
        let html = `<p class="para-font">Tasks to Complete: ${tasks.length}</p>`
        console.log(html)
        tasksCounter.innerHTML = html;
    } else {
        let html = "<p class='para-font'>All tasks have been completed. Great Job!</p>"
        tasksCounter.innerHTML = html;
    }
}

window.onload = updateTaskCounter;