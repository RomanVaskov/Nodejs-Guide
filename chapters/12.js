export default `
<h3>12. Получение данных, введенных пользователем</h3>

<p>Как сделать Node.js-программу интерактивной?

<p>Для этого в 7 версии Node.js представлен модуль <a href="https://nodejs.org/api/readline.html">readline</a>: он служит для получения данных из потока для чтения, такого как <span>process.stdin</span> - командная строка во время выполнения Node.js-программы. 

<code>
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('What is your name?', name => {
    console.log(\`Hi &#36;{name}!\`)
    readline.close()
})
</code>

<p>В этом коде запрашивается имя пользователя. После того, как пользователь набрал текст и нажал <span>enter</span>, выводится приветствие. 

<p>Метод <span>question()</span> выводит в консоль первый параметр (вопрос) и ожидает ответа пользователя. При нажатии <span>enter</span> выполняется функция обратного вызова. 

<p>В данном колбеке мы закрываем интерфейс <span>readline</span>. 

<span>readline</span> содержит и другие методы, о которых вы можете почитать в документации. 

<p>Если вам необходимо запросить пароль, лучше не возвращать его в явном виде, а использовать символ <span>*</span>. 

<p>Одним из способом это сделать является использование пакета <a href="https://www.npmjs.com/package/readline-sync">readline-sync</a>, который прост для понимания и легок в настройке. 

<p>Более полное и абстрактное решение предоставляет пакет <a href="https://github.com/SBoudrias/Inquirer.js">Inquirer.js</a>. 

<p>Устанавливаем его с помощью <span>npm install inquirer</span> и используем следующим образом:

<code>
const inquirer = require('inquirer')

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What's your name?'
    }
]

inquirer.prompt(questions).then(answers => {
    console.log(\`Hi &#36;{answers['name']}!\`)
})
</code>

<p>Inquirer.js позволяет делать много интересных вещей, например, предлагать множественный выбор, предоставлять радио-кнопки, запрашивать подтверждение действия и т.д. 

<p>Он больше известен как альтернатива встроенным решениям, но если вы планируете поднять взаимодействие с пользователем на новый уровень, Inquirer.js - оптимальное решение. 
`