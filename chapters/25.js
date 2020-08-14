export default `
<h3>25. dependencies и devDependencies</h3>

<p>При установке пакета посредством <span>npm install &lt;package-name&gt;</span>, вы устанавливаете его как зависимость (dependency). 

<p>Запись об установленном пакете добавляется в раздел <span>dependencies</span> файла <span>package.json</span>. 

<p>При добавлении флага <span>-D</span> или <span>--save-dev</span> вы устанавливаете зависимость для разработки, запись о ней добавляется в раздел <span>devDependencies</span>. 

<p>Зависимости для разработки предназначены только для разработки, они не нужны в продакшне. Например, для тестирования продукта, webpack (сборщик проекта) или Babel (транспилятор). 

<p>При выполнении <span>npm install</span> и при наличии <span>package.json</span>, <span>npm</span> предполагает, что вы разворачиваете тестовое приложение, поэтому все <span>dependencies</span> и <span>devDependencies</span> устанавливаются. 

<p>Во избежание установки зависимостей для разработки необходимо выполнить <span>npm install</span> с флагом <span>--production</span>: <span>npm install --production</span>. 
`