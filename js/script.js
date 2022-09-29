
const cover=document.querySelector(".cover");

 function show(){
       cover.style.display="block";
       
 } 

 function remove(){
    cover.style.display="none";
} 




    var icon = document.getElementById("icon");
    icon.onclick = function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            icon.src = "assets/sun.png";
        } else {
            icon.src = "assets/moon.png";
        }
    }
