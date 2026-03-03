==========
tmux
==========

:wb:`Tmux`

.. raw:: html 

    <hr class="divider_blue">

应用介绍
========

.. raw:: html 

    <hr class="divider_black"> 

Terminal Multiplexer（终端复用器，简称为 Tmux）是一款开源的服务程序，旨在提供多窗口远程控制功能。它的主要目的是为用户解决网络异常中断或需要同时控制多个远程终端窗口的问题。通过Tmux，用户可以在多个远程会话之间自由切换，并且可以保证即使网络中断，也能够随时恢复会话，确保用户不会失去对远程会话的控制。

使用指南
=========

:small-gray::`管理远程会话`

1.在终端中输入 :cmd::`tmux` 命令进入会话窗口：

.. figure:: /_static/img/Tmux/tmux_1.png
   :alt: 进入会话窗口
   :width: 100%
   :class: zoomable

2.在会话窗口中输入 :cmd::`exit` 命令以退出会话窗口：

.. figure:: /_static/img/Tmux/tmux_2.png
   :alt: 退出会话窗口
   :width: 100%
   :class: zoomable

3.会话窗口的编号默认从0开始自动排序（即0、1、2、3、……），可以创建一个指定名称为

backup 的会话窗口。

.. code-block:: text
    :linenos:  

    tmux new -s backup

4.将当前会话隐藏到后台。

.. code-block:: text
    :linenos:  

    tmux detach

5.此时也可以关闭此会话窗口（这与进行远程连接时突然断网具有相同的效果），Tmux

服务程序会 自动帮我们进行保存。 查看后台有多少会话：

.. code-block:: text
    :linenos:  

    tmux ls

6.回到刚才创建的 backup 会话中。

.. code-block:: text
    :linenos:  

    tmux attach -t backup

7.重命名已创建的会话。

.. code-block:: text
    :linenos:  

    tmux rename-session -t <old-name> <new-name>
    例如把会话名称 test1 的会话 重命名为 bench
    tmux rename-session -t test1 bench

.. figure:: /_static/img/Tmux/tmux_3.png
   :alt: 重命名会话窗口
   :width: 100%
   :class: zoomable

8.删掉 tmux 中的特定窗口。

.. code-block:: text
    :linenos:  

    tmux kill-window -t :窗口编号

例如，要删除窗口编号为2的窗口，可以执行 tmux kill-window -t :2

9.终止整个 tmux 服务器，同时结束所有的 tmux 会话窗口。

.. code-block:: text
    :linenos:  

    tmux kill-server

:small-gray::`管理多窗格`

.. raw:: html 

    <hr class="divider_gray">

Tmux服务具有多窗格功能，能够将一个终端界面按照上下或左右进行切割，从而使得能同时做多件事情，而且之间互不打扰。

.. admonition:: 注意：

    以下命令必须要进入到tmux窗口界面才能执行成功。

可以使用以下命令上下分割：

.. code-block:: text
    :linenos:  

    tmux split-window

.. figure:: /_static/img/Tmux/tmux_4.png
   :alt: 上下分割
   :width: 100%
   :class: zoomable

退出多窗格功能使用 :cmd:`exit`

可以使用以下命令左右分割：

.. code-block:: text
    :linenos:  

    tmux split-window -h

.. figure:: /_static/img/Tmux/tmux_5.png
   :alt: 左右分割
    :width: 100%
    :class: zoomable

..退出多窗格功能使用 :cmd:`exit`

:mblack:`常见问题`

.. raw:: html 

    <hr class="divider_black">

:mblack:`参考链接`

.. raw:: html 

    <hr class="divider_black">