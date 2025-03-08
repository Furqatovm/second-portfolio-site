
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









let menuu =document.getElementById("menu-wrap");

let closee =document.getElementById("yopish");

let ochil =document.getElementById("menubarr");

let header =document.getElementById("head");
let footer =document.getElementById("footerr");


let button =document.createElement("button");
button.className ="hero-btn"

let links =document.getElementsByClassName("linklarr");
for (let link of links){
    link.style.fontSize ="25px";
    link.style.letterSpacing ="2px";
    link.style.borderBottom ="2px solid lightgray";
    link.style.padding ="20px 10px"
}
ochil.style.display ="none"

let closing=document.getElementById("closing");

menuu.addEventListener("click", function(){
    menuu.style.display ="none"
    ochil.style.display ="block";
    ochil.style.position ="fixed";
    ochil.style.backgroundColor ="#252b46";
    ochil.style.width ="100vw";
    ochil.style.height ="100vh";
    ochil.style.opacity ="90%";
    ochil.style.display ="flex";
    header.style.display ="flex";
    header.style.alignItems ="center";
    header.style.justifyContent ="center"
    ochil.style.alignItems ="center";
    ochil.style.justifyContent ="center";
    ochil.style.top ="000.1%";
    ochil.style.right ="0.1%";
    closee.style.display ="block";
    closing.style.display ="flex";
    closing.style.maxWidth ="500px";
    closing.style.marginLeft ="auto";
    closing.style.marginRight ="auto";
    closing.style.gap ="80px";
    closee.style.fontSize ="22px";
    closee.style.fontWeight ="bold";
    closee.style.color ="white";
    footer.style.marginTop ="20%";
    ochil.style.zIndex ="+2";

})

let closeWrap =document.getElementById("close-wrap");

closeWrap.addEventListener("click", function(){
    ochil.style.display ="none";
    closee.style.display ="none";
    menuu.style.display ="block";
})


// let linkFirst =document.getElementById("linkchalar");
// let link1 =document.getElementById("linkchalar1");
// let link2 =document.getElementById("linkchalar2");

// let btn =document.getElementById("loginn")

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
//     link1.style.color ="white";
//     linkFirst.style.color ="white";
//     link2.style.color ="white";
//     linkFirst.style.borderBottom ="2px solid #9194a1";
//     linkFirst.style.paddingBottom ="10px";
//     link1.style.borderBottom ="2px solid #9194a1";
//     link1.style.paddingBottom ="10px";
//     link2.style.borderBottom ="2px solid #9194a1";
//     link2.style.paddingBottom ="10px";
//     linkFirst.style.fontSize ="30px";
//     link1.style.fontSize ="30px";
//     link2.style.fontSize ="30px";
//     btn.style.fontSize ="30px";

// })


// closee.addEventListener("click", function(){
//     closee.style.display ="none";
//     nav.style.display ="none";

// })




