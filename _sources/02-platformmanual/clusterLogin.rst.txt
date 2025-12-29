=========
集群登录
=========

:black:`浏览器登录`
=========================

选择”工作台“-”资源总览“，可以看到平台提供的公共集群"public_cluster"。

.. figure:: /_static/img/clusterLogin/clusterLogin_1.png
   :alt: 资源总览页面
   :width: 100%
   :class: zoomable

选择所需使用的公共集群，点击如图所示图标，即可登录字符控制台界面

.. figure:: /_static/img/clusterLogin/clusterLogin_2.png
   :alt: 公共集群页面
   :width: 100%
   :class: zoomable

:black:`查看SSH登录信息`

.. raw:: html

    <hr class="divider_black">

.. admonition:: `注意`

    在 :zcred:`首次使用` SSH登录之前，需要通过平台管理界面重置密码。

每套虚拟集群有自己的访问端口，在“工作台”-“资源总览”中通过点击如图所示图标可显示集群的IP和端口信息。

.. figure:: /_static/img/clusterLogin/clusterLogin_3.png
   :alt: 公共集群SSH登录信息页面
   :width: 100%
   :class: zoomable

请使用红框框选出的地址,进行双击全选复制，连端口一起复制下来。

.. figure:: /_static/img/clusterLogin/clusterLogin_4.png
   :alt: 公共集群SSH登录信息页面2
   :width: 100%
   :class: zoomable

.. raw:: html

      <p>Windows推荐使用
      <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/"
         target="_blank"
         rel="noopener noreferrer">
         PuTTY ↗，
      </a>
      <a href="https://www.vandyke.com/products/securecrt/"
         target="_blank"
         rel="noopener noreferrer">
         SecureCRT ↗
      </a> 或
      <a href="https://www.netsarang.com/en/xshell/"
         target="_blank"
         rel="noopener noreferrer">
         Xshell ↗
      </a> 或
      <a href="https://www.netsarang.com/en/xmanager/"
         target="_blank"
         rel="noopener noreferrer">
         Xmanager ↗ 等客户端访问集群的服务端口，Linux/Mac直接使用终端即可。
      </a>
      </p>   

:black:`SSH免密码登录`
=======================

.. raw:: html

    <hr class="divider_black">

