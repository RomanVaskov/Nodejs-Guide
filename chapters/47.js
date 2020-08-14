export default `
<h3>47. Модуль os</h3>

<p>Данный модуль предоставляет множество функций для получения информации об операционной системе и компьютере, на котором запущена программа. 

<code>
const os = require('os')
</code>

<p>Существует несколько полезных свойств, содержащий важную информацию о файлах:

<ul>
    <li><span>os.EOL</span> - содержит последовательность разделителей строк. Таковыми являются <span>\\n</span> на Linux/macOS и <span>\\r\\n</span> на Windows</li>
    <li><span>os.constants.signals</span> - содержит константы, связанные с обработкой сигналов процессов, таких как SIGHUP, SIGKILL и т.д.</li>
    <li><span>os.constants.errno</span> - содержит константы для отчетов об ошибках, таких как EADDRINUSE, EOVERFLOW и др.</li>
</ul>

<p>Рассмотрим основные методы модуля <span>os</span>. 

<h5>os.arch()</h5>

<p>Возвращает строку, определяющую архитектуру процессора, например, <span>arm</span>, <span>x64</span>, <span>arm64</span>. 

<h5>os.cpus()</h5>

<p>Возвращает иформацию о процессоре. 

<p>Например:

<code>
    [
    {
      model: 'Intel(R) Core(TM)2 Duo CPU     P8600  @ 2.40GHz',
      speed: 2400,
      times: {
        user: 281685380,
        nice: 0,
        sys: 187986530,
        idle: 685833750,
        irq: 0
      }
    },
    {
      model: 'Intel(R) Core(TM)2 Duo CPU     P8600  @ 2.40GHz',
      speed: 2400,
      times: {
        user: 282348700,
        nice: 0,
        sys: 161800480,
        idle: 703509470,
        irq: 0
      }
    }
  ]
</code>

<h5>os.endinanness()</h5>

<p>Возвращает <span>BE</span> или <span>LE</span> в зависимости от порядка компиляции байтов (от старшего к младшему или от младшего к старшему). 

<h5>os.freemem()</h5>

<p>Возвращает количество байтов свободной памяти. 

<h5>os.homedir()</h5>

<p>Возвращает путь домашней директории текущего пользователя. 

<p>Например:

<code>
'/Users/joe'
</code>

<h5>os.hostname()</h5>

<p>Возвращает название хоста. 

<h5>os.loadavg()</h5>

<p>Возвращает вычисленное операционной системой значение средней нагрузки. 

<p>На Linux/macOS возвращаются только суественные значения. 

<p>Например: 

<code>
[3.68798828125, 4.00244140625, 11.1181640625]
</code>

<h5>os.networkInterface()</h5>

<p>Возвращает информацию об интерфейсе доступа к сети. 

<p>Например: 

<code>
    { lo0:
        [ { address: '127.0.0.1',
            netmask: '255.0.0.0',
            family: 'IPv4',
            mac: 'fe:82:00:00:00:00',
            internal: true },
          { address: '::1',
            netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
            family: 'IPv6',
            mac: 'fe:82:00:00:00:00',
            scopeid: 0,
            internal: true },
          { address: 'fe80::1',
            netmask: 'ffff:ffff:ffff:ffff::',
            family: 'IPv6',
            mac: 'fe:82:00:00:00:00',
            scopeid: 1,
            internal: true } ],
       en1:
        [ { address: 'fe82::9b:8282:d7e6:496e',
            netmask: 'ffff:ffff:ffff:ffff::',
            family: 'IPv6',
            mac: '06:00:00:02:0e:00',
            scopeid: 5,
            internal: false },
          { address: '192.168.1.38',
            netmask: '255.255.255.0',
            family: 'IPv4',
            mac: '06:00:00:02:0e:00',
            internal: false } ],
       utun0:
        [ { address: 'fe80::2513:72bc:f405:61d0',
            netmask: 'ffff:ffff:ffff:ffff::',
            family: 'IPv6',
            mac: 'fe:80:00:20:00:00',
            scopeid: 8,
            internal: false } ] }
</code>

<h5>os.platform()</h5>

<p>Возвращает платформу, для которой выполнялась компиляция: 

<ul>
    <li><span>darwin</span></li>
    <li><span>freebsd</span></li>
    <li><span>linux</span></li>
    <li><span>openbsd</span></li>
    <li><span>win32</span></li>
</ul>

<h5>os.release()</h5>

<p>Возвращает версию (релиз) операционной системы. 

<h5>os.tmpdir()</h5>

<p>Возвращает путь определенной временной директории. 

<h5>os.totalmem()</h5>

<p>Возвращает количество байт доступной памяти. 

<h5>os.type()</h5>

<p>Определяет операционную систему: 

<ul>
    <li><span>Linux</span></li>
    <li><span>Darwin</span> на macOS</li>
    <li><span>Windows_NT</span> на Windows</li>
</ul>

<h5>os.uptime()</h5>

<p>Возвращает количество секунд, прошедших с момента последней перезагрузки. 

<h5>os.userInfo()</h5>

<p>Возвращает информацию о текущем пользователе. 
`