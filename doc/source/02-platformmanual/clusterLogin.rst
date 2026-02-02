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

SSH免密码登录需要一对密钥对，包括一个公钥和一个私钥，其中私钥放在用户本机，公钥放在集群的 :cmd:`~/.ssh/authorized_keys` 目录。下次登录时，用户本机的私钥和远程集群的公钥通过加密协议验证配对，验证成功后将不需要密码直接登录成功。所以这里需要生成公私钥，并将公钥上传到目标实例的指定位置。

使用SSH客户端免密码登录主要需要两步：

在用户本机生成公私钥。
将公钥添加到计算云目标实例的 :cmd:`~/.ssh/authorized_keys` 文件末尾。

:gray:`生成密钥对`

.. raw:: html

   <hr class="divider_gray">


SSH 密钥对生成指南
=====================

本节介绍不同操作系统下生成 SSH 密钥对的详细步骤，包含文本说明、操作截图和命令行代码块。

.. tabs::
   .. tab:: MacOS & Linux
      :sync: macos

      直接使用终端在用户本机生成公钥和私钥。

      输入命令 :cmd:`ssh-keygen -t rsa` ：

      .. code-block:: text
         :linenos:
         :emphasize-lines: 1

         ssh-keygen -t rsa

      终端会提示：

      .. code-block:: text
         :linenos:

         Generating public/private rsa key pair.
         Enter file in which to save the key (/Users/~your-local-username~/.ssh/id_rsa):

      括号内为生成的公私钥的默认目录位置，直接回车就会使用这个默认位置。

      .. figure:: ../_static/img/clusterLogin/clusterLogin_5.png
         :align: center
         :alt: 生成公私钥
         :width: 100%
         :class: zoomable

      如果默认位置已经生成过公私钥，则终端会提示是否需要覆盖，这时可不用再次生成公私钥。

      .. code-block:: text
         :linenos:

         /Users/~your-local-username~/.ssh/id_rsa already exists.
         Overwrite (y/n)?

      终端会提示输入密码passphrase，这个密码为生成私钥的密码，将来防止私钥被其他人盗用。这里可以不输入任何密码，直接回车，再次提示输入密码，再次回车。

      .. figure:: ../_static/img/clusterLogin/clusterLogin_6.png
         :align: center
         :alt: 生成私钥
         :width: 100%
         :class: zoomable

      这时公钥存储在 :cmd:`/Users/~your-local-username~/.ssh/id_rsa.pub` 文件里，私钥存储在 :cmd:`/Users/~your-local-username~/.ssh/id_rsa` 文件里。

      .. figure:: ../_static/img/clusterLogin/clusterLogin_7.png
         :align: center
         :alt: 公钥存储
         :width: 100%
         :class: zoomable

      获取公钥，将返回值拷贝到剪贴板。

      .. code-block:: text
         :linenos:

         cat ~/.ssh/id_rsa.pub

      .. figure:: ../_static/img/clusterLogin/clusterLogin_8.png
         :align: center
         :alt: 公钥获取
         :width: 100%
         :class: zoomable

   .. tab:: Windows
      :sync: windows-ssh

      .. raw:: html

         <p>可以通过
         <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/"
             target="_blank"
             rel="noopener noreferrer">
             PuTTY ↗
         </a>
         或
         <a href="https://www.netsarang.com/en/free-for-home-school/"
             target="_blank"
             rel="noopener noreferrer">
             Xshell ↗
         </a>
         生成公私钥。下面以Xshell软件为例，介绍公私钥生成。</p>

      打开Xshell工具，工具栏有一个工具选项，点开选择新建用户密钥生成向导。

      .. figure:: ../_static/img/clusterLogin/clusterLogin_9.png
         :align: center
         :alt: sehll工具
         :width: 100%
         :class: zoomable

      密钥类型默认使用RSA，密钥长度默认2048位，点击下一步。

      .. figure:: ../_static/img/clusterLogin/clusterLogin_10.png
         :align: center
         :alt: 秘钥创建
         :width: 100%
         :class: zoomable

      等待软件自动生成密钥对后点击下一步。

      .. figure:: ../_static/img/clusterLogin/clusterLogin_11.png
         :align: center
         :alt: 秘钥生成
         :width: 100%
         :class: zoomable  

      按照软件指引配置密钥名称和密码后点击下一步。

      :warning:

        该密码加密您的私钥文件，若遗忘，则需要重新生成公私钥并重新添加至集群，请牢记！

      .. figure:: ../_static/img/clusterLogin/clusterLogin_11.png
         :align: center
         :alt: 公钥
         :width: 100%
         :class: zoomable  


      软件会显示生成的公钥，选中公钥复制到剪贴板，然后点击结束，将公钥另存为文件。

      .. figure:: ../_static/img/clusterLogin/clusterLogin_13.png
         :align: center
         :alt: 公钥复制
         :width: 100%
         :class: zoomable  

      .. figure:: ../_static/img/clusterLogin/clusterLogin_14.png
         :align: center
         :alt: xshell演示
         :width: 100%
         :class: zoomable  



..      输入命令 :cmd:`ssh-keygen -t rsa` ：
      .. code-block:: text
         :linenos:

         ssh-keygen -t rsa

      终端会提示：

      .. code-block:: text 
         :linenos:

         Generating public/private rsa key pair.
         Enter file in which to save the key (/Users/~your-local-username~/.ssh/id_rsa):

      括号内为生成的公私钥的默认目录位置，直接回车就会使用这个默认位置。

..   .. tab:: Windows (Xshell)
      :sync: windows-xshell

      **1. 打开 Xshell 密钥生成工具**
      启动 Xshell，点击「工具 > 新建密钥对」，打开密钥生成向导：

      **2. 选择密钥类型和长度**
      在向导中选择「RSA」，密钥长度设置为 4096，点击「下一步」：

      **3. 保存公钥和私钥**
      分别保存公钥（.pub）和私钥（.ppk）到本地，建议存放在 ``C:\Users\你的用户名\.ssh\`` 目录下：

      .. code-block:: text
         :linenos:

         # 推荐保存路径
         公钥：C:\Users\YourName\.ssh\id_rsa.pub
         私钥：C:\Users\YourName\.ssh\id_rsa.ppk



:gray:`将公钥添加到集群`

.. raw:: html

    <hr class="divider_gray">

接下来需要将刚刚复制的公钥追加到集群内 :cmd:`~/.ssh/authorized_keys` 。先使用 :cmd:`Web SSH登录 <web login>` 到集群，在Web终端中输入如下命令：


    .. code-block:: text
        :linenos:

        echo "ssh-rsa AAAA..." >> ~/.ssh/authorized_keys

其中，将 :cmd:`ssh-rsa AAAA..` 替换为刚才复制的公钥。

:gray:`用密钥登录集群`

.. raw:: html

    <hr class="divider_gray">



.. tabs::
   .. tab:: MacOS & Linux
      :sync: macos

      本地机器上打开自带的终端，按照上文查看要登录的集群SSH IP和端口信息，输入如下命令后回车登录集群：

      .. code-block:: text
         :linenos:

         ssh -p 20139 username@202.201.1.198

      其中， :cmd:`202.201.1.198` 和 :cmd:`20139` 分别替换为集群的SSH IP地址和端口， :cmd:`username` 替换为自己的平台用户名。

      如果显示类似如下提示，输入 :cmd:`yes` 后回车，即可正常登录。

      .. code-block:: text
         :linenos:

         The authenticity of host '202.201.1.198 (202.201.1.198)' can't be established.
         ECDSA key fingerprint is 3f:80:ce:88:9c:b9:72:f1:26:71:d0:8e:a4:91:e0:01.
         Are you sure you want to continue connecting (yes/no)

   .. tab:: Windows
      :sync: macos

      .. raw:: html

         <p>此处以
            <a href="https://www.netsarang.com/en/free-for-home-school/"
               target="_blank"
               rel="noopener noreferrer">
               Xshell ↗
            </a>
            登录为例。
         </p>

      点击软件左上角新建会话属性，按照上文查看要登录的集群SSH IP和端口信息，输入SSH IP地址和端口后点击连接。

         .. figure:: ../_static/img/clusterLogin/clusterLogin_15.png
            :align: center
            :alt: 新建会话属性
            :width: 100%
            :class: zoomable

      输入平台用户名后点击OK。

         .. figure:: ../_static/img/clusterLogin/clusterLogin_16.png
            :align: center
            :alt: 用户名输入
            :width: 100%
            :class: zoomable

      在用户身份验证界面选择“Public Key”，选择上文中保存在本地的公钥文件。如果之前在生成密钥对时设置了密钥密码，还需要一并输入密码。

         .. figure:: ../_static/img/clusterLogin/clusterLogin_17.png
            :align: center
            :alt: 身份验证
            :width: 100%
            :class: zoomable

      点击确认，成功登录。

         .. figure:: ../_static/img/clusterLogin/clusterLogin_18.png
            :align: center
            :alt: 登陆成功
            :width: 100%
            :class: zoomable



:black:`SSH服务配置`

 .. raw:: html

   <hr class="driver_black">

启动实例，打开终端安装ssh服务

      .. code-block:: text
         :linenos:

         sudo yum install openssh-server

开启ssh服务

      .. code-block:: text
         :linenos:

         sudo service sshd start

如果提示 :cmd:`service command not found` ，执行如下命令：

      .. code-block:: text
         :linenos:

         sudo yum install initscripts -y

更改用户密码

      .. code-block:: text
         :linenos:

         sudo -i
         passwd Usename(用户名)


然后输入新密码。

用ssh工具远程登陆实例。