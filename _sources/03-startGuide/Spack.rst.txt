=======
Spack
=======


:wb:`Spack`
==================
.. raw:: html 

    <hr class="divider_blue">

Spack应用介绍
-------------------

.. raw:: html 

    <hr class="divider_black">

.. raw:: html

   <p>
   <a href="https://spack.readthedocs.io/en/latest/index.html"
      target="_blank"
      rel="noopener noreferrer">
      Spack ↗
   </a>
   是专为大型超级计算中心设计的自动化包管理器，支持各种平台和环境中的多个版本和软件配置。
   </p>


Spack使用指南
-------------------


安装Spack

.. raw:: html

   <div class="divider_gray"></div>


在集群中，需要安装在自己目录下。

首先下载spack压缩包，解压到自己目录中，并配置环境变量。

以 :cmd:`spack-0.17.1.tar.gz` 为例

.. code-block:: text
    :linenos:  

    $ mkdir $HOME/spack #在自己目录下新建spack目录


将 :cmd:`spack-0.17.1.tar.gz` 文件复制到该目录下后解压缩。

.. code-block:: text
    :linenos:  

    $ cd $HOME/spack
    $ tar -xf spack-0.17.1.tar.gz #解压缩spack包
    $ ls #spack已经解压缩到spack-0.17.1目录中
    spack-0.17.1  spack-0.17.1.tar.gz

配置环境变量，并使之生效。

.. code-block:: text
    :linenos:  

    $ echo "source $HOME/spack/spack-0.17.1/share/spack/setup-env.sh" >> ~/.bashrc
    $ source ~/.bashrc


:wb:`查看Spack软件包`

.. raw:: html

    <div class="divider_blue"></div>


**此处差个表格**


spack list [name]	
查询Spack可安装的软件包

spack find	
查找当前Spack环境中已经安装的软件包

spack info name	
查看指定软件的信息，包括版本、依赖等


 :cmd:`spack list` 会显示当前Spack中所有可以安装的软件包。可以通过指定名称 :cmd:`name` 筛选。Spack会返回所有包含该名称的软件包，不区分大小写。

.. code:-block:: text
    :linenos:  

    $ spack list sql
    mysql            py-agate-sql                     py-mysqlclient  py-pysqlite3         r-rmysql       sqlite
    mysqlpp          py-aiosqlite                     py-mysqldb1     py-sqlalchemy        r-rpostgresql  sqlite-jdbc
    perl-dbd-mysql   py-azure-mgmt-sql                py-pygresql     py-sqlalchemy-stubs  r-rsqlite      sqlitebrowser
    perl-dbd-sqlite  py-azure-mgmt-sqlvirtualmachine  py-pymysql      py-sqlalchemy-utils  r-sqldf
    postgresql       py-mysql-connector-python        py-pysqlite     py-sqlparse          sqlcipher

加上 :cmd:`-d` 参数，会同时在名称和描述中查找包含该字段的软件包。

想进一步了解软件包的信息，可以使用 :cmd:`spack info [name]` ，可以看到软件包的描述、版本、安装参数和依赖关系等等。

:cmd:`spack find` 显示当前安装的软件包。所有软件包会根据它们的架构和编译器被分成若干组。

.. code-block:: text
    :linenos:  

    $ spack find
    ==> 103 installed packages
    -- linux-centos7-cascadelake / gcc@10.1.0 -----------------------
    autoconf@2.69                libpciaccess@0.13.5  openmpi@2.1.6
    autoconf-archive@2019.01.06  libsigsegv@2.12      openmpi@3.1.6
    automake@1.16.2              libtool@2.4.6        perl@5.30.2
    environment-modules@4.5.1    libxml2@2.9.10       pkgconf@1.7.3
    gcc@10.1.0                   m4@1.4.18            readline@8.0
    gdbm@1.18.1                  mpc@1.1.0            tcl@8.6.8
    gmp@6.1.2                    mpfr@4.0.2           util-macros@1.19.1
    hwloc@1.11.11                ncurses@6.2          xz@5.2.5
    isl@0.21                     numactl@2.0.12       zlib@1.2.11
    libiconv@1.16                openmpi@2.0.0        zstd@1.4.5

    -- linux-centos7-haswell / gcc@4.8.5 ----------------------------
    autoconf@2.69                gdbm@1.18.1      libxml2@2.9.10  pkgconf@1.6.3
    autoconf-archive@2019.01.06  gettext@0.20.2   m4@1.4.18       pkgconf@1.7.3
    automake@1.16.2              gmp@6.1.2        mpc@1.1.0       readline@8.0
    binutils@2.34                isl@0.18         mpc@1.1.0       tar@1.32
    bzip2@1.0.8                  isl@0.21         mpfr@3.1.6      texinfo@6.5
    diffutils@3.7                libiconv@1.16    mpfr@4.0.2      xz@5.2.5
    gcc@7.5.0                    libsigsegv@2.12  ncurses@6.2     zlib@1.2.11
    gcc@10.1.0                   libtool@2.4.6    perl@5.30.2     zstd@1.4.5

    -- linux-ubuntu18.04-cascadelake / gcc@9.3.0 --------------------
    binutils@2.34  gcc@8.4.0       isl@0.18        mpc@1.1.0    tar@1.32
    bzip2@1.0.8    gettext@0.20.2  libiconv@1.16   mpfr@3.1.6   xz@5.2.5
    gcc@7.5.0      gmp@6.1.2       libxml2@2.9.10  ncurses@6.2  zlib@1.2.11

    -- linux-ubuntu18.04-skylake_avx512 / gcc@7.4.0 -----------------
    gcc@8.4.0  gmp@6.1.2  isl@0.18  mpc@1.1.0  mpfr@3.1.6  zlib@1.2.11

    -- linux-ubuntu18.04-skylake_avx512 / gcc@7.5.0 -----------------
    binutils@2.34  gettext@0.20.2  libiconv@1.16   ncurses@6.2
    bzip2@1.0.8    gmp@6.1.2       libxml2@2.9.10  tar@1.32
    gcc@8.4.0      isl@0.18        mpc@1.1.0       xz@5.2.5
    gcc@9.3.0      isl@0.20        mpfr@3.1.6      zlib@1.2.11

    -- linux-ubuntu18.04-skylake_avx512 / gcc@8.4.0 -----------------
    anaconda3@2019.10  ncurses@6.2  pcre@8.44  zsh@5.4.2        


:wb:`安装软件包`

.. raw:: html

   <div class="divider_black"></div>

:cmd:`spack install [name]` 会安装最新版本的软件包。输出信息最后一行 :cmd:`[+]` 显示的是软件包安装位置。

如果希望安装不同的版本，可以在后面加上 :cmd:`@`、 :cmd:`%`、 :cmd:`+/-` 、:cmd:`^` 等指定版本、编译器、特性和依赖等。

.. code-block:: 
    :linenos:  

    # 以下以hdf5为例
    $ spack install hdf5        # 安装hdf5

    # 通过 '@' 指定版本；
    $ spack install hdf5@1.10.1 # 安装hdf5,版本为1.10.1

    # 通过 '%' 指定编译器；
    $ spack install hdf5@1.10.1 %gcc@4.7.3  # 版本为1.10.1，使用的编译器为 gcc 4.7.3

    # 通过 +/- 开启或关闭特性
    $ spack install hdf5@1.10.1 %gcc@4.7.3 +szip # 编译时enable szip

    # 指定编译优化参数
    $ spack install hdf5@1.10.1 %gcc@4.7.3 cppflags="-O3 -floop-block"

    # ^ 指定依赖
    $ spack install mpileaks@1.1.2 %gcc@4.7.3 +debug ^libelf@0.8.12 ^libdwarf@20130729+debug

通过加上不同的参数，可以指定软件包的版本、


常见问题
----------

.. raw:: html

   <div class="divider_black"></div>

1.如果安装不成功，可以尝试 :cmd:`spack clean` 清除环境后再尝试安装。


参考文献
-------------


.. raw:: html

   <p>1.
   <a href="https://spack.readthedocs.io/en/latest/"
      target="_blank"
      rel="noopener noreferrer">
      https://spack.readthedocs.io/en/latest/↗
   </a>
   </p>


.. raw:: html

   <p>2.
   <a href="https://hpc.pku.edu.cn/_book/guide/soft_env/spack.html"
      target="_blank"
      rel="noopener noreferrer">
      https://hpc.pku.edu.cn/_book/guide/soft_env/spack.html↗
   </a>
   </p>