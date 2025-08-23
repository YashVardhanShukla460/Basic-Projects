let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body');
buttons.forEach((e)=>{
    e.addEventListener('click',(e)=> {
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
        }
    })
})