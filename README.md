# Help по сборке

_Высота шапки:_

-   https://www.liveresult.ru/football/Russia/First-League/results - 100
-   https://www.sports.ru/ - 250
-   https://www.championat.com/ - 200

По умолчанию делаем для LR

## Выбор площадки

площадка выбирается в index.html в тэге body

Классы для площадок:

    in-sports
    in-championat
    in-soccer
    LR - нет класса

    Чтобы убрать класс, достаточно его "испортить", я обычно добавляю единичку в конце

## Для контента:

В папке assets ищешь js (jназвание может варьировать), разминифицируешь его, ищешь объект и в нем ураганишь)))

## Ссылки

<a class="body-wrap" href="%reference%" target="%banner.target%"> - sports
<a class="body-wrap" href="%clickurl_1%" target="_blank"> - championat
<a class="body-wrap" href="%banner.reference_user1%" target="%banner.target%"> - soccer


## Для чемпионата:

Там ВООБЩЕ не используется API, так что делаем вот что:

1. сперва получаем объект из АПИ на локалке.
2. копируем его содержимое в preCapturedDATA (для этого DEVMODE должно быть равно 1)
3. Ставим CHAMPIONAT = 1
4. Комментируем в index.kit подключение autobet.js
5. Печатает...