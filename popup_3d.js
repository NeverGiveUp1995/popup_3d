/**
 * Created by admin on 2018/8/16.
 */
/*3d弹出框*/
$(function () {
    var $btn = $('#callPopup');
    var $popup = $('#wrap > .popup');
    $btn.click(function () {
        $popup.css({
            top: 0,
            /*元素延X轴旋转45°*/
            transform: "rotateX(0deg)",
            // "transform-origin": "0px 0px 100px",
            "z-index": 1
        })
    })
})
