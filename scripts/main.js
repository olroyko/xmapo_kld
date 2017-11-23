//====== Процедуры работы с localStorage ======
var chapterId = localStorage.getItem('chapterId');							// Get value from LocalStorage
var srcForJs = chapterId.substr(8); 										// Get chapter name from LocalStorage
$("body").append('<script type="text/javascript" src="'+srcForJs+'_questions.js"></script>');	// Insert needed script by the chapter's name

var chapterName = localStorage.getItem('chapterName'); 						// Get chapter name from the local storage
$("h2:first").text(chapterName);											// Input chapter name into html
$('title').text(chapterName);												// Show chapter title


var pos = 0, test, test_status, question, choices, correct = 0;
var choice = [];
var questionsArray = [];
var answersArray = [];
var results = [];
var showNoty = true;														// To show notification only once

// Variables for test results last page
var questionForArray = [];													// Store a question
var answersVariantsForArray = [];											// Store questions list
var correctAnswersForArray =[];												// Store correct answers
var userAnswersForArray =[];												// Store user answers

function _(x){
	return document.getElementById(x);
}

// BLOCK TO GET RANDOM QUESTIONS

Array.prototype.shuffle = function( b ) {									// Shuffle the array
	var i = this.length, j, t;
	while( i ) {
		j = Math.floor( ( i-- ) * Math.random() );
		t = b && typeof this[i].shuffle!=='undefined' ? this[i].shuffle() : this[i];
		this[i] = this[j];
		this[j] = t;
	}
	return this;
};

var qwQuestions = localStorage.getItem('questions_qw');
if (qwQuestions == 20) {
	questions.shuffle();
	questions.splice(20,1000);
	//localStorage.removeItem('questions_qw');								// Remove item from localStorage else all arrays will be shuffled
} else if (qwQuestions == 50) {
	questions.shuffle();
	questions.splice(50,1000);
	//localStorage.removeItem('questions_qw');
} else if (qwQuestions == 100) {
	questions.shuffle();
	questions.splice(100,1000);
	//localStorage.removeItem('questions_qw');
} else if (qwQuestions == 'all') {
	questions.shuffle();
	//localStorage.removeItem('questions_qw');
}

// MAIN BLOCK TO RENDER QUESTIONS
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
		contentHtml += '<div id="accordion" class="ui-accordion ui-widget ui-helper-reset">';
		for ( var j = 0; j < questionForArray.length; j++) {
			contentHtml += '<div class="question-block-item"><div class="question-name accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all">' +
					'<span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"></span>' + questionForArray[j] + '</div><div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom">';	// Get question for test results
			for (var i = 0; i <= answersVariantsForArray.length; i++) {								// Loop for getting answers
				if (answersVariantsForArray[j][i] != undefined) {									// Check if answer exists (not undefined)
					contentHtml += '<div class="answers-name">' + answersVariantsForArray[j][i] + '</div>';
				}
			}
			contentHtml += '</div></div>';
		}

		contentHtml += '</div>';
		$('#results-block').css('display', 'inline').append(contentHtml);						// Show test results block

		for (var i = 0; i < correctAnswersForArray.length; i++) {								// Loop for getting data for test results
			cssQuestions (correctAnswersForArray[i], userAnswersForArray[i],i);					// Get questions
			cssCorrectAnswers (correctAnswersForArray[i], i);									// Get correct answers and css them

		}

		initAccordion ();

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

	buildForm();																// Display answer variants and fill their value
	//http://keith-wood.name/countdown.html										// Counter parameters
	var now = new Date();
	$('#countdown').countdown({since: now, compact: true, format: 'HMS'});
	changeProgressBarValue();													// Call progress bar function
	getQuestionForTestResults ();
	getAnswersForTestResults ();
	getCorrectAnswersForTestResults ();

	var correctPercent = (correct / questions.length * 100).toFixed(); 			// Get correct answers volume in percents
	var questionsPercent = (((pos+1) / questions.length) * 100).toFixed();

	if (questionsPercent > 50 && correctPercent < 30 && showNoty) {
		showNoty = false;
		$('.wrap-progress').notify(
				"Увага! Ви пройшли " + questionsPercent + "% питань, а вірних відповідей лише " + correctPercent+ " %. Піднапружте Ваші мізки.",
				{ position: 'bottom',
					autoHideDelay: 7000,
					hideDuration: 400
				});
	} else {
		return false
	}


}

function checkAnswer(){
	getUserAnswersForTestResults ();											// Get user answers into array of array
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choice.concat(choices[i].value);							//	if checked add to array

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


function displayCorrect() {														//Mark correct answers by "Check button"
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
	//console.log("Вопросы - ", questionsArray);
	//console.log("Ответы - ", answersArray);

	var lastQuestion = results[pos];											// Remove the row from the answers array and show the correct quantity
	if(lastQuestion) {
		correct--;
		results.splice(-1,1);													// Delete last item in the array
	} else {
		results.splice(-1,1);
	}
	//console.info(results);

	//Methods to delete last item after Back button clicking (for test results arrays)
	questionForArray.splice(-1,1);
	answersVariantsForArray.splice(-1,1);
	correctAnswersForArray.splice(-1,1);
	userAnswersForArray.splice(-1,1);
}

//Fill the form by answer variants and add manage buttons
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
	test.innerHTML += "<button type='button' id='check' class='action-button shadow animate red'>Перевірити</button></div>";
	$('#check').on('click', displayCorrect);
	$('#back').on('click', changeProgressBarValue);						// Change progress bar for BACK button

    var mql = window.matchMedia('all and (max-width: 468px)');          //Scroll to top for responsive
    if (mql.matches) {
        $('#back,#next').click(function() {
            $('html, body').animate({scrollTop: 200},1000);
            return false;
        });
    } else {
        // NO, window size more than 468px (do nothing)
    }

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


// === BLOCK - FUNCTIONS TO RECEIVE DATA FOR TEST RESULTS TABLE ===

function getQuestionForTestResults () {										// Get question into array
	questionForArray.push([questions[pos][0]]);								// Add(push) questions into array of array
	//console.dir(questionForArray);
}

function getAnswersForTestResults () {										// Get answers into array of array
	var questionsSet = [];													// Variable for single question answers
	for (var i = 1; i < questions[pos].length; i++ ) {
		if (getOnlyQuestions (i) == false) {
			questionsSet.push(questions[pos][i]);
		}
	}
	answersVariantsForArray.push(questionsSet);
	//console.dir(answersVariantsForArray);
}
function getOnlyQuestions (index) {											// Help function to get only questions
	return questions[pos][index] == 'A' || questions[pos][index] == 'B' || questions[pos][index] == 'C' || questions[pos][index] == 'D' || questions[pos][index] == 'E' || questions[pos][index] == 'F'
}

function  getCorrectAnswersForTestResults () {								// Get CORRECT answers into array of array
	var answersSet = [];
	answersSet = answersArray.toString().replace(/,/, '').replace(/,/, '').replace(/,/, '').replace(/,/, '');
	correctAnswersForArray.push(answersSet);
	//console.dir(correctAnswersForArray);
}

function getUserAnswersForTestResults () {									// Get USER answers into array of array
	var userAnswersSet = [];
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			userAnswersSet = userAnswersSet.concat(choices[i].value).toString();		//	If checked, add to array
		}
	}
	userAnswersForArray.push(userAnswersSet);
	//console.dir(userAnswersForArray);
}

//=======Functions to CSS data for test results table=======

function cssQuestions (correctAnswers, userAnswers, i) {									// Get only questions
	if (correctAnswers === userAnswers) {
		$('.question-name:eq('+i+')').addClass('correct-result-qw').append('<span class="fa fa-2x fa-thumbs-o-up"></span>');
	} else {
		$('.question-name').eq(i).addClass('wrong-result-qw').append('<span class="fa fa-2x fa-thumbs-o-down"></span>');
	}
}

function cssCorrectAnswers  (item, i) {
	//var $answers = $('.question-block-item:eq('+i+') > .answers-name:eq('+i+')');
	var $answers;
	if (item.length == 1) {																			// Check quantity of answers ( if greater than 1 )
		getOnlyCorrectAnswers ($answers);
		if (item == "A") {
			$answers = $('.question-block-item:eq('+i+')').find('.answers-name:eq(0)').addClass('correct-answer');
		} else if (item == "B") {
			$answers = $('.question-block-item:eq('+i+')').find('.answers-name:eq(1)').addClass('correct-answer');
		} else if (item == "C") {
			$answers = $('.question-block-item:eq('+i+')').find('.answers-name:eq(2)').addClass('correct-answer');
		} else if (item == "D") {
			$answers = $('.question-block-item:eq('+i+')').find('.answers-name:eq(3)').addClass('correct-answer');
		} else if (item == "E") {
			$answers = $('.question-block-item:eq('+i+')').find('.answers-name:eq(4)').addClass('correct-answer');
		} else if (item == "F") {
			$answers = $('.question-block-item:eq('+i+')').find('.answers-name:eq(5)').addClass('correct-answer');
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
		el = $('.question-block-item:eq('+i+')').find('.answers-name:eq(0)').addClass('correct-answer');
	} else if (param == "B") {
		el = $('.question-block-item:eq('+i+')').find('.answers-name:eq(1)').addClass('correct-answer');
	} else if (param == "C") {
		el = $('.question-block-item:eq('+i+')').find('.answers-name:eq(2)').addClass('correct-answer');
	} else if (param == "D") {
		el = $('.question-block-item:eq('+i+')').find('.answers-name:eq(3)').addClass('correct-answer');
	} else if (param == "E") {
		el = $('.question-block-item:eq('+i+')').find('.answers-name:eq(4)').addClass('correct-answer');
	} else if (param == "F") {
		el = $('.question-block-item:eq('+i+')').find('.answers-name:eq(5)').addClass('correct-answer');
	}
}


// === BLOCK TO HIDE (SHOW) ACCORDION BY BUTTON CLICKING ===

//$('#results-block').hide();														// Initially hide button group

$('#correct-legend, .btn-success').on('click', function (e) {
	e.preventDefault();
	$('.wrong-result-qw').parent().hide("slow");
	$('.correct-result-qw').parent().show("slow");
	if ($(this).hasClass('active')) {
		return false;
	} else {
		$(this).addClass('active');
		$('.btn-danger').removeClass('active');
		$('.btn-info').removeClass('active');
		$('.accordion-expand-holder').hide("slow");									// Hide expand link else it will a bug after clicking button (not expand it)
	}
});
$('#wrong-legend, .btn-danger').on('click', function (e) {
	e.preventDefault();
	$('.correct-result-qw').parent().hide("slow");
	$('.wrong-result-qw').parent().show("slow");
	if ($(this).hasClass('active')) {
		return false;
	} else {
		$(this).addClass('active');
		$('.btn-success').removeClass('active');
		$('.btn-info').removeClass('active');
		$('.accordion-expand-holder').hide("slow");									// Hide expand link
	}
});


$('#all-legend, .btn-info').on('click', function (e) {
	e.preventDefault();
	$('.correct-result-qw').parent().show("slow");
	$('.wrong-result-qw').parent().show("slow");
	if ($(this).hasClass('active')) {
		return false;
	} else {
		$(this).addClass('active');
		$('.btn-danger').removeClass('active');
		$('.btn-success').removeClass('active');
		$('.accordion-expand-holder').show("slow");									// // Show expand link
	}
});

//Test results accordion with jquery_ui css style

function initAccordion () {
	var headers = $('#accordion').find('.accordion-header');
	var contentAreas = $('#accordion').find('.ui-accordion-content').hide();
	var qwBlock = $('.question-block-item');
	var expandLink = $('.accordion-expand-all');

// add the accordion functionality
	headers.click(function() {
		var panel = $(this).next();
		var isOpen = panel.is(':visible');
		var uiIcon = (this);

		// open or close as necessary
		panel[isOpen? 'slideUp': 'slideDown']()
		// trigger the correct custom event
				.trigger(isOpen? 'hide': 'show');

		// Change ui icons
		if (isOpen) {
			$(uiIcon).find('.ui-accordion-header-icon').removeClass('ui-icon-triangle-1-s').addClass('ui-icon-triangle-1-e');
		}	else {
			$(uiIcon).find('.ui-accordion-header-icon').removeClass('ui-icon-triangle-1-e').addClass('ui-icon-triangle-1-s');
		}

		// stop the link from causing a pagescroll
		return false;
	});

// hook up the expand/collapse all
	expandLink.click(function(e){
		var isAllOpen = $(this).data('isAllOpen');

		e.preventDefault();

		contentAreas[isAllOpen? 'hide': 'show']()
				.trigger(isAllOpen? 'hide': 'show');
	});

// when panels open or close, check to see if they're all open
	contentAreas.on({
		// whenever we open a panel, check to see if they're all open
		// if all open, swap the button to collapser
		show: function(){
			var isAllOpen = !contentAreas.is(':hidden');
			if(isAllOpen){
				expandLink.text('Згорнути все')
						.data('isAllOpen', true);
				//  Change ui icons
				$(headers).find('.ui-accordion-header-icon').removeClass('ui-icon-triangle-1-e').addClass('ui-icon-triangle-1-s');
			}
		},
		// whenever we close a panel, check to see if they're all open
		// if not all open, swap the button to expander
		hide: function(){
			var isAllOpen = !contentAreas.is(':hidden');
			if(!isAllOpen){
				expandLink.text('Розгорнути все')
						.data('isAllOpen', false);
				// Change ui icons
				$(headers).find('.ui-accordion-header-icon').removeClass('ui-icon-triangle-1-s').addClass('ui-icon-triangle-1-e');
			}
		}
	});
}




window.addEventListener("load", renderQuestion, false);

