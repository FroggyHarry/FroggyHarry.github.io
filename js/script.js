// 简单的页面交互脚本

// 页面加载完成后执行
 document.addEventListener('DOMContentLoaded', function() {
    // 可以在这里添加一些交互功能
    console.log('页面加载完成');
    
    // 示例：为所有链接添加点击事件
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // 可以添加一些自定义的点击行为
            console.log('链接被点击:', this.href);
        });
    });
});