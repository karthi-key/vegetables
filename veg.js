let btns = document.querySelectorAll(".btn-box");
  for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click",cot);
  }      
  let count=0;
  function cot(){
    count+=1
    document.getElementById('spn').innerHTML=count;
  }
document.getElementById("button").addEventListener('click',function(){
  document.querySelector('.pop').style.display="block"
});
document.querySelector(".close").addEventListener('click',function(){
  document.querySelector('.pop').style.display="none"
});
document.getElementById("will").addEventListener('click',function(){
  document.querySelector('.view').style.display="block"
});
document.querySelector(".finish").addEventListener('click',function(){
  document.querySelector('.view').style.display="none"
});

