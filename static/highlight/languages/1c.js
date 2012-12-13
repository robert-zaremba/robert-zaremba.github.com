/*
Language: 1C
Author: Yuri Ivanov <ivanov@supersoft.ru>
Contributors: Sergey Baranov <segyrn@yandex.ru>
*/

hljs.LANGUAGES['1c'] = function(){
  var IDENT_RE_RU = '[a-zA-Zа-яА-Я][a-zA-Z0-9_а-яА-Я]*';
  var OneS_KEYWORDS = {'возврат':1,'дата':1,'для':1,'если':1,'и':1,'или':1,'иначе':1,'иначеесли':1,'исключение':1,'конецесли':1,'конецпопытки':1,'конецпроцедуры':1,'конецфункции':1,'конеццикла':1,'константа':1,'не':1,'перейти':1,'перем':1,'перечисление':1,'по':1,'пока':1,'попытка':1,'прервать':1,'продолжить':1,'процедура':1,'строка':1,'тогда':1,'фс':1,'функция':1,'цикл':1,'число':1,'экспорт':1};
  var OneS_BUILT_IN = {'ansitooem':1,'oemtoansi':1,'ввестивидсубконто':1,'ввестидату':1,'ввестизначение':1,'ввестиперечисление':1,'ввестипериод':1,'ввестиплансчетов':1,'ввестистроку':1,'ввестичисло':1,'вопрос':1,'восстановитьзначение':1,'врег':1,'выбранныйплансчетов':1,'вызватьисключение':1,'датагод':1,'датамесяц':1,'датачисло':1,'добавитьмесяц':1,'завершитьработусистемы':1,'заголовоксистемы':1,'записьжурналарегистрации':1,'запуститьприложение':1,'зафиксироватьтранзакцию':1,'значениевстроку':1,'значениевстрокувнутр':1,'значениевфайл':1,'значениеизстроки':1,'значениеизстрокивнутр':1,'значениеизфайла':1,'имякомпьютера':1,'имяпользователя':1,'каталогвременныхфайлов':1,'каталогиб':1,'каталогпользователя':1,'каталогпрограммы':1,'кодсимв':1,'командасистемы':1,'конгода':1,'конецпериодаби':1,'конецрассчитанногопериодаби':1,'конецстандартногоинтервала':1,'конквартала':1,'конмесяца':1,'коннедели':1,'лев':1,'лог':1,'лог10':1,'макс':1,'максимальноеколичествосубконто':1,'мин':1,'монопольныйрежим':1,'названиеинтерфейса':1,'названиенабораправ':1,'назначитьвид':1,'назначитьсчет':1,'найти':1,'найтипомеченныенаудаление':1,'найтиссылки':1,'началопериодаби':1,'началостандартногоинтервала':1,'начатьтранзакцию':1,'начгода':1,'начквартала':1,'начмесяца':1,'начнедели':1,'номерднягода':1,'номерднянедели':1,'номернеделигода':1,'нрег':1,'обработкаожидания':1,'окр':1,'описаниеошибки':1,'основнойжурналрасчетов':1,'основнойплансчетов':1,'основнойязык':1,'открытьформу':1,'открытьформумодально':1,'отменитьтранзакцию':1,'очиститьокносообщений':1,'периодстр':1,'полноеимяпользователя':1,'получитьвремята':1,'получитьдатута':1,'получитьдокументта':1,'получитьзначенияотбора':1,'получитьпозициюта':1,'получитьпустоезначение':1,'получитьта':1,'прав':1,'праводоступа':1,'предупреждение':1,'префиксавтонумерации':1,'пустаястрока':1,'пустоезначение':1,'рабочаядаттьпустоезначение':1,'получитьта':1,'прав':1,'праводоступа':1,'предупреждение':1,'префиксавтонумерации':1,'пустаястрока':1,'пустоезначение':1,'рабочаядата':1,'разделительстраниц':1,'разделительстрок':1,'разм':1,'разобратьпозициюдокумента':1,'рассчитатьрегистрына':1,'рассчитатьрегистрыпо':1,'сигнал':1,'симв':1,'символтабуляции':1,'создатьобъект':1,'сокрл':1,'сокрлп':1,'сокрп':1,' сообщить':1,'состояние':1,'сохранитьзначение':1,'сред':1,'статусвозврата':1,'стрдлина':1,'стрзаменить':1,'стрколичествострок':1,'стрполучитьстроку':1,' стрчисловхождений':1,'сформироватьпозициюдокумента':1,'счетпокоду':1,'текущаядата':1,'текущеевремя':1,'типзначения':1,'типзначениястр':1,'удалитьобъекты':1,'установитьтана':1,'установитьтапо':1,'фиксшаблон':1,'формат':1,'цел':1,'шаблон':1};
  var DQUOTE =  {className: 'dquote',  begin: '""'};
  var STR_START = {
      className: 'string',
      begin: '"', end: '"|$',
      contains: [DQUOTE],
      relevance: 0
    };
  var STR_CONT = {
    className: 'string',
    begin: '\\|', end: '"|$',
    contains: [DQUOTE]
  };

  return {
    case_insensitive: true,
    defaultMode: {
      lexems: IDENT_RE_RU,
      keywords: {'keyword':OneS_KEYWORDS,'built_in':OneS_BUILT_IN},
      contains: [
        hljs.C_LINE_COMMENT_MODE,
        hljs.NUMBER_MODE,
        STR_START, STR_CONT,
        {
          className: 'function',
          begin: '(процедура|функция)', end: '$',
          lexems: IDENT_RE_RU,
          keywords: {'процедура': 1, 'экспорт': 1, 'функция': 1},
          contains: [
            {className: 'title', begin: IDENT_RE_RU},
            {
              className: 'tail',
              endsWithParent: true,
              contains: [
                {
                  className: 'params',
                  begin: '\\(', end: '\\)',
                  lexems: IDENT_RE_RU,
                  keywords: {'знач':1},
                  contains: [STR_START, STR_CONT]
                },
                {
                  className: 'export',
                  begin: 'экспорт', endsWithParent: true,
                  lexems: IDENT_RE_RU,
                  keywords: {'экспорт': 1},
                  contains: [hljs.C_LINE_COMMENT_MODE]
                }
              ]
            },
            hljs.C_LINE_COMMENT_MODE
          ]
        },
        {className: 'preprocessor', begin: '#', end: '$'},
        {className: 'date', begin: '\'\\d{2}\\.\\d{2}\\.(\\d{2}|\\d{4})\''}
      ]
    }
  };
}();
