const menu_btn=document.getElementById("menu_img")
let control=true

menu_btn.addEventListener("click",()=>{
    const ul=document.querySelector("#navUl")
    const nav_btn=document.querySelector("#navBtn")

    if(control)
    {
        ul.classList.add("nav-ul-goster")
        nav_btn.classList.add("nav-btn-goster")
        menu_btn.src="./assests/icon/icons8-close-window-24.png"
        control=false;
    }
    else
    {
        ul.classList.remove("nav-ul-goster")
        nav_btn.classList.remove("nav-btn-goster")
        menu_btn.src="./assests/icon/icons8-menu-64.png"
        control=true;
    }


})