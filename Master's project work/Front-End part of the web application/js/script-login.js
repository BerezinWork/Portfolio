"use strict"

document.addEventListener('click', documentClick);

function documentClick(e) {
	const targetItem = e.target;
	if (targetItem.closest('.burger-menu')) {
		document.documentElement.classList.toggle('menu-open');
	}
}

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
	container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
	container.classList.remove("active");
});