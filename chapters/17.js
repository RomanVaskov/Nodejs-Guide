export default `
<h3>17. Package.json</h3>

<p>При работе с JavaScript и Node.js вы наверняка встретите файл <span>package.json</span>. 

<p>Что это такое? Что вы должны о не знать? И что вы можете с ним делать? 

<p><span>package.json</span> - это своего рода манифест проекта. Он может делать много вещей, совершенно не связанных между собой. Он, например, может служить главным файлом для настроек используемых инструментов. В нем также хранятся названия и версии всех установленных пакетов (эта информация используется <span>npm</span> и <span>yarn</span>). 

<h5>Структура файла</h5>

<p>Вот пример <span>package.json</span>:

<code>
{}
</code>

<p>Как видите, он пустой. К содержанию <span>package.json</span> не предъявляется никаких требований. Единственным требованием является его формат (JSON), в противном случае, программы не смогут получить к нему доступ. 

<p>Если вы создаете Node.js-пакет, который планируете распространять через <span>npm</span>, ситуация кардинально меняется. В этом случае вам необходимо добавить свойства, которые помогут другим людям использовать пакет. Мы рассмотрим чуть это позже. 

<p>Вот еще один пример <span>package.json</span>:

<code>
"name": "test-project"
</code>

<p>Здесь мы определили название пакета или приложения, находящего в той же директории, что и <span>package.json</span>. 

<p>Вот пример более сложного <span>package.json</span>, позаимствованного из Vue.js-приложения:

<code>
{
  "name": "test-project",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "main": "src/main.js",
  "private": true,
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "unit": "jest --config test/unit/jest.conf.js --coverage",
    "test": "npm run unit",
    "lint": "eslint --ext .js,.vue src test/unit",
    "build": "node build/build.js"
  },
  "dependencies": {
    "vue": "^2.5.2"
  },
  "devDependencies": {
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-eslint": "^8.2.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-jest": "^21.0.2",
    "babel-loader": "^7.1.1",
    "babel-plugin-dynamic-import-node": "^1.2.0",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-es2015-modules-commonjs": "^6.26.0",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-plugin-transform-vue-jsx": "^3.5.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "chalk": "^2.0.1",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.28.0",
    "eslint": "^4.15.0",
    "eslint-config-airbnb-base": "^11.3.0",
    "eslint-friendly-formatter": "^3.0.0",
    "eslint-import-resolver-webpack": "^0.8.3",
    "eslint-loader": "^1.7.1",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-vue": "^4.0.0",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^1.1.4",
    "friendly-errors-webpack-plugin": "^1.6.1",
    "html-webpack-plugin": "^2.30.1",
    "jest": "^22.0.4",
    "jest-serializer-vue": "^0.3.0",
    "node-notifier": "^5.1.2",
    "optimize-css-assets-webpack-plugin": "^3.2.0",
    "ora": "^1.2.0",
    "portfinder": "^1.0.13",
    "postcss-import": "^11.0.0",
    "postcss-loader": "^2.0.8",
    "postcss-url": "^7.2.1",
    "rimraf": "^2.6.0",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "uglifyjs-webpack-plugin": "^1.1.1",
    "url-loader": "^0.5.8",
    "vue-jest": "^1.0.2",
    "vue-loader": "^13.3.0",
    "vue-style-loader": "^3.0.1",
    "vue-template-compiler": "^2.5.2",
    "webpack": "^3.6.0",
    "webpack-bundle-analyzer": "^2.9.0",
    "webpack-dev-server": "^2.9.1",
    "webpack-merge": "^4.1.0"
  },
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": ["> 1%", "last 2 versions", "not ie <= 8"]
}
</code>

<p>Здесь много всего:

<ul>
    <li><span>name</span> - название приложения/пакета</li>
    <li><span>version</span> - версия приложения/пакета</li>
    <li><span>description</span> - краткое описание приложения/пакета</li>
    <li><span>main</span> - главный файл (точка входа) приложения</li>
    <li><span>private</span> - значение <span>true</span> предотвращает случайную публикацию приложения в <span>npm</span></li>
    <li><span>scripts</span> - набор скриптов (команд), которые можно запускать (выполнять)</li>
    <li><span>dependencies</span> - зависимости проекта</li>
    <li><span>devDependencies</span> - зависимости проекта, используемые в целях разработки</li>
    <li><span>engines</span> - версии, на которых работает приложение/пакет</li>
    <li><span>browserlist</span> - поддерживаемые браузеры (и их версии)</li>
</ul>

<p>Все эти свойства используются <span>npm</span>. 

<h5>Свойства</h5>

<p>В этом разделе мы поговорим о некоторых свойствах, которые вы можете использовать. Мы будем использовать термин "пакет", однако большая часть из сказанного также справедлива по отношению к приложениям. 

<p>Большинство свойств нужны для публикации пакета в <span>npm</span>, некоторые - для взаимодействия с пакетом. 

<h5>Название (имя)</h5>

<p>Определяет название пакета. 

<p>Например: 

<code>
"name": "test-project"
</code>

<p>Имя не должно превышать 214 символов, не должно содержать пробелов, может состоять только из строчных букв (нижний регистр), дефисов (-) и нижнего подчеркивания (_). 

<p>Это обусловлено тем, что при публикации в <span>npm</span> пакету присваивается URL на основе имени. 

<p>Если пакет размещен на GitHub, хорошей практикой считается указание ссылки на репозиторий. 

<h5>Автор</h5>

<p>Определяет автора пакета. 

<p>Например: 

<code>
{
    "author": "Joe <joe@whatever.com> (https://whatever.com)"
}
</code>

<p>или так:

<code>
{
  "author": {
    "name": "Joe",
    "email": "joe@whatever.com",
    "url": "https://whatever.com"
  }
}
</code>

<h5>Соавторы</h5>

<p>Определяет одного или более соавторов пакета. Данное свойство представляет собой массив из строк. 

<p>Например:

<code>
{
  "contributors": ["Joe <joe@whatever.com> (https://whatever.com)"]
}
</code>

<p>или так: 

<code>
{
  "contributors": [
    {
      "name": "Joe",
      "email": "joe@whatever.com",
      "url": "https://whatever.com"
    }
  ]
}
</code>

<h5>Ошибки</h5>

<p>Определяет ссылку на инструкцию по решению распространенных проблем - трекер ошибок (issue tracker) GitHub. 

<p>Например:

<code>
{
  "bugs": "https://github.com/whatever/package/issues"
}
</code>

<h5>Домашняя страница</h5>

<p>Определяет адрес домашней страницы. 

<p>Например:

<code>
{
  "homepage": "https://whatever.com/package"
}
</code>

<h5>Версия</h5>

<p>Определяет текущую версию пакета. 

<p>Например: 

<code>
"version": "1.0.0"
</code>

<p>Данное свойство следует стандарту семантического версионирования. Это означает, что оно всегда должно состоять из трех чисел, разделенных точками: <span>x.x.x</span>. 

<p>Первая цифра - мажорная (основная, главная) версия, вторая - минорная, третья - патч. 

<p>Каждая цифра имеет определенный смысл: обновление с целью устранения ошибок - это патч, релиз обратно совместимых изменений - это минорный релиз, мажорный релиз может означать несовместимые с предыдущей версией изменения. 

<h5>Лицензия</h5>

<p>Определяет лицензию пакета. 

<p>Например: 

<code>
"license": "MIT"
</code>

<h5>Ключевые слова</h5>

<p>Данное свойство представляет собой массив ключевых слов, ассоциируемых с пакетом. 

<p>Например:

<code>
"keywords": [
  "email",
  "machine learning",
  "ai"
]
</code>

<p>Они помогают людям в поиске конкретного пакета. 

<h5>Описание</h5>

<p>Определяет краткое описание пакета. 

<p>Например: 

<code>
"description": "A package to work with strings"
</code>

<p>При публикации пакета в <span>npm</span> данное свойство помогает людям понять, для чего нужен пакет. 

<h5>Репозиторий</h5>

<p>Определяет, где находится исходный код пакета. 

<p>Например:

<code>
"repository": "github:whatever/testing",
</code>

<p>Обратите внимание на префикс <span>github</span>. Существует и другие подобные сервисы:

<code>
"repository": "gitlab:whatever/testing",
</code>

<code>
"repository": "bitbucket:whatever/testing",
</code>

<p>Вы также можете определить систему контроля версий:

<code>
"repository": {
  "type": "git",
  "url": "https://github.com/whatever/testing.git"
}
</code>

<p>Вы можете указать несколько систем контроля версий:

<code>
"repository": {
  "type": "svn",
  "url": "..."
}
</code>

<h5>main</h5>

<p>Определет главный файл (точку входа) пакета. 

<p>При импорте пакета в приложение, именно в этом файле приложение будет искать экспортируемые модули. 

<p>Например: 

<code>
"main": "src/main.js"
</code>

<h5>private</h5>

<p>Установка данному свойству значения <span>true</span> предотвращает случайную публикацию пакета в <span>npm</span>. 

<p>Например: 

<code>
"private": true 
</code>

<h5>scripts</h5>

<p>Определяет список команд (скриптов), которые можно выполнять (запускать). 

<p>Например: 

<code>
"scripts": {
  "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
  "start": "npm run dev",
  "unit": "jest --config test/unit/jest.conf.js --coverage",
  "test": "npm run unit",
  "lint": "eslint --ext .js,.vue src test/unit",
  "build": "node build/build.js"
}
</code>

<p>Эти скрипты являются приложениями командной строки. Вы можете запускать их с помощью <span>npm run XXXX</span> или <span>yarn run XXXX</span>, где <span>XXXX</span> - это название команды. Например: <span>npm run dev</span>. 

<p>В качестве названия команды можно использовать любое имя, скрипт выполнит все, что вы в нем укажете. 

<h5>Зависимости (dependencies)</h5>

<p>Определяет список зависимостей пакета. 

<p>При установке пакета с помощью npm или yarn: 

<code>
npm install <PACKAGENAME>
yarn add <PACKAGENAME>
</code>

<p>запись об этом пакете будет автоматически добавлена в рассматриваемое свойство. 

<p>Например: 

<code>
"dependencies": {
  "vue": "^2.5.2"
}
</code>

<h5>devDependencies</h5>

<p>Определяет список зависимостей пакета, используемых при разработке. 

<p>Они отличаются от <span>dependencies</span>, поскольку устанавливаются только на компьютере разработчика, и не попадают в продакшн. 

<p>При установке пакета с помощью npm или yarn:

<code>
npm install --save-dev <PACKAGENAME>
yarn add --save-dev <PACKAGENAME>
</code>

<p>запись о нем автоматически добавляется в рассматриваемое свойство. 

<p>Например:

<code>
"devDependencies": {
  "autoprefixer": "^7.1.2",
  "babel-core": "^6.22.1"
}
</code>

<h5>engines</h5>

<p>Определяет, на каких версиях Node.js или других инструментов работает пакет/приложение. 

<p>Например:

<code>
"engines": {
  "node": ">= 6.0.0",
  "npm": ">= 3.0.0",
  "yarn": "^0.13.0"
}  
</code>

<h5>browserlist</h5>

<p>Определяет список поддерживаемых браузеров (и их версий). Эта информация используется Babel, Autoprefixer и другими инструментами для создания полифилов и обеспечения совместимости с указанными браузерами. 

<p>Например: 

<code>
"browserslist": [
  "> 1%",
  "last 2 versions",
  "not ie <= 8"
]    
</code>

<p>Данная настройка означает, что вы хотите поддерживать две последние версии всех браузеров, которыми пользуется более 1% людей по статистике <a href="https://caniuse.com/">CanIUse</a>, за исключением IE8 и более старых версий. 

<h5>Специальные свойства</h5>

<p><span>package.json</span> может содержать специальные свойства для таких инструментов, как Babel, ESLint и т.п. 

<p>Каждый из этих инструментов имеет собственные свойства, например, <span>eslintConfig</span>, <span>babel</span> и проч. Подробности о специальных свойствах смотрите в соответствующей документации. 

<h5>Версии пакета</h5>

<p>В приведенных выше примерах вы наверняка заметили записи вроде этих: <span>~3.0.0</span>, <span>^0.13.0</span>. Что они означают? И какие еще спецификаторы версий можно использовать? 

<p>Данные спецификаторы используются для определения условий обновления. 

<p>Правила следующие: 

<ul>
    <li><span>~</span> - запись <span>~0.13.0</span> означает, что допустимы лишь патчевые обновления, т.е. релиз <span>0.13.1</span> допустим, а релиз <span>0.14.0</span> нет</li>
    <li><span>^</span> - запись <span>^0.13.0</span> означает, что допустимы патчевые и минорные обновления</li>
    <li><span>*</span> - запись <span>*</span> означает, что допустимы любые обновления</li>
    <li><span>&gt;</span> - допустимы любые новые версии</li>
    <li><span>&gt;=</span> - допустимы аналогичная или более новые версии</li>
    <li><span>&lt;=</span> - допустимы аналогичная или более старые версии</li>
    <li><span>&lt;</span> - допустимы любые более старые версии</li>
</ul>

<p>Вот еще парочка правил:

<ul>
    <li>без символа в начале - допустима только указанная версия</li>
    <li><span>latest</span> - допустима только последняя версия</li>
</ul>

<p>Указанные символы можно комбинировать различными способами, например: <span>1.0.0 || >=1.1.0 <1.2.0</span>. 
`