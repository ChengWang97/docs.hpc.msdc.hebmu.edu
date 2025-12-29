// external-links.js
document.addEventListener("DOMContentLoaded", function () {
    console.log("External links script loaded");

    document.querySelectorAll('a[href^="http"]').forEach(function (link) {
        // 只对外部域名添加 target="_blank"
        if (!link.href.includes(window.location.host)) {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
            console.log("New tab enabled for:", link.href);
        }
    });
});