function mainshow1(){
    document.getElementById("faq").style.display="inline";
    document.getElementById("home").style.display="none";
    document.getElementById("test").style.display="none";
    document.getElementById("account").style.display="none";
}

function mainshow2(){
    document.getElementById("test").style.display="inline";
    document.getElementById("home").style.display="none";
    document.getElementById("faq").style.display="none";
    document.getElementById("account").style.display="none";
}

function mainshow3(){
    document.getElementById("home").style.display="inline";
    document.getElementById("faq").style.display="none";
    document.getElementById("test").style.display="none";
    document.getElementById("account").style.display="none";
}

function mainshow4(){
    document.getElementById("account").style.display="inline";
    document.getElementById("home").style.display="none";
    document.getElementById("test").style.display="none";
    document.getElementById("faq").style.display="none";
}

var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
    URL.revokeObjectURL(output.src) // free memory
    }
};