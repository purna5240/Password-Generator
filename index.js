const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let Pass1=document.getElementById("pass1")
let Pass2=document.getElementById("pass2")
let password1=""
let password2=""
function generatePassword()
{ 
    for(let k=0;k<16;k++)
    {
        let i=Math.floor(Math.random()*characters.length)
        let j=Math.floor(Math.random()*characters.length)
        password1+=characters[i];
        password2+=characters[j];
    }
    Pass1.value=password1
    Pass2.value=password2
    password1=""
    password2=""
}