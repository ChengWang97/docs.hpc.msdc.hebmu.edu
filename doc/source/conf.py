# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
project = '河北医科大学高性能平台用户帮助手册'
copyright = '2025, ChengWang'
author = 'ChengWang'
#release = 'v0.1'

# -- General configuration ---------------------------------------------------
# sphinx_immaterial v0.13.8
extensions = [
    'sphinx_immaterial',
    'sphinx-prompt',
    'sphinx_copybutton',  # 重新启用（低版本主题靠此实现复制按钮）
    'sphinx.ext.autosectionlabel',
    'sphinx_substitution_extensions',
    'sphinx_tabs.tabs',
    'sphinx.ext.viewcode',
    'sphinx.ext.napoleon',
]

templates_path = ['_templates']
exclude_patterns = []

language = 'zh'
html_search_language = 'zh'

# -- Options for HTML output -------------------------------------------------
html_logo = 'logo.png'
html_theme = 'sphinx_immaterial'

html_theme_options = {
    # Set the repo location to get a badge with stats
    'repo_url': 'https://chengwang97.github.io/docs.hpc.msdc.hebmu.edu/',
    'repo_name': 'hebmu HPC Docs',
    "analytics": {
        "provider": "google",
        "property": "G-VGHWLGCC9B"
    },
    # 移除低版本不支持的配置（消除警告）
    # "code_copy_button": True,  # v0.13.8 不支持，已删除
    # "code_copy_button_only_text": True,  # v0.13.8 不支持，已删除
    
    # 保留原有配置
    # "nav_links": [
    #     {
    #         "href": "https://example.com/help_manual.pdf",
    #        "internal": False,
    #         "title": "📥 下载完整手册",
    #     },
    #     {
    #        "href": "https://example.com/resourcebuild.pdf",
    #         "internal": False, 
    #        "title": "📥 资源申请指南",
    #     },
    # ],
    'globaltoc_collapse': True,
    'globaltoc_includehidden': True,
    "font": False,

    # Light and dark mode
    'palette': [{
        'media': '(prefers-color-scheme: light)',
        'scheme': 'default',
        'toggle': {
            'icon': 'material/lightbulb-outline',
            'name': 'Switch to dark mode',
        },
    },
    {
        'media': '(prefers-color-scheme: dark)',
        'scheme': 'slate',
        'toggle': {
            'icon': 'material/lightbulb',
            'name': 'Switch to light mode',
        },
    }],

    #20260106增加处理代码高亮显示等功能
    "features": [
        #"navigation.tabs",         # 启用导航标签
        "content.code.copy",        # 启用代码块复制按钮
        "content.code.linenums",    # 启用代码块行号
        "tabbed.content",           # 启用tabbed指令
    ],
}

html_static_path = ['_static']

# 启用自定义 JavaScript 设置图片预览无法退出问题（注释保留）
#html_js_files = [
#    'js/medium-zoom.bundle.js',
#    'js/medium-zoom-init.js',
# ]

# 合并 html_context 配置（避免重复定义）
html_context = {
    "DOCUMENTATION_OPTIONS": {
        "url_root": "",
        "version": "",
        "language": "zh",
        "has_source": False,
    },
    # 本地测试 + 服务器部署,doc线上下载链接切换
    'root_url': '',  # 本地测试用空字符串，部署时改为 '/' 或实际站点路径
}

html_css_files = [
    'css/medium-zoom.css',
    'css/lightbox.css',
    'css/custom.css',
    'css/custom_tab.css',
    'css/custom_code_style.css',  # 代码块样式文件
]

html_js_files = [
    'js/lightbox.js',
    'js/external-links.js',
    'js/custom_copy.js',
]

#.rst文件中字体显示格式配置
rst_prolog = """
.. role:: b
   :class: bold-only

.. role:: wb
   :class: big bold blue

.. role:: warn
   :class: big bold red

.. role:: tip
   :class: larger bold green

.. role:: note
   :class: bold orange

.. role:: small-gray
   :class: small gray

.. role:: black
   :class: big bold black

.. role:: mblack
   :class: middle bold black 
   
.. role:: gray
   :class: middle bold gray

.. role:: zcblack
   :class: bold black

.. role:: zcred
   :class: bold red
    
.. role:: cmd
    :class: font-blue
"""

# --- sphinx-copybutton  设置 全局配置代码块 ---
# 启用行号（全局）
highlight_options = {'linenos': True}

# 默认语言（不影响实际高亮）
highlight_language = 'text'
pygments_style = 'sphinx' # 代码高亮风格

# sphinx-copybutton 设置
copybutton_prompt_text = r"\$ "
copybutton_prompt_is_regexp = True
copybutton_remove_prompts = True        # 可选：复制时不带 $
copybutton_line_continuation_character = "\\"

#20260106 add 
pygments_style = "material"  # 适配 sphinx_immaterial 的高亮样式
pygments_dark_style = "material-dark"  # 深色模式下的高亮样式

