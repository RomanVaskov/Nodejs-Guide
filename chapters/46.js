export default `
<h3>46. Модуль path</h3>

<p>Данный модуль предоставляет множество полезных методов для доступа и взаимодействия с путями файлов. 

<p>Его не нужно устанавливать. Будучи частью ядра Node.js, он может использоваться по требованию:

<code>
const path = require('path')
</code>

<p>Данный модуль содержит свойство <span>path.sep</span> для обработки разделителей частей пути (<span>\</span> на Windows и <span>/</span> на Linux/macOS) и свойство <span>path.delimiter</span> для обработки ограничителей пути (<span>;</span> на Windows и <span>:</span> на Linux/macOS).

<p>Модуль <span>path</span> имеет следующие методы:

<h5>path.basename()</h5>

<p>Возвращает последнюю часть пути. Второй параметр может исключать расширение: 

<code>
require('path').basename('/test/something') // something 
require('path').basename('/test/something.txt') // something.txt 
require('path').basename('/test/something.txt', '.txt') // something
</code>

<h5>path.dirname()</h5>

<p>Возвращает путь директории, в которой находится файл: 

<code>
require('path').dirname('/test/something') // /test
require('path').dirname('/test/something/file.txt') // /test/something
</code>

<h5>path.extname()</h5>

<p>Возвращает расширение файла: 

<code>
require('path').extname('/test/something') // ''
require('path').extname('/test/something/file.txt') // '.txt'
</code>

<h5>path.isAbsolute()</h5>

<p>Возвращает true, если передан абсолютный путь: 

<code>
require('path').isAbsolute('/test/something') // true 
require('path').isAbsolute('./test/something') // false 
</code>

<h5>path.join()</h5>

<p>Объединяет две или более части пути:

<code>
const name = 'joe'
require('path').join('/', 'Users', name, 'notes.txt') // '/Users/joe/notes.txt'
</code>

<h5>path.normalize()</h5>

<p>Вычисляет путь на основе относительных спецификаторов типа <span>.</span>, <span>..</span> или двойного слеша:

<code>
require('path').normalize('/Users/joe/..//test.txt') // '/Users/test.txt'
</code>

<h5>path.parse()</h5>

<p>Разбирает (парсит) путь на объект, состоящий из частей пути:

<ul>
    <li><span>root</span> - корневая директория</li>
    <li><span>dir</span> - первая директория после корневой</li>
    <li><span>base</span> - название файла + его расширение</li>
    <li><span>name</span> - название файла</li>
    <li><span>ext</span> - расширение файла</li>
</ul>

<p>Например: 

<code>
require('path').parse('/Users/test.txt')
</code>

<p>Получаем: 

<code>
{
    root: '/',
    dir: '/Users',
    base: 'test.txt',
    ext: '.txt',
    name: 'test'
}
</code>

<h5>path.relative()</h5>

<p>Принимает 2 пути в качестве аргументов. Возвращает разницу между первым и вторым путями, основываясь на текущей директории. 

<p>Например:

<code>
require('path').relative('/Users/joe', '/Users/joe/test.txt') // 'test.txt'
require('path').relative('/Users/joe', '/Users/joe/something/test.txt') // 'something/test.txt'
</code>

<h5>path.resolve()</h5>

<p>Вы можете получить абсолютный путь, вычисляемый на основе относительного, с помощью <span>path.resolve()</span>:

<code>
    path.resolve('joe.txt') // '/Users/joe/joe.txt'
</code>

<p>Первый параметр служит основой для второго: 

<code>
path.resolve('tmp', 'joe.txt') // '/Users/joe/tmp/joe.txt'
</code>

<p>Если первый параметр начинается со слеша - это абсолютный путь: 

<code>
path.resolve('/etc', 'joe.txt') // '/etc/joe.txt'
</code>
`