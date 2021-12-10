// Variable
const form=document.querySelector('#task-form');
const todolist=document.querySelector('.collection');
const clear=document.querySelector('.clear-task');
const filter=document.querySelector('#filter');
const input=document.querySelector('#task');

///functioncops
//!pushes to local storage
const storelocal=(e)=>{
let local;
if(localStorage.getItem('list')==null)
{
local=[];
}
else{
local=JSON.parse(localStorage.getItem('list'));
}
local.push(e);
localStorage.setItem('list',JSON.stringify(local));
}





//!load from local Storage
const loadfromstorage=()=>{
let local;
if(localStorage.getItem('list')==null)
{
local=[];
}
else{
local=JSON.parse(localStorage.getItem('list'));
}
for(let i=0;i<local.length;i++){
const li=document.createElement('li');
li.className='collection-item';
li.id='new-item';
li.appendChild(document.createTextNode(local[i]));
//create a link for fa fa element
const link=document.createElement('a');
link.className='delete-item secondary-content';
//add icon 
link.innerHTML=`<i class='fa fa-remove'></i>`;
li.appendChild(link);
//append li to ul
todolist.appendChild(li);
}
}



//!ADDTASK
const addtask=(e)=>{
if(input.value=='')
{
alert('empty task');
return;
}
//create a list element
const li=document.createElement('li');
li.className='collection-item';
li.id='new-item';
li.appendChild(document.createTextNode(input.value));
//create a link for fa fa element
const link=document.createElement('a');
link.className='delete-item secondary-content';
//add icon 
link.innerHTML=`<i class='fa fa-remove'></i>`;
li.appendChild(link);
//append li to ul
todolist.appendChild(li);
storelocal(input.value);
input.value='';
e.preventDefault();
};



//!deleteTask using the cross fa fa element
const deletetask=(e)=>{
if(e.target.parentElement.classList.contains('delete-item')){

e.target.parentElement.parentElement.remove();
const templist=JSON.parse(localStorage.getItem('list'));
console.log(templist);
let updatelist=[];
templist.forEach((text)=>{
    if(text===e.target.parentElement.parentElement.innerText){}
    else{updatelist.push(text);}
})
localStorage.setItem('list',JSON.stringify(updatelist));
console.log();



}
}
//!delete all tasks using clear list button
const clearall=(e)=>{
while(todolist.firstChild){
    todolist.removeChild(todolist.firstChild);
}
const clean=[];
localStorage.setItem('list',JSON.stringify(clean));
}




//!Filter through list
const filterto=(e)=>{
const t=e.target.value.toLowerCase();
document.querySelectorAll('.collection-item').forEach((ti)=>{
const it=ti.firstChild.textContent;
if(it.toLowerCase().indexOf(t)!=-1){
ti.style.display='block'
}
else{
ti.style.display='none';
}
})
};


///!load event listnerss
const loadEventListers=()=>{
form.addEventListener('submit',addtask);
document.body.addEventListener('click',deletetask);
clear.addEventListener('click',clearall);
filter.addEventListener('keyup',filterto)
addEventListener('load',loadfromstorage);
}
loadEventListers();


