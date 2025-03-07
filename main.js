
let next1 =document.getElementById("next-1");
let next2 =document.getElementById("next-2");
let next3 =document.getElementById("next-3");


let page1 =document.getElementById("wrapper-first-next");
let page2 =document.getElementById("wrapper-second-next");
let page3 =document.getElementById("wrapper-third-next");



next1.addEventListener("click", function(){
    page1.style.display ="block";
    page2.style.display ="none"

    page3.style.display ="none";
    page1.style.display ="flex";
    page1.style.justifyContent ="space-between";
    page1.style.alignItems ="center";
    page1.style.gap ="100px"
})

next2.addEventListener("click", function(){
    page2.style.display ="block";
    page1.style.display ="none";
    page3.style.display ="none";
})


next3.addEventListener("click", function(){
    page3.style.display ="block";
    page1.style.display ="none";
    page2.style.display ="none"
})

document.querySelectorAll(".faq").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});


// let menuu =document.getElementById("menu-wrap");

// let closee =document.getElementById("closee");

// let nav =document.getElementById("nav")

// let header =document.getElementById("head");


// let links =document.getElementById("linkchalar");
// menuu.addEventListener("click", function(){
//     nav.style.display ="block";
//     nav.style.width ="100vw";
//     nav.style.height ="100vh";
//     nav.style.backgroundColor ="#252b46";
//     nav.style.position ="fixed";
//     header.style.display ="flex";
//     nav.style.left ="0";
//     nav.style.top ="0"
//     header.style.alignItems ="center";
//     header.style.justifyContent ="center";
//     links.style.color ="white";
//     header.style.opacity ="90%";
//     nav.style.display ="flex";
//     nav.style.flexDirection ="column";
//     // nav.style.gap ="20px";
//     nav.style.justifyContent ="flex-start";
//     nav.style.gap ="30px";
//     nav.style.paddingTop ="30%";
//     closee.style.display ="block";
//     closee.style.position ="absolute";
//     closee.style.bottom ="80%";
//     closee.style.left ="80%";
//     closee.style.fontSize ="28px";
// })


// closee.addEventListener("click", function(){
//     closee.style.display ="none";
//     nav.style.display ="none";

// })




