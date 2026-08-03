window.addEventListener("scroll", function(){

    const header = document.getElementById("header");

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});
