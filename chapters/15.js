export default `
<h3>15. Установка пакетов</h3>

<p>При установке пакетов с помощью <span>npm</span> можно выбрать два типа установки:

<ul>
    <li>локальную</li>
    <li>глобальную</li>
</ul>

<p>По умолчанию, когда вы вводите <span>npm install</span>, например:

<code>
npm install lodash 
</code>

<p>пакет устанавливается в папку <span>node_modules</span> в текущей директории. 

<p>После установки, <span>npm</span> добавляет запись о <span>lodash</span> в раздел <span>dependencies</span> файла <span>package.json</span> в текущей директории. 

<p>Для глобальной установки следует использовать флаг <span>-g</span>: 

<code>
npm install -g lodash 
</code>

<p>При глобальной установке пакет устанавливается не в текущую директорию, а в глобальную. 

<p>Но куда именно? 

<p>Для определения этого необходимо выполнить команду <span>npm root -g</span>. 

<p>На macOS или Linux такой директорией может быть <span> /usr/local/lib/node_modules</span>. На Windows - <span>C:\Users\YOU\AppData\Roaming\npm\node_modules</span>. 

<p>При использовании <span>nvm</span> для управления версиями Node.js эта директория будет другой. 
`