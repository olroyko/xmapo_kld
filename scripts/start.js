var chaptersNames = [
	"Загальні питання клінічної лабораторної діагностики"
	,"Загальні питання гематології"
	,"Новоутворення кровотворної системи"
	,"Ситуаційні задачі за темою \"Новоутворення кровотворної системи\""
	,"Лейкемоїдні реакції"
	,"Анемії"
	,"Ситуаційні задачі за темою \"Анемії\""
	,"Лабораторна діагностика захворювань органів дихання"
	,"Ситуаційні задачі за темою \"Лабораторна діагностика захворювань органів дихання\""
	,"Лабораторна діагностика захворювань органів сечовиділення"
	,"Ситуаційні задачі за темою \"Лабораторна діагностика захворювань органів сечовиділення\""
	,"Лабораторна діагностика захворювань органів травної системи"
	,"Ситуаційні задачі за темою \"Лабораторна діагностика захворювань органів травної системи\""
	,"Ситуаційні задачі з дослідження жовчі"
	,"Дослідження калу"
	,"Лабораторна діагностика паразитарних хвороб"
	,"Дослідження спинномозкової рідини"
	,"Ситуаційні задачі за темою \"Дослідження спинномозкової рідини\""
	,"Дослідження ексудатів"
	,"Лабораторна діагностика захворювань статевих органів"
	,"Ситуаційні задачі за темою \"Лабораторна діагностика захворювань статевих органів\""
	,"Лабораторна діагностика ВІЛ-інфекції (СНІДу)"
	,"Цитологічна діагностика патологічних процесів"
	,"Ситуаційні задачі з цитологічних досліджень матеріалів молочної залози"
	,"Ситуаційні задачі за темою \"Цитологічна діагностика патологічних процесів\""
	,"Імунологічні методи дослідження"
	,"Помилки"
	,"Клінічна біохімія"
	,"Білковий обмін"
	,"Ферменти"
	,"Вуглеводні"
	,"Ліпіди"
	,"Жовчні пігменти"
	,"Гормони"
	,"Водно-мінеральний обмін"
	,"Кислотно-лужний стан"
	,"Ситуаційні завдання з досліджень кислотно-лужного стану"
	,"Гемостаз"
	,"Вітаміни.Лабораторна діагностика невідкладних станів"
];

//BLOCK FOR DROPDOWN MENU
$('.dropdown-el').click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	$(this).toggleClass('expanded');
	$('#'+$(e.target).attr('for')).prop('checked',true);
});
$(document).click(function() {
	$('.dropdown-el').removeClass('expanded');
});


// BLOCK FOR START TESTING (RANDOM QUESTIONS)
var $btnId = $('#start-test');															// Get button id
var $select = $('select');																// Get select element

$btnId.hide();																			// Hide start button after loading page
$($select).on('change', function () {													// Show start button after selecting
	$($btnId).show('slow');
});

$($select).find('option:eq(0)').attr('selected','selected');							// Set selected attribute for first value
$($btnId).on('click', function () {
	var $selectedValue = $('select option:selected').val();								// Get input value (for attribute "value" )
	localStorage.setItem("chapterId", 'chapter_all');									// Set id of the clicked link into local storage
	localStorage.setItem("chapterName", 'Питання з випадкових розділів');
	window.location.href = 'chapters/questions.html';									// Go to chapters questions

	if ($selectedValue == '20') {
		localStorage.setItem('questions_qw', '20');
	} else if ($selectedValue == '50') {
		localStorage.setItem('questions_qw', '50');
	} else if ($selectedValue == '100') {
		localStorage.setItem('questions_qw', '100');
	} else if ($selectedValue == 'all') {
		localStorage.setItem('questions_qw', 'all');
	} else {
		return false;
	}

});


// BLOCK FOR TOOLTIPS
new $.Zebra_Tooltips($('.tooltip-here'), {
	'background_color': '#E8902C',
	'position': 'left',
	'color': '#FFF'
});




//BLOCK FOR SELECTING RIGHT CHAPTER
if(typeof(Storage) !== "undefined") {
	// Добавить заголовки разделов
	for (i = 0; i < chaptersNames.length;i++) {
		$("#list").append('<li id="chapter_'+(i+1)+'"><a  href="chapters/questions.html">'+chaptersNames[i]+'</a></li>')
	}

	$("li").on('click', function (event) {
		localStorage.setItem("chapterId", event.currentTarget.id);				// Set id of the clicked link into local storage
		var $textTarget = ($(this).text());										// Get chapter name
		localStorage.setItem("chapterName", $textTarget);						// Set chapter name into local storage
	})
} else {
	alert("Ваш браузер не підтримує об'єкт 'localStorage'. Робота з програмою неможлива.")
}

