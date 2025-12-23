==============
submit-job
==============

提交集群作业
==============

通过页面提交集群作业

   .. admonition:: ⚠️提示

    在提交作业前，请先到“集群”-“分区”页面查看集群的不同队列资源情况。如果有不止一个队列，请根据队列的资源配置情况，在作业脚本中加上队列参数 --partition=<names> 。

点击上方集群，选择“提交作业”。

.. figure:: /_static/img/submitjob_1.png
   :alt: 提交作业入口页面
   :width: 90%
   :class: zoomable

   图1：提交作业入口页面说明。

选择需要使用的集群和作业模板，填写作业名称，在脚本编辑器里填入作业脚本，点击右上方的“提交作业”按钮。

.. figure:: /_static/img/submitjob_2.png
   :alt: 提交作业页面
   :width: 90%
   :class: zoomable

   图2：提交作业页面

提交作业后，可以在“作业”页面查看是否提交成功。

.. figure:: /_static/img/submitjob_3.png
   :alt: 作业请求页面
   :width: 90%
   :class: zoomable

.. figure:: /_static/img/submitjob_4.png
   :alt: 作业详情页面
   :width: 90%
   :class: zoomable

如果提交的作业有输出，需要下载，等待作业运行完成后，点击作业名称，进入作业详情。

.. figure:: /_static/img/submitjob_5.png
   :alt: 作业详情页面
   :width: 90%
   :class: zoomable

在“作业输出”页面，点击“下载输出日志”。

.. figure:: /_static/img/submitjob_6.png
   :alt: 作业日志输出页面
   :width: 90%
   :class: zoomable
