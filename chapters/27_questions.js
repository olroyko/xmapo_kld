var questions = [
// Помилки.	
 	
 	
 	//726
 	["Які основні причини можливих помилок при лабораторних дослідженнях Ви знаєте?"
	,"Неправильний вибір матеріалу для дослідження."
	,"Неправильний вибір методу дослідження."
	,"Неправильне оформлення результатів дослідження."
 	,"A"
 	,"B"
 	],
 	//727
 	["Що варто розуміти під внутрішньолабораторними помилками?"
	,"Порушення методики дослідження."
	,"Використання неякісних: реактивів, барвників, лабораторного посуду."
	,"Неправильне клінічне тлумачення результатів досліджень."
 	,"A"
 	,"B"
 	],
 	//728
 	["Що варто розуміти під позалабораторними помилками?"
	,"Незадовільне підготування пацієнта до обстеження."
	,"Неправильне взяття матеріалу для дослідження."
	,"Неправильне зберігання і транспортування біологічного матеріалу."
	,"Порушення методики дослідження."
 	,"A"
 	,"B"
 	,"C"
 	],
 	//729
 	["Через що може бути неправильним трактування результатів?"
	,"Неточний результат через помилки в лабораторному процесі."
	,"Недостатній рівень знань клініциста в області лабораторної діагностики."
 	,"B"
 	],
 	//730
 	["Які чинники можуть вплинути на лабораторні показники?"
	,"Біологічні, соціальні, природні."
	,"Лікарські препарати."
	,"Методи дослідження."
 	,"A"
 	,"B"
 	],
 	//731
 	["Які біологічні фактори впливають на лабораторні показники?"
	,"Фізіологічні."
	,"Патологічні."
	,"Методи дослідження."
 	,"A"
 	,"B"
 	],
 	//732
 	["Які соціальні фактори впливають на лабораторні показники?"
	,"Спосіб життя та харчування."
	,"Професія та шкідливі звички."
	,"Рівень знань пацієнта з медицини."
 	,"A"
 	,"B"
 	],
 	//733
 	["Які обов'язкові умови необхідні для правильної інтерпретації результатів лабораторного дослідження?"
	,"Правильний вибір матеріалу."
	,"Точне виконання методу дослідження."
	,"Достатній рівень знань клініциста про зміни лабораторних показників за різноманітних ситуацій в організмі і механізми їх розвитку."
	,"Правильне зберігання матеріалу."
 	,"C"
 	],
 	//734
 	["Як впливають лікарські препарати на досліджуваний об'єкт (кров, сечу і т.д.)?"
	,"Змінюють кількісний і якісний склад клітинних елементів."
	,"Змінюють фізико-хімічні властивості досліджуваного матеріалу."
	,"Змінюють кількість біологічного матеріалу."
 	,"A"
 	,"B"
 	],
 	//735
 	["Яких правил необхідно дотримуватись при одержанні крові для загального клінічного аналізу?"
	,"Знезаразити та просушити місце для проколу."
	,"Зробити прокол на глибину 3 - 4 мм так, щоб кров витікала самопливом."
	,"Зняти першу краплю крові, з наступних набрати кров для дослідження."
	,"Використати якісні реактиви та посуд."
	,"Взяти кров для дослідження в будь-який час."
 	,"A"
 	,"B"
 	,"C"
 	,"D"
 	],
 	//736
 	["Яких помилок найчастіше припускаються при визначенні гемоглобіну?"
	,"Використовують неякісні розчини."
	,"Не дотримують певного співвідношення між реактивом та кров'ю у досліджуваному зразку."
	,"Неправильно розраховують та будують калібрувальний графік."
	,"Досліджують кров після 24 годин від часу її одержання у пацієнта."
	,"Неправильно тлумачать результат дослідження."
 	,"A"
 	,"B"
 	,"C"
 	,"D"
 	],
 	//737
 	["Які помилки трапляються при підрахунку еритроцитів?"
	,"Неправильне взяття та підготування крові для аналізу."
	,"Порушення схеми підрахунку елементів у лічильній камері."
	,"Неправильне тлумачення результатів."
 	,"A"
 	,"B"
 	],
 	//738
 	["Назвіть можливі джерела помилок при апаратних методах підрахунку формених елементів крові?"
	,"Неправильне настроювання приладів."
	,"Порушення правил приготування та використання розбавляючих розчинів."
	,"Неправильне тлумачення результатів."
 	,"A"
 	,"B"
 	],
 	//739
 	["Як уникнути грубих помилок при підрахунку ретикулоцитів?"
	,"Підрахувати 1000 еритроцитів і серед них відзначити ретикулоцити (по Фоніо)."
	,"Застосовувати підрахунок у лічильній камері."
	,"Рахувати по полях зору."
 	,"A"
 	],
 	//740
 	["Які причини помилок можливі при визначенні колірного показника (КП)?"
	,"Неправильне визначення кількості еритроцитів."
	,"Неправильне визначення концентрації гемоглобіну."
	,"Неправильне визначення ШОЕ."
 	,"A"
 	,"B"
 	],
 	//741
 	["Які джерела помилок можливі при підрахунку лейкоцитів у лічильній камері?"
	,"Неправильне співвідношення об'ему крові та оцтової кислоти, неправильно приготовлений розчин оцтової кислоти."
	,"Тривале перебування крові в оцтовій кислоті і неправильне заповнення камери."
	,"Неякісне миття камери після попередньої проби."
	,"Підрахунок в недостатній кількості квадратів."
	,"Підрахунок у камері Фукса-Розенталя."
 	,"A"
 	,"B"
 	,"C"
 	,"D"
 	],
 	//742
 	["Які помилки трапляються при одержанні кісткового мозку для лабораторного дослідження?"
	,"Велика домішка крові."
	,"Неправильна інтерпретація результатів."
	,"Влучення голки в неуражені патологічним процесом ділянки кісткового мозку."
 	,"A"
 	,"C"
 	],
 	//743
 	["Що призводить до помилок при інтерпретації гематологічних показників?"
	,"Визначення тільки трьох показників крові (гемоглобін, лейкоцити, ШОЕ)."
	,"Визначення тільки гемоглобіну."
	,"Відсутність підрахунку диференційованої лейкограми та зіставлень з клінічними даними."
	,"Наявність у хворого лихоманки."
 	,"A"
 	,"B"
 	,"C"
 	],
 	//744
 	["Що може вплинути на результати мікроскопічного дослідження сечі?"
	,"Неправильне підготування хворого."
	,"Неправильне збирання сечі та осаду."
	,"Недотримання методів консервації, термінів зберігання сечі."
	,"Наявність ферментурії."
 	,"A"
 	,"B"
 	,"C"
 	],
 	//745
 	["Які джерела помилок часто трапляються при визначенні здатності нирок концентрувати і розводити сечу?"
	,"Порушення хворим режиму прийому рідини та їжі."
	,"Порушення інтервалу між збиранням окремих порцій сечі."
	,"Відсутність належного контролю за точністю урометру."
	,"Прийом хворим сечогінних препаратів."
	,"Застосування інструментальних методів дослідження."
 	,"A"
 	,"B"
 	,"C"
 	,"D"
 	],
 	//746
 	["Які помилки трапляються при визначенні активності ферментів у сечі?"
	,"Неправильне збирання та зберігання сечі."
	,"Прийом хворим лікарських препаратів."
	,"Визначення активності ферментів за наявності гематурії, лейкоцитурії і бактеріурії."
	,"Наявність циліндрурії."
 	,"A"
 	,"B"
 	,"C"
 	],
 	//747
 	["Які причини помилок трапляються при тлумаченні результатів дослідження сечі?"
	,"Недооцінка показників."
	,"Переоцінка показників."
	,"Порушення хворим звичного режиму прийому рідини та їжі."
 	,"A"
 	,"B"
 	],
 	//748
 	["Чим обумовлені помилки при трактуванні цитограми?"
	,"Подібністю клітин патологічного процесу до клітин у стані дистрофії і проліферації."
	,"Недостатнім досвідом роботи лікаря-лаборанта."
	,"Незнанням морфологічних особливостей патологічного процесу."
	,"Незнанням морфологічних особливостей клітинних елементів в нормі."
	,"Результатами інших видів досліджень."
 	,"A"
 	,"B"
 	,"C"
 	,"D"
 	],
 	//749
 	["Що утруднює діагностику пухлин при цитологічному дослідженні?"
	,"Відсутність у пухлинних клітин характерних ознак, властивих тільки для них."
	,"Неадекватний матеріал та неякісне фарбування препаратів."
	,"Наявність у цитограмі елементів туберкульозної гранульоми."
 	,"A"
 	,"B"
 	],
 	//750
 	["Чим обумовлені помилки при цитологічній діагностиці пухлин?"
	,"Неякісним фарбуванням препаратів."
	,"Наявністю метаплазованих клітин."
	,"Наявністю клітин у стані проліферації."
	,"Неадекватним методом фарбування."
	,"Неінформативним матеріалом."
 	,"A"
 	,"B"
 	,"C"
 	,"D"
 	],
 	//751
 	["Чим обумовлені помилки при диференціальній діагностиці доброякісних і злоякісних пухлин?"
	,"Високим ступенем диференціації злоякісної пухлини."
	,"Неправильним одержанням матеріалу."
	,"Неякісним фарбуванням препаратів."
 	,"A"
 	],
 	//752
 	["Наявність яких клітин призводить до помилкової діагностики аденокарциноми?"
	,"Лімфоцитів."
	,"Клітин циліндричного епітелію в стані проліферації та груп і структур з них."
	,"Гістіоцитів."
 	,"B"
 	],
 	//753
 	["Наявність яких клітин у цитограмі призводить до помилкової діагностики дрібноклітинного недиференційованого раку?"
	,"Лімфоцитів."
	,"Метаплазованих клітин."
	,"Гістіоцитів."
	,"Елементів циліндричного епітелію."
 	,"A"
 	,"B"
 	,"D"
 	],
 	//754
 	["Яких правил необхідно дотримуватись, щоб уникнути або зменшити кількість помилок при цитологічному дослідженні?"
	,"Правильно одержувати, готувати для дослідження і маркувати матеріал."
	,"Правильно готувати препарати для цитологічного дослідження і якісно фарбувати їх."
	,"Добре знати морфологічні характеристики нормальних клітин, ознаки проліферайії, дисплазій та злоякісності."
 	,"B"
 	,"C"
 	],
 	//755
 	["Чим обумовлені помилки при діагностиці раку шийки матки?"
	,"Неправильним одержанням матеріалу та неякісно приготованими препаратами."
	,"Відсутністю злоякісно змінених клітин у цитограмі."
	,"Недостатньою кваліфікацією лікаря-лаборанта."
 	,"A"
 	,"C"
 	],
 	//756
 	["Що найчастіше призводить до помилок у діагностиці раку шийки матки?"
	,"Неправильне взяття матеріалу, неякісно приготовлені та фарбовані препарати."
	,"Відсутність пухлини у хворої."
	,"Недостатня кваліфікація лікаря-лаборанта."
 	,"A"
 	,"C"
 	],
 	//757
 	["Які клітини можуть бути прийняті за ракові в пунктаті заднього склепіння вагіни ?"
	,"Клітини циліндричного епітелію з ознаками проліферації."
	,"Клітини з дистрофічними змінами (персневидні)."
	,"Фібробласти та фіброцити."
	,"Лімфоцити та метаплазовані клітини."
 	,"A"
 	,"B"
 	,"D"
 	],
 	//758
 	["Які клітини можуть бути помилково прийняті за елементи плоскоклітинного раку в матеріалі зі шлунка?"
	,"Метаплазовані клітини циліндричного епітелію."
	,"Елементи циліндричного епітелію з ознаками проліферації."
	,"Рослинні клітини."
	,"Лімфоцити."
 	,"A"
 	,"B"
 	],
 	//759
 	["Які клітини можуть бути помилково прийняті за клітини добре диференційованої аденокарциноми у матеріалі з кишечника?"
	,"Клітини плоского епітелію."
	,"Клітини циліндричного епітелію з ознаками різко вираженої проліферації."
	,"Гістіоцити."
	,"Лімфоцити."
 	,"B"
 	],
 	//760
 	["Що найчастіше призводить до помилок при цитологічній діагностиці пухлин сечового міхура ?"
	,"Незнання морфологічної характеристики та особливостей пухлин даної локалізації."
	,"Незнання нормальної морфологічної характеристики елементів перехідного епітелію."
	,"Високий рівень знань клініциста з діагностики нефрологічних хвороб."
	,"Відсутність клініко-лабораторних зіставлень."
 	,"A"
 	,"B"
 	,"D"
 	],
 	//761
 	["Що призводить до помилок при мікроскопічному дослідженні ексудатів і транссудатів?"
	,"Мінливість мезотелію."
	,"Дистрофічні зміни в клітинах мезотелію."
	,"Проліферація мезотелію."
	,"Схожість елементів мезотелію з іншими епітеліальними елементами."
	,"Дотримання правил одержання рідин та приготування препаратів для мікроскопічного дослідження."
 	,"A"
 	,"B"
 	,"C"
 	,"D"
 	],
 	//762
 	["Що є найчастішою причиною помилкових висновків при мікроскопічному дослідженні вмісту кіст?"
	,"Товсті та неякісно фарбовані препарати."
	,"Дистрофічні зміни в клітинах."
	,"Неправильно зібрана рідина."
	,"Відсутність хімічного дослідження вмісту кіст."
 	,"A"
 	,"B"
 	,"C"
 	],
 	//763
 	["Яка з причин може призвести до помилки при трактуванні результатів дослідження матеріалу з пухлини, у клітинах якої міститься пігмент?"
	,"Незнання цитологічних ознак злоякісності."
	,"Відсутність дослідження на залізо і меланін."
	,"Наявність у препаратах кристалів холестерину."
 	,"A"
 	,"B"
 	],
 	//764
 	["Які помилки можуть бути при лабораторних дослідженнях?"
	,"Методичні."
	,"Випадкові."
	,"Наукові."
	,"Систематичні."
	,"Технічні."
 	,"A"
 	,"B"
 	,"D"
 	,"E"
 	],
 	//765
 	["Вимоги до контролю за якістю "
	,"Контроль за якістю має бути внутрішньолабораторним."
	,"Контроль за якістю має бути систематичним."
	,"Контроль за якістю має бути об'єктивним."
 	,"B"
 	,"C"
 	]

];