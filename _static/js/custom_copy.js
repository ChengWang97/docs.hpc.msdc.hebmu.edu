// _static/js/custom_copy.js
// Sphinx 产出的是静态 HTML，无需 MutationObserver 监听动态变化

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.highlight .copybtn').forEach(function (btn) {
        if (btn.dataset.initialized) return;
        btn.dataset.initialized = 'true';
        btn.textContent = 'copy';

        btn.addEventListener('click', function () {
            this.disabled = true;
            this.textContent = 'Copied!';
            var self = this;
            setTimeout(function () {
                self.disabled = false;
                self.textContent = 'copy';
            }, 2000);
        });
    });
});
