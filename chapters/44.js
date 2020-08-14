export default `
<h3>44. Работа с директориями</h3>

<p>Модуль <span>fs</span> предоставляет множество методов для работы с каталогами. 

<h5>Проверка наличия директории</h5>

<p>Используйте <span>fs.check()</span> для определения существования директории и возможности получить к ней доступ. 

<h5>Создание новой директории</h5>

<p>Используйте <span>fs.mkdir()</span> или <span>fs.mkdirSync()</span> для создания новой директории: 

<code>
const fs = require('fs')

const folderName = '/Users/joe/test'

try {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName)
    }
} catch (err) {
    console.error(err)
}
</code>

<h5>Чтение содержимого директории</h5>

<p>Используйте <span>fs.readdir()</span> и <span>fs.readdirSync()</span> для чтения содержимого каталога. 

<p>Следущий код читает контент папки, как файлы, так и поддиректории, и возвращает их относительные пути: 

<code>
const fs = require('fs')
const path = require('path')

const folderPath = '/Users/joe'

fs.readdieSync(folderPath)
</code>

<p>Полный путь можно получить так: 

<code>
fs.readdirSync(folderPath).map(fileName => {
    return path.join(folderPath, fileName)
})
</code>

<p>Кроме того, можно отфильтровать результаты, чтобы получить только файлы:

<code>
const isFile = fileName => {
    return fs.lstatSync(fileName).isFile()
}

fs.readdirSync(folderPath).map(fileName => {
    return path.join(folderPath, fileName)
})
.filter(isFile)
</code>

<h5>Переименование директории</h5>

<p>Для переименования директории используйте <span>fs.rename()</span> и <span>fs.renameSync()</span>. Первый параметр - это текущий путь, второй - новый путь: 

<code>
const fs = require('fs')

fs.rename('/Users/joe', '/Users/roger', err => {
    if (err) {
        console.error(err)
        return
    }
    // готово
})
</code>

<p><span>fs.renameSync()</span> - это синхронная версия: 

<code>
const fs = require('fs')

try {
    fs.renameSync('/Users/joe', 'Users/roger')
} catch (err) {
    console.error(err)
}
</code>

<h5>Удаление директории</h5>

<p>Для удаления директории используйте <span>fs.rmdir()</span> и <span>fs.rmdirSync()</span>. 

<p>Удаление непустой папки может оказаться сложнее, чем кажется. 

<p>В данном случае, проще установить модуль <span><a href="https://www.npmjs.com/package/fs-extra">fs-extra</a></span>, который очень популярен и хорошо поддерживается. Он является своего рода заменой модуля <span>fs</span>, предоставляя более продвинутые возможности. 

<p>Нас интересует его метод <span>remove()</span>. 

<p>Устанавливаем модуль: 

<code>
npm install fs-extra
</code>

<p>И используем следующим образом:

<code>
const fs = require('fs-extra')

const folder = '/Users/joe'

fs.remove(folder, err => {
    console.error(err)
})
</code>

<p>Он также может быть использован совместно с промисами:

<code>
fs.remove(folder)
    .then(() => {
        // готово 
    })
    .catch(err => {
        console.error(err)
    })
</code>

<p>Или с async/await: 

<code>
async function removeFolder(folder) {
    try {
        await fs.remove(folder)
        // готово 
    } catch (err) {
        console.error(err)
    }
}

const folder = 'Users/joe'
removeFolder(folder)
</code>
`