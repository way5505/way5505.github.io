# Дмитрий Каптуревский — портфолио

Адаптивная страница по макету V2. Чтобы открыть её на компьютере, дважды нажми `index.html`. Сайт работает в браузере, достаточно распаковать архив целиком.

## Публикация на GitHub Pages

1. Создай публичный репозиторий `ТВОЙ-ЛОГИН.github.io`, подставив свой логин GitHub. Если такой репозиторий уже занят, можно использовать публичный репозиторий `portfolio`. Тогда ссылка будет `https://ТВОЙ-ЛОГИН.github.io/portfolio/`. [Инструкция GitHub](https://docs.github.com/en/pages/quickstart)
2. В репозитории нажми **Add file → Upload files** и загрузи содержимое распакованного архива. Файл `index.html` должен лежать в корне рядом со `styles.css`, `site.js` и папкой `assets`. Нажми **Commit changes**. [Загрузка файлов](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
3. Открой **Settings → Pages**. Выбери **Deploy from a branch**, ветку `main` и папку **/(root)**. Нажми **Save**. После публикации кнопка **Visit site** появится в разделе **Pages**. [Настройка публикации](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
4. Скопируй адрес с `github.io` в резюме и сопроводительные письма.

## Где править содержимое

- `index.html` содержит тексты, карточки и кнопку Telegram. Сейчас она ведёт на `https://t.me/waydzn`.
- Чтобы заменить заглушку, добавь изображение кейса в `assets`, обнови `src` и мобильный `srcset` в соответствующей карточке. Обнови подпись и `alt`, убери метку «Заглушка» у готового кейса.
- `styles.css` содержит сетку, оттенки и настройки для разных экранов. `site.js` управляет мобильным меню и эффектами при прокрутке.
- Веб-версия использует Oswald для заголовков и Inter для текста. Шрифты хранятся локально вместе с лицензией SIL OFL. Для веб-встраивания Coolvetica нужен соответствующий файл и права на его использование. [Лицензии Coolvetica](https://typodermicfonts.com/coolvetica/)
