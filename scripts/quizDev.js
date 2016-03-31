//====== Процедуры работы с localStorage ======
var chapterId = localStorage.getItem('chapterId');//Получить значение из LocalStorage
var srcForJs = chapterId.substr(8); //Получить номер раздела из LocalStorage
$("body").append('<script type="text/javascript" src="'+srcForJs+'_questions.js"></script>');//Подставить требуемый скрипт по номеру раздела
// $("h2:first").text(chaptersNames[0]);

var pos = 0, test, test_status, question, choices, chA, chB, chC, chD, correct = 0;
var chAr = [];
var choice = [];
var questionsArray = [];
var answersArray = [];
var results = [];
function _(x){
	return document.getElementById(x);
}

function renderQuestion(){
	test = _("test");	
	if(pos >= questions.length){
		test.innerHTML = "<h2>Вірних відповідей "+correct+" із "+questions.length+"</h2>";
		_("test_status").innerHTML = "Тестування закінчено";

		 // "<h3>"+questionsArray[0]+"</h3>"
	for(i = 0; i < questionsArray.length; i++) {
			// if(answersArray[i] !== undefined)
			 test.innerHTML += "<h4>"+questionsArray[i]+"</h4>";
		}
		
		pos = 0;
		correct = 0;
		$('#countdown').countdown('pause');//Остановить счетчик
		test.innerHTML += "<a href=''>Розпочати знову</a>";

		return false;
		
	}
	_("test_status").innerHTML = "Питання "+(pos+1)+" із "+questions.length;
	question = questions[pos][0];

	answersArray = questions[pos].filter(function(questions) {
	return questions == "A" || questions == "B" || questions == "C" || questions == "D" || questions == "E" || questions == "F";		
	});
	questionsArray = questions[pos].filter(function(answers) {
	return answers != "A" && answers != "B" && answers != "C" && answers != "D" && answers != "E" && answers != "F";		
	});
	console.log("Вопросы - ", questionsArray);	
	console.log("Ответы - ", answersArray);	
	
	//Отобразить варианты ответов и заполнить их value		
	buildForm();	
	// Параметры и вызов для счетчика
	//http://keith-wood.name/countdown.html
	var now = new Date();
	$('#countdown').countdown({since: now, compact: true, format: 'HMS'});
	
		
}

function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choice.concat(choices[i].value);//	если указан флаг, то добавить в массив	
			
		}
	}
	if(choice[0] == answersArray[0] && choice[1] == answersArray[1] && choice[2] == answersArray[2]  && choice[3] == answersArray[3] && choice[4] == answersArray[4] && choice[5] == answersArray[5]){
		correct++;
		results = results.concat(true);
		// console.log(results);
	} else {
		results = results.concat(false);
		// console.log(results);
	}	
	choice = [];
	pos++;	
	renderQuestion();	
}

//Выделить правильные ответы по кнопке "Проверить"
function displayCorrect() {		
	for(i = 0; i < answersArray.length; i++) {
		if(answersArray[i] !== undefined){
			$("input[value='"+answersArray[i]+"']").parent().css("color", 'red');
		}
	}		
	// if(answersArray[0] !== undefined){
	// 	var item0 = answersArray[0];
	// 	$("input[value='"+item0+"']").parent().css("color", 'red');		
	// }	
}

function backButton() {
	// alert("UUraa");
	_("test_status").innerHTML = "Питання "+(pos)+" of "+questions.length;
	pos--;			
	buildForm();
	console.log("Вопросы - ", questionsArray);
	console.log("Ответы - ", answersArray);	
	
	//Удалить запись из массива ответов и вернуть верное кол-во правильных	ответов
	var lastQuestion = results[pos];
	if(lastQuestion) {
		correct--;
		results.splice(-1,1);//Удаляет последнюю запись в массиве
	} else {
		results.splice(-1,1);
	}	
}

//Заполнить форму вариантами ответов и добавить кнопки управления
function buildForm() {
	answersArray = questions[pos].filter(function(questions) {
	return questions == "A" || questions == "B" || questions == "C" || questions == "D" || questions == "E" || questions == "F";		
	});
	questionsArray = questions[pos].filter(function(answers) {
	return answers != "A" && answers != "B" && answers != "C" && answers != "D" && answers != "E" && answers != "F";		
	});
	test.innerHTML = "<h3>"+questionsArray[0]+"</h3>";	
	for(i = 1; i < questionsArray.length; i++) {
		test.innerHTML += "<label><input type='checkbox' name='choices'> "+questionsArray[i]+"</label><br>";
		$("input:eq(0)").val('A');
		$("input:eq(1)").val('B');
		$("input:eq(2)").val('C');
		$("input:eq(3)").val('D');
		$("input:eq(4)").val('E');
		$("input:eq(5)").val('F');
		}	
	if(pos !== 0){
		test.innerHTML += "<button type='button' id='back' onclick='backButton()'>Назад</button>";
	}
	test.innerHTML += "<button id='next' onclick='checkAnswer()'>Далі</button>";
	// $('#next').on('click', checkAnswer);		
	// $('#back').on('click', backButton);
	test.innerHTML += "<button type='button' id='check' >Перевірити</button>";
	$('#check').on('click', displayCorrect);
}

//Перемешивание массива
// Array.prototype.shuffle = function( b ) {
//  var i = this.length, j, t;
//  while( i ) {
//   j = Math.floor( ( i-- ) * Math.random() );
//   t = b && typeof this[i].shuffle!=='undefined' ? this[i].shuffle() : this[i];
//   this[i] = this[j];
//   this[j] = t;
//  }
//  return this;
// };
// questions.shuffle();


window.addEventListener("load", renderQuestion, false);

