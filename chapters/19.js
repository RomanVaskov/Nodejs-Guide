export default `
<h3>19. Поиск версии установленного пакета</h3>

<p>Для того, чтобы увидеть последние версии установленных пакетов, включая их зависимости, необходимо выполнить <span>npm list</span>. 

<p>Например:

<code>
❯ npm list
/Users/joe/dev/node/cowsay
└─┬ cowsay@1.3.1
  ├── get-stdin@5.0.1
  ├─┬ optimist@0.6.1
  │ ├── minimist@0.0.10
  │ └── wordwrap@0.0.3
  ├─┬ string-width@2.1.1
  │ ├── is-fullwidth-code-point@2.0.0
  │ └─┬ strip-ansi@4.0.0
  │   └── ansi-regex@3.0.0
  └── strip-eof@1.0.0
</code>

<p>Вы, конечно, можете просто открыть файл <span>package-lock.json</span>, но такое представление является более наглядным. 

<p><span>npm list -g</span> делает тоже самое, но для глобально установленных пакетов. 

<p>Для того, чтобы получить список пакетов верхнего уровня (обычно это те пакеты, которые вы устанавливали вручную), нужно выполнить <span>npm list --depth=0</span>:

<code>
❯ npm list --depth=0
/Users/joe/dev/node/cowsay
└── cowsay@1.3.1
</code>

<p>Версию определенного пакета можно получить, указав его имя:

<code>
❯ npm list cowsay
/Users/joe/dev/node/cowsay
└── cowsay@1.3.1
</code>

<p>Это также работает с зависимостями установленного пакета: 

<code>
❯ npm list minimist
/Users/joe/dev/node/cowsay
└─┬ cowsay@1.3.1
  └─┬ optimist@0.6.1
    └── minimist@0.0.10
</code>

<p>Если вы хотите увидеть последнюю доступную версию пакета, имеющуюся в npm, выполните <span>npm view &lt;package-name&gt; version</span>:

<code>
❯ npm view cowsay version

1.3.1
</code>
`