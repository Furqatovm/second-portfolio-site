
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

// next1.addEventListener("click", function(){
//     page1.style.display ="block";
//     next1.style.borderColor ="#fa5757";
//     next2.style.border ="none"
//     next3.style.border ="none"
//     next3.style.paddingBottom ="0";
//     page3.style.display ="none";
//     page2.style.display ="none"
//     // next3.style.display ="none"

// })

// next2.addEventListener("click", function(){
//     page2.style.display ="block";
//     page1.style.display ="none";
//     page3.style.display ="none";
//     next1.style.border ="none"
//     next1.style.paddingBottom ="0";
//     next2.style.borderColor ="#fa5757";
//     next3.style.border ="none"
// })
// next3.addEventListener("click", function(){
//     page3.style.display ="block";
//     page1.style.display ="none";
//     page2.style.display ="none";
//     next3.style.borderColor ="4px solid #fa5757";
//     next2.style.border ="none"
// })