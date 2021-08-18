
/*VARAIBLES*/
let p_profesional = document.getElementById('p_profesional');
let p_emprendedor = document.getElementById('p_emprendedor');
let p_empresa = document.getElementById('p_empresa');
let btn_action=document.getElementById('switch');


btn_action.addEventListener('click',function(){
  btn_action.classList.toggle('active');
  if(btn_action.classList.contains('active')){
    p_profesional.innerHTML="Gs. 440.000/mes";
    p_emprendedor.innerHTML="Gs. 550.000/mes";
    p_empresa.innerHTML="A convenir";
  }
  else{
    p_profesional.innerHTML="Gs. 400.000/anual";
    p_emprendedor.innerHTML="Gs. 450.000/anual";
    p_empresa.innerHTML="A convenir";
  }
})


addEventListener('DOMContentLoaded',() => {
  let btn_menu = document.getElementById('btn-menu');
  btn_menu.addEventListener('click',()=>{
    let nav_menu=document.getElementById('nav_menu');
    nav_menu.classList.toggle('show');
  })
})