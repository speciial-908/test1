let yesbtn=document.getElementById('yesbtn');
let nobtn=document.getElementById('nobtn');
let doyou=document.getElementById('doyou');
let pernt=document.getElementById('pernt');

let noRec=nobtn.getBoundingClientRect();
let conRec=pernt.getBoundingClientRect();

yesbtn.addEventListener('click',()=>{
    doyou.innerHTML=' 😁وانا بعد '
})
nobtn.addEventListener('mousemove',()=>{
    let i=Math.floor(Math.random()*(conRec.width-noRec.width))+1
    let s=Math.floor(Math.random()*(conRec.height-noRec.height))+1
    nobtn.style.left=i+'px';
    nobtn.style.top=s+'px';
})