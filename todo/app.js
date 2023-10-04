const input=document.getElementById('input');
const listcontainer=document.getElementById('list-container')
const add=document.getElementById('add')
add.addEventListener('click',()=>{
    if(input.value===''){
        alert('you must write something');
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=input.value;
        listcontainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    input.value='';
})

listcontainer.addEventListener('click',(e)=>{
    if(e.target.tagName==="LI"){
       e.target.classList.toggle('ckecked');
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
    }
},false)
