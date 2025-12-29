=========
用户实例
=========

:wb:`用户实例`

.. raw:: html

    <hr class="divider_blue">

在“实例”中，用户点击实例名称，可以查看实例的基本信息、资源详情、服务和集群，并对实例进行操作。

.. admonition::  `⚠️提示`

    实例创建成功后，用户可以在“实例”中查看和管理自己的实例。如果实例状态显示为“运行中”，则表示实例已成功启动，用户可以通过SSH登录到实例进行操作。如果实例状态显示为“停止”，则表示实例已被停止，用户需要先启动实例才能使用。

此处显示的实例包含独占实例和独占集群。

:black:`实例详情`
==================

.. figure:: /_static/img/userInstance/userInstance_1.png
   :alt: 用户实例页面
   :width: 100%
   :class: zoomable

.. figure:: /_static/img/userInstance/userInstance_2.png
   :alt: 用户实例详情页面
   :width: 100%
   :class: zoomable

:black:`实例基本信息`
-------------------------

基本信息显示当前实例的运行状态、运行剩余时间、健康状态、资源分配状态、创建实例所用的应用、计费账户、创建时间和使用期限。

.. figure:: /_static/img/userInstance/userInstance_3.png
   :alt: 用户实例基本信息页面
   :width: 100%
   :class: zoomable

:black:`资源详情`
-------------------------

资源详情显示当前实例所使用的CPU核数、内存数、GPU数、块存储和镜像。

.. figure:: /_static/img/userInstance/userInstance_4.png
   :alt: 用户实例资源详情页面
   :width: 100%
   :class: zoomable

:black:`服务和集群`
-------------------------

服务显示该实例当前的健康状态和开通的功能，例如控制台、交互界面和SSH等。可以点击图标选择相应的服务，也可以添加自定义服务.

.. figure:: /_static/img/userInstance/userInstance_5.png
   :alt: 用户实例服务和集群页面
   :width: 100%
   :class: zoomable

根据用户创建的类型不同，节点数量也不同，有的为单节点独占实例，有的为独占集群。

.. figure:: /_static/img/userInstance/userInstance_6.png
   :alt: 用户实例集群页面
   :width: 100%
   :class: zoomable

.. figure:: /_static/img/userInstance/userInstance_7.png
   :alt: 用户实例集群节点页面
   :width: 100%
   :class: zoomable

节点详细信息包含如下：

●名称：节点名称。

●角色：分为“主节点”、“工作站”和“计算节点”。“主节点”是作业队列系统的管理节点，负责接受用户提交的任务，进行任务调度和分发。“工作站”节点主要用于用户登录、作业提交、作业查看、文本编辑、数据传输等工作。“计算节点”用于处理用户的计算任务。

●虚拟IP：显示节点的虚拟IP。

●资源分配：当前节点所占用的资源。

●资源使用统计：最近6小时的CPU、GPU和内存使用情况。

:black:`启动/停止实例`
=========================

实例详情的右上角，有“启动”和“停止”按钮，点击后就可以运行或停止实例。

.. figure:: /_static/img/userInstance/userInstance_8.png
   :alt: 用户实例进入界面
   :width: 100%
   :class: zoomable

.. figure:: /_static/img/userInstance/userInstance_9.png
   :alt: 用户实例启动停止页面
   :width: 100%
   :class: zoomable

:black:`实例延期`
=========================

为了充分的利用资源，每个实例都设有默认的最长使用期限。当创建实例成功后就开始倒计时，倒计时为零时，系统会自动停止该实例释放资源。如果用户希望延长实例的使用时间，可以申请对实例延期。

点击“实例”中的“申请延期”。

.. figure:: /_static/img/userInstance/userInstance_10.png
   :alt: 用户实例申请延期页面
   :width: 100%
   :class: zoomable

在窗口中选择需要延期的类型，填写希望延长的时间和理由，并提交管理员审批。

.. figure:: /_static/img/userInstance/userInstance_11.png
   :alt: 申请延期填写信息页面
   :width: 100%
   :class: zoomable
   
:b:`延后实例本次运行的截止日期：` 延期申请只针对当前正在运行的实例，不影响之后的实例运行。

:b:`更新实例的使用期限：` 申请用户该实例的默认最长使用期限，只对下次及以后的运行有效。


.. admonition::  `⚠️提示`

    如果要对当前正在运行的实例进行延期，请预留审批时间，避免在快截止时提出申请。

用户可以在“申请”中查看自己已经提交的延期请求以及审批情况。

.. figure:: /_static/img/userInstance/userInstance_12.png
   :alt: 用户实例延期申请页面
   :width: 100%
   :class: zoomable


.. admonition::  `⚠️提示`

    如果实例有还未审批的请求，不允许对该实例提交相同类型的延期请求。需要等审批完毕后才能再次提交。

:black:`资源释放`
=========================

.. warning::

   实例会从创建开始计费，直到自动或手动释放资源停止计费。因此如果资源使用完毕，记得及时手动释放资源。

实例只有在停止状态下才能释放资源。停止实例后，点击“释放资源”按钮，并停止计费。

.. figure:: /_static/img/userInstance/userInstance_13.png
   :alt: 用户实例释放资源页面
   :width: 100%
   :class: zoomable

已经释放资源的实例会进入“回收站”，用户可以在“回收站”里找到实例，并重新分配资源，进入计费状态。

.. figure:: /_static/img/userInstance/userInstance_14.png
   :alt: 用户实例回收站页面
   :width: 100%
   :class: zoomable

.. admonition::  `⚠️提示`

    进入“回收站”的实例的数据和环境都依然保存。如果希望彻底删除，点击删除图标，将实例和数据彻底删除。

.. figure:: /_static/img/userInstance/userInstance_15.png
   :alt: 用户实例回收站删除页面
   :width: 100%
   :class: zoomable

:black:`磁盘扩容`
=========================

实例只有在停止状态下才能磁盘扩容。停止实例后，在列表中点击磁盘扩容按钮，

.. figure:: /_static/img/userInstance/userInstance_16.png
   :alt: 用户实例磁盘扩容页面
   :width: 100%
   :class: zoomable

或是在实例详情中点击磁盘扩容按钮。

.. figure:: /_static/img/userInstance/userInstance_17.png
   :alt: 用户实例详情磁盘扩容页面
   :width: 100%
   :class: zoomable

.. figure:: /_static/img/userInstance/userInstance_18.png
   :alt: 用户实例详情磁盘扩容页面
   :width: 100%
   :class: zoomable  

在弹出窗口中，通过滑条或是直接输入磁盘尺寸调整所需要的磁盘大小后，点击确定完成扩容。

.. figure:: /_static/img/userInstance/userInstance_19.png
   :alt: 用户实例填写磁盘扩容信息页面
   :width: 100%
   :class: zoomable

扩容大小在2048G范围内，实例自动扩容，无需其他额外操作，直接使用扩容空间。

.. warning::

   磁盘扩容后，原有数据和环境均会被保留，请放心扩容使用。扩容大小在2048G以上，需要按照以下教程操作。

扩容完成后，启动实例，进入到实例中。

在命令行输入 :cmd:`lsblk` ，查看磁盘扩容情况，本次扩容空间大小为20T，见下图：

.. userInstance_20.png和userInstance_21.png图片一样
  ..figure:: /_static/img/userInstance/userInstance_20.png
   :alt: 用户实例查看磁盘扩容页面
   :width: 100%
   :class: zoomable
 
.. figure:: /_static/img/userInstance/userInstance_21.png
   :alt: 用户实例查看磁盘扩容页面
   :width: 100%
   :class: zoomable

在命令行继续输入 :cmd:`df -Th` 查看磁盘的格式，主要包含ext4或者xfs两种，本次实例查看见下图：

.. figure:: /_static/img/userInstance/userInstance_22.png
   :alt: 用户实例查看磁盘格式页面
   :width: 100%
   :class: zoomable

可以看到，:cmd:`lsblk` 和 :cmd:`df -Th` 两个命令看到的磁盘大小是不一样的。用 :cmd:`lsblk` 看到的是20T，但是用 :cmd:`df -Th` 查看只有49G，两者存在差异。这是因为lsblk查看的是block device，即逻辑磁盘大小。 :cmd:`df` 查看的是file system, 即文件系统层的磁盘大小。磁盘扩容后，block device容量变大，但还没有反映到file system中，需要用 :cmd:`resize2fs` 命令来更新。

在命令行输入 :cmd:`resize2fs /dev/vda1` 进行更新，扩容时间视扩容空间大小而定，扩容20T需要几分钟的时间，提示如下图所示内容，表示扩容完成。

.. figure:: /_static/img/userInstance/userInstance_23.png
   :alt: 用户实例磁盘扩容完成页面
   :width: 100%
   :class: zoomable

在命令行输入df -Th查看扩容后的磁盘空间，可以看到已经变为20T。

.. figure:: /_static/img/userInstance/userInstance_24.png
   :alt: 用户实例查看扩容后磁盘页面
   :width: 100%
   :class: zoomable

    

.. admonition::  `⚠️提示`

    resize2fs只可用于调整ext4文件系统的大小。
    如果分区类型为xfs，则执行xfs_growfs /dev/vda1进行扩容，操作过程和ext4一样。

:black:`修改配置`
=========================

如果觉得创建的实例资源不够，比如希望增加CPU核数、GPU卡数或是内存，可以修改实例的资源配置。

停止实例，并释放资源，在“我的资源”-“回收站”里找到实例，点击右侧的“修改配置”，在弹出窗口中选择需要的资源配置。

.. figure:: /_static/img/userInstance/userInstance_23.png
   :alt: 用户实例修改配置页面
   :width: 100%
   :class: zoomable

.. figure:: /_static/img/userInstance/userInstance_24.png
   :alt: 用户实例选择修改配置页面
   :width: 100%
   :class: zoomable

修改资源配置后，为实例重新分配资源并启动即可。

.. admonition::  `⚠️提示`

    每个实例是否可更改资源配置以及可选的资源配置，取决于管理员对应用的设置。

.. figure:: /_static/img/userInstance/userInstance_25.png
   :alt: 用户实例重新分配资源页面
   :width: 100%
   :class: zoomable

.. figure:: /_static/img/userInstance/userInstance_26.png
   :alt: 用户实例重新启动页面
   :width: 100%
   :class: zoomable

:black:`添加自定义服务`
=========================

.. raw :: html

    <hr class="divider_black">

平台支持用户增加自定义服务，目前只支持自助添加和删除TCP端口映射。点击右上角的“添加自定义服务”。

.. figure:: /_static/img/userInstance/userInstance_27.png
   :alt: 用户实例添加自定义服务页面
   :width: 100%
   :class: zoomable



在弹出窗口中输入服务名称，容器或虚拟机内部监听的服务地址，端口和所在节点。

.. figure:: /_static/img/userInstance/userInstance_28.png
   :alt: 用户实例填写自定义服务信息页面
   :width: 100%
   :class: zoomable

.. figure:: /_static/img/userInstance/userInstance_29.png
   :alt: 用户实例自定义服务完成页面
   :width: 100%
   :class: zoomable


.. warning::

    端口名称不可以跟保留的名称，即平台已使用的ssh, desktop, jupyter等重名。
    用户也不可添加和删除spec里已经配的端口映射。