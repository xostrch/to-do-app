

function addTask(){
    let nameTask = document.getElementById('input-task').value;
    let newTask = '<div class="task"><div class="task-name">'+nameTask+'</div><div class="buttons"><button class="button"><img src="done.png" class="img-icons"></button><button class="button"><img src="edit.png" class="img-icons"></button><button class="button"><img src="delete.png" class="img-icons"></button></div></div>';
    document.getElementById('task-adding').innerHTML+=newTask;  

};