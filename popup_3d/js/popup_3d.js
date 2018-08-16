/**
 * Created by admin on 2018/8/16.
 */
/*3d弹出框*/
$(function () {
    var $btn = $('#callPopup');
    var $popup = $('#wrap > .popup');
    $btn.click(function () {
        $popup.css({
            /*元素旋转45°*/
            transform: "rotateX(0deg) translateZ(100px)",
            "z-index": 1
        })
    })
})
