const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML=`
        <div class="nav">
    <img src="img/Android-Logo-2014-2019.png" class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="Mit keresel?">
            <button class="search-btn">keresés</button>
        </div>
        <a href="#"><img src="img/user.jpg"></a>
        <a href="#"><img src="img/cart.png"></a>
    </div>
    
</div>
<ul class="links-container">
        <li class="link-item"><a href="#" class="link">Főoldal</a></li>
        <li class="link-item"><a href="#" class="link">Smartbox</a></li>
        <li class="link-item"><a href="#" class="link">Távirányítók</a></li>
        <li class="link-item"><a href="#" class="link">AnyCast</a></li>
    </ul>
    `;
}

createNav();