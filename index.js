const password = "dpt20092005";
var submit = document.getElementById("floatingPassword");
submit.addEventListener("keyup",(event) =>{
    if(event.key === "Enter"){
        console.log(event.target.value);
        if(event.target.value == password)
        {
            document.getElementById("login-area").style.display = "none";
            document.getElementById("content").style.backgroundColor = "transparent";
            document.getElementById("content").style.border = "none";
            document.getElementById("letter").style.zIndex = "1";
        }
        else {
            alert("Sai mat rui :<");
        }
    }
});