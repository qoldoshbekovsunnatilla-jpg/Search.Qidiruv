
// let li =document.querySelectorAll('li');


// let serach =document.querySelector('.search');
// serach.addEventListener('input', holat)
// function holat (){
//    let s =serach.value.toLowerCase();

//    for(let l of li){
//     let royxat =l.textContent.toLowerCase();
//     if(royxat.includes(s)){
//      l.style.display = 'list-item'
//      }else{
//         l.style.display = 'none'
//      }
//      }
// }


// let bt =document.querySelector('.bt');
// bt.addEventListener('click',salom) 
// function salom(){
//     document.body.style.backgroundColor ='black';
//     document.body.style.color ='white';
// }

// let bt2 =document.querySelector('.bt2');
// bt2.addEventListener('click',salom2) 
// function salom2(){
//     document.body.style.backgroundColor ='white';
//     document.body.classList.remove("dark");
// }





let li = document.querySelectorAll('li');
let serach = document.querySelector('.search');

serach.addEventListener('input', holat)

function holat (){
   let s = serach.value.toLowerCase();
   for(let l of li){
       let royxat = l.textContent.toLowerCase();
       l.style.display = royxat.includes(s) ? 'list-item' : 'none';
   }
}

// DARK MODE
let bt = document.querySelector('.bt');
bt.addEventListener('click', () => {
    document.body.classList.add("dark");
});

// LIGHT MODE
let bt2 = document.querySelector('.bt2');
bt2.addEventListener('click', () => {
    document.body.classList.remove("dark");
});

