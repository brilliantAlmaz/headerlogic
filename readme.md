# Логика шапки

Результат можно посмотреть [здесь](https://brilliantalmaz.github.io/headerlogic/)

## Что использовалось

Все написано в чистом коде. Использовался SCSS(SASS) препроцессор для упрощенного написания стилей

## Ссылки
Все ссылки, предусмотренные на редирект пользователя во внутреннюю страницу вызывают alert в котором прописано, куда бы вела ссылка

## Как работают вкладки

### Десктоп

Кнопки и меню расположны внутри элемента _`<nav class="header__nav">`_ 
Кнопки описаны так:
```html 
<a href="action" class="header__navlink ">
   <img src="./img/nav/fire.svg" alt="" class="">
   <span class="">Акции</span>  
</a>
<a href="fire" class="header__navlink __haschildren __menuactivate">
   <img class="__menuactivate" src="./img/nav/thunder.svg" alt="">
   <span class="__menuactivate">Горячее предложение</span>
</a>
```
Сам элемент кнопки header__navlink, img с иконкой кнопки, span с текстом, у a href = элемент с каким id будет открываться. Если предусатривается открытие кнопкой вкладки, для всех элементов ,включая дочерних, приписывается класс __menuactivate. 


Вкладка меню прописывается в теге header__menu. Внутри него построена иерархия каждого элемента
```html
<div class="header__menuitem " id="catalog"> <!-- элемент меню с id равным href кнопки-->
   <div class="header__menuleft"> <!-- Левая колонка выбора.-->
      <a href="smartphones" class="header__menubtn active"> <!-- Кнопка левой колонки. Первая по умолчанию включена-->
         <img src="./img/cats/phone.svg" alt="" class="icon">
         <span>Смартфоны и гаджеты</span>
         <img src="./img/cats/chevron.svg" alt="" class="chevron">
      </a>
      <a href="laptop" class="header__menubtn">
         <img src="./img/cats/laptop.svg" alt="" class="icon"> <!-- Кнопка левой колонки.-->
         <span>Ноутбуки и компьютеры</span>
         <img src="./img/cats/chevron.svg" alt="" class="chevron">
      </a>
   </div>
   <div class="header__menucontent active" id="smartphones"> <!-- Шаблон тела меню, активна всегда-->
      <div class="header__menucol">  <!-- Первая колонка -->
         <div class="header__menutitle">Смартфоны</div>  <!-- название -->
         <a href="categorylink" class="header__menulink">  <!-- Ссылочный элемент -->
            <span class="text">Apple iPhone </span>
            <span class="q">123</span>
         </a>
         <a href="smartphones-gadjet" class="header__menulink __haschildren">  <!-- Каталогочный элемент. href = ссылка на элемент второго меню. класс __haschildren отвечает будет ли ссылка каталогом, соответственно скрывать ли chevron или нет -->
            <div class="textblock">
               <span class="text">Гаджеты </span>

               <span class="q">227</span>
            </div>
            <img src="./img/nav/child_chev.svg" alt="" class="child_chev">
         </a>
      </div>
      <div class="header__menucol _second" id="smartphones-gadjet">
         <div class="header__menutitle">Гаджеты</div> <!-- название -->
            <a href="categorylink" class="header__menulink">  <!-- Ссылочный элементание -->
               <span class="text">Смарт-часы
               </span>
               <span class="q">15</span>
            </a>
            <a href="categorylink" class="header__menulink">  <!-- Ссылочный элементание -->
               <span class="text">Смарт-кольца</span>
               <span class="q">34</span>
            </a>
         </div>
      </div>
   </div>
</div>
```

Процесс включения определенных прописана в script.js. Определяется href родителя (пусть будет parent), категория href в виде item1-item2: в родителе parent, в первой колонке item1, во второй колонке item2.

### Мобилка

Первые кнопки вкладок прописаны тут:
```html 
<div class="header__menubtns"> <!-- оболочка -->
   <a href="catalog" class="header__navlink __haschildren __menuactivate"> <!-- каталогочный элемент - __haschildren. href = id следующего вхождения -->
      <div class="textblock">
         <img src="./img/nav/burger.svg" alt="" class="">
         <span class="">Каталог</span>
      </div>
      <div class="chev">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M9 19L16 12L9 5" stroke="#343A3F" stroke-linecap="round"
               stroke-linejoin="round" />
         </svg>
      </div>
   </a>
   <a href="action" class="header__navlink "> <!-- ссылочный элемент -->
      <div class="textblock">
         <img src="./img/nav/fire.svg" alt="" class="">
         <span class="">Акции</span>
      </div>
      <div class="chev">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M9 19L16 12L9 5" stroke="#343A3F" stroke-linecap="round"
               stroke-linejoin="round" />
         </svg>
      </div>
   </a>
</div>
```

Логика построена внутри  `<div class="header__menu-inner">`, в ней хранятся все меню, которые есть в базе

Первое вхождение прописано в  `<div class="header__menuitemabs" id="catalog">`, где id  соответствует href кнопки

`<div class="header__menucol">` - Первое вхождение

`<div class="header__menucol _pre" id="catalog-new">` - Второе вхождение

`<div class="header__menucol _second" id="brands-headphones">` - Третье вхождение

## Анимации

* Все анимации наведения на элементы (ссылки, иконки) происаны в style.css через hover
* Анимация скролла (прискролле убираются элементы из шапки) - прописана через js 
* Для проверки анимации скролла, меняющий структуру шапки добавлен  пустой элемент `<section class="nothing"></section>` для того чтобы страница скроллилась. В style.css для него установлена высота в 1000px


## JS обработчики
* Для каждой кнопки стоят обработчик вызова меню
* Для изменения разрешения экрана стоит обработчик с вызовом сброса всех размеров (если в процессе они меняются) в значение по умолчанию.
* При скролле действуют две функции показа или сокрытия элементов шапки. На документ навешан обработчик события наведения. Чтобы при скролле и "пропаже" элементов шапки, при наведении на нее пользователь мог копаться в меню.
* Для всего документа стоит обработчик на клик - чтобы убратьменю по клику вне меню. 