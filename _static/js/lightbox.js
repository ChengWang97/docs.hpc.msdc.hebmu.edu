// doc/source/_static/js/lightbox.js

document.addEventListener('DOMContentLoaded', function () {
    console.log("🚀 Lightbox 系统启动");

    // 👉 同时选择 .zoomable 的 a 和 img
    const triggers = document.querySelectorAll('.zoomable');

    let currentOverlay = null;

    function closeLightbox() {
        if (currentOverlay && currentOverlay.parentElement) {
            currentOverlay.remove();
        }
        document.body.style.overflow = '';
        currentOverlay = null;
    }

    function handleKeydown(e) {
        if (e.key === 'Escape') {
            console.log('🛑 ESC 已触发');
            closeLightbox();
        }
    }

    triggers.forEach(el => {
        el.onclick = function (e) {
            // ⛔ 阻止所有默认行为（防止跳转到 _images/xxx.png）
            e.preventDefault();
            e.stopPropagation();

            console.log("🖱️ 捕获点击事件", this.src || window.getComputedStyle(this).cursor);

            // 获取真实图片地址
            const img = this.tagName === 'IMG' ? this : this.querySelector('img');
            if (!img) return;

            const src = img.src || img.getAttribute('src');
            const alt = img.alt || '';

            // 创建遮罩层
            const overlay = document.createElement('div');
            overlay.className = 'lightbox-overlay';
            overlay.innerHTML = `
                <span class="lightbox-close">&times;</span>
                <img src="${src}" alt="${alt}" style="display:none; max-width:90vw; max-height:85vh;" />
            `;
            document.body.appendChild(overlay);
            document.body.style.overflow = 'hidden';

            currentOverlay = overlay;
            document.addEventListener('keydown', handleKeydown, false);

            const largeImg = overlay.querySelector('img');
            largeImg.onload = () => { largeImg.style.display = 'block'; };
            largeImg.onerror = () => {
                alert("❌ 图片加载失败：" + src);
                closeLightbox();
            };

            // 绑定关闭
            overlay.querySelector('.lightbox-close').onclick = closeLightbox;
            overlay.onclick = (e) => { if (e.target === overlay) closeLightbox(); };

            // 显示遮罩（使用 requestAnimationFrame 更安全）
            requestAnimationFrame(() => {
                overlay.classList.add('show');
            });
        };
    });

    console.log("✅ Lightbox 初始化完成");
});