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
//======================
// SEARCH ARTICLES
//======================

const articles = [

{
title:"How to Save Money Every Month",
url:"how-to-save-money.html",
category:"Saving"
},

{
title:"Personal Loan vs Credit Card",
url:"personal-loan-vs-credit-card.html",
category:"Loans"
},

{
title:"Mortgage Guide",
url:"mortgage-guide.html",
category:"Loans"
},

{
title:"How Auto Loans Work",
url:"how-auto-loans-work.html",
category:"Loans"
},

{
title:"Investing for Beginners",
url:"investing-for-beginners.html",
category:"Investing"
},

{
title:"What is an ETF",
url:"what-is-an-etf.html",
category:"Investing"
},

{
title:"How Credit Cards Work",
url:"how-credit-cards-work.html",
category:"Credit Cards"
},

{
title:"Improve Credit Score",
url:"improve-credit-score.html",
category:"Credit Cards"
},

{
title:"50/30/20 Budget Rule",
url:"50-30-20-budget-rule.html",
category:"Budgeting"
},

{
title:"How to Build an Emergency Fund",
url:"how-to-build-an-emergency-fund.html",
category:"Saving"
},

{
title:"How to Choose the Right Bank Account",
url:"how-to-choose-the-right-bank-account.html",
category:"Banking"
},

{
title:"Online Banking Safety Tips",
url:"online-banking-safety-tips.html",
category:"Banking"
},

{
title:"Checking vs Savings Accounts",
url:"checking-vs-savings-accounts.html",
category:"Banking"
},

{
title:"How to Avoid Bank Fees",
url:"how-to-avoid-bank-fees.html",
category:"Banking"
},

{
title:"How to Create Your First Budget",
url:"how-to-create-your-first-budget.html",
category:"Budgeting"
},

{
title:"Common Budgeting Mistakes",
url:"common-budgeting-mistakes.html",
category:"Budgeting"
},

{
title:"Budgeting Tips for Families",
url:"budgeting-tips-for-families.html",
category:"Budgeting"
}

];

const input=document.getElementById("searchInput");
const btn=document.getElementById("searchBtn");
const results=document.getElementById("searchResults");

if(input){

function searchArticle(){

const keyword=input.value.toLowerCase().trim();

results.innerHTML="";

if(keyword===""){
results.style.display="none";
return;
}

const found=articles.filter(article=>

article.title.toLowerCase().includes(keyword) ||

article.category.toLowerCase().includes(keyword)

);

results.style.display="block";

if(found.length===0){

results.innerHTML=`

<div class="no-result">

No articles found.

</div>

`;

return;

}

found.forEach(article=>{

results.innerHTML+=`

<div class="search-item">

<h3>${article.title}</h3>

<p>${article.category}</p>

<a href="${article.url}">

Read Article →

</a>

</div>

`;

});

}

btn.addEventListener("click",searchArticle);

input.addEventListener("keyup",searchArticle);

}

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function (e) {
    e.stopPropagation();

    nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
        menuToggle.textContent = '✕';
    } else {
        menuToggle.textContent = '☰';
    }
});

// Klik di luar menu = tutup menu
document.addEventListener('click', function (e) {

    if (
        nav.classList.contains('active') &&
        !nav.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        nav.classList.remove('active');
        menuToggle.textContent = '☰';
    }

});
