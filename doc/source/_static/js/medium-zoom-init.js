// doc/source/_static/js/medium-zoom-init.js

let zoomInstance = null;

document.addEventListener('DOMContentLoaded', function () {
    console.log("🚀 DOM 加载完成，开始初始化 medium-zoom");

    if (typeof mediumZoom === 'undefined') {
        console.error("❌ mediumZoom 未定义！请检查 medium-zoom.bundle.js 是否加载");
        return;
    }

    // 初始化 zoom
    zoomInstance = mediumZoom('.zoomable', {
        margin: 24,
        background: 'rgba(0, 0, 0, 0.8)',
        scrollOffset: 0
    });

    console.log("✅ Medium Zoom 初始化成功，匹配到", document.querySelectorAll('.zoomable').length, "张图片");

    // 👇 绑定到 window 并使用 capture = true
    const handleKeydown = function (e) {
        console.log("⌨️【全局】按键捕获:", e.key, "target:", e.target.tagName);

        if (e.key === 'Escape' || e.key === 'Esc') {
            console.log("🛑 ESC 被触发，尝试关闭 zoom");

            // 先尝试正常关闭
            if (zoomInstance) {
                try {
                    zoomInstance.close();
                    console.log("CloseOperation 已调用");
                } catch (err) {
                    console.error("CloseOperation 报错:", err);
                }
            }

            // 强制清理所有可能残留的元素
            setTimeout(() => {
                const overlay = document.querySelector('.medium-zoom-overlay');
                const image = document.querySelector('.medium-zoom-image--opened');

                if (overlay) {
                    overlay.remove();
                    console.log("🧹 强制移除 .medium-zoom-overlay");
                }

                if (image) {
                    image.classList.remove('medium-zoom-image--opened');
                    image.style.cssText = '';
                }

                document.body.style.overflow = '';
            }, 10);
        }
    };

    // 在捕获阶段绑定到 window（最高优先级）
    window.addEventListener('keydown', handleKeydown, true);

    // 👇 启动一个定时器，确保即使页面动态更新也能保留日志
    setInterval(() => {
        const overlay = document.querySelector('.medium-zoom-overlay');
        if (overlay && !window.zoomDebugActive) {
            console.log("🔍 检测到 zoom 遮罩层存在，确保 keydown 仍有效");
            window.zoomDebugActive = true;
        }
    }, 500);
});