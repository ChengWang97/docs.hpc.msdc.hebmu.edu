=======
Ubuntu
=======

:wb:`Ubuntu`
==================


Ubuntu应用介绍
-------------------

.. raw:: html 

    <hr class="divider_black">

Ubuntu是一个以桌面应用为主的Linux操作系统。


Ubuntu使用指南
-------------------

.. raw:: html 

    <hr class="divider_black">

创建镜像后，点击“重置密码”,在窗口中输入新密码后，点击“确定”。

.. admonition:: text

    只有在实例关闭状态下才能重置密码。

.. figure:: /_static/img/Ubuntu/Ubuntu_1.png
   :alt: 重置密码
   :width: 100%
   :class: zoomable

系统显示密码修改成功后，点击“启动”，启动虚拟机

.. figure:: /_static/img/Ubuntu/Ubuntu_2.png
   :alt: 启动虚拟机
   :width: 100%
   :class: zoomable

点击“远程桌面”，输入用户名和密码进入Ubuntu桌面


.. admonition:: text
    
   默认用户名为: ubuntu



.. figure:: /_static/img/Ubuntu/Ubuntu_3.png
   :alt: 远程桌面
   :width: 100%
   :class: zoomable

进入Linux后，可以正常使用应用。

更换镜像源
-------------------

可以添加国内镜像源来加快软件下载速度，这里以清华镜像源为例。

首先备份Ubuntu默认的源地址：

.. code-block:: text
    :linenos:  

    sudo cp /etc/apt/sources.list /etc/apt/sources.list.backup

然后编辑 :cmd:`/etc/apt/sources.list` 文件：


.. code-block:: text
    :linenos:  

    vi /etc/apt/sources.list

将文件中的内容替换成如下：

.. code-block:: text
    :linenos:  

    # 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
    deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
    # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
    deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
    # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
    deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
    # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
    deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse
    # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse

之后就可以利用 :cmd:`sudo apt-get update` 来更新软件了。


.. raw:: html

   <p>其他详细情况，请参考
   <a href="https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/"
      target="_blank"
      rel="noopener noreferrer">
      清华大学开源软件镜像站↗
   </a>
   的说明。
   </p>

常见问题i
-------------------

.. raw :: html

    <hr class="divider_black">
