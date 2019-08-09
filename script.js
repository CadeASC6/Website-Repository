let bodyRef = document.querySelector('body');
let div2Ref = document.getElementById('div2');
let div1Ref = document.getElementById('div1');
let div3Ref = document.getElementById('div3');
let submitButton = document.getElementById('submit');
let Trueusername = document.getElementById('username_textbox');
let Truepassword = document.getElementById('password_textbox');
let correctUsername = 'cade';
let correctPassword ='mcm';
div2Ref.style.display = 'none';
div3Ref.style.display = 'none';
submitButton.onclick = function(){
    event.preventDefault();
    div1Ref.style.display = 'none';
    let username = Trueusername.value
    let password = Truepassword.value
    if (username == correctUsername && password == correctPassword) {
        div3Ref.style.display = 'block';
        bodyRef.style.backgroundColor = '#7FFF00'
        
    }
    else {
        div2Ref.style.display = 'block';
        bodyRef.style.backgroundColor =  '#AA001E';
        console.log(username)
        console.log(correctUsername)
    }
}
