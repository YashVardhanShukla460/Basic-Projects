let input = document.getElementById('task');
let addbtn = document.getElementById('addtask');
let task = document.getElementById('tasklist');

addbtn.addEventListener('click', function(){
    if(input.value === "") return;
    let li = document.createElement('li')
    
    let span = document.createElement('span');
    span.innerText = input.value;
    li.appendChild(span);

    let completed = document.createElement('button');
    completed.classList.add('complete-btn');
    completed.addEventListener('click',()=>{
        completed.textContent = "✅";
    })
    li.appendChild(completed);



    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click',()=>{
        li.remove();
    })
    li.appendChild(deleteBtn);

    task.appendChild(li);
    input.value = "";
})
