const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
red.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
});
green.addEventListener("click", function(){
    document.body.style.backgroundColor = "green";
});
blue.addEventListener("click", function(){
    document.body.style.backgroundColor = "blue";
});