let logo = document.querySelector(".logo");
let dot = document.querySelector("#orbit");
// let secondText = Array.from(document.querySelectorAll(".skillText"))
// let fristText = Array.from(document.querySelectorAll(".nameText"))
let list = document.querySelectorAll(".list");


window.addEventListener("load",function(){
    logo.style.transform = "rotate(0)";
    logo.style.scale = 1;

    // fristText.forEach(
    //     function(element){
    //         element.style.transform = "translateY(0)";
    //         element.style.scale = 1;
    //     });

    // secondText.forEach(
    //     function(element){
    //         element.style.transform = "translateY(0)";
    //         element.style.scale = 1;
    //     });
        
    });

document.addEventListener("mouseenter",function(){
    dot.style.scale = 1;
 });
document.addEventListener("mouseleave",function(){
    dot.style.scale = 0;
 });
document.addEventListener("mousemove",function(dets){
    dot.style.left = `${dets.clientX-20}px`;
    dot.style.top = `${dets.clientY-20}px`;
 });

    
list.forEach(function(element){
        
    element.addEventListener("mouseenter",function(){
        dot.style.height = "80px";
        dot.style.width =  "80px";

    })
    element.addEventListener("mouseleave",function(){
        dot.style.height = "40px";
        dot.style.width =  "40px";
    })
        
    });
