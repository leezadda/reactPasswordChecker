export default my;


function my(){

    //check if password has a special char, uppercase, number and is long enough
    var namee = document.getElementById("namee").value;
    //var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    let len = true;
    let special = false;
    let upper = false;
    let num = false;
    //let clicked = 0;

    for(let i = 0; i < password.length; i++){
    //check for uppercase letter
        if(password[i] >= 'A' && password[i] <= 'Z')
            {upper = true;}

    //check for integer
        if (password[i] >= '0' && password[i] <= '9')
            {num = true;}

    //check for special character
        if (password[i] >= '!' && password[i] <= '/')
            {special = true;}
    }
        if(password.length < 10)
            {console.log("Too short");
            document.getElementById("example").innerHTML = "Try again, password is not long enough.";
            len = false;}
        if(num === false)
            {console.log("There is no number");
            document.getElementById("example").innerHTML += " Add a number.";}
        if(upper === false)
            {console.log("There is no upper case letter");
            document.getElementById("example").innerHTML += " Add an uppercase letter.";}
        if(special === false)
            {console.log("There is no special character");
            document.getElementById("example").innerHTML += " Add a special character.";}
        
        if(len === true && num === true && special === true && upper === true)
            {
            document.getElementById("example").innerHTML = "Good Password!";
            document.getElementById("example").style.color = "black";
            }
        else{

        }
}