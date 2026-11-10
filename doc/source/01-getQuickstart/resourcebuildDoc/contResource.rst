=============
容器资源
=============


1. 容器资源申请
^^^^^^^^^^^^^^^^^^^^^^

1) 登录高性能平台后，进入到 **申请资源** 页面，点击页面上方的“申请资源”，进入资源库点击容器按钮。

.. figure:: /_static/img/resourcebuild_2.png
   :alt: 创建实例页面
   :width: 100%
   :class: zoomable

 
2) 根据自身需求选择所需的计算资源，如需GPU资源，点击GPU按钮，即可筛选对应的GPU计算资源，无需GPU则选择CPU即可。

   因GPU资源有限，平台会根据用户的使用情况进行资源分配，若当前GPU资源已被占用，则需要排队等待。

.. figure:: /_static/img/resourcebuild_3.png
   :alt: 实例设置页面
   :width: 100%
   :class: zoomable

.. figure:: /_static/img/resourcebuild_4.png
   :width: 100%
   :class: zoomable

3)此处以Jupyterlab为例，输入Jupyterlab的关键字，回车可检索出对应的计算资源，点击计算资源右下角的蓝色按钮-“创建实例”，会弹出创建实例的对话框输入对应的信息。

.. figure:: /_static/img/resourcebuild_6.png
   :width: 100%
   :class: zoomable



在实例设置中填写资源需求信息。

   ●	名称: 为该实例名称，用于分辨同一用户创建的不同实例。

   ●	通知邮箱: 用于发送平台通知，例如使用最长到时间即将到期时，将发送邮件通知用户。

   ●	计费账户: 用于扣费的账户。可以选择从个人账户扣费，也可以选择从自己所属的项目账户扣费，具体请参考计费方法。

   ●	节点资源设置: 用于设置实例的节点资源。根据实例的不同，可选的资源也不同。

.. admonition::  ⚠️提示

   **CPU** 是指实例要使用的 CPU 核数。
   
   **GPU** 是指实例要使用的 GPU 卡数。如果卡数为 0.Xx 的小数点，意为共享 GPU。例如 0.2 卡，则系统会分配给实例 1/5 的 GPU 卡。
   
   **内存** 是指实例需要的内存数。

创建完成的实例会在“我的资源”中显示已分配，且右下角会有提示，选择申请的实例，进行开机启动。

.. figure:: /_static/img/resourcebuild_7.png
   :alt: 实例启动页面
   :width: 100%
   :class: zoomable

.. admonition::  ⚠️提示
   
    如果平台当前可用资源已经全部分配完毕，该实例申请后需要排队等待分配，此时无法启动实例。

2. 容器资源使用
^^^^^^^^^^^^^^^^^^^^^^

启动后的实例操作一栏中的对应按钮会亮起，点击对应按钮即可进行对应的操作。

   按钮分别对应：停止、实例数据、控制台、ssh、用户界面

.. figure:: /_static/img/resourcebuild_8.png
   :alt: 实例启动
   :width: 100%
   :class: zoomable

停止：即停止实例运行，停止后的实例仍然占用资源，仍然会计费，若不再使用该实例，请点击释放资源。

实例数据：点击实例数据按钮，进入实例数据页面，可查看该实例的个人数据、项目数据以及公共集群共享数据。

   在平台上，系统根据不同用户模式会为用户在共享文件系统上分配三种目录，分别是个人目录，项目目录和公共集群目录.

.. figure:: /_static/img/resourcebuild_9.png
   :alt: 实例数据页面
   :width: 100%
   :class: zoomable

更多目录数据信息内容参考 :doc:`../../02-platformmanual/fileTransfer`。 

控制台：点击控制台按钮，进入实例控制台页面，可查看该实例的运行状态以及进行相关操作。

.. figure:: /_static/img/resourcebuild_10.png
   :alt: 控制台页面
   :width: 100%
   :class: zoomable

.. _ssh:

ssh：点击ssh按钮，进入ssh页面，可查看该实例的ssh连接信息。

   ssh连接信息包括ssh连接地址、ssh连接端口以及ssh连接用户名。用户可通过ssh工具进行远程连接。

.. figure:: /_static/img/resourcebuild_11.png
   :alt: ssh页面
   :width: 100%
   :class: zoomable


.. figure:: /_static/img/resourcebuild_12.png
   :alt: ssh页面
   :width: 100%
   :class: zoomable


.. figure:: /_static/img/resourcebuild_13.png
   :alt: ssh登录
   :width: 100%
   :class: zoomable

用户界面：点击用户界面按钮，进入用户界面页面，可查看该实例的用户界面信息。

.. figure:: /_static/img/resourcebuild_14.png
   :alt: ssh登录
   :width: 100%
   :class: zoomable

3. 容器资源释放
^^^^^^^^^^^^^^^^^^^^^^

实例使用结束后，请先停止实例，然后按下图“释放资源”，以免资源闲置，同时避免继续计费。

.. figure:: /_static/img/resourcebuild_15.png
   :alt: 实例释放页面
   :width: 100%
   :class: zoomable
   
.. warning::
   停止实例后，如果没有“释放资源”，由于该实例会继续占用资源，因此系统会持续计费至该实例被释放。

4. 容器资源恢复
^^^^^^^^^^^^^^^^^^^^^^

释放后的实例可以从回收站内恢复，重新再启动使用。

.. figure:: /_static/img/resourcebuild_16.png
   :alt: 实例回收站恢复页面
   :width: 100%
   :class: zoomable

