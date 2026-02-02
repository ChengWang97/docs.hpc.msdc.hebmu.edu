=========
文件传输
=========


:black:`文件传输`
=========================

.. raw:: html

   <p>
   <a href=" ../_static/downloads/1202河北医科大学高性能计算平台与个人笔记本电脑数据传输互操作指南.docx" download="数据传输互操作指南.doc" 
      style="background-color: #007bff; color: white; padding: 8px 14px; text-decoration: none; border-radius: 3px;">
      下载 DOC 用户手册
   </a>
   </p>


1、登录winscp官网：https://winscp.net/eng/index.php
点击“DWONLOAD NOW”下载该软件

.. figure:: /_static/img/fileTransfer/fileTransfer_1.png
   :alt: WinSCP下载页面
   :width: 100%
   :class: zoomable

2、点击“DOWNLOAD WINSCP 6.5.5”

.. figure:: /_static/img/fileTransfer/fileTransfer_2.png
   :alt: WinSCP软件下载页面
   :width: 100%
   :class: zoomable

3、下载完成后，双击“WinSCP-6.5.5-Setup.exe”，进行安装，直至完成。

.. figure:: /_static/img/fileTransfer/fileTransfer_3.png
   :alt: WinSCP安装页面
   :width: 100%
   :class: zoomable

.. figure:: /_static/img/fileTransfer/fileTransfer_4.png
   :alt: WinSCP安装页面
   :width: 100%
   :class: zoomable

.. figure:: /_static/img/fileTransfer/fileTransfer_5.png
   :alt: WinSCP安装页面
   :width: 100%
   :class: zoomable

.. figure:: /_static/img/fileTransfer/fileTransfer_6.png
   :alt: WinSCP安装页面
   :width: 100%
   :class: zoomable

.. figure:: /_static/img/fileTransfer/fileTransfer_7.png
   :alt: WinSCP安装页面
   :width: 100%
   :class: zoomable

4、打开“winscp”新建站点，输入相关信息如下：

文件协议：WebDAV
加密：TLS/SSL隐式加密
主机名：10.20.7.1
端口号：4918
高性能计算平台用户名：u10091369
高性能计算平台用户密码：********
点击保存之后，点击登录。

.. figure:: /_static/img/fileTransfer/fileTransfer_8.png
   :alt: WinSCP新建站点页面
   :width: 100%
   :class: zoomable

4、弹出弹框中自定义站点名称：高性能计算平台数据传输，根据实际需求勾选“保存密码”“建立桌面快捷方式”，点击“确定”。

.. figure:: /_static/img/fileTransfer/fileTransfer_9.png
   :alt: WinSCP保存站点页面
   :width: 100%
   :class: zoomable

.. figure:: /_static/img/fileTransfer/fileTransfer_10.png
   :alt: WinSCP登录页面
   :width: 100%
   :class: zoomable

.. admonition::  `⚠️提示`

    备注：如果忘记密码，可以登录高性能计算平台重置密码。

.. figure:: /_static/img/fileTransfer/fileTransfer_11.png
   :alt: 高性能计算平台重置密码页面
   :width: 100%
   :class: zoomable

.. figure:: /_static/img/fileTransfer/fileTransfer_12.png
   :alt: 高性能计算平台重置密码页面
   :width: 100%
   :class: zoomable

.. figure:: /_static/img/fileTransfer/fileTransfer_13.png
   :alt: 高性能计算平台重置密码页面
   :width: 100%
   :class: zoomable

5、登录成功后，双击“storage（default）”，可以出现三类文件夹

.. figure:: /_static/img/fileTransfer/fileTransfer_14.png
   :alt: 高性能计算平台登录成功页面
   :width: 100%
   :class: zoomable

左侧为个人笔记本电脑硬盘文件夹，点击左上角可以切换电脑硬盘（C/D/E）
右侧为高性能计算平台个人账户下三类存储文件夹
1.	MyData：个人数据文件夹，数据传输到此文件夹，仅本人可以查看
2.	ProjectGroup(llm20251201)、ProjectGroup(moeproject)：项目组数据文件夹，仅项目组成员可查看。
3.	ProjectGroup(public_cluster)：全校公共共享数据文件夹，上传后全校成员可查看。

.. figure:: /_static/img/fileTransfer/fileTransfer_15.png
   :alt: 高性能计算平台登录成功
   :width: 100%
   :class: zoomable

以传输某个数据/文件到项目组ProjectGroup(llm20251201)为例，来演示与项目组成员共享数据的操作流程。
1)	双击打开ProjectGroup(llm20251201)文件夹。

.. figure:: /_static/img/fileTransfer/fileTransfer_16.png
   :alt: 高性能计算平台共享数据页面
   :width: 100%
   :class: zoomable

2)	双击打开“share”文件夹。

.. figure:: /_static/img/fileTransfer/fileTransfer_17.png
   :alt: 高性能计算平台共享数据页面
   :width: 100%
   :class: zoomable

3)	直接鼠标左键按住，拖拽左侧想要上传的文件/数据/文件夹到右侧“share”文件夹处。

.. figure:: /_static/img/fileTransfer/fileTransfer_18.png
   :alt: 高性能计算平台共享数据页面
   :width: 100%
   :class: zoomable

也可以鼠标右键后点击上传

.. figure:: /_static/img/fileTransfer/fileTransfer_19.png
   :alt: 高性能计算平台上传共享
   :width: 100%
   :class: zoomable

4)	传输完成后，右侧会显示从左侧传输的文件、数据、文件夹。

.. figure:: /_static/img/fileTransfer/fileTransfer_20.png
   :alt: 高性能计算平台传输完成页面
   :width: 100%
   :class: zoomable

5)	最后登录高性能计算平台，点击“工作台”--“数据总览”--“选择项目组名称大模型20251201”，可以看到上传的文件和文件夹已经上传到“share”文件夹。

.. figure:: /_static/img/fileTransfer/fileTransfer_21.png
   :alt: 高性能计算平台数据总览页面
   :width: 100%
   :class: zoomable

.. admonition::  `⚠️提示`

    备注：在winscp看到项目共享文件夹名称：ProjectGroup(llm20251201)和在高性能计算平台看到“大模型20251201”是同一个意思，如下图。

.. figure:: /_static/img/fileTransfer/fileTransfer_22.png
    :alt: 高性能计算平台项目组名称页面
    :width: 100%
    :class: zoomable

.. figure:: /_static/img/fileTransfer/fileTransfer_23.png
   :alt: 高性能计算平台项目组名称页面 
   :width: 100%
   :class: zoomable

6、如果从高性能计算平台上下载数据到个人笔记本电脑，即从右侧把想要下载的数据/文件/文件夹鼠标左键按住向左侧拖拽即可。

.. figure:: /_static/img/fileTransfer/fileTransfer_24.png
   :alt: 高性能计算平台下载数据页面
   :width: 100%
   :class: zoomable

也可以鼠标右键，点击下载

.. figure:: /_static/img/fileTransfer/fileTransfer_25.png
   :alt: 高性能计算平台下载数据页面
   :width: 100%
   :class: zoomable

.. figure:: /_static/img/fileTransfer/fileTransfer_26.png
   :alt: 高性能计算平台下载数据页面
   :width: 100%
   :class: zoomable

.. figure:: /_static/img/fileTransfer/fileTransfer_27.png
    :alt: 高性能计算平台下载数据页面
    :width: 100%
    :class: zoomable



