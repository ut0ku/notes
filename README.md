Практика 13
Реализовано веб-приложение с регистрированием Service Worker, кэшированием статических ресурсов, сохранением данных в localStorage и работе при отсутсвии сети.
Запуск
<img width="1908" height="882" alt="image" src="https://github.com/user-attachments/assets/e8f49136-36d5-4e34-b87e-189281a57cd8" />

Проверка сохранения данных в localStorage
<img width="981" height="871" alt="image" src="https://github.com/user-attachments/assets/cba1ac13-7915-4bcc-8e00-7418ae27d93f" />

Отключение сети (эмуляция оффлайна)
<img width="628" height="159" alt="image" src="https://github.com/user-attachments/assets/987b8476-2216-4db7-8f3a-e5dcd0ce878c" />

Добавление четвертой заметки с отсутсвием сети
<img width="1908" height="882" alt="image" src="https://github.com/user-attachments/assets/1ddc9f59-69db-4417-9bf4-9e48a34dfcd2" />

Проверка localStorage
<img width="979" height="862" alt="image" src="https://github.com/user-attachments/assets/bfc5dc36-1cc1-43a1-b097-9718fcc58be0" />

Практика 14
Создан и подключен файл manifest.json со всеми необходимыми полями, добавлены иконки, добавлены мета-теги, обновлен Service Worker.
<img width="1887" height="881" alt="image" src="https://github.com/user-attachments/assets/d4d49028-1f70-4dd9-9d4c-e8ead35880df" />

<img width="1567" height="967" alt="image" src="https://github.com/user-attachments/assets/5fe46353-cbcb-42f5-9699-a4929140196d" />

Практика 15
Приложение доработано с использованием App Shell, запущенно по https, при первом посещении кэшируются все статичные ресурсы, динамические страницы загружаются по системе Network First, добавлена страница "О приложении" с информацией о приложении. Также все приложение доступно оффлайн.

Страница "О приложении"
<img width="1887" height="881" alt="image" src="https://github.com/user-attachments/assets/23cd5e5c-1f47-462c-89bc-26b8fd544137" />

Service Worker активирован
<img width="983" height="691" alt="image" src="https://github.com/user-attachments/assets/ff271671-3783-44f4-bdac-08f78e64d675" />

Cache Storage
<img width="448" height="90" alt="image" src="https://github.com/user-attachments/assets/f843ba8a-91d6-4dd8-ae33-16b11c0cfe13" />

Добавление заметок без отключение интернета
<img width="1887" height="881" alt="image" src="https://github.com/user-attachments/assets/ba8a2a0d-8959-4fdc-9326-f898d52880d9" />

В оффлайн режиме
<img width="1887" height="881" alt="image" src="https://github.com/user-attachments/assets/f8764fa4-96ac-4597-9f2e-1dc109b016d9" />

Практика 16
Реализована серверная часть и установленны необходимые зависимости, сгенерированы VAPID ключи. В клиентской части была интегрированна библиотека Socket.IO и реализовано подключение к серверу, отправка событий newTask, показ всплывающего сообщения, реализованны функции "subscribeToPush" и "unsubscribeFromPush", добавлена кнопка влючения / выключение уведомлений.

После включения уведомлений, при добавлении заметки, появляется уведомление
<img width="1887" height="881" alt="image" src="https://github.com/user-attachments/assets/f0f30628-0b55-4803-bbc0-1f02858f2507" />

При выключенной кнопке "уведомления", уведомление не появляется
<img width="1887" height="881" alt="image" src="https://github.com/user-attachments/assets/3f92cd8a-fd9e-4ac6-b7fc-0dc29537232f" />

Практика 17
Реализована форма для заметки с напоминанием, у заметок появился уникальный идентификатор и поле 
reminder (timestamp). Реализовано планирование push-уведомлений с помощью setTimeout и хранинии активных таймеров. Добавлена кнопка "отложить на 5 минут" в уведомлении для переноса напоминания.

Добавление напомания
<img width="1284" height="386" alt="image" src="https://github.com/user-attachments/assets/a25a1a35-0fce-4523-ad4f-9dff0ddf2f87" />

Напоминание в списке
<img width="1261" height="457" alt="image" src="https://github.com/user-attachments/assets/462d4326-1229-45c8-b9d4-494e9baebbea" />

Показ напоминания
<img width="1908" height="882" alt="image" src="https://github.com/user-attachments/assets/5242f52a-d137-4652-a5bf-e57714f5f0f2" />

Показ напоминания после того, как оно было отложено на 5 минут
<img width="954" height="441" alt="msedge_9PjLQLaKXr" src="https://github.com/user-attachments/assets/ece098c1-cfc1-43ca-a1c0-e54f80ca4978" />

Работоспособность напоминания в приложении
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/84abf320-fec2-4203-9252-27d933b7fc68" />

Проверка напоминания с закрытым приложением
<img width="544" height="268" alt="image" src="https://github.com/user-attachments/assets/852f4066-d99d-422e-93c7-dc8bed19340f" />
