// external-links.js
// 为所有外部链接自动添加 target="_blank" 和 rel="noopener noreferrer"
// 外链图标 ↗ 由 CSS ::after 统一添加，无需在此处理
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="http"]').forEach(function (link) {
        // 只对外部域名添加 target="_blank"
        if (!link.href.includes(window.location.host)) {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
        }
    });
});
