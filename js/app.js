window.addEventListener("scroll", function(){

    const header = document.getElementById("header");

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }
    

});
window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("readingBar").style.width = progress + "%";

});
const themeButton=document.getElementById("themeToggle");

if(themeButton){

themeButton.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

}
