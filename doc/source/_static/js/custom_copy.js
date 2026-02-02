// _static/js/copy-button-text.js

document.addEventListener("DOMContentLoaded", function () {
    // 定期检查新出现的 .highlight 块
    const observer = new MutationObserver(() => {
        addCopyButtonLabels();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // 初始化一次
    addCopyButtonLabels();

    function addCopyButtonLabels() {
        // 查找所有 .copybtn 按钮
        const buttons = document.querySelectorAll('.highlight .copybtn');
        buttons.forEach(btn => {
            if (!btn.dataset.initialized) {
                btn.textContent = 'copy';  // 初始文本
                btn.dataset.initialized = 'true';

                btn.addEventListener('click', function () {
                    this.disabled = true;
                    this.textContent = 'Copied!';
                    setTimeout(() => {
                        this.disabled = false;
                        this.textContent = 'copy';
                    }, 2000);
                });
            }
        });
    }
});

