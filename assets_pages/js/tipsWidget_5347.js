
var cookieName = 'tipsWidget';
var cityList = ['Абакан', 'Абан', 'Абатский', 'Абрамовский маяк', 'Агата', 'Агаякан', 'Агзу', 'Агинское', 'Агинское', 'Айхал', 'Акша', 'Акьяр', 'Алапаевск', 'Алатырь', 'Алдан', 'Алейская', 'Александров', 'Александров-Гай', 'Александровск-Сахалинский', 'Александровский Шлюз', 'Александровский з-д', 'Александровское', 'Александровское', 'Аллах-Юнь', 'Алтай', 'Алыгджер', 'Амазар', 'Амга', 'Амдерма', 'Анабар', 'Анадырь', 'Анапа', 'Андрея', 'Андрюшкино', 'Анна', 'Антипаюта', 'Анучино', 'Апатиты', 'Апука', 'Аргаяш', 'Арзгир', 'Арка', 'Армавир', 'Армань', 'Арсеньев', 'Артезиан', 'Артем', 'Артемовск', 'Артемовский', 'Архангельск', 'Архара', 'Аршан', 'Аскиз', 'Астраханка', 'Астрахань', 'Ахты', 'Ачинск', 'Аян', 'Бабаево', 'Бабушкин', 'Баган', 'Багдарин', 'Баево', 'Байдуков', 'Байкальск', 'Байкит', 'Бакалы', 'Бактор', 'Бакчар', 'Балаганск', 'Баладек', 'Балаково', 'Балахта', 'Балашов', 'Балей', 'Балтийск', 'Балыгычан', 'Барабаш', 'Барабинск', 'Бараниха', 'Баргузин', 'Баргузинский Заповедник    \t', 'Барзас', 'Барнаул', 'Батагай', 'Батагай-Алыта', 'Батамай', 'Батомга', 'Батурино', 'Бахта', 'Баяндай', 'Беклемишево', 'Белая Гора', 'Белая глина', 'Белгород', 'Белово', 'Белогорка', 'Белогорск', 'Белозерск', 'Белый Яр', 'Белый', 'Беля', 'Бердигестях', 'Березники', 'Березняки', 'Березовка', 'Березово', 'Березово', 'Бестяхск', 'Бея', 'Бийск', 'Бийск-Зональная', 'Бикин', 'Билибино', 'Биробиджан', 'Бирск', 'Бисер', 'Бисер', 'Бисерть', 'Бичевая', 'Бичура', 'Благовещенск', 'Благодарный', 'Богородское', 'Боготол', 'Богучаны', 'Бодайбо', 'Боковская', 'Бологое', 'Болотное', 'Болхов', 'Большая Глушица', 'Большая Лепринда', 'Большая Мурта', 'Большерецк', 'Большеречье', 'Большие Кайбицы', 'Большие Уки', 'Большое Голоустное', 'Большой Он', 'Большой Порог', 'Большой Улуй', 'Бомнак', 'Бор', 'Борзя', 'Борисоглебск', 'Борогонцы', 'Бохан', 'Бохапча', 'Братолюбовка', 'Братск', 'Братск', 'Бреды', 'Бродокалмак', 'Брохово', 'Брянск', 'Бугрино', 'Бугульма', 'Бугуруслан', 'Буденновск', 'Бузулук', 'Буй', 'Буйнакск', 'Букукун', 'Бурукан', 'Бухта Амбарчик', 'Бухта Провидения', 'Буяга', 'Быково', 'Бысса', 'Вайда Губа', 'Вал', 'Валькаркай', 'Ванавара', 'Ванжиль-Кынак', 'Ваховск', 'Великие Луки', 'Великий Новгород', 'Великий Устюг', 'Вельмо', 'Вельск', 'Венгерово', 'Верещагино', 'Верещагино', 'Верхневилюйск', 'Верхнее Дуброво', 'Верхнее Пенжино', 'Верхнеимбатск', 'Верхний Амыл', 'Верхний Баскунчак', 'Верхний Уфалей', 'Верхняя Гутара', 'Верхняя Тойма', 'Верхняя Томь', 'Верховье Умри', 'Верховье р. Лотты', 'Верховье', 'Верхотурье', 'Верхоянск', 'Верхоянский Перевоз', 'Веселая Горка', 'Весляна', 'Ветлуга', 'Викулово', 'Вилюйск', 'Винницы', 'Висим', 'Витим', 'Владивосток', 'Владикавказ', 'Владимир', 'Внуково', 'Водопадная', 'Вожега', 'Вознесенье', 'Волгоград', 'Волжская ГМО', 'Волово', 'Вологда', 'Волоколамск', 'Волосово', 'Волчиха', 'Воньеган', 'Воркута', 'Ворогово', 'Воронеж', 'Воскресенское', 'Восток', 'Восточная', 'Воткинск', 'Вохма', 'Вуктыл', 'Выборг', 'Выкса', 'Вытегра', 'Вышний Волочек', 'Вяземская', 'Вязники', 'Вязьма', 'Вятские Поляны', 'ГМО им. Е.К.Федорова', 'ГМО им. Е.Т.Кренкеля', 'Гагарин', 'Гайны', 'Гамов', 'Гари', 'Гвасюги', 'Гдов', 'Геленджик', 'Георгиевка', 'Гигант', 'Гижига', 'Глазов', 'Глубинное', 'Голышманово', 'Горекацан', 'Горин', 'Горно-Алтайск', 'Городище', 'Городовиковск', 'Горячий Ключ', 'Горячинск', 'Готня', 'Гоуджекит', 'Гридино', 'Грозный', 'Губа Дроздовка', 'Губаха', 'Гуга', 'Гусь-Хрустальный', 'Гыдоямо', 'Далматово', 'Дальнереченск', 'Даниловка', 'Дарасун', 'Даровское', 'Двинский Березняк', 'Дебессы', 'Делянкир', 'Демьянское', 'Депутатский', 'Дербент', 'Джалинда', 'Джалинда', 'Джана', 'Джарджан', 'Джека Лондона', 'Джикимда', 'Джубга', 'Дзержинское', 'Дивное', 'Дмитров', 'Дмитровск-Орловский', 'Дно', 'Довольное', 'Должанская', 'Долиновка', 'Домодедово', 'Доно', 'Дорожный', 'Дуван', 'Дудинка', 'Егорьевск', 'Ейск', 'Екатеринбург', 'Екатерино-Никольское', 'Елабуга', 'Елань', 'Елатьма', 'Елец', 'Емеск', 'Енисейск', 'Ербогачен', 'Ермаковское', 'Ерофей Павлович', 'Ершов', 'Ессей', 'Ефимовская', 'Ефремов', 'Железнодорожный', 'Жердевка', 'Жигалово', 'Жиганск', 'Жижгин', 'Жиздра', 'Жуковка', 'Забайкальск', 'Завитая', 'Залари', 'Замакта', 'Заметчино', 'Зареченск', 'Заринск', 'Зашеек', 'Заярск', 'Звериноголовское', 'Здвинск', 'Зерноград', 'Зея', 'Зилаир', 'Зима', 'Зимовники', 'Златоуст', 'Змеиногорск', 'Золотой', 'Зырянка', 'Иваново', 'Ивдель', 'Игарка', 'Игнашино', 'Игрим', 'Идринское', 'Ижевск', 'Ижма', 'Ика', 'Илирней', 'Иловля', 'Ильинский', 'Им. М.В. Попова', 'Им. Полины Осипенко', 'Им.Е.К.Федорова', 'Инга', 'Индига', 'Индигирская', 'Инза', 'Инсар', 'Иоли', 'Ирбейское', 'Ирбит-Фомино', 'Иркутск', 'Исилькуль', 'Исить', 'Искитим', 'Ича', 'Ишим', 'Иэма', 'Йошкар-Ола', 'Кабанск', 'Кавалерово', 'Казань', 'Казачинское', 'Казачинское', 'Казым', 'Казыр', 'Кайластуй', 'Калакан', 'Калач', 'Калачинск', 'Калгачиха', 'Калевала', 'Калининград', 'Калининск', 'Калуга', 'Каменск-Уральский', 'Каменск-Шахтинский', 'Каменское', 'Камень-на-Оби', 'Камышлов', 'Канадей', 'Канаш', 'Кандалакша', 'Каневка', 'Каневская', 'Канин Нос', 'Канку', 'Канск', 'Кантегир', 'Каньон', 'Карасук', 'Каратузское', 'Карафтит', 'Карачев', 'Каргасок', 'Каргат', 'Каргополь', 'Карпогоры', 'Карталы', 'Карымская', 'Катав-Ивановск', 'Катанда', 'Катугино', 'Кача', 'Качуг', 'Кашин', 'Кашира', 'Кашкаранцы', 'Кегали', 'Кедва-Вом', 'Кедон', 'Келлог', 'Кемерово', 'Кемчуг', 'Кемь-Порт', 'Кербо', 'Кизильское', 'Кизляр', 'Килеер', 'Кильмезь', 'Кингисепп', 'Кинешма', 'Киренск', 'Кириши', 'Киров', 'Кировский', 'Кирс', 'Кирсанов', 'Киселевск', 'Клин', 'Клухорский перевал', 'Ключи', 'Ключи', 'Ковда', 'Ковдор', 'Когалым', 'Кожевниково', 'Козыревск', 'Козьмодемьянск', 'Койнас', 'Колба', 'Колгуев Северный', 'Колежма', 'Колмъявр', 'Кологрив', 'Коломна', 'Колпашево', 'Колывань', 'Кольцово', 'Комака', 'Коммунар', 'Комрво', 'Комсомольск-на-Амуре', 'Комсомольский', 'Кондома', 'Кондопога', 'Конево', 'Константиновск', 'Конь-Колодезь', 'Коркодон', 'Корсаков', 'Корф', 'Коса', 'Кослан', 'Кострома', 'Котельнич', 'Коткино', 'Котлас', 'Кочево', 'Коченёво', 'Кочки', 'Кочубей', 'Кош-Агач', 'Крапивино', 'Красная Гора', 'Красногвардейское', 'Краснодар', 'Красное поселение', 'Красное', 'Красноозерск', 'Красноселькупск', 'Краснослободск', 'Красноуфимск', 'Краснощеково', 'Краснощелье', 'Красноярск', 'Красные Баки', 'Красный Кут', 'Красный Холм', 'Красный Чикой', 'Красный Яр', 'Красный Яр', 'Крест-Хальджай', 'Кресты Таймырские', 'Крестях', 'Крещенка', 'Кроноки', 'Кропоткин', 'Крымск', 'Ксеньевская', 'Кубанская', 'Куганаволок', 'Кудымкар', 'Кузедеево', 'Кузьмовка', 'Култук', 'Кулу', 'Кумены', 'Куминская', 'Кунгур', 'Купино', 'Кур', 'Курагино', 'Курган', 'Курейка', 'Курильск', 'Курск', 'Куртамыш', 'Курумкан', 'Курун-Урях', 'Кушва', 'Кущевская', 'Кызыл', 'Кызыл-Озек', 'Кыкер', 'Кыра', 'Кырен', 'Кытлым', 'Кыштовка', 'Кюсюр', 'Кяхта', 'Лабазная', 'Лаган', 'Лазо', 'Лаишево', 'Лальск', 'Ларьяк', 'Лебяжье', 'Лебяжье', 'Лев Толстой', 'Ленинское', 'Ленск', 'Лермонтовка', 'Лесозаводск', 'Леуши', 'Лешуконское', 'Ливны', 'Липецк', 'Лиски', 'Литке', 'Ловозеро', 'Лодейное поле', 'Локшак', 'Лопча', 'Лосиноборское', 'Лукоянов', 'Лысково', 'Лысьва', 'Льгов', 'М. Лопатка', 'Магадан', 'Магдагачи', 'Магнитогорск', 'Мадаун', 'Мазаново', 'Майкоп', 'Майск', 'Максатиха', 'Макушино', 'Малая кема', 'Малиново', 'Малоярославец', 'Малые Дербеты', 'Малые Кармакулы', 'Мама', 'Мангут', 'Маргаритово', 'Мариинск', 'Марково', 'Марресаля', 'Маслянино', 'Матвеев Курган', 'Махачкала', 'Мача', 'Маячный', 'Медвежьегорск', 'Междуреченск', 'Мезень', 'Мелеуз', 'Мельничное', 'Менза', 'Миасс', 'Миллерово', 'Мильково', 'Минеральные воды', 'Минусинск', 'Мирный', 'Михайловск', 'Мичуринск', 'Могзон', 'Могоча', 'Можайск', 'Можга', 'Моздок', 'Молодежная', 'Молчаново', 'Монды', 'Монерон', 'Мончегорск', 'Мопау', 'Моржовая', 'Моржовец', 'Морки', 'Морозовск', 'Моршанск', 'Мосальск', 'Мосеево', 'Москва', 'Мотыгино', 'Мошково', 'Мугур-Аксы', 'Мудьюг', 'Мужи', 'Мурманск', 'Мурмаши', 'Муслюмово', 'Мутный Материк', 'Мухоршибирь', 'Мценск', 'Мыс Алевина', 'Мыс Африка', 'Мыс Белый Нос', 'Мыс Биллингса', 'Мыс Братьев', 'Мыс Кигилях', 'Мыс Костантиновский', 'Мыс Микулкин', 'Мыс Озерный', 'Мыс Салаурова', 'Мыс Стерлигова', 'Мыс Терпения', 'Мыс Уэлен', 'Мыс Шмидта', 'Нагорный', 'Нагорское', 'Надым', 'Назарово', 'Назимово', 'Называевск', 'Нальчик', 'Намцы', 'Напас', 'Наро-Фоминск', 'Нарьян-Мар', 'Находка', 'Начики', 'Невельск', 'Невинномыск', 'Невьянск', 'Нелькан', 'Немчиновка', 'Ненастная', 'Неожиданный', 'Нера', 'Нерой', 'Нерчинск', 'Нерчинский Завод', 'Несь', 'Нефтеюганск', 'Ниванкуль', 'Нижне-Тамбовское', 'Нижне-Усинское', 'Нижнеангарск', 'Нижневартовск', 'Нижнесортымск', 'Нижнеудинск', 'Нижнеянск', 'Нижний Новгород', 'Нижний Тагил', 'Нижний Цасучей', 'Нижний Чир', 'Нижняя Пеша', 'Никель', 'Николаевск-на-Амуре', 'Николаевская', 'Николо-Полома', 'Никольск', 'Никольское', 'Ничатка', 'Новая Ладога', 'Новиково', 'Ново-Александровск', 'Ново-Иерусалим', 'Ново-Касторное', 'Новобирилюссы', 'Новокузнецк', 'Новолазаревская', 'Новороссийск', 'Новоселенгинск', 'Новосибирск', 'Новочунка', 'Новый Васюган', 'Новый Оскол', 'Новый Порт', 'Новый Торьял', 'Новый Уренгой', 'Ноглики', 'Ножовка', 'Нолинск', 'Нора', 'Норильск', 'Норск', 'Ноябрьск', 'Ныврово', 'Ныда', 'Нюрба', 'Нюя', 'Нязепетровск', 'Няксимволь', 'Няндома', 'Обловка', 'Облучье', 'Обоянь', 'Обская ГМО', 'Обьячево', 'Огурцово', 'Одесское', 'Озерки', 'Озерная', 'Озеро Таймыр', 'Озинки', 'Оймякон', 'Октябрьская', 'Октябрьское', 'Окунев Нос', 'Ола', 'Олекминск', 'Оленек', 'Оленья Речка', 'Оловянная', 'Олонец', 'Ольга', 'Омолон', 'Омск', 'Омсукчан', 'Онгудай', 'Онега', 'Опарино', 'Опочка', 'Орджоникидзевская', 'Ордынское', 'Орел', 'Оренбург', 'Орлик', 'Орлинга', 'Оса', 'Оссора', 'Осташков', 'Остров  Айон', 'Остров  Валаам', 'Остров  Вилькицкого', 'Остров  Голомянный', 'Остров  Русский', 'Остров  Спафарьева', 'Остров  Харлов', 'Остров Большой Ушканий', 'Остров Большой Шантар', 'Остров Визе', 'Остров Врангеля', 'Остров Диксон', 'Остров Котельный', 'Остров Преображения', 'Остров Тюлений', 'Острова Дунай', 'Острова Известий', 'Острова Челно-Вершины', 'Оха', 'Оханск', 'Охотничий', 'Охотск', 'Охотский Перевоз', 'Павелец', 'Павлово', 'Павловск', 'Павловский Посад', 'Павловское', 'Павлоградка', 'Паданы', 'Падун', 'Палана', 'Палатка', 'Памятная', 'Пангоды', 'Парабель', 'Партизанск', 'Пачелма', 'Певек', 'Пенза', 'Первомайское', 'Первомайское', 'Перелюб', 'Переславль-Залесский', 'Пермь', 'Петровск', 'Петровский Завод', 'Петрозаводск', 'Петрокрепость', 'Петропавловка', 'Петропавловск-Камчатский', 'Петропавловский Маяк', 'Петрунь', 'Петухово', 'Петушки', 'Печора', 'Пильво', 'Пинега', 'Пионерский', 'Пировское', 'Питляр', 'Погиби', 'Пограничное', 'Пограничный', 'Подгорное', 'Покровка', 'Покровская', 'Полигус', 'Половинное', 'Полтавка', 'Полтавка', 'Полуй', 'Полярный', 'Полярный', 'Помоздино', 'Понил', 'Поныри', 'Поронайск', 'Посевная', 'Поспелиха', 'Посьет', 'Пошехонье-Володарск', 'Поярково', 'Преображение', 'Приаргунск', 'Приволжск', 'Приморско-Ахтарск', 'Пролив Санникова', 'Промышленная', 'Прохладная', 'Прохоркино', 'Псков', 'Пугачев', 'Пудино', 'Пудож', 'Пустошь', 'Пушкинские Горы', 'Пущино', 'Пыщуг', 'Пялица', 'Пятигорск', 'Ра-Из', 'Радужный', 'Разнаволок', 'Реболы', 'Ребриха', 'Ревда', 'Ремонтное', 'Ржев', 'Родино', 'Родниковая', 'Романовка', 'Рославль', 'Ростов', 'Ростов-на-Дону', 'Рощино', 'Рощиной', 'Ртищево', 'Рубцовск', 'Рудная Пристань', 'Русская Поляна', 'Рыбинск', 'Рыльск', 'Ряжск', 'Рязань', 'Салемал', 'Салехард', 'Самара', 'Самарка', 'Санага', 'Сангары', 'Санкт-Петербург', 'Саныяхтат', 'Саранпауль', 'Саранск', 'Сарапул', 'Саратов', 'Саргатское', 'Саров', 'Сарыг-Сеп', 'Саскылах', 'Сасово', 'Светлоград', 'Светлолобово', 'Светлый', 'Свиягино', 'Свободный', 'Святой Нос', 'Северное', 'Северо-Енисейск', 'Северо-Курильск', 'Северодвинск', 'Североуральск', 'Сегежа', 'Сеген-Кюель', 'Сегжема', 'Сеймчан', 'Сектагли', 'Селты', 'Семячик', 'Сенгейский Шар', 'Сергач', 'Сергеевка', 'Сергокала', 'Серов', 'Серов', 'Серпухов', 'Сеяха', 'Сидоровск', 'Симушир', 'Сковородино', 'Славгород', 'Славянск-на-Кубани', 'Сладково', 'Слаутное', 'Смидович', 'Смоленск', 'Советск', 'Советская Гавань', 'Советская Речка', 'Совхоз Эльген', 'Совхоз им.Ленина', 'Сого-Хая', 'Солекуль', 'Солнечная', 'Соловьевск', 'Солонешное', 'Сопочная карга', 'Сортавала', 'Сосновка', 'Сосновка', 'Сосново', 'Сосново-Озерское', 'Сосуново', 'Сосьва', 'Софийский Прииск', 'Сочи (Адлер)', 'Спас-Деменск', 'Среднеколымск', 'Средний Васюган', 'Средний Калар', 'Средникан', 'Средняя Олекма', 'Сретенск', 'Ставрополь', 'Старица', 'Старица', 'Старый Оскол', 'Степановка', 'Стерлитамак', 'Столб', 'Стрелка', 'Сузун', 'Сукпай', 'Сунтар', 'Суон-Тит', 'Суоярви', 'Сура', 'Сургут', 'Сусуман', 'Сухана', 'Сухиничи', 'Сухобузимское', 'Сызрань', 'Сыктывкар', 'Сым', 'Сысерть', 'Сытомино', 'Таборы', 'Тавда', 'Таганрог', 'Таежная', 'Тазовский', 'Тайга', 'Тайгонос', 'Таймылыр', 'Тайшет', 'Таксимо', 'Талая', 'Талон', 'Тальменка', 'Тамбей', 'Тамбов', 'Тангуй', 'Танхой', 'Танюрер', 'Тара', 'Тарко-Сале', 'Тасеево', 'Тасса', 'Татарск', 'Таурово', 'Таштып', 'Тверь', 'Теви', 'Тевриз', 'Тегульдет', 'Тегультя', 'Телемба', 'Темников', 'Теплый Ключ', 'Тереховка', 'Териберка', 'Терней', 'Тетюши', 'Тивяку', 'Тигиль', 'Тикси', 'Тилишма', 'Тим', 'Тимирязевский', 'Тисуль', 'Тихвин', 'Тихорецк', 'Тобольск', 'Тогул', 'Тогучин', 'Токо', 'Толмачево', 'Толька', 'Тольятти', 'Томмот', 'Томпа', 'Томпо', 'Томск', 'Тонгулах', 'Тоора-Хем', 'Топки', 'Торбеево', 'Торжок', 'Торопец', 'Тотьма', 'Третьяково', 'Троицк', 'Троицко-Печорское', 'Троицкое', 'Троицкое', 'Трубчевск', 'Туапсе', 'Тугулым', 'Тула', 'Тулун', 'Тума', 'Туманная', 'Тумнин', 'Тунгокочен', 'Тунка', 'Туой-Хая', 'Тупик', 'Тура', 'Турий Рог', 'Туринск', 'Турочак', 'Туруханск', 'Турчасово', 'Тутончаны', 'Тында', 'Тырка', 'Тюкалинск', 'Тюмень', 'Тюмети', 'Тюхтет', 'Тяжин', 'Тяня', 'Уакит', 'Убинское', 'Угино', 'Углегорск', 'Угловское', 'Угут', 'Удское', 'Уега', 'Ужаниха', 'Ужур', 'Улан-Удэ', 'Улеты', 'Улья', 'Ульяновск', 'Умба', 'Унеча', 'Уни', 'Ура-Губа', 'Урми', 'Уруп', 'Урюпинск', 'Усолье-Сибирское', 'Усть-Антосе', 'Усть-Баргузин', 'Усть-Воямполка', 'Усть-Заза', 'Усть-Илимск', 'Усть-Ишим', 'Усть-Кабырза', 'Усть-Камо', 'Усть-Камчатск', 'Усть-Кан', 'Усть-Кара', 'Усть-Кара', 'Усть-Каренга', 'Усть-Кокса', 'Усть-Кулом', 'Усть-Кут', 'Усть-Лабинск', 'Усть-Мая', 'Усть-Миль', 'Усть-Мома', 'Усть-Нюкжа', 'Усть-Озерное', 'Усть-Олой', 'Усть-Омчуг', 'Усть-Ордынский', 'Усть-Тарка', 'Усть-Уда', 'Усть-Умальта', 'Усть-Уса', 'Усть-Уса', 'Усть-Хайрюзово', 'Усть-Цильма', 'Усть-Чаркы', 'Усть-Юдома', 'Усугли', 'Уфа', 'Ухта', 'Учами', 'Учур', 'Ушки', 'Уяр', 'Фролово', 'Хабардино', 'Хабаровск', 'Хабары', 'Хакасская', 'Хамар-Дабан', 'Ханты-Мансийск', 'Харабали', 'Хасавюрт', 'Хатанга', 'Хатырык-Хомо', 'Хвалынск', 'Хейджан', 'Хилок', 'Хову-Аксы', 'Ходовариха', 'Холмогоры', 'Холмск', 'Хорей-Вер', 'Хоринск', 'Хороль', 'Хоседа-Хард', 'Хуларин', 'Хулугли', 'Цакир', 'Целина', 'Целинное', 'Целинное', 'Центральный рудник', 'Цимлянск', 'Циммермановка', 'Цып-Наволок', 'Чаваньга', 'Чадан', 'Чаингда', 'Чайковский', 'Чаны', 'Чара', 'Чарышское', 'Чаун', 'Чебоксары', 'Чекунда', 'Челябинск', 'Чемал', 'Чемдальск', 'Чемурнаут', 'Червянка', 'Чердынь', 'Черемушки', 'Черемхово', 'Черемхово', 'Череповец', 'Черкесск', 'Черлак', 'Чермоз', 'Чернушка', 'Чернышевский', 'Черняево', 'Черняховск', 'Черский', 'Чертково', 'Черусти', 'Чистоозерное', 'Чистополь', 'Чита', 'Чокурдах', 'Чугуевка', 'Чулпаново', 'Чулым', 'Чульман', 'Чумикан', 'Чумпурук', 'Чурапча', 'Чюльбю', 'Шабалино', 'Шадринск', 'Шаим', 'Шалинское', 'Шамары', 'Шангалы', 'Шарыпово', 'Шарья', 'Шатрово', 'Шахты', 'Шахунья', 'Шебалино', 'Шевли', 'Шелаболиха', 'Шелагонцы', 'Шелехова', 'Шелопугино', 'Шенкурск', 'Шербакуль', 'Шереметьево', 'Шилка', 'Шимановск', 'Шира', 'Шойна', 'Шумиха', 'Шумиха', 'Щетинкино', 'Ыныкчан', 'Ытык-Кель', 'Эгвекинот', 'Эйк', 'Экимчан', 'Элиста', 'Эльтон', 'Энгозеро', 'Энкан', 'Эньмувеем', 'Эрзин', 'Эссо', 'Югоренок', 'Южно-Курильск', 'Южно-Сахалинск', 'Южно-Сухокумск', 'Южноуральск', 'Юильск', 'Юмурчен', 'Юрга', 'Юрты', 'Юрьев-Польский', 'Юрьевец', 'Юста', 'Юшкозеро', 'Ягодное', 'Яйлю', 'Яковлевка', 'Якутск', 'Якша', 'Ялуторовск', 'Ямкун', 'Янаул', 'Янискоски', 'Янов Стан', 'Янск', 'Яранск', 'Яренск', 'Ярольин', 'Ярославль', 'Ярцево', 'Яшкуль', 'Яя'];
var peoples = [{
    "fio": "Иноземцева Надежда",
    "image": "/assets_pages/img/women/women1.jpg",
    "sex": 0
}, {
    "fio": "Тотенкова Регина",
    "image": "/assets_pages/img/women/women2.jpg",
    "sex": 0
}, {
    "fio": "Курдина Эмилия",
    "image": "/assets_pages/img/women/women3.jpg",
    "sex": 0
}, {
    "fio": "Стаина Анна",
    "image": "/assets_pages/img/women/women4.jpg",
    "sex": 0
}, {
    "fio": "Чуличкова Анастасия",
    "image": "/assets_pages/img/women/women5.jpg",
    "sex": 0
}, {
    "fio": "Шеркова Евгения",
    "image": "/assets_pages/img/women/women6.jpg",
    "sex": 0
}, {
    "fio": "Андрюхина Нина",
    "image": "/assets_pages/img/women/women7.jpg",
    "sex": 0
}, {
    "fio": "Катериночкина Анфиса",
    "image": "/assets_pages/img/women/women8.jpg",
    "sex": 0
}, {
    "fio": "Головина Анна",
    "image": "/assets_pages/img/women/women9.jpg",
    "sex": 0
}, {
    "fio": "Чупрова Екатерина",
    "image": "/assets_pages/img/women/women10.jpg",
    "sex": 0
}, {
    "fio": "Холопова Виктория",
    "image": "/assets_pages/img/women/women11.jpg",
    "sex": 0
}, {
    "fio": "Крупина Мария",
    "image": "/assets_pages/img/women/women12.jpg",
    "sex": 0
}, {
    "fio": "Полевщикова Кристина",
    "image": "/assets_pages/img/women/women13.jpg",
    "sex": 0
}, {
    "fio": "Пьянкова Диана",
    "image": "/assets_pages/img/women/women14.jpg",
    "sex": 0
}, {
    "fio": "Буланова Яна",
    "image": "/assets_pages/img/women/women15.jpg",
    "sex": 0
}, {
    "fio": "Цейдлерина Мария",
    "image": "/assets_pages/img/women/women16.jpg",
    "sex": 0
}, {
    "fio": "Щеголева Светлана",
    "image": "/assets_pages/img/women/women17.jpg",
    "sex": 0
}, {
    "fio": "Янкелевич Алина",
    "image": "/assets_pages/img/women/women18.jpg",
    "sex": 0
}, {
    "fio": "Якушевич Наталья",
    "image": "/assets_pages/img/women/women19.jpg",
    "sex": 0
}, {
    "fio": "Фомичева Диана",
    "image": "/assets_pages/img/women/women20.jpg",
    "sex": 0
}, {
    "fio": "Пережогина Виктория",
    "image": "/assets_pages/img/women/women21.jpg",
    "sex": 0
}, {
    "fio": "Ячменькова Василиса",
    "image": "/assets_pages/img/women/women22.jpg",
    "sex": 0
}, {
    "fio": "Рябова Дарья",
    "image": "/assets_pages/img/women/women23.jpg",
    "sex": 0
}, {
    "fio": "Домышева Юлия",
    "image": "/assets_pages/img/women/women24.jpg",
    "sex": 0
}, {
    "fio": "Милова Татьяна",
    "image": "/assets_pages/img/women/women25.jpg",
    "sex": 0
}, {
    "fio": "Шипицына Анна",
    "image": "/assets_pages/img/women/women26.jpg",
    "sex": 0
}, {
    "fio": "Протасова Евгения",
    "image": "/assets_pages/img/women/women27.jpg",
    "sex": 0
}, {
    "fio": "Молодыха Алиса",
    "image": "/assets_pages/img/women/women28.jpg",
    "sex": 0
}, {
    "fio": "Коржева Ксения",
    "image": "/assets_pages/img/women/women29.jpg",
    "sex": 0
}, {
    "fio": "Кузнецова Вероника",
    "image": "/assets_pages/img/women/women30.jpg",
    "sex": 0
}, {
    "fio": "Сукина Алиса",
    "image": "/assets_pages/img/women/women31.jpg",
    "sex": 0
}, {
    "fio": "Перова ﻿Агата",
    "image": "/assets_pages/img/women/women32.jpg",
    "sex": 0
}, {
    "fio": "Коржакова Ольга",
    "image": "/assets_pages/img/women/women33.jpg",
    "sex": 0
}, {
    "fio": "Ёжина Вероника",
    "image": "/assets_pages/img/women/women34.jpg",
    "sex": 0
}, {
    "fio": "Абрамович Валентина",
    "image": "/assets_pages/img/women/women35.jpg",
    "sex": 0
}, {
    "fio": "Крылова Наталья",
    "image": "/assets_pages/img/women/women36.jpg",
    "sex": 0
}, {
    "fio": "Проскуркина Александра",
    "image": "/assets_pages/img/women/women37.jpg",
    "sex": 0
}, {
    "fio": "Терехова Юлия",
    "image": "/assets_pages/img/women/women38.jpg",
    "sex": 0
}, {
    "fio": "Труфанова Варвара",
    "image": "/assets_pages/img/women/women39.jpg",
    "sex": 0
}, {
    "fio": "Батурина Марина",
    "image": "/assets_pages/img/women/women40.jpg",
    "sex": 0
}, {
    "fio": "Васнецова Нина",
    "image": "/assets_pages/img/women/women41.jpg",
    "sex": 0
}, {
    "fio": "Перевалова Надежда",
    "image": "/assets_pages/img/women/women42.jpg",
    "sex": 0
}, {
    "fio": "Рошета Любовь",
    "image": "/assets_pages/img/women/women43.jpg",
    "sex": 0
}, {
    "fio": "Мосякова Татьяна",
    "image": "/assets_pages/img/women/women44.jpg",
    "sex": 0
}, {
    "fio": "Носова Анастасия",
    "image": "/assets_pages/img/women/women45.jpg",
    "sex": 0
}, {
    "fio": "Типалова Юнона",
    "image": "/assets_pages/img/women/women46.jpg",
    "sex": 0
}, {
    "fio": "Колесникова Инесса",
    "image": "/assets_pages/img/women/women47.jpg",
    "sex": 0
}, {
    "fio": "Якуничева Анна",
    "image": "/assets_pages/img/women/women48.jpg",
    "sex": 0
}, {
    "fio": "Левина Евгения",
    "image": "/assets_pages/img/women/women49.jpg",
    "sex": 0
}, {
    "fio": "Агафонова Виктория",
    "image": "/assets_pages/img/women/women50.jpg",
    "sex": 0
}, {
    "fio": "Дуркина Антонина",
    "image": "/assets_pages/img/women/women51.jpg",
    "sex": 0
}, {
    "fio": "Игошина Мария",
    "image": "/assets_pages/img/women/women52.jpg",
    "sex": 0
}, {
    "fio": "Званцова Светлана",
    "image": "/assets_pages/img/women/women53.jpg",
    "sex": 0
}, {
    "fio": "Хлопонина Елена",
    "image": "/assets_pages/img/women/women54.jpg",
    "sex": 0
}, {
    "fio": "Суботина Изабелла",
    "image": "/assets_pages/img/women/women55.jpg",
    "sex": 0
}, {
    "fio": "Дроздова Марфа",
    "image": "/assets_pages/img/women/women56.jpg",
    "sex": 0
}, {
    "fio": "Милютина Изабелла",
    "image": "/assets_pages/img/women/women57.jpg",
    "sex": 0
}, {
    "fio": "Гнусарева Ангелина",
    "image": "/assets_pages/img/women/women58.jpg",
    "sex": 0
}, {
    "fio": "Домаш Вячеслав",
    "image": "/assets_pages/img/men/men1.jpg",
    "sex": 1
}, {
    "fio": "Лагутов Руслан",
    "image": "/assets_pages/img/men/men2.jpg",
    "sex": 1
}, {
    "fio": "Степанков Радислав",
    "image": "/assets_pages/img/men/men3.jpg",
    "sex": 1
}, {
    "fio": "Перешивкин Ростислав",
    "image": "/assets_pages/img/men/men4.jpg",
    "sex": 1
}, {
    "fio": "Кобзев Платон",
    "image": "/assets_pages/img/men/men5.jpg",
    "sex": 1
}, {
    "fio": "Кабанов Игнатий",
    "image": "/assets_pages/img/men/men6.jpg",
    "sex": 1
}, {
    "fio": "Чепурин Николай",
    "image": "/assets_pages/img/men/men7.jpg",
    "sex": 1
}, {
    "fio": "Крымов Изяслав",
    "image": "/assets_pages/img/men/men8.jpg",
    "sex": 1
}, {
    "fio": "Собчак Евгений",
    "image": "/assets_pages/img/men/men9.jpg",
    "sex": 1
}, {
    "fio": "Былинкин Максим",
    "image": "/assets_pages/img/men/men10.jpg",
    "sex": 1
}, {
    "fio": "Архипов Сергей",
    "image": "/assets_pages/img/men/men11.jpg",
    "sex": 1
}, {
    "fio": "Донцов Самсон",
    "image": "/assets_pages/img/men/men12.jpg",
    "sex": 1
}, {
    "fio": "Стаин Владилен",
    "image": "/assets_pages/img/men/men13.jpg",
    "sex": 1
}, {
    "fio": "Лызлов Владислав",
    "image": "/assets_pages/img/men/men14.jpg",
    "sex": 1
}, {
    "fio": "Ягужинский Аристарх",
    "image": "/assets_pages/img/men/men15.jpg",
    "sex": 1
}, {
    "fio": "Фризов Владимир",
    "image": "/assets_pages/img/men/men16.jpg",
    "sex": 1
}, {
    "fio": "Крупнов Дмитрий",
    "image": "/assets_pages/img/men/men17.jpg",
    "sex": 1
}, {
    "fio": "Ябловский Вадим",
    "image": "/assets_pages/img/men/men18.jpg",
    "sex": 1
}, {
    "fio": "Гусенков Самсон",
    "image": "/assets_pages/img/men/men19.jpg",
    "sex": 1
}, {
    "fio": "Панфёров Семён",
    "image": "/assets_pages/img/men/men20.jpg",
    "sex": 1
}, {
    "fio": "Ясинский Павел",
    "image": "/assets_pages/img/men/men21.jpg",
    "sex": 1
}, {
    "fio": "Тетерев Глеб",
    "image": "/assets_pages/img/men/men22.jpg",
    "sex": 1
}, {
    "fio": "Шлыков Николай",
    "image": "/assets_pages/img/men/men23.jpg",
    "sex": 1
}, {
    "fio": "Козлов Илья",
    "image": "/assets_pages/img/men/men24.jpg",
    "sex": 1
}, {
    "fio": "Амалиев Максим",
    "image": "/assets_pages/img/men/men25.jpg",
    "sex": 1
}, {
    "fio": "Паулкин Ефим",
    "image": "/assets_pages/img/men/men26.jpg",
    "sex": 1
}, {
    "fio": "Колганов Герман",
    "image": "/assets_pages/img/men/men27.jpg",
    "sex": 1
}, {
    "fio": "Саламатов Николай",
    "image": "/assets_pages/img/men/men28.jpg",
    "sex": 1
}, {
    "fio": "Сподарев Степан",
    "image": "/assets_pages/img/men/men29.jpg",
    "sex": 1
}, {
    "fio": "Бочкарёв Владимир",
    "image": "/assets_pages/img/men/men30.jpg",
    "sex": 1
}, {
    "fio": "Опекунов Вячеслав",
    "image": "/assets_pages/img/men/men31.jpg",
    "sex": 1
}, {
    "fio": "Телицын Тимофей",
    "image": "/assets_pages/img/men/men32.jpg",
    "sex": 1
}, {
    "fio": "Ямлиханов Андрей",
    "image": "/assets_pages/img/men/men33.jpg",
    "sex": 1
}, {
    "fio": "Малиновский Владислав",
    "image": "/assets_pages/img/men/men34.jpg",
    "sex": 1
}, {
    "fio": "Гребнев Ростислав",
    "image": "/assets_pages/img/men/men35.jpg",
    "sex": 1
}, {
    "fio": "Кузанов Леонид",
    "image": "/assets_pages/img/men/men36.jpg",
    "sex": 1
}, {
    "fio": "Ягфаров Серафим",
    "image": "/assets_pages/img/men/men37.jpg",
    "sex": 1
}, {
    "fio": "Цитников Всеволод",
    "image": "/assets_pages/img/men/men38.jpg",
    "sex": 1
}, {
    "fio": "Владимиров Артём",
    "image": "/assets_pages/img/men/men39.jpg",
    "sex": 1
}, {
    "fio": "Банин Александр",
    "image": "/assets_pages/img/men/men40.jpg",
    "sex": 1
}, {
    "fio": "Капица Кирилл",
    "image": "/assets_pages/img/men/men41.jpg",
    "sex": 1
}, {
    "fio": "Колбин Клавдий",
    "image": "/assets_pages/img/men/men42.jpg",
    "sex": 1
}, {
    "fio": "Володин Зиновий",
    "image": "/assets_pages/img/men/men43.jpg",
    "sex": 1
}, {
    "fio": "Уланов Иван",
    "image": "/assets_pages/img/men/men44.jpg",
    "sex": 1
}, {
    "fio": "Седых Кирилл",
    "image": "/assets_pages/img/men/men45.jpg",
    "sex": 1
}, {
    "fio": "Туровский Лев",
    "image": "/assets_pages/img/men/men46.jpg",
    "sex": 1
}, {
    "fio": "Яснов Ефим",
    "image": "/assets_pages/img/men/men47.jpg",
    "sex": 1
}, {
    "fio": "Москвин ﻿Артем",
    "image": "/assets_pages/img/men/men48.jpg",
    "sex": 1
}, {
    "fio": "Измайлов Герман",
    "image": "/assets_pages/img/men/men49.jpg",
    "sex": 1
}, {
    "fio": "Цыганов Егор",
    "image": "/assets_pages/img/men/men50.jpg",
    "sex": 1
}, {
    "fio": "Голумбовский Дмитрий",
    "image": "/assets_pages/img/men/men51.jpg",
    "sex": 1
}, {
    "fio": "Аничков Кирилл",
    "image": "/assets_pages/img/men/men52.jpg",
    "sex": 1
}, {
    "fio": "Канаш Степан",
    "image": "/assets_pages/img/men/men53.jpg",
    "sex": 1
}, {
    "fio": "Клепахов Дмитрий",
    "image": "/assets_pages/img/men/men54.jpg",
    "sex": 1
}, {
    "fio": "Колесников Анатолий",
    "image": "/assets_pages/img/men/men55.jpg",
    "sex": 1
}, {
    "fio": "Цветков Леонид",
    "image": "/assets_pages/img/men/men56.jpg",
    "sex": 1
}, {
    "fio": "Мишин Ефим",
    "image": "/assets_pages/img/men/men57.jpg",
    "sex": 1
}, {
    "fio": "Борисов Митрофан",
    "image": "/assets_pages/img/men/men58.jpg",
    "sex": 1
}];

for (var k in peoples){
    var isRemove = false;
    if (caGender=='man' && peoples[k].sex==0){
        isRemove = true;
    } else if (caGender=='woman' && peoples[k].sex==1){
        isRemove = true;
    }
    if (isRemove){
        delete(peoples[k]);
    }
}
peoples = peoples.filter(function(value){
    return typeof value!='undefined';
});
peoples = shuffleArray(peoples);
cityList = shuffleArray(cityList);
timers = [ 10, 25, 60, 90, 180, 240 ];

$(function(){

    if (typeof $.cookie(cookieName)=='undefined'){
        cityList[0] = cityFirst;
        $.cookie(cookieName, 1, { expires: 365});
    }

    var peopleCounter = 0,
        cityCounter = 0,
        timeoutId1 = null;

    var tipsShow = function(){

        clearTimeout(timeoutId1);

        var block = $("#order-float-widget"),
            peopleBlock = $("._name", block),
            cityBlock = $("._city", block),
            priceBlock = $("._price", block),
            peopleVal = peoples[peopleCounter],
            cityVal = cityList[cityCounter],
            priceVal = priceDefault * 1;

        peopleBlock.text(peopleVal.fio);
        cityBlock.text(cityVal);
        priceBlock.text(priceVal);

        block.fadeIn("normal", function(){
            var elem = $(this);
            var interval = setInterval(function(){
                elem.fadeOut();
                clearInterval(interval);
            }, 6000);
        });
        peopleCounter++;
        cityCounter++;
        if (peopleCounter==peoples.length) {
            peopleCounter = 0;
        }
        if (cityCounter==cityList.length) {
            cityCounter = 0;
        }

        if($('.widget-tips-stock').length>0){
            var count = parseInt( $('.widget-tips-stock').first().text() );
            if(count>1){
                count--;
                $('.widget-tips-stock').text(count);
                if(count===1) $('.widget-tips-stock').parent().css('background', "red");
            }
        }

        if(timers.length>0)
            timeroutId1 = setTimeout(tipsShow, timers.shift() * 1000);

    };


    if(timers.length>0)
        timeroutId1 = setTimeout(tipsShow, timers.shift() * 1000);

});

