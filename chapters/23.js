export default `
<h3>23. Удаление пакета</h3>

<p>Для удаления пакета, установленного локально (с помощью <span>npm i &lt;package-name&gt;</span> в папку <span>node_modules</span>), запустите <span>npm unistall &lt;package-name&gt;</span> из корневой директории проекта (директории, в которой находится папка <span>node_modules</span>). 

<p>Если добавить флаг <span>-S</span> или <span>--save</span>, то из <span>package.json</span> будет удалена запись об удаленном пакете. 

<p>Для удаление записи о пакете для разработки, запись о котором содержится в разделе <span>devDependencies</span> файла <span>package.json</span>, следует использовать флаг <span>-D / --save-dev</span>:

<code>
npm uninstall -S <package-name>
npm uninstall -D <package-name>
</code>

<p>Если пакет установлен глобально, следует использовать флаг <span>-g / --global</span>: <span>npm uninstall &lt;package-name&gt; -g</span>. 

<p>Например: <span>npm uninstall -g webpack</span>. 
`