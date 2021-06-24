let pageUrls = {
    home: '/index.html?home',
    content: '/index.html?content',
    shop: '/index.html?shop'
}

function OnStartUp(params) {
    popStateHandler();
}

OnStartUp();
document.querySelector('#home-link').addEventListener('click', (event) => {
    let stateObj = {
        page: 'home'
    }
    document.title = 'Home';
    history.pushState(stateObj, "home", "?home");
    RenderHomePage();
});
document.querySelector('#content-link').addEventListener('click', (event) => {
    let stateObj = {
        page: 'content'
    }
    document.title = 'Content';
    history.pushState(stateObj, "content", "?content");
    RenderContentPage();
});
document.querySelector('#shop-link').addEventListener('click', (event) => {
    let stateObj = {
        page: 'shop'
    }
    document.title = 'Shop';
    history.pushState(stateObj, "shop", "?shop");
    RenderShopPage();
});

function RenderHomePage(params) {
    document.querySelector('main').innerHTML =
        `<h1 class="title">Be smart, be fast!</h1>
    <p>
        If u are here it means you wanna learn how to program cloud application.<br />
        Or maybe you already have knowledge but wanna improve your skills?<br />
        Either way you are in the rigth place!<br />
    </p>`;
}

function RenderContentPage(params) {
    document.querySelector('main').innerHTML =
        `<h1 class="title">Look inside the box</h1>
<p> 
    We have prepared 3 different courses divided by the level of advancement.<br/><br/>
    <b>Beginner course include:</b><br/>
    - basic knowledge about HTML, CSS and JS<br/><br/>
    <b>Intermediate  course include:</b><br/>
    - basic knowledge about python, framework: Flask and database<br/><br/>
    <b>Advance course include:</b><br/>
    - knowledge about how to connect your back-end and front-end of app<br/>
    - how how your site in cloud<br/><br/>
    <h3>If you decide buy all 3 courses at once you get bonus materials about cyber-security!<h3>
</p>`;
}

function RenderShopPage(params) {
    document.querySelector('main').innerHTML =
        `<h1 class="title">Shop</h1>
<p> 
    <b>Beginner course:</b><br/>
    - 17,99$<br/><br/>
    <b>Intermediate  course:</b><br/>
    - 17,99$<br/><br/>
    <b>Advance course:</b><br/>
    - 17,99$<br/><br/>
    <h3>Bundle of all 3 courses:<h3>
    <h3>49,99$ + bonuses materials!<h3>

</p>`;
}

function popStateHandler(event) {
    loc = window.location.href.toString().split(window.location.host)[1];
    if (loc === pageUrls.home) {
        RenderHomePage();
    }
    if (loc === pageUrls.content) {
        RenderContentPage();
    }
    if (loc === pageUrls.shop) {
        RenderShopPage();
    }
}

window.onpopstate = popStateHandler;
