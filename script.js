// 等待页面加载完成后再运行
document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮和显示文字的元素
    const button = document.getElementById('surpriseButton');
    const surpriseText = document.getElementById('surpriseText');

    // 设置按钮点击事件
    button.addEventListener('click', function() {
        // 定义一些惊喜文本
        const surprises = [
            "今天是一个充满机会的日子！你已经在正确的路上！",
            "你已经付出了很多努力，保持下去！成功离你越来越近！",
            "不要忘记给自己一点微笑，你配得上最好的！",
            "你今天做得很棒，继续坚持，未来一定会更好！",
            "无论今天遇到什么，都不要忘记你有无限的潜力！"
        ];

        // 随机选择一条惊喜文本
        const randomIndex = Math.floor(Math.random() * surprises.length);
        const surpriseMessage = surprises[randomIndex];

        // 显示惊喜文本
        surpriseText.textContent = surpriseMessage;
        surpriseText.style.display = "block";  // 显示文本
    });
});
