let logo = document.querySelector(".logo");
let dot = document.querySelector("#orbit");
let list = document.querySelectorAll(".list");
let card = Array.from(document.querySelectorAll(".serviceBox"));
let service = document.querySelector(".list1");
let body = document.querySelector("body");
let serviceSection = document.querySelector("#Service")

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

document.addEventListener("mousemove",function(dets){
    dot.style.left = `${dets.pageX-20}px`;
    dot.style.top = `${dets.pageY-20}px`;

});

body.addEventListener("mouseenter",function(){
    dot.style.scale = 1;
});

body.addEventListener("mouseleave",function(){
    dot.style.scale = 0;
});

window.addEventListener("load",function(){
    logo.style.transform = "rotate(0)";
    logo.style.scale = 1;
        
});

card.forEach(function(element){
    serviceSection.addEventListener("mousemove",function(e){
        const x = e.clientX;
        const y = e.clientY;
        
        const middleX = window.innerWidth / 2 ;
        const middleY = window.innerHeight / 2 ;
        
        const offsetX = ((x - middleX) / middleX) * 45;
        const offsetY = ((y - middleY) / middleY) * 45;
        
        element.style.transform = `rotateY(${offsetX}deg) rotateX(${offsetY}deg)`
    });

})



