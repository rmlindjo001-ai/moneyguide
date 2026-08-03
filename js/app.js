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
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if(backTop){

        backTop.style.display = window.scrollY > 400 ? "block" : "none";

    }

});

if(backTop){

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}
/*=========================
SHARE BUTTONS
==========================*/

const pageUrl = encodeURIComponent(window.location.href);

const pageTitle = encodeURIComponent(document.title);

const facebook = document.getElementById("shareFacebook");
const twitter = document.getElementById("shareTwitter");
const linkedin = document.getElementById("shareLinkedin");
const email = document.getElementById("shareEmail");

if(facebook){

facebook.href=`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;

}

if(twitter){

twitter.href=`https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;

}

if(linkedin){

linkedin.href=`https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;

}

if(email){

email.href=`mailto:?subject=${pageTitle}&body=${pageUrl}`;

}
/*=========================
NEWSLETTER
==========================*/

const newsletter = document.querySelector(".newsletter-form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you for subscribing to MoneyGuide!");

newsletter.reset();

});

}
