==========
作业系统
==========

:wb:`作业系统`

.. raw:: html

    <hr class="divider_blue">

:black:`Slurm系统简介`
=======================

.. raw:: html

    <hr class="divider_black">

在公共集群中使用SLURM作业调度系统进行任务的调度和管理。SLURM （SimpleLinux Utility for Resource Management）是一种可用于大型计算节点集群的高度可伸缩和容错的集群管理器和作业调度系统，被世界范围内的超级计算机和计算集群广泛采用。

:black:`Slurm常用命令`
=======================

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
       width: 20%;
   }
   .slurm-table td:last-child {
       background-color: #ffffff;
       width: 80%;
   }

   /* 预定义的 font-blue 样式（和你 conf.py 中配置的对应） */
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
           <td><code class="cmd font-blue">sinfo</code></td>
           <td>查看节点与分区状态</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">squeue</code></td>
           <td>查看队列状态</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">scancel</code></td>
           <td>取消作业</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">sacct</code></td>
           <td>查看历史作业信息</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">salloc</code></td>
           <td>分配资源</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">sbatch</code></td>
           <td>提交批处理作业</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">scontrol</code></td>
           <td>系统控制</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">srun</code></td> 
           <td>执行作业</td>
       </tr>
   </table>

.. raw:: html

   <p>日常使用超算资源只需掌握简单的几条命令即可，具体详细的配置请参考
   <a href="https://slurm.schedmd.com/documentation.html"
      target="_blank"
      rel="noopener noreferrer">
      SLURM官方文档
   </a></p>

:black:`查询状态`
=======================

 :cmd:`sinfo`：查看节点与分区状态


.. code-block:: text
    :linenos:  

    $ sinfo
    PARTITION AVAIL  TIMELIMIT  NODES  STATE  NODELIST
    cpu*      up     infinite      1  down*  n144
    cpu*      up     infinite    168  alloc  n[3-143,145-171]


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
       width: 20%;
   }
   .slurm-table td:last-child {
       background-color: #ffffff;
       width: 80%;
   }

   /* 预定义的 font-blue 样式（和你 conf.py 中配置的对应） */
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
           <td><code class="cmd font-blue">PARTITION</code></td>
           <td>分区名，又称队列，对节点的逻辑分组。不同的分区会设置不同权限、资源限制等。</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">AVAIL</code></td>
           <td>可用状态：<code class="cmd font-blue">up</code> 可用；<code class="cmd font-blue">down 不可用</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">TIMELIMIT</code></td>
           <td>该分区的作业最大运行时长限制, <code class="cmd font-blue">30:00</code> 表示30分钟，如果是<code class="cmd font-blue">2-00:00:00</code>表示2天，如果是<code class="cmd font-blue">infinite</code>表示不限时间</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">NODES</code></td>
           <td>节点数量</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">STATE</code></td>
           <td>状态：<code class="cmd font-blue">drain</code>:排空状态，表示该类节点不再分配到其他；
           <code class="cmd font-blue">idle</code>: 空闲状态；
           <code class="cmd font-blue">alloc</code>: 被分配状态; mix:部分被占用，但是仍有可用资源； 
           <code class="cmd font-blue">down</code>停机</td>
       </tr>
   </table>


.. figure:: /_static/img/jobSystem/jobSystem_1.png
   :alt: sinfo命令示例
   :width: 100%
   :class: zoomable

:cmd:`squeue`：查看队列状态

.. 代码块实现有问题
.. code-block:: text
    :linenos:

    $ squeue
    JOBID PARTITION     NAME     USER ST       TIME  NODES NODELIST(REASON)
    8628       cpu vasp_cpu  yangx17 PD       0:00      2 (QOSMaxNodePerUserLimit)
    8629       cpu vasp_cpu  yangx17 PD       0:00      2 (QOSMaxNodePerUserLimit)
    8630       cpu vasp_cpu  yangx17 PD       0:00      2 (QOSMaxNodePerUserLimit)
    8636       cpu vasp_cpu  mab2019 PD       0:00      4 (Resources)
    8637       cpu     vasp lizhenhu PD       0:00      1 (Priority)
    5042       cpu HICE_WAC    xum17  R 16-22:28:14      4 n[114-117]
    5044       cpu LICE_WAC    xum17  R 16-22:21:58      4 n[29,41-43]
    5519       cpu        c zhaosy16  R 14-22:00:21      5 n[93-95,165-166]
    5783       cpu        c liangt20  R 13-20:54:50      5 n[30-32,156-157]

.. 表格3

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
       width: 20%;
   }
   .slurm-table td:last-child {
       background-color: #ffffff;
       width: 80%;
   }

   /* 预定义的 font-blue 样式（和你 conf.py 中配置的对应） */
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
           <td>关键词</td>
           <td>含义</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">JOBID</code></td>
           <td>作业的id号，每个成功提交的任务都会有唯一的id</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">PARTITION</code></td>
           <td>分区名 </td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">NAME</code></td>
           <td>作业名称，默认为提交脚本的名称</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">USER</code></td>
           <td>用户名，提交该作业的用户名</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">ST</code></td>
           <td>作业状态：<code class="cmd font-blue">PD</code>排队；<code class="cmd font-blue">R</code>运行；<code class="cmd font-blue">S</code>挂起；<code class="cmd font-blue">CG</code>正在退出</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">TIME</code></td>
           <td>作业运行时间</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">NODES</code></td>
           <td>作业占节点数</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">NODELIST(REASON)</code></td>
           <td>作业所占节点列表，如果是排队状态的任务，则会给出排队原因</td>
       </tr>
   </table>


.. figure:: /_static/img/jobSystem/jobSystem_2.png
   :alt: squeue命令示例
   :width: 100%
   :class: zoomable

:cmd:`scancel`：取消作业


.. figure:: /_static/img/jobSystem/jobSystem_3.png
   :alt: scancel命令示例
   :width: 100%
   :class: zoomable

:black:`作业性能监控`
=======================

在”作业“页面点击作业查看作业详情，进入”性能监控“

.. figure:: /_static/img/jobSystem/jobSystem_4.png
   :alt: 作业性能监控页面
   :width: 100%
   :class: zoomable

.. figure:: /_static/img/jobSystem/jobSystem_5.png
   :alt: 作业性能监控详情页面
   :width: 100%
   :class: zoomable

:black:`Slurm作业提交`
=======================

.. raw:: html

    <hr class="divider_black">

系统支持WEB页面提交作业以及终端提交作业。

  :black:`系统页面提交`

  .. raw:: html

    <hr class="divider_gray">

系统支持直接在页面提交作业。

.. admonition:: ⚠️注意

   在提交作业前，请先到“集群”-“分区”页面查看集群的不同队列资源情况。
   如果有不止一个队列，请根据队列的资源配置情况，在作业脚本中加上队列参数--partition=<names> 。

点击上方集群，选择“提交作业”。

.. figure:: /_static/img/jobSystem/jobSystem_6.png
   :alt: 提交作业页面
   :width: 100%
   :class: zoomable

选择需要使用的集群和作业模板，填写作业名称，在脚本编辑器里填入作业脚本，点击右上方的“提交作业”按钮。

.. figure:: /_static/img/jobSystem/jobSystem_7.png
   :alt: 作业脚本编辑页面
   :width: 100%
   :class: zoomable

提交作业后，可以在“作业”页面查看是否提交成功。

.. figure:: /_static/img/jobSystem/jobSystem_8.png
   :alt: 提交作业成功页面
   :width: 100%
   :class: zoomable

如果提交的作业有输出，需要下载，等待作业运行完成后，点击作业名称，进入作业详情。

.. figure:: /_static/img/jobSystem/jobSystem_9.png
   :alt: 作业详情页面
   :width: 100%
   :class: zoomable

在“作业输出”页面，点击“下载输出日志”。

.. figure:: /_static/img/jobSystem/jobSystem_10.png
   :alt: 作业输出页面
   :width: 100%
   :class: zoomable




:black:`终端提交`

.. raw:: html

    <hr class="divider_gray">

Slurm作业通常分为交互式和批量式两种。交互式作业通常用于代码编译、脚本调试、交互式计算等工作。长期后台计算的任务通常以作业脚本的方式进行批量提交。

:gray:`交互作业`

.. raw:: html

    <hr class="divider_gray">

.. warning::
   集群的登录节点设置有资源限制，请勿在登录节点进行大量计算。

集群的计算节点默认不允许用户直接登录，对需要交互式处理的程序，在登录到集群后，使用salloc命令分配节点，然后再ssh到分配的节点上进行处理：

.. figure:: /_static/img/jobSystem/jobSystem_11.png
   :alt: 交互式作业提交页面
   :width: 100%
   :class: zoomable

计算完成后，使用:cmd:`exit` 命令退出节点，注意需要:cmd:`exit` 两次，第一次exit是从计算节点退出到登录节点，第二次 :cmd:`exit` 是释放所申请的资源。


.. figure:: /_static/img/jobSystem/jobSystem_12.png
   :alt: 交互式作业退出页面
   :width: 100%
   :class: zoomable
 
:gray:`批量作业`

.. raw:: html

    <hr class="divider_gray">

可以通过将程序执行命令放入作业提交脚本，并通过 :cmd:`sbatch` 命令作业提交的方式在集群中进行计算。

一个简单的脚本示例如下：


.. 代码块有问题
.. code-block:: text
    :linenos:

    #! /bin/bash
    ### 表示这是一个bash脚本

    #SBATCH --job-name=JOBNAME
    ### 设置该作业的作业名

    #SBATCH --nodes=2
    ### 指定该作业需要2个节点数

    #SBATCH --ntasks-per-node=40
    ### 每个节点所运行的进程数为40

    #SBATCH --time=2:00:00
    ### 作业最大的运行时间，超过时间后作业资源会被SLURM回收

    #SBATCH --comment project_name
    ### 指定从哪个项目扣费。如果没有这条参数，则从个人账户扣费

    mpirun hostname
    ### 程序的执行命令

上述中 :cmd:`###` 为注释行。

第一行表示这是一个bash脚本，第4-17行以 :cmd:`#SBATCH` 开头的命令表示这些是需要slurm系统处理的参数。

如下图所示，通过 :cmd:`sbatch+作业脚本名` 提交作业，系统会返回作业编号，通过 :cmd:`squeue` 命令可以看到作业运行状态，等作业执行完成后，默认会把程序的输出放到 :cmd:`slurm-作业编号.out` 的文件中，可通过该文件查看程序的输出。


:gray:`GPU集群作业提交`

.. raw:: html

    <hr class="divider_gray">

如果是GPU集群，需要在作业脚本中增加 :cmd:`--gres=gpu:<number of card>` 参数。例如 :cmd:`#SBATCH --gres=gpu:2`，意味着指定2张GPU卡数。

以下为GPU作业的一个示例：

.. code-block:: text
    :linenos:

    #! /bin/bash
    ### 表示这是一个bash脚本

    #SBATCH --job-name=gpu-example
    ### 该作业的作业名

    #SBATCH --nodes=1
    ### 该作业需要1个节点

    #SBATCH --ntasks=16
    ### 该作业需要16个CPU

    #SBATCH --partition=gpu
    ### 该作业在gpu分区中提交

    #SBATCH --gres=gpu:1
    ### 申请1块GPU卡

    #SBATCH --comment project_name
    ### 指定从哪个项目扣费。如果没有这条参数，则从个人账户扣费

    source ~/.bashrc
    ### 初始化环境变量

    python test.py
    ### 程序的执行命令

.. admonition:: ⚠️注意

   GPU集群中提交作业时，需要在srun或 sbatch命令中增加参数-s，或者--oversubscribe。表示允许与其它作业共享资源。

例如：

$sbatch -s job.sh

如果要在GPU集群中使用Nvidia指令，请参考


:gray:`常见提交作业参数参考`

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
       width: 20%;
   }
   .slurm-table td:last-child {
       background-color: #ffffff;
       width: 80%;
   }

   /* 预定义的 font-blue 样式（和你 conf.py 中配置的对应） */
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
           <td>参数</td>
           <td>说明</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">--job­name=<name></code></td>
           <td>设定作业名称</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">--nodes=<n> 或 -</code></td>
           <td>设定作业需要的节点数。如果没有指定，默认分配足够的节点来满足<code class="cmd font-blue">--ntasks=<n></code>和<code class="cmd font-blue">--cpus-per-task=<ncpus></code>参数的要求。</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">--ntasks-per-node=<ntasks></code></td>
           <td>设定每个节点上的任务数。要和<code class="cmd font-blue">--nodes=<n></code>同时配合使用。</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">--ntasks=<n> 或 -n</code></td>
           <td>设定最多启动的任务数。</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">--cpus-per-task=<ncpus></code></td>
           <td>设定每个任务所需要的CPU核数。如果没有指定，默认为每个任务分配一个CPU核。一般运行OpenMP等多线程程序时需要，普通MPI程序不需要。</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">--gres=gpu:n</code></td>
           <td>设定需要使用的GPU卡数量</td>
       </tr>
       <tr>
           <td><code class="cmd font-blue">--comment projectName</code></td>
           <td>设定需要扣费的项目账户，将<code class="cmd font-blue">projectName</code>替换为项目名称。如果项目名称错误，作业会提交失败。</td>
       </tr>
   </table>

:black:`参考资料`
=======================

.. raw:: html

   <p>1.
   <a href="https://hpc.cloud/d/342-eaas"
      target="_blank"
      rel="noopener noreferrer">
      Slurm作业系统 ↗
   </a></p>