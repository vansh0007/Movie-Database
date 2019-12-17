const mod = document.getElementById("add-modal")
//const f=mod.getElementsByClassName("modal__content");
const header= document.querySelector('header');

const backdrop = document.querySelector('#backdrop');
 
const bt =header.querySelector('button');

bt.addEventListener('click',()=>{
    backdrop.classList.toggle('visible');    
mod.classList.toggle('visible'); 
})
 
 