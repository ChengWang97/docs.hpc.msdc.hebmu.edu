// 最终版：确保图片显示的PDF导出
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.pdf-export-btn')) {
        return;
    }
    
    const exportBtn = document.createElement('button');
    exportBtn.innerHTML = '📄 导出为PDF';
    exportBtn.className = 'pdf-export-btn';
    exportBtn.style.cssText = `
        position: fixed;
        top: 120px;
        right: 20px;
        z-index: 1000;
        background: #2196F3;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    
    exportBtn.addEventListener('click', generatePDFWithImages);
    document.body.appendChild(exportBtn);
});

async function generatePDFWithImages(event) {
    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.innerHTML = '⏳ 生成中...';
    btn.disabled = true;
    
    try {
        updateProgress('准备内容...');
        
        // 创建PDF视图
        const pdfContainer = await createPDFView();
        
        updateProgress('处理图片...');
        
        // 直接使用html2canvas，不做过多的图片处理
        const canvas = await html2canvas(pdfContainer, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            logging: true, // 开启日志查看问题
            width: pdfContainer.scrollWidth,
            height: pdfContainer.scrollHeight
        });
        
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });
        
        const imgData = canvas.toDataURL('image/jpeg', 0.9);
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
        pdf.save(`${getSafeFileName()}.pdf`);
        
        updateProgress('✅ 完成');
        
    } catch (error) {
        console.error('PDF生成失败:', error);
        updateProgress('❌ 失败');
        alert('PDF生成失败: ' + error.message);
    } finally {
        const container = document.getElementById('pdf-export-container');
        if (container) container.remove();
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 2000);
    }
    
    function updateProgress(message) {
        btn.innerHTML = `⏳ ${message}`;
    }
}

async function createPDFView() {
    const originalContent = document.querySelector('.md-content__inner') || document.body;
    
    // 创建容器
    const container = document.createElement('div');
    container.id = 'pdf-export-container';
    container.style.cssText = `
        position: fixed;
        left: -10000px;
        top: 0;
        width: 210mm;
        min-height: 100vh;
        background: white;
        padding: 25mm;
        box-sizing: border-box;
        font-family: "Microsoft YaHei", "SimSun", Arial, sans-serif;
        font-size: 14px;
        line-height: 1.8;
        color: #333;
    `;
    
    // 添加页眉
    const header = document.createElement('div');
    header.style.cssText = `
        text-align: center;
        margin-bottom: 30px;
        padding-bottom: 15px;
        border-bottom: 2px solid #2196F3;
    `;
    header.innerHTML = `
        <h1 style="margin: 0 0 10px 0; color: #2196F3; font-size: 24px;">
            河北医科大学高性能平台用户帮助手册
        </h1>
        <h2 style="margin: 0; color: #333; font-size: 20px;">
            ${getPageTitle()}
        </h2>
        <div style="margin-top: 10px; font-size: 12px; color: #666;">
            导出时间: ${new Date().toLocaleString('zh-CN')}
        </div>
    `;
    
    // 直接克隆内容，不做过多处理
    const content = originalContent.cloneNode(true);
    
    // 只移除UI元素，保留所有内容
    const elementsToRemove = [
        '.pdf-export-btn',
        '.md-header',
        '.md-sidebar',
        '.md-footer',
        '.md-tabs',
        '.md-nav',
        'script',
        'style',
        'nav',
        'header',
        'footer'
    ];
    
    elementsToRemove.forEach(selector => {
        const elements = content.querySelectorAll(selector);
        elements.forEach(el => el.remove());
    });
    
    // 应用基础样式
    applyBasicStyles(content);
    
    container.appendChild(header);
    container.appendChild(content);
    
    // 添加页脚
    const footer = document.createElement('div');
    footer.style.cssText = `
        margin-top: 40px;
        padding-top: 20px;
        border-top: 1px solid #ddd;
        text-align: center;
        font-size: 12px;
        color: #999;
    `;
    footer.textContent = `河北医科大学高性能计算平台 • ${window.location.href}`;
    container.appendChild(footer);
    
    document.body.appendChild(container);
    
    return container;
}

function applyBasicStyles(element) {
    // 基础文本样式
    element.style.cssText = `
        width: 100%;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        color: inherit;
    `;
    
    // 标题样式
    const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
        heading.style.margin = '25px 0 15px 0';
        heading.style.color = '#2196F3';
        heading.style.fontWeight = 'bold';
        
        if (heading.tagName === 'H1') {
            heading.style.fontSize = '20px';
            heading.style.borderBottom = '2px solid #2196F3';
            heading.style.paddingBottom = '8px';
        } else if (heading.tagName === 'H2') {
            heading.style.fontSize = '18px';
            heading.style.borderLeft = '4px solid #2196F3';
            heading.style.paddingLeft = '12px';
        }
    });
    
    // 段落样式
    const paragraphs = element.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.style.margin = '0 0 15px 0';
        p.style.textAlign = 'justify';
    });
    
    // 图片样式 - 关键：确保图片能显示
    const images = element.querySelectorAll('img');
    images.forEach(img => {
        console.log('处理图片:', img.src, img.alt);
        
        // 设置图片样式
        img.style.maxWidth = '90%';
        img.style.height = 'auto';
        img.style.display = 'block';
        img.style.margin = '20px auto';
        img.style.border = '2px solid #f0f0f0';
        img.style.borderRadius = '6px';
        img.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        
        // 设置跨域属性
        img.setAttribute('crossOrigin', 'anonymous');
        
        // 如果图片加载失败，使用备用方案
        img.onerror = function() {
            console.warn('图片加载失败:', this.src);
            // 可以在这里添加备用图片或文字
        };
    });
    
    // 列表样式
    const lists = element.querySelectorAll('ul, ol');
    lists.forEach(list => {
        list.style.margin = '15px 0';
        list.style.paddingLeft = '30px';
    });
}

function getPageTitle() {
    const title = document.title || '';
    return title.replace(' - 河北医科大学高性能平台用户帮助手册 文档', '')
               .replace('河北医科大学高性能平台用户帮助手册 文档', '')
               .trim() || '文档';
}

function getSafeFileName() {
    const title = getPageTitle();
    return title.replace(/[<>:"/\\|?*]/g, '_') || 'document';
}

// 备用方案：如果主方案失败，使用这个
async function generatePDFWithImageFallback() {
    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.innerHTML = '⏳ 使用备用方案生成...';
    btn.disabled = true;
    
    try {
        // 创建一个简单的包含图片的视图
        const simpleContainer = document.createElement('div');
        simpleContainer.id = 'simple-pdf-container';
        simpleContainer.style.cssText = `
            position: fixed;
            left: -10000px;
            top: 0;
            width: 800px;
            background: white;
            padding: 40px;
            font-family: Arial, sans-serif;
        `;
        
        // 添加标题
        simpleContainer.innerHTML = `
            <h1 style="text-align: center; color: #2196F3;">${getPageTitle()}</h1>
            <div style="text-align: center; color: #666; margin-bottom: 30px;">
                导出时间: ${new Date().toLocaleString('zh-CN')}
            </div>
        `;
        
        // 获取主要内容并直接插入
        const content = document.querySelector('.md-content__inner') || document.body;
        const contentClone = content.cloneNode(true);
        
        // 移除不需要的元素
        ['button', 'nav', 'header', 'footer', 'script', 'style'].forEach(tag => {
            const elements = contentClone.querySelectorAll(tag);
            elements.forEach(el => el.remove());
        });
        
        simpleContainer.appendChild(contentClone);
        document.body.appendChild(simpleContainer);
        
        // 生成PDF
        const canvas = await html2canvas(simpleContainer, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff'
        });
        
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();
        const imgData = canvas.toDataURL('image/jpeg', 0.9);
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
        pdf.save(`${getSafeFileName()}_备用.pdf`);
        
    } catch (error) {
        console.error('备用方案也失败:', error);
        alert('PDF生成失败，请检查图片路径或联系管理员');
    } finally {
        const container = document.getElementById('simple-pdf-container');
        if (container) container.remove();
        
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

// 修改主函数，添加备用方案
async function generatePDFWithImages(event) {
    try {
        await generatePDFWithImages(event);
    } catch (error) {
        console.log('主方案失败，尝试备用方案:', error);
        await generatePDFWithImageFallback();
    }
}