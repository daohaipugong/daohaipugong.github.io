
let lastScrollTop = 0; // 上一次滚动的位置

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // 判断滚动方向
    if (currentScroll > lastScrollTop) {
        // 向下滚动，隐藏导航栏
        document.querySelector('.navbar').classList.add('hide');
    } else {
        // 向上滚动，显示导航栏
        document.querySelector('.navbar').classList.remove('hide');
    }

    // 更新上一次的滚动位置
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 防止滚动位置为负值
});
