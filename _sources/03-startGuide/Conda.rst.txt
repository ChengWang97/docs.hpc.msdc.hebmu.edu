========
Conda
========


应用介绍
==========

.. raw:: html

    <hr class="divider_black">

.. raw:: html

   <p>
   <a href="https://www.anaconda.com/"
      target="_blank"
      rel="noopener noreferrer">
      Anaconda ↗
   </a>
   是一个用于科学计算的Python发行版，支持Linux、Mac、 Windows系统以及Python、R等科学计算语言，提供了包（Package）管理与环境（Environment）管理的功能，可以很方便地解决多版本多环境并存的问题。用户可以为某项具体的任务创建单独的环境，环境之间相互隔离。这样可以避免同一环境中各类软件相互冲突的问题。Anaconda利用 :cmd: `conda` 命令来进行包和环境的管理，并且已经包含了Python和相关的配套工具。
   </p>


.. admonition:: 注意：

    因为Conda支持多虚拟环境，建议用户使用Anaconda来管理和使用各类应用。

Conda使用指南
==============

.. raw:: html

   <hr class="divider_black">

增加源
-------

.. raw:: html 

    <hr class="divider_gray">

   <p>Anaconda默认的软件源在国外，速度比较慢，可以将其更换为清华源，详见
   <a href="https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/"
      target="_blank"
      rel="noopener noreferrer">
      清华大学开源软件镜像站 ↗
   </a>
   的说明。
   </p>

   系统内已经安装了Anaconda应用，同时保存Miniconda的安装包。

   在安装无需向anaconda目录写入内容的包时，可以通过配置环境变量使用，即在 :cmd: `.bashrc`  中添加路径即可。

.. code-block:: text
    :linenos:  

    vim ~/.bashrc

编辑路径，在脚本末尾添加 :cmd:`export PATH=/opt/app/anaconda3/bin:$PATH` 

然后运行命令 :cmd:`source ~/.bashrc` 使配置的环境变量生效。

如果在使用conda时，遇到没有权限写入等错误，则需要在自己路径下安装Miniconda。

Miniconda在路径：:cmd:`/opt/app/anaconda3/Miniconda3-latest-Linux-x86_64.sh` 

将该安装包复制到自己路径下，然后输入如下命令进行安装，安装完成后即可使用。

.. code-block:: text
    :linenos:  

    ./ Miniconda3-latest-Linux-x86_64.sh


环境管理
---------

使用Anaconda，默认情况下是在:cmd:`base` 环境中，:cmd:`base` 环境有一些基础的工具，可以直接在这个环境下安装软件，也可以创建新的环境，在新环境下安装软件。

创建新环境
-----------------

.. code-block:: text
    :linenos:  

    conda create --name <env_name> <package_names>
   
:cmd:`<env_name>` 即创建的环境名。建议以英文命名，且不加空格，名称两边不加尖括号“<>”。

:cmd:`<package_names>` 即安装在环境中的包名。名称两边不加尖括号“<>”。如果要在新创建的环境中创建多个包，则直接在 :cmd:`<package_names>`后以空格隔开，添加多个包名即可。例如，创建一个名为 :cmd:`py37` 的环境，环境中安装版本为3.7的python，同时也安装了:cmd:`numpy`和:cmd:`pandas`：

.. code-block:: text
    :linenos:  

    conda create --name py37 python=3.7 numpy pandas

新的环境以及环境内的包会被安装到 :cmd:`~/anaconda3/envs/` 目录下。

切换环境
----------

切换环境：

.. code-block:: text
    :linenos:  

    source activate <env_name>

当成功切换环境之后，在该行行首将以“(env_name)”开头。其中，“env_name”为切换到的环境名。

例如切换到新建的 :cmd:`py37` 环境：

.. code-block:: text
    :linenos:  

    source activate py37

退出环境:

.. code-block:: text
    :linenos:  

    source deactivate

退出环境后，会切换只 :cmd:`base` 环境。

:cmd:`<new_env_name>` 为复制的新环境名称，:cmd:`<old_env_name>` 为原有的环境名称。环境名两边不加尖括号“<>”。

由于conda不支持重命名环境，如果要重命名，可以通过先复制一个新环境，再删除原来环境。


复制环境
----------

.. code-block:: text
    :linenos:  

    conda create --name <new_env_name> --clone <old_env_name>

:cmd:`<new_env_name>` 为复制的新环境名称，:cmd:`<old_env_name>` 为原有的环境名称。环境名两边不加尖括号“<>”。

由于conda不支持重命名环境，如果要重命名，可以通过先复制一个新环境，再删除原来环境。

显示环境
----------

.. code-block:: text
    :linenos:  

    conda info --envs

删除环境
----------

.. code-block:: text
    :linenos:  

    conda remove --name <env_name> --all


注意： :cmd:`<env_name>` 为被删除环境的名称。环境名两边不加尖括号“<>”。


包管理
--------

获取当前环境中已安装的包信息
----------------------------

.. code-block:: text
    :linenos:  

    conda list


在指定环境中安装包
------------------

.. code-block:: text
    :linenos:  

    conda install --name <env_name> <package_names>

注意：

1. :cmd:`<env_name>` 即将包安装的指定环境名。环境名两边不加尖括号“<>”。
   
2. :cmd:`<package_name>` 即要安装的包名。包名两边不加尖括号“<>”。

3. 不加-name :cmd:`<env_name>`，则安装到当前所在的环境。

卸载包
------------

.. code-block:: text
    :linenos:  

    conda remove --name <env_name> <package_names>

pip
------------------

相比Anaconda，:cmd:`pip` 可以安装的包更多。用户可以先切换到所需环境，再在环境中执行 :cmd:`pip install <package_name>` 。

:mblack:`ARM下编译和安装Conda`
------------------------------

执行脚本安装：

.. code-block:: text
    :linenos:  

    cd /home/yourpath
    chmod +x Archiconda3-0.2.2-Linux-aarch64.sh
    ./Archiconda3-0.2.2-Linux-aarch64.sh


请按照提示输入相关的信息进行安装。

然后配置环境变量：

.. code-block:: text
    :linenos:  

    source ~/.bashrc


输入 :cmd:`conda -v` 查看Conda版本确认已安装完成。

:black:`命令参考`
-------------------

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
           
           <td><code class="cmd font-blue">conda –V</code></td>
           <td>查看conda版本</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">conda –h</code></td>
           <td>查看conda帮助</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">conda update conda</code></td>
           <td>更新conda</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">conda create --name <env_name> <package_names></code></td>
           <td>使用conda创建新的环境</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">source activate <env_name></code></td>
           <td>激活创建的环境</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">conda info --envs</code></td>
           <td>显示已创建的环境</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">conda create --name <new_env_name> --clone <old_env_name></code></td>
           <td>复制环境</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">deactivate <env_name></code></td>
           <td>退出环境</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">conda remove --name <env_name> --all</code></td>
           <td>删除环境</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">conda install --name<package_name></code></td>
           <td>在指定环境中安装包</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">conda list </code></td>
           <td>列出已安装的包</td>
       </tr>
         <tr>
           <td><code class="cmd font-blue">conda update <package_name></code></td>
           <td>更新当前环境中的安装包</td>
       </tr>
         <tr>
           <td><code class="cmd font-blue">conda remove <package_name></code></td>
           <td>移除当前环境中的安装包</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">conda remove -n <env_name> <package_name></code></td>
           <td>移除指定环境中的安装包</td>
       </tr>
   </table>


:black:`常见问题`
