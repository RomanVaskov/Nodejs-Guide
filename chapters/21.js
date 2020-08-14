export default `
<h3>21. Обновление зависимостей</h3>

<p>При установке пакета с помощью <span>npm install &lt;package-name&gt;</span>, в папку <span>node_modules</span> загружается последняя доступная версия пакета, запись о пакете добавляется в <span>package.json</span> и <span>package-lock.json</span>, находящиеся в текущей директории. 

<p><span>npm</span> также устанавливает последние доступные версии зависимостей пакета. 

<p>Допустим, вы установили <span>cowsay</span>. 

<p>При выполнении <span>npm install cowsay</span> запись о пакете была добавлена в <span>package.json</span>: 

<code>
{
  "dependencies": {
    "cowsay": "^1.3.1"
  }
}
</code>

<p>А вот что было записано в <span>package-lock.json</span> (мы удалили некоторые вложенные зависимости для ясности): 

<code>
{
  "requires": true,
  "lockfileVersion": 1,
  "dependencies": {
    "cowsay": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/cowsay/-/cowsay-1.3.1.tgz",
      "integrity": "sha512-3PVFe6FePVtPj1HTeLin9v8WyLl+VmM1l1H/5P+BTTDkMAjufp+0F9eLjzRnOHzVAYeIYFF5po5NjRrgefnRMQ==",
      "requires": {
        "get-stdin": "^5.0.1",
        "optimist": "~0.6.1",
        "string-width": "~2.1.1",
        "strip-eof": "^1.0.0"
      }
    }
  }
}
</code>

Оба файла говорят нам, что мы установили <span>cowsay</span> версии <span>1.3.1</span>, правило обновления (<span>^1.3.1</span>) гласит, что нам подойдут патчевые и минорные релизы: <span>1.3.2, 1.4.0</span> и т.д. 

<p>Если появится новая минорная или патчевая версия, мы выполним <span>npm update</span>, и установленная версия обновится, в <span>package-lock.json</span> появится запись о новой версии. 

<p><span>package.json</span> не изменится. 

<p>Для того, чтобы увидеть новые релизы пакетов, необходимо выполнить <span>npm outdated</span>. 

<p>Вот список новых релизов пакетов из одного репозитория, который какое-то время не обновлялся:</p>

<img src="./img/21.png" />

<p>Некоторые из релизов являются мажорными. Запуск <span>npm update</span> не обновит такие пакеты. Мажорные релизы никогда не обновляются таким способом, поскольку они включают в себя несовместимые изменения, а <span>npm</span> заботится о работоспособности вашего приложения. 

<p>Для обновления мажорных версий всех пакетов, установите пакет <span>npm-check-updates</span> глобально: <span>npm i npm-check-updates -g</span> и запустите его: <span>ncu -u</span>. 

<p>Это обновит все правила обновлений пакетов, указанные в разделах <span>dependencies</span> и <span>devDependencies</span> файла <span>package.json</span> так, что <span>npm</span> сможет обновить их до новых мажорных версий. 

<p>После этого выполняем обновление: <span>npm update</span>.
`