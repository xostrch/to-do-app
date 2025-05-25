    let taskIdCounter = 0;
    let currentlyEditingTaskId = null;

    function closeError(){
        document.getElementById('error-box').style.display="none";
    }

    function closeEdit(){
        document.getElementById('edit-box').style.display='none'
    }

    function editShow(taskNameId){
        currentlyEditingTaskId = taskNameId;
        document.getElementById('edit-box').style.display = 'block';
        let currentText = document.getElementById(taskNameId).innerText.trim();
        document.getElementById('input-edit').value = currentText;    
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
            let taskEditId = `task-edit-${taskIdCounter}`
            let newTask =
                `
                <div class="task" id="${taskId}">
                    <div class="task-name" id="${taskNameId}">
                        `+nameTask+`
                    </div>
                    <div class="buttons">
                        <button class="button" onclick="doneTask('${taskNameId}')"><img src="done.png" class="img-icons"></button>
                        <button class="button" onclick="editShow('${taskNameId}')"><img src="edit.png" class="img-icons"></button>
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
        let taskLine = document.getElementById(taskNameId);
        if(taskLine.style.textDecoration==="line-through")
        {
            taskLine.style.textDecoration="none"
        }
        else
        {
            taskLine.style.textDecoration="line-through"
        }
    }
    

    function editTask() {
    let taskNewName = document.getElementById("input-edit").value;
    if (currentlyEditingTaskId) {
        document.getElementById(currentlyEditingTaskId).innerText = taskNewName;
        currentlyEditingTaskId = null;
        document.getElementById('edit-box').style.display = 'none';
    }
}

