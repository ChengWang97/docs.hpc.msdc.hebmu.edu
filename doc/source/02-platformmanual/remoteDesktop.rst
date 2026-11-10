=======================
windows虚拟机桌面远程
=======================

.. admonition:: 提醒

    ①本操作全部基于登录零信任平台操作，不能脱离零信任和高性能平台操作

    ②此操作步骤不仅适用于Schrödinger、moe、IPA，同样适用于所有基于在高性能平台下windows虚拟机环境部署的软件。

前置条件
-------------

已完成虚拟机实例的创建和密码清除操作并且虚拟机已开机。

未完成请参考 :ref:`虚拟机密码重置/清除 <passwordClear>` 

1. 虚拟机配置
^^^^^^^^^^^^^^^^^^^^^^

虚拟机

点击“远程桌面”按钮，打开虚拟机实例后，更改账户设置，添加远程密码

.. figure:: /_static/img/remotedesk/remotedesk-1.png
   :alt: win虚拟机密码重置页面
   :width: 75%
   :class: zoomable

.. figure:: /_static/img/remotedesk/remotedesk-2.png
   :alt: win虚拟机密码重置页面
   :width: 75%
   :class: zoomable

.. figure:: /_static/img/remotedesk/remotedesk-3.png
   :alt: win虚拟机密码重置页面
   :width: 75%
   :class: zoomable
   

.. figure:: /_static/img/remotedesk/remotedesk-4.png 
   :alt: win虚拟机密码重置页面
   :width: 75%
   :class: zoomable

配置完成后进行下一步配置

2. 高性能平台配置
^^^^^^^^^^^^^^^^^^^^^^

1) 返回高性能平台“我的资源”界面，选择windows虚拟机，点击虚拟机名称进入虚拟机详情页，增加一个自定义的远程服务

.. figure:: /_static/img/remotedesk/remotedesk-5.png 
   :alt: win虚拟机密码重置页面
   :width: 75%
   :class: zoomable


.. figure:: /_static/img/remotedesk/remotedesk-6.png 
   :alt: win虚拟机密码重置页面
   :width: 75%
   :class: zoomable

2) 创建完成自定义服务后，点击远程服务，将服务外部地址一栏中IP及端口复制下来

.. figure:: /_static/img/remotedesk/remotedesk-7.png 
   :alt: win虚拟机密码重置页面
   :width: 75%
   :class: zoomable

3. windows远程
^^^^^^^^^^^^^^^^^^^^^^^

完成上述配置后进行远程操作

1) 返回windows电脑桌面，同时按住键盘的 “win键” 和“R键”，将运行窗口调出后，输入 :cmd:`mstsc`，回车确认后将拷贝的地址输入到远程窗口栏中点击连接


.. figure:: /_static/img/remotedesk/remotedesk-8.png 
   :alt: win虚拟机密码重置页面
   :width: 75%
   :class: zoomable

.. figure:: /_static/img/remotedesk/remotedesk-9.png 
   :alt: win虚拟机密码重置页面
   :width: 75%
   :class: zoomable

.. figure:: /_static/img/remotedesk/remotedesk-10.png 
   :alt: win虚拟机密码重置页面
   :width: 75%
   :class: zoomable

.. figure:: /_static/img/remotedesk/remotedesk-11.png 
   :alt: win虚拟机密码重置页面
   :width: 75%
   :class: zoomable
