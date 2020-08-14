export default `
<h3>18. Package-lock.json</h3>

<p>В пятой версии Node.js был представлен файл package-lock.json. 

<p>Что это такое? Для чего он нужен, если есть файл <span>package.json</span>?

<p>Задачей package-lock.json является фиксация конкретных версий установленных пакетов для обеспечения 100% работы продукта при обновлении пакетов их разработчиками. 

<p>Это решает проблему <span>package.json</span>. В этом файле вы можете указать, какие пакеты нуждаются в обновлении (патчевом или минорном), используя спецификаторы версий, например:

<ul>
    <li>Если указано ~0.13.0, значит, допустимы только патчевые релизы: 0.13.1 подойдет, а 0.14.0 нет.</li>
    <li>Если указано ^0.13.0, значит, допустимы патчевые и минорные релизы: 0.13.1, 0.14.0 и т.д.</li>
    <li>Если указано 0.13.0, значит, будет использоваться только указанная версия.</li>
</ul>

<p>Обычно, вы не отправляете в Git папку <span>node_moludes</span>, и при установке проекта на другом компьютере с помощью <span>npm install</span>, если присутствует спецификатор ~, допускающий патчевые релизы, и пакет обновился, будет установлена новая версия. Тоже самое справедливо для спецификатора ^, допускающего патчевые и минорные релизы. 

<p>Это можете быть вы или другой человек на другом конце света, устанавливающий проект посредством <span>npm install</span>. 

<p>Таким образом, исходный проект и заново проиницализированный проект - это два разных проекта. Даже если патчевый или минорный релизы не содержат критических изменений, это может привести (и часто приводит) к ошибкам. 

<p><span>package-lock.json</span> хранит записи о конкретных версиях установленных пакетов, и <span>npm</span> установит именно эти версии при выполнении <span>npm install</span>. 

<p>Эта концепция не является новой и другие пакетные менеджеры (такие как Composer в PHP) используют ее на протяжении многих лет. 

<p><span>package-lock.json</span> следует отправлять в Git, чтобы другие люди могли его получить, если проект является открытым или у вас есть соавторы, или когда вы используете Git как источник для разработки. 

<p>Версии зависимостей в <span>package-lock.json</span> обновляются вручную с помощью <span>npm update</span>. 

<h5>Пример</h5>

<p>Вот пример структуры <span>package-lock.json</span>, который мы получаем при выполнении <span>npm install cowsay</span> в пустой директории:

<code>
{
  "requires": true,
  "lockfileVersion": 1,
  "dependencies": {
    "ansi-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.
0.0.tgz",
      "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg="
    },
    "cowsay": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/cowsay/-/cowsay-1.3.1.tgz"
,
      "integrity": "sha512-3PVFe6FePVtPj1HTeLin9v8WyLl+VmM1l1H/5P+BTTDkM
Ajufp+0F9eLjzRnOHzVAYeIYFF5po5NjRrgefnRMQ==",
      "requires": {
        "get-stdin": "^5.0.1",
        "optimist": "~0.6.1",
        "string-width": "~2.1.1",
        "strip-eof": "^1.0.0"
      }
    },
    "get-stdin": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-5.0.
1.tgz",
      "integrity": "sha1-Ei4WFZHiH/TFJTAwVpPyDmOTo5g="
    },
    "is-fullwidth-code-point": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/
is-fullwidth-code-point-2.0.0.tgz",
      "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="
    },
    "minimist": {
      "version": "0.0.10",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.10
.tgz",
      "integrity": "sha1-3j+YVD2/lggr5IrRoMfNqDYwHc8="
    },
    "optimist": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/optimist/-/optimist-0.6.1.tgz",
      "integrity": "sha1-2j6nRob6IaGaERwybpDrFaAZZoY=",

      "requires": {
        "minimist": "~0.0.1",
        "wordwrap": "~0.0.2"
      }
    },
    "string-width": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
      "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
      "requires": {
        "is-fullwidth-code-point": "^2.0.0",
        "strip-ansi": "^4.0.0"
      }
    },
    "strip-ansi": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
      "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
      "requires": {
        "ansi-regex": "^3.0.0"
      }
    },
    "strip-eof": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/strip-eof/-/strip-eof-1.0.0.tgz",
      "integrity": "sha1-u0P/VZim6wXYm1n80SnJgzE2Br8="
    },
    "wordwrap": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-0.0.3.tgz",
      "integrity": "sha1-o9XabNXAvAAI03I0u68b7WMFkQc="
    }
  }
}
</code>

<p>Мы устанавливаем <span>cowsay</span>, который зависит от: 

<ul>
    <li>get-stdin</li>
    <li>optimist</li>
    <li>string-width</li>
    <li>strip-eof</li>
</ul>

<p>В свою очередь, эти пакеты нуждаются в других пакетах, указанных в свойстве requires:

<ul>
    <li>ansi-regex</li>
    <li>is-fullwidth-code-point</li>
    <li>minimist</li>
    <li>wordwrap</li>
    <li>strip-eof</li>
</ul>

<p>Они добавляются в файл в алфавитном порядке, каждый имеет поле <span>version</span>, поле <span>resolved</span>, указывающее на местонахождение пакета, и строку <span>integrity</span>, используемую для идентификации пакета.
`