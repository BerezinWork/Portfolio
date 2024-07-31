//"use strict";

//const $ = document.querySelector.bind(document);

//// Обработчики для страницы входа
//const btnLogin = $('.login-page__login-button');
//const btnReg = $('.login-page__registration-button');

//if (btnLogin) {
//    btnLogin.addEventListener('click', (event) => {
//        event.preventDefault();
//        window.location.href = 'index.html'; // Перенаправление на главную страницу
//        // Ваши дополнительные действия после входа...
//    });
//}

//if (btnReg) {
//    btnReg.addEventListener('click', (event) => {
//        event.preventDefault();
//        window.location.href = 'index.html'; // Перенаправление на главную страницу
//        // Ваши дополнительные действия после регистрации...
//    });
//}

//// Проверка состояния входа при загрузке страницы
//document.addEventListener('DOMContentLoaded', () => {
//    const isLoggedIn = localStorage.getItem('isLoggedIn');
//    const accountInfoMain = $('.header__account');
//    const btnHeader = $('.header__button');
//    const btnMainPage = $('.main__button');
//    const btnServices = $('.services__button');
//    const btnExit = $('.account-header__exit');

//    if (btnExit) {
//        btnExit.addEventListener('click', afterExit);
//    }

//    if (isLoggedIn === 'true') {
//        if (btnHeader) {
//            btnHeader.classList.add('hidden');
//        }
//        if (accountInfoMain) {
//            accountInfoMain.classList.remove('hidden');
//        }
//        if (btnMainPage) {
            //btnMainPage.setAttribute('href', 'index-test.html');
//        }
//        if (btnServices) {
            //btnServices.setAttribute('href', 'index-test.html');
//        }
//    } else {
//        if (accountInfoMain) {
//            accountInfoMain.classList.add('hidden');
//        }
//        if (btnHeader) {
//            btnHeader.classList.remove('hidden');
//        }
//        if (btnMainPage) {
//            btnMainPage.setAttribute('href', 'index-login.html');
//        }
//        if (btnServices) {
//            btnServices.setAttribute('href', 'index-login.html');
//        }
//    }
//});

//// Функция для обработки выхода
//function afterExit() {
//    localStorage.setItem('isLoggedIn', 'false');
//    window.location.href = 'index.html'; // Перенаправление на страницу входа
//}


//"use strict"

//const $ = document.querySelector.bind(document);

//const btnLogin = $('login-page__login-button');
//const btnReg = $('.login-page__registration-button');

//const accountInfoMain = $('.header__account');
//const btnHeader = $('.header__button')

//btnLogin.addEventListener('click', afterLogin);
//btnReg.addEventListener('click', afterLogin);

////const btnMainPage = $('.main__button');
////const btnServices = $('.services__button');

//function afterLogin() {
//	btnHeader.classList.add('hidden');
//	accountInfoMain.classList.remove('hidden');
//	window.location.href = 'index.html';
//}

//// ----------------------------------------------------

//const btnExit = $('account-header__exit');

//btnExit.addEventListener('click', afterExit);

//function afterExit() {
//	accountInfoMain.classList.add('hidden');
//	btnHeader.classList.remove('hidden');
//	window.location.href = 'index.html';
//}

//const btnMainPage = $('.main__button');
//const btnServices = $('.services__button');

//btnMainPage.setAttribute('href', 'index-test.html');
//btnServices.setAttribute('href', 'index-test.html');