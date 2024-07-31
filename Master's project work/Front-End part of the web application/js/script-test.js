"use strict"

document.addEventListener('click', documentClick);

function documentClick(e) {
	const targetItem = e.target;
	if (targetItem.closest('.burger-menu')) {
		document.documentElement.classList.toggle('menu-open');
	}
}

//const loginBtn = document.getElementById('login');
//loginBtn.addEventListener('click', () => {
//	container.classList.remove("active");
//});

//==========================================
const $ = document.querySelector.bind(document);

const quiz = $('.quiz');
//const warning = $('.warning');
const btnNext = $('.quiz__next-btn');
let count = 0;
let userScore = 0;

if (typeof questions !== 'undefined' && questions.length > 0) {
	quiz.classList.remove('hidden');
	showQuestions(count);
}
//else {
//	warning.classList.remove('hidden');
//}

btnNext.addEventListener('click', nextQuestion);

//* Динамическая подгрузка вопросов с файла questions.js
function showQuestions(index) {
	const title = $('.quiz__title');
	const list = $('.quiz__list');
	const total = $('.quiz__total'); 
	let progress = $('.quiz__progress-inner');
	let inputCount = 1;

	title.innerHTML = `${questions[index].question}`;
	list.innerHTML = '';
	questions[index].options.forEach(item => {
		//const text = `<li class="quiz__option">${item}</li>`;
		const text = `<input type="radio" id="Choice${inputCount}" name="test"><label class="quiz__option" for="Choice${inputCount}">${item}</label>`;
		list.insertAdjacentHTML('beforeend', text)
		inputCount ++;
	});

	const options = list.querySelectorAll('.quiz__option');
	options.forEach(item => item.setAttribute('onclick', 'optionSelected(this)')); //* На каждый элемент добавляет действие онклик

	total.innerHTML = `${index + 1} / ${questions.length}`; //* Счетчик из скольки
	progress.style.width = `${Math.round((index + 1) / questions.length * 100)}%`; //* Прогрес бар

	if ((count + 1) < questions.length) {
		btnNext.innerHTML = `Далі`;
	} else {
		btnNext.innerHTML = `Завершити`;
	}
}

//* Действие при выборе (Подсветка и тд)
function optionSelected(answer) {
	const userAnswer = answer.textContent;
	//const correctAnswer = questions[count].answer; //!! вместо правильного ответа , оценка за ответ от 5 до 1
	const options = document.querySelectorAll('.quiz__option');

	//if (userAnswer == correctAnswer) { //!! изменить условик так , чтобы можно было не вычеслять правильный ли ответ , а просто добавлять балы за ответы от 5 до 1
	//	userScore += 1; //!! реализация добавления баллов от 5 до 1 за ответ
	//	answer.classList.add('correct'); //!! стиилзация правильно ответа надо будет убрать
	//} else {
	//	answer.classList.add('incorrect'); //!! стиилзация неправильно ответа надо будет убрать
	//}

	//!! Реализация выведения правильного ответа , если кликнул на неправильный
	//options.forEach(item => {
	//	if (item.textContent == correctAnswer) {
	//		setTimeout(() => {
	//			item.classList.add('correct');
	//		}, 100);
	//	}
	//});
}
//* По нажатию на кнопку рендер следуюзего вопроса
function nextQuestion() {
	const radioButtons = document.getElementsByName('test');
	let isChecked = false;
	const option = $('.quiz__option'); 
	const result = $('.result'); //!! Блок с результатами
	//const resultText = $('.result__text'); //!! Сами Результаты

	for (const radioButton of radioButtons) {
		if (radioButton.checked) {
			isChecked = true;
			break;
		}
	}

	if ((count + 1) == questions.length && isChecked == true) {
		//quiz.classList.add('hidden');
		//result.classList.remove('hidden');
		window.location.href = 'index-test.html';
		//resultText.innerHTML = `Количество правильных ответов: ${userScore} из ${questions.length}.`;
		return;
	}

	if (isChecked == true) {
		count++;
		showQuestions(count);
	} else {
		alert('Выбери один из вариантов, а потом переходи к следующему вопросу :'); //!! Супер не красивое оформление выведение предупреждения что не выбран
	}
}