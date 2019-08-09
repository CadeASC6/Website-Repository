let selfieRef = document.getElementById('selfie')
let personal;
selfieRef.onmouseover = function (){
    selfieRef.style.opacity = '.2';
}
selfieRef.onmouseout = function(){
    selfieRef.style.opacity = '1'
}
selfieRef.onclick = function (){
    window.location.href = 'https://www.minecraftskins.com/skin/12351347/black-hypebeast/';
}