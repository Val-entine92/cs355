'use strict'

const $ = document.querySelector.bind(document);


function createTodo(){
    var newdiv = document.createElement('div'); 
    $('.todos').appendChild( newdiv );          
    newdiv.innerHTML = $('.newtodo').value;
    newdiv.className="new";  
    newdiv.setAttribute("contenteditable", "true");   
         
    $('.newtodo').value = '';
    
    
    newdiv.addEventListener('click', ()=>{
        newdiv.classList.add('completed');          
    });
}


function removeTodo(){
    var div = document.querySelector('.new');
    if (document.querySelector(".new")){
        $('.todos').removeChild(div);
    }
    else{
        alert("There are no items to remove . Please add one ")
    }
   
}
 
// if an element exists?