=======
linux
=======

:black:`Linux基本操作`

.. raw:: html

    <hr class="divider_blue">

:black:`搜索文件`
==================

:cmd:`find` 用于搜索文件

:cmd:`find` 命令的一般形式为：


参数含义：

.. raw:: html

   <style>
   /* 表格基础样式：保留布局，删除第一列硬编码的样式（避免冲突） */
   .slurm-table {
       width: 100%;
       max-width: 600px;
       border-collapse: collapse;
       font-size: 18px;
       line-height: 1.8;
   }
   .slurm-table td {
       padding: 12px 15px;
       border: 1px solid #eee;
   }
   /* 仅保留列宽，删除背景/字体相关样式 */
   .slurm-table td:first-child {
       width: 35%;
   }
   .slurm-table td:last-child {
       background-color: #ffffff;
       width: 65%;
   }

   /* 预定义的 font-blue 样式（和 conf.py 中配置的对应） */
   .font-blue {
       background-color: #e6f7ff !important;  
       color: #0355a1ff !important;             
       font-family: monospace !important;     
       padding: 2px 4px !important;           
       border-radius: 2px !important;        
       display: inline-block !important;
       font-weight: bold !important;       
   }
   </style>

   <table class="slurm-table">
       <tr>
           <!-- 同时绑定 cmd + font-blue 类，匹配 conf.py 配置 -->
           <td><code class="cmd font-blue">pathname</code></td>
           <td>所查找的目录路径。例如用.来表示当前目录，用/来表示系统根目录。</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">-print</code></td>
           <td>将匹配的文件输出到标准输出。</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">-exec</code></td>
           <td>对匹配的文件执行该参数所给出的shell命令。相应命令的形式为command { } ;，注意{ }和;之间的空格。</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">-ok</code></td>
           <td>和-exec的作用相同，只不过以一种更为安全的模式来执行该参数所给出的shell命令，在执行每一个命令之前，都会给出提示，让用户来确定是否执行。</td>
       </tr>
   </table>



使用方法举例如下：



.. raw:: html


   <table class="slurm-table">
        <tr>
           <td><code class="cmd font-blue">find . -name "*.txt" -print</code></td>
           <td>用于在当前目录及子目录中查找所有的<code class="cmd font-blue">*.txt文件</code></td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">find . -name "*.txt" -delete</code></td>
           <td>用于查找所有的<code class="cmd font-blue">*.txt</code>文件在当前目录及子目录中，并将查找到的文件删除，用户可使用此命令来删除陈旧的较大文件</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">find . -name "[A-Z]*" -print</code></td>
           <td>用于当前目录及子目录中查找文件名以一个大写字母开头的文件</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">find /etc -name "host*" -print</code></td>
           <td>在/etc目录中查找文件名以host开头的文件</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">find . -name "[a-z][a-z][0--9][0--9].txt" -print</code></td>
           <td>在当前目录查找文件名以两个小写字母开头，跟着是两个数字，最后是.txt的文件</td>
       </tr>
   </table>


获取Linux系统信息
==================

.. raw:: html

    <hr class="driver_black">

:cmd:`uname -a`

.. code-block:: text
    :linenos:  

    $ uname -a
    Linux tc4600v4 3.10.0-693.11.1.el7.x86_64 #1 SMP Mon Dec 4 23:52:40 UTC 2017 x86_64 x86_64 x86_64 GNU/Linux


文件打包压缩常用的命令
======================

.. raw:: html

    <hr class="driver_black">

:cmd:`gzip` 用gzip新建的压缩文件为 :cmd:`*.gz` 的文件名，默认的状态下原本的文件被压缩为 :cmd:`.gz` 的文件名，原文件就不存在了。

使用方法：

.. code-block:: text
    :linenos:  

    gzip [-cdtv#] 文件名

常见参数：

.. raw:: html

    <table  class="slurm-table"> 
        <tr>
            <td><code class="cmd font-blue">-c</code></td>
            <td>将压缩后的数据输出到标准输出，而不是保存为一个文件。</td>
        </tr>
        <tr>
            <td><code class="cmd font-blue">-d</code></td>
            <td>解压缩文件。</td>
        </tr>
        <tr>
            <td><code class="cmd font-blue">-t</code></td>
            <td>测试压缩文件的完整性。</td>
        </tr>
        <tr>
            <td><code class="cmd font-blue">-v</code></td>
            <td>显示压缩或解压缩过程中的详细信息。</td>
        </tr>
        <tr>
            <td><code class="cmd font-blue">-#</code></td>
            <td>指定压缩级别，范围从1（最快）到9（最慢但压缩率最高）。默认级别是6。</td>
        </tr>
    </table>

:cmd:`bzip2` ：用 :cmd:`bzip2` 新建的压缩文件为 :cmd:`.bz2` 的文件名，当压缩文件的名称为 :cmd:`.bz、.bz2、.tbz、.tbz2` 等时，可用 :cmd:`bzip2` 来解压缩。

使用方法

.. code-block:: text
    :linenos:  

    bzip2 [-cdkzv#] 文件名

常见参数：

.. raw:: html

    <table  class="slurm-table"> 
        <tr>
            <td><code class="cmd font-blue">-c</code></td>
            <td>将压缩过程中产生的数据输出到屏幕上；</td>
        </tr>
        <tr>
            <td><code class="cmd font-blue">-d</code></td>
            <td>解压缩操作的参数；</td>
        </tr>
        <tr>
            <td><code class="cmd font-blue">-k</code></td>
            <td>保留原文件，而不会删除原始的文件；</td>
        </tr>
        <tr>
            <td><code class="cmd font-blue">-z</code></td>
            <td>压缩的参数；</td>
        </tr>
        <tr>
            <td><code class="cmd font-blue">-v</code></td>
            <td>可以显示出原文件/压缩文件的压缩比等信息；</td>
        </tr>
        <tr>
            <td><code class="cmd font-blue">-#</code></td>
            <td>与gzip相同，计算压缩比的参数，-9最佳，-1最快。</td>
        </tr>
    </table>

:cmd:`tar` ：:cmd:`tar` 命令的参数很多，

使用方法

.. code-block:: text
    :linenos:  

    tar [-j|-z] [cv] [-f 新建的文件名] filename 或 tar [-j|-z] [xv] [-f 新建的文件名] [-C 目录名]

常见参数：

.. raw:: html

    <table  class="slurm-table"> 
        <tr>
            <td><code class="cmd font-blue">-c</code></td>
            <td>新建打包文件，可搭配<code class="cmd font-blue">-v</code>来查看过程中被打包的文件名(filename)；</td>
        </tr>
        <tr>
            <td><code class="cmd font-blue">-t</code></td>
            <td>查看打包文件的内容含有哪些文件名，重点在查看文件名；</td>
        </tr>
        <tr>
            <td><code class="cmd font-blue">-x</code></td>
            <td>解打包或解压缩的功能，可以搭配<code class="cmd font-blue">-C</code>在特定目录解开；</td>
        </tr>
        <tr>
            <td><code class="cmd font-blue">-j</code></td>
            <td>通过<code class="cmd font-blue">bzip2</code>的支持进行压缩/解压缩，此时文件名最好为<code class="cmd font-blue">*.tar.bz2</code>；</td>
        </tr>
        <tr>
            <td><code class="cmd font-blue">-z</code></td>
            <td>通过<code class="cmd font-blue">gzip</code>的支持进行压缩/解压缩，此时文件名最好为<code class="cmd font-blue">*.tar.gz</code>；</td>
        </tr>
        <tr>
            <td><code class="cmd font-blue">-v</code></td>
            <td>在压缩/解压缩的过程中，将正在处理的文件名显示出来；</td>
        </tr>
        <tr>
            <td><code class="cmd font-blue">-f</code></td>
            <td><code class="cmd font-blue">filename -f</code>后边要接被处理的文件名，建议<code class="cmd font-blue">-f</code>单独写一个参数；</td>
        </tr>
        <tr>
            <td><code class="cmd font-blue">-C</code></td>
            <td>这个参数用在解压缩时，若要在特定目录解压缩，可以使用这个参数。</td>
        </tr>
    </table>

Attention

:cmd:`-c、-t、-x` 不可同时出现在一串命令行中；

文件编辑命令vim
==================

.. raw:: html

    <hr class="driver_black">


vim共分为3个模式，即一般模式（默认的模式）、编辑模式、命令行模式。3种模式的作用分别如下：

:mblack:`一般模式：`

以vim打开一个文件就直接进入了一般模式。在这个模式中，用户可以使用上下左右按键来移动光标，可以删除字符或删除整行，也可以复制、粘贴文件数据。

:mblack:`编辑模式：`

要编辑文件内容，需要按下"i,I,o,O,a,A,r,R"等任何一个字母来进入编辑模式。通常在Linux中，按下这些按键时，在界面的左下方出现INSERT或REPLACE的字样，此时才可以进行编辑。如果要回到一般模式，则必须按下ESC按键退出编辑模式。

:mblack:`命令行模式：`

在一般模式中，输入":、/、?"3个中的任何一个按键，光标会移动到最下面一行。在此模式中，可以提供查找数据的操作，而读取、保存、大量替换字符、离开vim、显示行号等操作均是在此模式中完成的。

使用vim的常用命令快捷按键：

在一般模式底下输入： :cmd:`i`, :cmd:`I`, :cmd:`a`, :cmd:`A`
为在本行当中输入新字符；（出现 :cmd:`-Insert-` ）

在一般模式当中输入： :cmd:`o`, :cmd:`O` 为在一个新的一行输入新字符；

在一般模式当中输入： :cmd:`r`, :cmd:`R`   为取代字符！（左下角出现 :cmd:`-Replace-`）

如何由编辑模式跳回一般模式？ [Esc]

若上下左右键无法使用时，请问如何在一般模式移动光标？ :cmd:`h`, :cmd:`j`, :cmd:`k`, :cmd:`l`

若 [pagedown] [ pageup] 在一般模式无法使用时，如何往前或往后翻一页？
[Ctrl] + [f] [Ctrl] + [b]

如何到本档案的最后一行、第一行；本行的第一个字符、最后一个字符？ :cmd:`G`, :cmd:`1G` , :cmd:`0` ,  :cmd:`$`

如何删除一行、n行；如何删除一个字符？ :cmd:`dd`, :cmd:`ndd`, :cmd:`x` 或 :cmd:`X` （dG及
d1G分别表示删除到页首及页尾）

如何复制一行、n行并加以贴上？ :cmd:`yy`, :cmd:`nyy`, :cmd:`p` 或 :cmd:`P`

如何搜寻 :cmd:`string` 这个字符串？ ?string (往前搜寻) /string (往后搜寻)

如何取代 :cmd:`word1` 成为 :cmd:`word2`，而若需要使用者确认机制，又该如何？
:cmd:`:1,$s/word1/word2/g`` 或 :cmd:`:1,$s/word1/word2/gc` （需要使用者确认）

如何读取一个档案filename进来目前这个档案？ :cmd:`:r filename`

如何另存新档成为newfilename？ :cmd:`:w newfilename`

如何存盘、离开、存盘后离开、强制存盘后离开？ :cmd:`:w`； :cmd:`:q`； :cmd:`:wq`； :cmd:`:wq!`

如何设定与取消行号？ :cmd:`:set nu` :cmd:`:set nonu`

类似的编辑修改文件命令还有：:cmd:`nano` 、:cmd:`vim` 、:cmd:`emacs` 等，请参考各软件相应的帮助手册。



显示列出目录下的文件ls
=======================

.. raw:: html

    <hr class="driver_black">


ls最常用的参数有三个：:cmd:`-a`、:cmd:`-l` ，参数可混合使用。

:cmd:`ls -a`

Linux上的文件以“.”开头的文件被系统视为隐藏文件，仅用ls命令是看不到它们的，而用ls
-a除了显示一般文件名外，连隐藏文件也会显示出来。超算中心用户经常需要操作的隐藏文件是~/.bashrc文件，用于设定使用程序的环境变量。

:cmd:`ls -l` （这个参数是字母L的小写，不是数字1）

以更加详细的信息方式显示目录下文件的属性。超算中心用户经常需要注意的是，查看需要调用的程序是否有可执行权限。指定目录ls命令之后，指定一个目录，用于显示列出指定目录下的所有文件。


查看文件内容命令cat
=======================

:cmd:`cat` 是concatenate的简写，它的功能是显示或连结一般的ascii文本文件。:cmd:`cat` 会将文件里的内容全部显示出来。当文件内容过多，一个屏幕显示不全时，可使用类似功能的操作命令，:cmd:`head`、:cmd:`less`、:cmd:`more`、:cmd:`tail` 等，区别是它们每次仅显示部分内容。

它的用法如下：

:cmd:`cat text` 显示text这个文件里的内容。

:cmd:`cat file1 file2` 依顺序显示file1,file2的内容。

:cmd:`cat file1 file2>file3`

把file1,file2的内容结合起来，再“重定向（>）”到file3文件中。

:cmd:`>` 是往右重定向的意思，就是把左边的结果当成是输入，然后输入到file3这个文件中。这里要注意一点是file3是在重定向以前还未存在的文件，如果file3是已经存在的文件，那么它本身的内容被覆盖，而变成file1+file2的内容。

如果 :cmd:`>` 左边没有文件的名称，而右边有文件名，例如：:cmd:`cat >file1` 结果是会“空出一行空白行”，等待你输入文字，输入完毕后再按[Ctrl]+[c]或[Ctrl]+[d]，就会结束编辑，并产生file1这个文件，而file1的内容就是刚刚输入的内容。

另外，如果你使用如下的指令：
:cmd:`cat file1>>file2` 两个 :cmd:`>` ，这将变成将file1的文件内容“附加”到file2的文件后面，而file2的内容依然存在。


获取命令的帮助手册
=======================

.. raw:: html

    <hr class="driver_black">


一般参数说明可在命令名后加 :cmd:`-h` 或 :cmd:`--help` ，详细的命令帮助与参数说明可用:cmd:`man` 、:cmd:`info` 命令。

例如命令 :cmd:`ls` 的帮助信息：:cmd:`ls --help` 或 :cmd:`man ls` 或 :cmd:`info ls` 或者使用baidu、google等搜索相关的帮助信息。


重命名、移动、复制命令
=======================

重命名、移动命令：:cmd:`mv`

重命名文件可以理解为对原文件进行移动，保存成另一个名称的新文件，并将原文件删除。移动文件则可以将文件移动到当前目录下，或指定的其他目录下。

新建删除命令：:cmd:`touch`、:cmd:`mkdir`、:cmd:`rm`

新建普通文件命令：:cmd:`touch`，也可以用 :cmd:`cat`、:cmd:`vi` 等命令完成

新建目录命令：:cmd:`mkdir`，即make directory的意思。

删除文件命令：:cmd:`rm`，即remove的意思。执行此命令需要小心，删除后的文件将无法恢复。

复制命令：:cmd:`cp`、:cmd:`scp`

复制命令 :cmd:`cp`，即copy的意思，用于复制一个文件在当前目录下或指定的另一个目录下。

:cmd:`scp` 命令用于跨节点或远程服务器之间的复制操作。