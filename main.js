    let taskIdCounter = 0;

    function closeError(){
        document.getElementById('error-box').style.display="none";
    }


    function addTask(){
        let nameTask = document.getElementById('input-task').value;
        let errorBox = document.getElementById("error-box");

        
        if(nameTask===""){
            errorBox.style.display="block";
        }else{
            taskIdCounter++;
            let taskId = `task-${taskIdCounter}`;
            let taskNameId = `task-name-${taskIdCounter}`;
            let newTask =
                `
                <div class="task" id="${taskId}">
                    <div class="task-name" id="${taskNameId}">
                        `+nameTask+`
                    </div>
                    <div class="buttons">
                        <button class="button" onclick="doneTask('${taskNameId}')"><img src="done.png" class="img-icons"></button>
                        <button class="button"><img src="edit.png" class="img-icons"></button>
                        <button class="button" onclick="deleteTask('${taskId}')"><img src="delete.png" class="img-icons"></button>
                    </div>
                </div>`;

            document.getElementById('task-adding').innerHTML+=newTask;
            document.getElementById('input-task').value = '';
            
        }
    };

    function deleteTask(taskId){
        let taskElement = document.getElementById(taskId);
        taskElement.remove();
    }

    function doneTask(taskNameId){
        let taskColor = document.getElementById(taskNameId);
        taskColor.style.color="red";
    }
