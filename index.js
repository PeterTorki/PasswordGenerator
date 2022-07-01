const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function GetRandom(){
    return characters[Math.floor(Math.random() * characters.length)];
}

function Clicked(){
    let szPass = document.getElementById("passSize").value
    let Pass1 = document.getElementById("Le")
    let Pass2 = document.getElementById("Ri")
    let s1 = "", s2 = "";
    if(szPass == "")
        alert("Please enter a password size")
    
    for(let i = 0 ; i < szPass ; i++){
        s1 += GetRandom()
        s2 += GetRandom()
    }
    Pass1.value = (s1);
    Pass2.value = (s2);
    Pass1.disabled = false;
    Pass2.disabled = false;
}
function copyClip1(){
    let Pass1 = document.getElementById("Le")
    Pass1.disabled = false;
    Pass1.select()
    document.execCommand("copy");

    //Function to remove selection
    window.getSelection().removeAllRanges();
    alert("Password copied to clipboard")
    Pass1.disabled = true;

}
function copyClip2(){
    let Pass2 = document.getElementById("Ri")
    Pass2.disabled = false;
    Pass2.select()
    document.execCommand("copy");
    //Function to remove selection
    window.getSelection().removeAllRanges();
    alert("Password copied to clipboard")
    Pass2.disabled = true;
}
