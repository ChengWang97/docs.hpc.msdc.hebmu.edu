// doc/source/_static/js/lightbox.js
// 图片点击放大查看（ESC 关闭 / 点击遮罩关闭 / 点击关闭按钮关闭）

document.addEventListener('DOMContentLoaded', function () {
    var triggers = document.querySelectorAll('.zoomable');
    var currentOverlay = null;

    function closeLightbox() {
        if (currentOverlay && currentOverlay.parentElement) {
            currentOverlay.remove();
        }
        document.body.style.overflow = '';
        currentOverlay = null;
    }

    function handleKeydown(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    }

    triggers.forEach(function (el) {
        el.addEventListener('click', function (e) {
            // 放行代码块复制按钮等交互元素，避免 lightbox 拦截
            if (e.target.closest('.copybtn')) return;

            // 阻止默认行为（防止跳转到 _images/xxx.png）
            e.preventDefault();
            e.stopPropagation();

            // 获取真实图片地址
            var img = this.tagName === 'IMG' ? this : this.querySelector('img');
            if (!img) return;

            var src = img.src || img.getAttribute('src');
            var alt = img.alt || '';

            // 创建遮罩层
            var overlay = document.createElement('div');
            overlay.className = 'lightbox-overlay';
            overlay.innerHTML =
                '<span class="lightbox-close">&times;</span>' +
                '<img src="' + src + '" alt="' + alt + '" style="display:none; max-width:90vw; max-height:85vh;" />';
            document.body.appendChild(overlay);
            document.body.style.overflow = 'hidden';

            currentOverlay = overlay;
            document.addEventListener('keydown', handleKeydown, false);

            var largeImg = overlay.querySelector('img');
            largeImg.onload = function () { largeImg.style.display = 'block'; };
            largeImg.onerror = function () {
                alert("图片加载失败：" + src);
                closeLightbox();
            };

            // 绑定关闭
            overlay.querySelector('.lightbox-close').onclick = closeLightbox;
            overlay.onclick = function (e) { if (e.target === overlay) closeLightbox(); };

            // 显示遮罩
            requestAnimationFrame(function () {
                overlay.classList.add('show');
            });
        });
    });
});
