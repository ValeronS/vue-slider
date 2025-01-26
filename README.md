__Это тестовое задание нужно сделать на Vue 3, полностью или частично используя
следующие технологии:__
- Composition API
- TS
- SCSS
- Swiper
- Pinia
- Composables
- Встроенные в браузер Window API

### Описание
Страница, на которой размещена карусель и панель управления контентом карусели.
Вёрстка должна быть адаптивна, как для ПК (width: 1920), так и для смартфонов (width:
375)

### Карусель
- только 3 слайда на экране и 2 в скрытой области;
- она не должна быть “бесконечной”;
- элементы управления (стрелки, точки) должны работать;
- листаться по 1 слайду;
- для мобильной версии: 1 слайд в видимой области.

__Карусель необходимо повторить с [макета](https://www.figma.com/design/5oWejS04hSSaHqKgehof97/Untitled?node-id=0-1&p=f&t=jWSkRmVxiz4bOK9A-0)__
__[Ассеты](https://drive.google.com/drive/folders/1XOrQDPWOHtlQVX63j280YVR5wrvqxBWo?usp=sharing)__


### Панель управления
Имеет свободный дизайн.
Панель управления должна представлять собой iframe, который ссылается на тот же
адрес, что и само приложение.
- Возможность редактирования текстов и имён пользователей на слайдах;
- Обновление контента должно быть моментальным (без кнопки сохранить);
- Сообщаться с родительским окном необходимо через messages доступных в API
window-объекта.

## Пояснительная записка
_Для работы tailwindcss установлены дев зависимости postcss и autoprefixer_

Ветка __[main](https://github.com/ValeronS/vue-slider/tree/main)__ содержит выполненные все требования задание с дополнительными фичами:
- добавлен __slideService__ для имитации взаимодействия с сервером
- добавлены кнопки в панель управления для имитации обмена данными с сервером (сохранение постов, сброс, получение ошибки)
- добавлена нотификация через работу стора
- как __composable__ реализовано взаимодействие экземпляров приложения - родительского и дочернего в __iframe__
- реализовано реактивное редактирование не только текста отзыва, но и имени автора

## В планах:
- реализовать бэкенд с сохранением данных в бд используя express + ts + prisma
- добавить сохранение изменений отдельного отзыва
- добавить удаление/добавление отзыва
- реализовать работу с картинками
- обновить tailwindcss до новой версии, что должно позволить избавиться от дев зависимостей postcss и autoprefixer