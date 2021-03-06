var questions = [
// @ Загальні питання гематології..
	//14
 	["Що включає в себе загальноклінічний аналіз крові?"  	
 	,"Підрахунок числа еритроцитів, концентрація гемоглобіну, обчислення колірного показника."
	,"Підрахунок кількості лейкоцитів. Лейкограма."
    ,"Визначення швидкості осідання еритроцитів (ШОЕ)."
    ,"Підрахунок кількості тромбоцитів."
    ,"Визначення часу зсідання крові."
    ,"A"
 	,"B"
 	,"C"
 	,"D"
 	],
 	//15
 	["З якою метою використовуються лабораторні методи в гематології?"
	,"Постановка діагнозу."
	,"Виявлення захворювань при масових обстеженнях."
	,"Контроль за лікуванням і розпізнаванням ускладнень."
	,"Запобігання гематологічним захворюванням."
	,"A"
 	,"B"
 	,"C"
 	],
 	//16
 	["Назвіть елементи патологічної регенерації червоного паростка кровотворення?"
	,"Мегалоцити, мегалобласти."
	,"Кільця Кебота."
	,"Тільця Жолі."
	,"Базофільна зернистість еритроцитів."
	,"Нормоцити."
	,"A"
 	,"B"
 	,"C"
 	,"D"
 	],
 	//17
 	["Які морфологічні ознаки характерні для мієлобласта?"
	,"Цитоплазма ніжно-блакитна з перинуклеарною зоною просвітлення."
	,"Велике ядро з ніжносітчатим хроматином."
	,"Наявність ядерець у ядрі."
	,"Наявність паличок Ауера."
	,"Колесоподібна структура хроматину."
	,"A"
	,"B"
	,"C"
	,"D"
	],
	//18
	["Який показник є важливим для оцінки стану червоного паростка кровотворення?"
	,"Кількість еритроцитів."
	,"Кількість ретикулоцитів."
	,"Поліхромазія в товстій краплі."
	,"Швидкість осідання еритроцитів."
	,"A"
	,"B"
	,"C"
	],
	//19
	["В чому суть Пельгерівської аномалії лейкоцитів?"
	,"Гіперсегментація ядер зрілих нейтрофілів."
	,"Гіпосегментація ядер зрілих нейтрофілів."
	,"Зсув нейтрофілів вліво."
	,"Невідповідність структури хроматину та форми ядра гранулоцитів."	
	,"B"
	,"D"
	],
	//20
	["Який з методів фарбування препаратів крові найточніше виявляє морфологічні особливості клітин?"
	,"За Грамом."
	,"За Цілем - Нільсеном."
	,"За Паппенгеймом."	
	,"C"
	],
	//21
	["В яких органах відбувається кровотворення у внутрішньоутробному періоді розвитку людини?"
	,"Кістковий мозок, лімфатичні вузли, селезінка."
	,"Спинний мозок." 	
	,"A"	
	],
	//22
	["Які з нижченаведених клітин не є кровотворними?"
	,"Ретикулярна клітина."
	,"Лімфоцит."
	,"Плазмоцит."
	,"Мегакаріоцит."	
	,"A"
	],	
	//23
	["Який метод підрахунку кількості клітин крові застосовується в лабораторії?"
	,"У лічильних камерах."
	,"У гематологічних аналізаторах."
	,"У мазках крові."
	,"У біохімічних аналізаторах." 	
	,"A"
	,"B"
	,"C"
	],	
	//24
	["Які морфологічні ознаки характеризують ступінь зрілості клітин еритропоезу?"
	,"Зменшення розмірів клітин."
	,"Конденсація хроматину."
	,"Зниження інтенсивності базофілії цитоплазми."
	,"Зменшення розмірів ядра."
	,"Багатоядерність клітин."	
	,"A"
	,"B"
	,"C"
	,"D"
	],	
	//25
	["Які морфологічні ознаки клітин еритропоезу характеризують гемоглобінізацію?"
	,"Зниження інтенсивності базофілії цитоплазми."
	,"Базофільна зернистість в еритроцитах."
	,"Наявність ядерець в ядрі."	
	,"A"	
	],	
	//26
	["Який метод фарбування дозволяє диференціювати ретикулоцити?"
	,"Метод Романовського."
	,"Метод Паппенгейма."
	,"Суправітальні методи."
	,"Метод Лейшмана."
	,"C"
	],
	//27
	["Які з перелічених нижче клітин можуть мати азурофільну зернистість?"
	,"Нейтрофіл."
	,"Еозінофіл."
	,"Базофіл."
	,"Моноцит." 	
	,"D"
	],	
	//28
	["Яка з перелічених клітин має щільне ядро з вираженою колесоподібною структурою, що найчастіше розташовується ексцентрично; цитоплазма із зоною перинуклеарного просвітлення, базофільна, іноді сіро-блакитна, може мати вакуолі?"
	,"Поліхроматофільний мегалобласт."
	,"Лімфоцит."
	,"Базофільний нормоцит."
	,"Плазмоцит." 	
	,"D"
	],	
	//29
	["В якій з клітин кісткового мозку вперше з'являється специфічна зернистість?"
	,"Лімфобласт."
	,"Промієлоцит."
	,"Еритробласт."
	,"B"
	],	
	//30
	["Що таке 'гематокритна величина'?"
	,"Співвідношення молодих і зрілих форм еритроцитів."
	,"Співвідношення об'єму плазми й еритроцитів."
	,"Об'єм еритроцитів."
	,"B"
	],	
	//31
	["Який з методів визначення гемоглобіну є уніфікованим?"
	,"Газометричний."
	,"Метод, заснований на визначенні заліза у молекулі гемоглобіну."
	,"Метод визначення солянокислого гематину."
	,"Геміглобінціанідний метод."
	,"D"
	],
	//32
	["Які клітини можуть бути орієнтиром правильності одержання стернального пунктату?"
	,"Еритробласти."
	,"Мегакаріоцити."
	,"Тромбоцити."
	,"Бласти, що не піддаються морфологічній диференціації." 	
	,"B"	
	],
	//33
	["Що являє собою гем?"
	,"З'єднання Fe з білком."
	,"З'єднання Fe з порфірином."
	,"З'єднання Fe з протопорфірином."
	,"З'єднання Fe з протопорфірином і білком." 
	,"C"
	],	
	//34
	["Що являє собою гемоглобін?"
	,"З'єднання Fe з білком."
	,"З'єднання Fe з порфірином."
	,"З'єднання Fe з протопорфірином."
	,"З'єднання Fe з протопорфірином і білком. 	"
	,"D"
	],
	//35
	["Який метод підрахунку кількості тромбоцитів є найточнішим?"
	,"Визначення кількості тромбоцитів у лічильній камері."
	,"Визначення кількості тромбоцитів за методом Фоніо."
	,"Визначення кількості тромбоцитів на автоматичному лічильнику."
	,"Визначення кількості тромбоцитів у камері з фазово-контрастною приставкою." 	
	,"B"
	,"D"
	],
	//36
	["Який із факторів сприяє прискоренню ШОЕ?"
	,"Зниження кількості лейкоцитів."
	,"Збільшення рівня глобулінів крові."
	,"Збільшення рівня альбумінів крові."
	,"Збільшення кількості лейкоцитів."	
	,"B"
	],	
	//37
	["Який гемоглобін переважає в еритроцитах здорової дорослої людини?"
	,"Нв А1."
	,"Нв F."
	,"Нв С."
	,"Нв А2." 	
	,"A"
	],	
	//38
	["Що таке лейкоцитоз?"
	,"Збільшення розмірів лейкоцитів."
	,"Збільшення кількості лейкоцитів у одиниці об'єму крові."
	,"Дистрофічні зміни в лейкоцитах." 	
	,"B"
	],	
	//39
	["Що таке абсолютна кількість нейтрофілів?"
	,"Кількість нейтрофілів у мазку крові."
	,"Кількість нейтрофілів у 1 л крові."
	,"Кількість нейтрофілів у відсотках у лейкограмі."	
	,"B"
	],	
	//40
	["Що таке лейкопенія?"
	,"Зменшення кількості лейкоцитів у одиниці об'єму крові."
	,"Збільшення кількості лейкоцитів."
	,"Дегенеративні зміни лейкоцитів." 	
	,"A"
	],
	//41
	["Які з перерахованих захворювань супроводжуються збільшенням кількості еозінофілів?"
	,"Алергічні захворювання."
	,"Гельмінтози."
	,"Колагенози."
	,"Онкозахворювання."
	,"Гіпертонічна хвороба." 	
	,"A"
	,"B"
	,"C"
	,"D"
	],	
	//42
	["Які захворювання супроводжуються лімфоцитозом?"
	,"Кашлюк, вітряна віспа."
	,"Інфекційний лімфоцитоз."
	,"Інфекційний мононуклеоз."
	,"Гостра вірусна інфекція."
	,"Перитоніт."
	,"A"
	,"B"
	,"C"
	,"D"
	],	
	//43
	["Які захворювання супроводжуються моноцитозом?"
	,"Хронічні інфекції."
	,"Кір, вітряна віспа."
	,"Колагенози."
	,"Агранулоцитоз."
	,"Гостра респіраторна вірусна інфекція."	
	,"A"
	,"B"
	,"C"
	,"D"
	],	
	//44
	["Які ознаки характеризують плазматичну клітину?"
	,"Інтенсивно синя цитоплазма."
	,"Ексцентрично розташоване ядро."
	,"Колесоподібна структура хроматину."
	,"Зона перинуклеарного просвітлення."
	,"Наявність крупної нуклеоли в ядрі."	
	,"A"
	,"B"
	,"C"
	,"D"
	],
	//45
	["При яких захворюваннях може підвищуватися число плазматичних клітин у крові?"
	,"Інфекційний мононуклеоз, краснуха, кір."
	,"Апластична анемія."
	,"Гострий апендицит."	
	,"A"
	,"B"
	],	
	//46
	["Яким методом одержують кістковий мозок для лабораторного дослідження?"
	,"Стернальна пункція."
	,"Відбитки."
	,"Змиви."
	,"A"
	],	
	//47
	["Що таке мієлограма?"
	,"Кількість клітин кісткового мозку, що мають ядро."
	,"Відсоткове співвідношення клітин кісткового мозку, що мають ядро."
	,"Кількість мегакаріоцитів."
	,"B"
	],	
	//48
	["Які морфологічні ознаки характерні для мегакаріобласта?"
	,"Наявність зернистості в цитоплазмі."
	,"Крупне, з войлокоподібним хроматином ядро."
	,"Вузька базофільна цитоплазма з клазмотозом."
	,"B"
	,"C"
	],	
	//49
	["Які морфологічні ознаки характерні для мегакаріоцита I ступеня зрілості?"
	,"Ядро має початкові ознаки майбутньої сегментації."
	,"Цитоплазма, багата на азурофільну зернистість."
	,"Діаметр клітин 30-60 мкм. Цитоплазма базофільна, без включень."	
	,"A"
	,"C"
	],
	//50
	["Які морфологічні ознаки характерні для мегакаріоцита II ступеня зрілості?"
	,"Діаметр клітини 60-100 мкм."
	,"Цитоплазма рожево-бузкового кольору."
	,"Багата азурофільна зернистість у цитоплазмі."
	,"Ядро деформоване, сегментоване, химерної форми."
	,"Ядро колесоподібне."
	,"A"
	,"B"
	,"C"
	,"D"
	],
	//51
	["Які морфологічні ознаки характерні для мегакаріоцита III ступеня зрілості?"
	,"Діаметр клітини 100 мкм і більше."
	,"Ядро велике, сегментоване, химерної форми."
	,"Цитоплазма широка, зерниста, із чіткою дрібночарунковою сітчатою структурою."
	,"Цитоплазма містить тромбоцити."
	,"Цитоплазма інтенсивно базофільна."
	,"A"
	,"B"
	,"C"
	,"D"
	],
	//52
	["Які морфологічні ознаки характеризують зрілі тромбоцити?"
	,"Діаметр 2 - 4 мкм, ядро відсутнє."
	,"Чіткий поділ між грануломером і гіаломером."
	,"Ядро з ядерцем."
	,"A"
	,"B"
	],
	//53
	["Яким спсобом можна найточніше розподілити тромбоцити за ступенем зрілості?"
	,"За морфологічними ознаками у мазку крові."
	,"Методом центрифугування в градієнті щільності сахарози."
	,"У лічильній камері."	
	,"B"
	],
	//54
	["Яка кількість тромбоцитів у одиниці об'єму крові є нормальною?"
	,"50 Г/л."
	,"1000 Г/л."
	,"30-100 Г/л."
	,"180-320 Г/л."	
	,"D"
	],
	//55
	["При якому патологічному стані різко скорочується термін життя тромбоцитів периферичної крові?"
	,"Постгеморагічна анемія."
	,"Аутоімунна тромбоцитопенія."
	,"Хвороба Шенляйна - Геноха."
	,"Залізодефіцитна анемія."	
	,"B"
	],
	//56
	["При якому захворюванні різко зростає кількість тромбоцитів в одиниці об'єму крові?"
	,"Мегалобластні анемії."
	,"Залізодефіцитна анемія."
	,"Хронічний моноцитарний лейкоз."
	,"Доброякісний сублейкемічний мієлоз." 	
	,"D"
	],						
	//57
	["Що відносять до дегенеративних змін еритроцитів?"
	,"Зміни еритроцитів за розміром."
	,"Зміни еритроцитів за формою."
	,"Поява ядерних форм еритроцитів."
	,"Анізоцитоз, пойкілоцитоз, анізохромія."	
	,"A"
	,"B"
	,"D"
	],
	//58
	["З чого складається еритроцитометрія?"
	,"Визначення середнього діаметру еритроцитів (СДЕ)."
	,"Визначення середнього об'єму еритроцитів (СОЕ)."
	,"Визначення товщини еритроцитів. "
	,"Визначення показника сферичності."
	,"Визначення кількості еритроцитів у одиниці об'єму крові." 	
	,"A"
	,"B"
	,"C"
	,"D"
	],
	//59
	["Які еритроцити можна виявити у мазку при анізохромії?"
	,"Нормохромні."
	,"Гіпохромні."
	,"Гіперхромні."
	,"Овалоцити."
	,"Анулоцити."	
	,"A"
	,"B"
	,"C"
	,"E"
	],
	//60
	["Чому дорівнює в нормі співвідношення лейко/еритро в кістковому мозку?"
	,"1:1."
	,"2:1."
	,"4:1 - 3:1."
	,"1:2." 
	,"C"
	],
	//61
	["Назвіть особливості клітинного складу кісткового мозку дітей перших трьох років життя у порівнянні з дорослими?"
	,"Підвищена кількість гранулоцитів."
	,"Зменшена кількість еритрокаріоцитів."
	,"Підвищена кількість лімфоцитів."
	,"C"
	]
];