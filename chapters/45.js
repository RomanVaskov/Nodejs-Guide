export default `
<h3>45. Модуль fs</h3>

<p>Модуль <span>fs</span> предоставляет множество полезных методов для доступа и взаимодействия с файловой системой. 

<p>Его не нужно устанавливать. Будучи частью ядра Node.js, он может использоваться по требованию:

<code>
const fs = require('fs')
</code>

<p>Среди методов модуля <span>fs</span> можно назвать следующее:

<ul>
    <li><span>fs.access()</span> - определяет наличие файла и его доступность для Node.js</li>
    <li><span>fs.appendFile()</span> - добавляет данные в файл. Файл создается при отсутствии</li>
    <li><span>fs.chmod()</span> - изменяет разрешения переданного файла. Похожие методы: <span>fs.lchmod()</span>, <span>fs.fchmod()</span></li>
    <li><span>fs.chown()</span> - изменяет владельца и группу переданного файла. Похожие методы: <span>fs.fchown()</span>, <span>fs.lchown()</span></li>
    <li><span>fs.close()</span> - закрывает файловый дескриптор</li>
    <li><span>fs.copyFile()</span> - копирует файл</li>
    <li><span>fs.createReadStream()</span> - создает поток для чтения файла</li>
    <li><span>fs.createWriteStream()</span> - создает поток для записи файла</li>
    <li><span>fs.link()</span> - создает новую жесткую ссылку на файл</li>
    <li><span>fs.mkdir()</span> - создает новую директорию</li>
    <li><span>fs.mkdtemp()</span> - создает временную директорию</li>
    <li><span>fs.open()</span> - устанавливает режим файла</li>
    <li><span>fs.readdir()</span> - читает содержимое директории</li>
    <li><span>fs.readFile()</span> - читает содержимое файла. Похохий метод: <span>fs.read()</span></li>
    <li><span>fs.readlink()</span> - читает значение символической ссылки</li>
    <li><span>fs.realpath()</span> - преобразует точки относительного пути (. , ..) в полный путь</li>
    <li><span>fs.rename()</span> - переименовывает файл или папку</li>
    <li><span>fs.rmdir()</span> - удаляет директорию</li>
    <li><span>fs.stat()</span> - возвращает статистику переданного файла. Похожие методы: <span>fs.fstat()</span>, <span>fs.lstat()</span></li>
    <li><span>fs.symlink()</span> - создает новую символическую ссылку на файл</li>
    <li><span>fs.truncate()</span> - уменьшает переданный файл до заданного размера (длины). Похожий метод: <span>fs.ftruncate()</span></li>
    <li><span>fs.unlink()</span> - удаляет файл или символическую ссылку</li>
    <li><span>fs.unwatchFile()</span> - прекращает слежение за изменениями файла</li>
    <li><span>fs.utimes()</span> - изменяет время создания переданного файла. Похожий метод: <span>fs.futimes()</span></li>
    <li><span>fs.watchFile()</span> - следит за изменениями файла. Похожий метод: <span>fs.watch()</span></li>
    <li><span>fs.writeFile()</span> - записывает данные в файл. Похожий метод: <span>fs.write()</span></li>
</ul>

<p>Названные методы являются асинхронными по умолчанию и имеют синхронные аналоги (<span>Sync</span>). 

<p>Например: 

<ul>
    <li><span>fs.rename()</span></li>
    <li><span>fs.renameSync()</span></li>
    <li><span>fs.write()</span></li>
    <li><span>fs.writeSync()</span></li>
</ul>

<p>Это имеет решающее значение для работы приложения. 

<p>В Node.js 10 появилась экспериментальная поддержка промисов. 

<p>Рассмотрим метод <span>fs.rename()</span>. Асинхронная версия используется с колбеком:

<code>
const fs = require('fs')

fs.rename('before.json', 'after.json', err => {
    if (err) {
        return console.error(err)
    }
    // готово
})
</code>

<p>Синхронная версия, как правило, используется с блоком try/catch для обработки ошибок:

<code>
const fs = require('fs')

try {
    fs.renameSync('before.json', 'after.json')
    // готово 
} catch (err) {
    console.error(err)
}
</code>

<p>Принципиальным отличием является то, что второй код блокирует поток на время выполнения операции. 
`