const wood=document.getElementById("wood");
const nav_bar=document.getElementById("naV");
let kontrol=1;
wood.addEventListener("click",()=>{

    if(kontrol){
        nav_bar.classList.add("nav_bar_show")
        kontrol=0;
    }
    else{
        nav_bar.classList.remove("nav_bar_show")
        kontrol=1;
    }
    

})