export default `
<h3>24. Глобальные и локальные пакеты</h3>

<p>Основное отличие между локальными и глобальными пакетами состоит в следующем:

<ul>
  <li>локальные пакеты устанавливаются в директорию, в которой вы запускаете <span>npm install &lt;package-name&gt;</span>, и помещаются в папку <span>node_modules</span>, находящуюся в этой директории</li>
  <li>глобальные пакеты устанавливаются в определенное место вашей файловой системы (которое зависит от настроек), независимо от того, где вы запускаете <span>npm install -g &lt;package-name&gt;</span></li>
</ul>

<p>Так какой способ лучше выбрать? 

<p>Как правило, все пакеты устанавливаются локально. 

<p>Это позволяет гарантировать, что разные приложения на вашем компьютере смогут использовать нужные им версии пакетов. 

<p>Обновление глобального пакета приведет к использованию всеми проектами нового релиза, что может привести к кошмару с точки зрения поддержки, поскольку некоторые пакеты или их зависимости могут оказаться несовместимыми с этим релизом. 

<p>Все проекты должны иметь собственные локальные версии пакетов. Это может показаться пустой тратой ресурсов, но это минимальная плата за отсутвие негативных последствий. 

<p>Пакеты устанавливаются глобально, когда они предоставляют исполняемые команды, которые запускаются из командной строки (CLI) и используются в нескольких проектах. 

<p>Вы можете устанавливать исполняемые команды локально и запускать их с помощью <span>npx</span>, но в некоторых случаях все же лучше предпочесть глобальную установку. 

<p>Отличными примерами глобальных пакетов, которые могут быть вам известны, являются следующие: 

<ul>
  <li>npm</li>
  <li>create-react-app</li>
  <li>vue-cli</li>
  <li>grunt-cli</li>
  <li>mocha</li>
  <li>react-native-cli</li>
  <li>gatsby-cli</li>
  <li>forever</li>
  <li>nodemon</li>
</ul>

<p>Возможно, в вашей системе уже установлены какие-то глобальные пакеты. Вы можете увидеть список таких пакетов, запустив <span>npm list -g --depth 0</span>.
`