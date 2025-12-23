# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = '河北医科大学高性能平台用户帮助手册'
copyright = '2025, ChengWang'
author = 'ChengWang'
#release = 'v0.1'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

#sphinx_immaterial v0.13.8
 

extensions = [
    'sphinx_immaterial',
    'sphinx-prompt',
    'sphinx_copybutton',
    'sphinx.ext.autosectionlabel',
    'sphinx_substitution_extensions',
]

templates_path = ['_templates']
exclude_patterns = []


language = 'zh'
html_search_language = 'zh'
# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output
html_logo = 'logo.png'
#html_theme = 'alabaster'
html_theme = 'sphinx_immaterial'
#html_theme = 'sphinx_rtd_theme'  # Read the Docs 主题，兼容性好
html_theme_options = {
    # Set the repo location to get a badge with stats
    'repo_url': 'https://github.com/SJTU-HPC/docs.hpc.sjtu.edu.cn',
    'repo_name': 'hebmu HPC Docs',
    "analytics": {
                    "provider": "google",
                    "property": "G-VGHWLGCC9B"
                 },
    # 添加下载配置
   # "nav_links": [
   #     {
   #         "href": "https://example.com/help_manual.pdf",  # 替换为实际PDF链接
   #        "internal": False,
   #         "title": "📥 下载完整手册",
   #     },
   #     {
   #        "href": "https://example.com/resourcebuild.pdf",  # 替换为实际PDF链接
   #         "internal": False, 
   #        "title": "📥 资源申请指南",
   #     },
   # ],
    #↓控制全局目录是否默认折叠。True 表示默认折叠（仅显示一级标题，点击可展开子标题）；False 表示默认全部展开。
    'globaltoc_collapse': True,
    #是否在目录中包含 “隐藏的文档”。True 表示即使标记为隐藏，仍会在目录中显示（通常用于需要隐藏但仍需导航的文档）
    'globaltoc_includehidden': True,
    # Do not download google fonts
    # See "Extension error" https://github.com/jbms/sphinx-immaterial/issues/216
    "font": False,

    # Light and dark mode
    'palette': [{ 'media': '(prefers-color-scheme: light)', # 当系统偏好浅色模式时
                 'scheme': 'default',                       # 使用默认浅色主题
                 'toggle': {
                    'icon': 'material/lightbulb-outline',   # 切换按钮,浅色模式下显示“灯泡轮廓”
                    'name': 'Switch to dark mode',          # 按钮切换到深色模式
                 },
                },
                { 'media': '(prefers-color-scheme: dark)',   # 当系统偏好深色模式时
                  'scheme': 'slate',                         # 使用 slate 深色主题
                  'toggle': {
                    'icon': 'material/lightbulb',            # 切换按钮,深色模式下显示亮
                    'name': 'Switch to light mode',          # 切换到浅色模式
                 },
                },
               ]
}

html_static_path = ['_static']

# 启用自定义 JavaScript 设置图片预览无法退出问题
html_js_files = [
    'js/medium-zoom.bundle.js',    # 先加载库
    'js/medium-zoom-init.js',      # 再运行初始化
]

html_css_files = [
    'css/medium-zoom.css',
]

# 补充上述内容，无法进行ESC退出图片预览，确保 DOCUMENTATION_OPTIONS 被注入到页面中
html_context = {
    "DOCUMENTATION_OPTIONS": {
        "url_root": "",
        "version": "",
        "language": "zh",
        "has_source": False,
    }
}

html_css_files = [
    'css/lightbox.css',
]

html_js_files = [
    'js/lightbox.js',
]