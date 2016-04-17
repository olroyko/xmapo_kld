//====== Процедуры работы с localStorage ======
var chapterId = localStorage.getItem('chapterId');//Получить значение из LocalStorage
var srcForJs = chapterId.substr(8); //Получить номер раздела из LocalStorage
$("body").append('<script type="text/javascript" src="'+srcForJs+'_questions.js"></script>');	//Подставить требуемый скрипт по номеру раздела

var chapterName = localStorage.getItem('chapterName'); 						// Get chapter name from the local storage
$("h2:first").text(chapterName);											// Input chapter name into html

var pos = 0, test, test_status, question, choices, correct = 0;
var chAr = [];
var choice = [];
var questionsArray = [];
var answersArray = [];
var results = [];
var counterForProgress = 0;
function _(x){
	return document.getElementById(x);
}


function renderQuestion(){
	test = _("test");	
	if(pos >= questions.length){
		$('#question').text('');											// Clear last question
		test.innerHTML = "<h2>Вірних відповідей "+correct+" із "+questions.length+"</h2>";
		_("test_status").innerHTML = "Тестування закінчено";

		 // "<h3>"+questionsArray[0]+"</h3>"
	//for(i = 0; i < questionsArray.length; i++) {
	//		// if(answersArray[i] !== undefined)
	//		 test.innerHTML += "<h4>"+questionsArray[i]+"</h4>";
	//	}
		
		pos = 0;
		correct = 0;
		$('#countdown').countdown('pause');									// Stop counter
		$('.question-block').empty();										// Hide question block
		test.innerHTML += "<h4><a class='hvr-icon-wobble-vertical' href=''>Розпочати знову</a></h4>";

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
	buildForm();																//Отобразить варианты ответов и заполнить их value
	//http://keith-wood.name/countdown.html										// Параметры и вызов для счетчика
	var now = new Date();
	$('#countdown').countdown({since: now, compact: true, format: 'HMS'});
	//$('.progress-bar').css({'color':'black'});								// Set color for initial value 0%
	changeProgressBarValue();													// Call progress bar function
		
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
			$("input[value='"+answersArray[i]+"']").next().children().css("color", '#2caedd');
			$("input[value='"+answersArray[i]+"']").parent().addClass('correctAnswer animated bounce');
		}
	}
	$('li').not('.correctAnswer').css({"font-size": '10px'}).animate({
		opacity: 0.45
	});
	$('li').not('.correctAnswer').addClass('wrongAnswer')
	//$('li').not('.correctAnswer').children().find('label::after').css({"height": '20px', "width": '20px'}).animate({
	//	opacity: 0.45
	//});

	// if(answersArray[0] !== undefined){
	// 	var item0 = answersArray[0];
	// 	$("input[value='"+item0+"']").parent().css("color", 'red');		
	// }	
}

function backButton() {
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
	test.innerHTML = "";										// Space added or it will be a bug
	$('#question').text(questionsArray[0]);						// Display question
	test.innerHTML += "<ul></ul>";								// Input ul into html
	var li = "";
	for(i = 1; i < questionsArray.length; i++) {
		//test.innerHTML += "<input id='"+i+"' type='checkbox' name='choices'><label for='"+i+"'><span>"+questionsArray[i]+"</span></label>"
		//test.innerHTML += "<li><input id='"+i+"' type='checkbox' name='choices'><label for='"+i+"'><div>"+questionsArray[i]+"</div></label></li>"
		li += "<li><input id='"+i+"' type='checkbox' name='choices'><label for='"+i+"'><span>"+questionsArray[i]+"</span></label></li>";
		//$("input:eq(0)").val('A');
		//$("input:eq(1)").val('B');
		//$("input:eq(2)").val('C');
		//$("input:eq(3)").val('D');
		//$("input:eq(4)").val('E');
		//$("input:eq(5)").val('F');
		}
	//test.innerHTML += li;

	$('ul').append(li);											// Append list into ul
	$("input:eq(0)").val('A');
	$("input:eq(1)").val('B');
	$("input:eq(2)").val('C');
	$("input:eq(3)").val('D');
	$("input:eq(4)").val('E');
	$("input:eq(5)").val('F');

	if(pos !== 0){
		test.innerHTML += "<button type='button' id='back' class='action-button shadow animate blue' onclick='backButton()'>Назад</button>";
	}
	test.innerHTML += "<button id='next' class='action-button shadow animate blue' onclick='checkAnswer()'>Далі</button>";
	// $('#next').on('click', checkAnswer);		
	// $('#back').on('click', backButton);
	test.innerHTML += "<button type='button' id='check' class='action-button shadow animate red'>Перевірити</button>";
	$('#check').on('click', displayCorrect);
	$('#back').on('click', changeProgressBarValue);						// Change progress bar for BACK button
}


function changeProgressBarValue() {										// Function to set data for progress bar
	//var $el = $('.progress-bar');										// For bootstrap
	var value = ((pos+1) / questions.length) * 100;
	//var valueWithPercent = (value.toFixed()) + '%';					// For bootstrap
	//$el.text(valueWithPercent).attr('aria-valuenow', value).css('width',valueWithPercent);	// For bootstrap

	//Progress bar http://www.htmldrive.net/items/show/1149/Awesome-Horizontal-scroll-bar-graph
	var 	bar = $('.bar'),
			bw = bar.width(),
			percent = bar.find('.percent'),
			circle = bar.find('.circle'),
			ps =  percent.find('span'),
			cs = circle.find('span'),
			name = 'rotate';
	var valueToFixed = value.toFixed();
	var w = 100-valueToFixed, pw = (bw*w)/100,
			pa = {
				width: w+'%'
			},
			cw = (bw-pw)/2,
			ca = {
				left: cw
			}
	ps.animate(pa);
	cs.text(valueToFixed+'%');
	circle.animate(ca, function(){
		circle.removeClass(name)
	}).addClass(name);
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

