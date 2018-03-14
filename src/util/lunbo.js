/**
 * @description 轮播滚动函数
 * @param container 轮播的容器
 * @param content 轮播的内容
 * @param size 轮播每次动的距离
 * @param delay 多长时间动一次
 * @param direction 轮播方向
 * @param alternation 停留的间隔
 * @return 返回计时器用以清除
 * */
import $ from 'jquery'
function lunbo(container, content, size, delay, direction, alternation) {
    container.append(content.eq(0).clone());
    let len = content.length;
    let curELe = 0;
    let animateObj = {};

    return setInterval(function () {
        if (curELe < len - 1) {
            curELe++;
            animateObj[direction] = -(curELe * size) + 'px';
            container.animate(animateObj, alternation);
        } else {
            curELe = 0;
            animateObj[direction] = -(len * size) + 'px';
            container.animate(animateObj, alternation, function () {
                $(this).css(direction, 0)
            })
        }
    }, delay)
}
export default lunbo
