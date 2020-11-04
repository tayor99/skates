'use strict'

const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn_burger");
const size = document.querySelector("#size");
const rating = document.querySelector(".ratings");


let showMenu = false;

//Toggle NavBar
function toggleMenu(){
    if(!showMenu) {
        hamburger.classList.add("open");
        nav.classList.add("open");

        showMenu =true;
    } else {
        hamburger.classList.remove("open");
        nav.classList.remove("open");

        showMenu = false;
    }
}

menuBtn.addEventListener("click", toggleMenu);


let changeBG = false;

function changeColor(color){
    document.body.style.background = color;
    if (!changeBG){
        if (color !== '#0392BF'){
            document.body.style.color = "rgba(0,0,0,0.7)";
            size.classList.add("dark");
        } changeBG = true;
    } else if(color === '#0392BF'){
        document.body.style.color = "#f7e2e2";
        size.classList.remove("dark");
        changeBG = false;
    }
}