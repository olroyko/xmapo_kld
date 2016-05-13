//====== Процедуры работы с localStorage ======
var chapterId = localStorage.getItem('chapterId');//Получить значение из LocalStorage
var srcForJs = chapterId.substr(8); //Получить номер раздела из LocalStorage
$("body").append('<script type="text/javascript" src="'+srcForJs+'_questions.js"></script>');	//Подставить требуемый скрипт по номеру раздела

var chapterName = localStorage.getItem('chapterName'); 						// Get chapter name from the local storage
$("h2:first").text(chapterName);											// Input chapter name into html

var pos = 0, test, test_status, question, choices, correct = 0;
var choice = [];
var questionsArray = [];
var answersArray = [];
var results = [];

// Variables for test results last page
var questionForArray = [];													// Store a question
var answersVariantsForArray = [];											// Store questions list
var correctAnswersForArray =[];												// Store correct answers
var userAnswersForArray =[];												// Store user answers

function _(x){
	return document.getElementById(x);
}


function renderQuestion(){
	test = _("test");	
	if(pos >= questions.length){
		$('#question').text('');											// Clear last question
		test.innerHTML = "<h2>Вірних відповідей "+correct+" із "+questions.length+"</h2>";
		_("test_status").innerHTML = "Тестування закінчено";
		
		pos = 0;
		correct = 0;
		$('#countdown').countdown('pause');									// Stop counter
		$('.question-block').empty();										// Hide question block
		test.innerHTML += "<h4><a class='hvr-icon-wobble-vertical' href=''>Розпочати знову</a></h4>";

        // Displaying test results on the last page
		var contentHtml = [];
		contentHtml += '<div class="results-block">';
		for ( var x = 0; x < questionForArray.length; x++) {
			contentHtml += '<div class="question-block-item"><div class="question-name">' + questionForArray[x] + '</div>';	// Get question for test results
			for (var i = 0; i < answersVariantsForArray.length; i++) {								// Loop for getting answers
				if (answersVariantsForArray[x][i] != undefined) {									// Check if answer exists (not undefined)
					contentHtml += '<div class="answers-name">' + answersVariantsForArray[x][i] + '</div>';
				}
			}
			contentHtml += '</div>';
		}
		contentHtml += '</div>';
		$('#results-block').css('display', 'inline-block').append(contentHtml);					// Show test results block

		for (var i = 0; i < correctAnswersForArray.length; i++) {								// Loop for getting data for test results
			cssQuestions (correctAnswersForArray[i], userAnswersForArray[i],i);					// Get questions
			cssCorrectAnswers (correctAnswersForArray[i], i);									// Get correct answers and css them

		}

		return false;

	}
	_("test_status").innerHTML = "Питання " + (pos+1)+" із " + questions.length;
	question = questions[pos][0];

	answersArray = questions[pos].filter(function(questions) {
	return questions == "A" || questions == "B" || questions == "C" || questions == "D" || questions == "E" || questions == "F";		
	});
	questionsArray = questions[pos].filter(function(answers) {
	return answers != "A" && answers != "B" && answers != "C" && answers != "D" && answers != "E" && answers != "F";		
	});

	buildForm();																//Отобразить варианты ответов и заполнить их value
	//http://keith-wood.name/countdown.html										// Параметры и вызов для счетчика
	var now = new Date();
	$('#countdown').countdown({since: now, compact: true, format: 'HMS'});
	changeProgressBarValue();													// Call progress bar function
	getQuestionForTestResults ();
	getAnswersForTestResults ();
	getCorrectAnswersForTestResults ();

}

function checkAnswer(){
	getUserAnswersForTestResults ();											// Get user answers into array of array
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choice.concat(choices[i].value);							//	если указан флаг, то добавить в массив
			
		}
	}
	if(choice[0] == answersArray[0] && choice[1] == answersArray[1] && choice[2] == answersArray[2]  && choice[3] == answersArray[3] && choice[4] == answersArray[4] && choice[5] == answersArray[5]){
		correct++;
		results = results.concat(true);
	} else {
		results = results.concat(false);
	}	
	choice = [];
	pos++;
	renderQuestion();

}

//Выделить правильные ответы по кнопке "Проверить"
function displayCorrect() {		
	for(i = 0; i < answersArray.length; i++) {
		if(answersArray[i] !== undefined){
			var $input = $("input[value='"+answersArray[i]+"']");
			$input.next().children().css("color", '#2caedd');
			$input.parent().addClass('correctAnswer animated bounce');
		}
	}
	var $li= $('li');
	$li.not('.correctAnswer').css({"font-size": '10px'}).animate({
		opacity: 0.45
	});
	$li.not('.correctAnswer').addClass('wrongAnswer');
}

function backButton() {
	_("test_status").innerHTML = "Питання "+(pos)+" of "+questions.length;
	pos--;			
	buildForm();
	console.log("Вопросы - ", questionsArray);
	console.log("Ответы - ", answersArray);

	var lastQuestion = results[pos];						// Удалить запись из массива ответов и вернуть верное кол-во правильных	ответов
	if(lastQuestion) {
		correct--;
		results.splice(-1,1);								// Delete last item in the array
	} else {
		results.splice(-1,1);
	}
	console.info(results);

	//Methods to delete last item after Back button clicking (for test results arrays)
	questionForArray.splice(-1,1);
	answersVariantsForArray.splice(-1,1);
	correctAnswersForArray.splice(-1,1);
	userAnswersForArray.splice(-1,1);
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
		li += "<li><input id='"+i+"' type='checkbox' name='choices'><label for='"+i+"'><span>"+questionsArray[i]+"</span></label></li>";
		}

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
			};
	ps.animate(pa);
	cs.text(valueToFixed+'%');
	circle.animate(ca, function(){
		circle.removeClass(name)
	}).addClass(name);
}

//=======Functions to receive data for test results table========

function getQuestionForTestResults () {									// Get question into array
	questionForArray.push([questions[pos][0]]);							// Add(push) questions into array of array
	console.dir(questionForArray);
}

function getAnswersForTestResults () {										// Get answers into array of array
	var questionsSet = [];													// Variable for single question answers
	for (var i = 1; i < questions[pos].length; i++ ) {
		if (getOnlyQuestions (i) == false) {
			questionsSet.push(questions[pos][i]);
		}
	}
	answersVariantsForArray.push(questionsSet);
	console.dir(answersVariantsForArray);
}
function getOnlyQuestions (index) {											// Help function to get only questions
	return questions[pos][index] == 'A' || questions[pos][index] == 'B' || questions[pos][index] == 'C' || questions[pos][index] == 'D' || questions[pos][index] == 'E' || questions[pos][index] == 'F'
}

function  getCorrectAnswersForTestResults () {								// Get CORRECT answers into array of array
	var answersSet = [];
	answersSet = answersArray.toString().replace(/,/, '').replace(/,/, '').replace(/,/, '').replace(/,/, '');
	correctAnswersForArray.push(answersSet);
	console.dir(correctAnswersForArray);
}

function getUserAnswersForTestResults () {									// Get USER answers into array of array
	var userAnswersSet = [];
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			userAnswersSet = userAnswersSet.concat(choices[i].value).toString();		//	Если указан флаг, то добавить в массив
		}
	}
	userAnswersForArray.push(userAnswersSet);
	//console.dir(userAnswersForArray);
}

//=======Functions to CSS data for test results table=======

function cssQuestions (correctAnswers, userAnswers, i) {									// Get only questions
	if (correctAnswers === userAnswers) {
		$('.question-name:eq('+i+')').addClass('correct-result-qw');
	} else {
		$('.question-name').eq(i).addClass('wrong-result-qw');
	}
}

function cssCorrectAnswers  (item, i) {
	//var $answers = $('.question-block-item:eq('+i+') > .answers-name:eq('+i+')');
	var $answers;
	if (item.length == 1) {																			// Check quantity of answers ( if greater than 1 )
		getOnlyCorrectAnswers ($answers);
		if (item == "A") {
			$answers = $('.question-block-item:eq('+i+') > .answers-name:eq(0)').addClass('correct-answer');
		} else if (item == "B") {
			$answers = $('.question-block-item:eq('+i+') > .answers-name:eq(1)').addClass('correct-answer');
		} else if (item == "C") {
			$answers = $('.question-block-item:eq('+i+') > .answers-name:eq(2)').addClass('correct-answer');
		} else if (item == "D") {
			$answers = $('.question-block-item:eq('+i+') > .answers-name:eq(3)').addClass('correct-answer');
		} else if (item == "E") {
			$answers = $('.question-block-item:eq('+i+') > .answers-name:eq(4)').addClass('correct-answer');
		} else if (item == "F") {
			$answers = $('.question-block-item:eq('+i+') > .answers-name:eq(5)').addClass('correct-answer');
		}
	} else if (item.length == 2) {												//For strings "AB"

		$answers = item.slice(0, -1);
		getOnlyCorrectAnswers ($answers, i);

		$answers = item.slice(1);
		getOnlyCorrectAnswers ($answers, i);
	} else if (item.length == 3) {												//For strings "ABC"

		$answers = item.slice(0, -2);
		getOnlyCorrectAnswers ($answers, i);

		$answers = item.slice(1, -1);
		getOnlyCorrectAnswers ($answers, i);

		$answers = item.slice(2);
		getOnlyCorrectAnswers ($answers, i);
	} else if (item.length == 4) {												//For strings "ABCD"

		$answers = item.slice(0, -3);
		getOnlyCorrectAnswers ($answers, i);

		$answers = item.slice(1, -2);
		getOnlyCorrectAnswers ($answers, i);

		$answers = item.slice(2, -1);
		getOnlyCorrectAnswers ($answers, i);

		$answers = item.slice(3);
		getOnlyCorrectAnswers ($answers, i);
	} else if (item.length == 5) {												//For strings "ABCDE"

		$answers = item.slice(0, -4);
		getOnlyCorrectAnswers ($answers, i);

		$answers = item.slice(1, -3);
		getOnlyCorrectAnswers ($answers, i);

		$answers = item.slice(2, -2);
		getOnlyCorrectAnswers ($answers, i);

		$answers = item.slice(3, -1);
		getOnlyCorrectAnswers ($answers, i);

		$answers = item.slice(4);
		getOnlyCorrectAnswers ($answers, i);
	}


	//var test = "ABC";
	//var slice1 = test.slice(0, -2);
	//var slice2 = test.slice(1, -1);
	//var slice3 = test.slice(2);
	//console.log(slice1);
	//console.log(slice2);
	//console.log(slice3);

}


function getOnlyCorrectAnswers (param, i) {
	var el;
	if (param == "A") {
		el = $('.question-block-item:eq('+i+') > .answers-name:eq(0)').addClass('correct-answer');
	} else if (param == "B") {
		el = $('.question-block-item:eq('+i+') > .answers-name:eq(1)').addClass('correct-answer');
	} else if (param == "C") {
		el = $('.question-block-item:eq('+i+') > .answers-name:eq(2)').addClass('correct-answer');
	} else if (param == "D") {
		el = $('.question-block-item:eq('+i+') > .answers-name:eq(3)').addClass('correct-answer');
	} else if (param == "E") {
		el = $('.question-block-item:eq('+i+') > .answers-name:eq(4)').addClass('correct-answer');
	} else if (param == "F") {
		el = $('.question-block-item:eq('+i+') > .answers-name:eq(5)').addClass('correct-answer');
	}
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

