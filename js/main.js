var $btnShowHide = $(".btn-show-hide");
var $box = $(".box");

var $btnMove = $(".btn-move");
var $diamond = $(".diamond");

var $btnExpand = $(".btn-collapse-expand");
var $panel = $(".panel");

var $btnBounce = $(".btn-bounce");
var $circle = $(".circle");

var $btnAppend = $(".btn-append");
var $list = $(".list");


$btnShowHide.on("click", function () {
    $box.toggleClass("js-box-show-hide");
});

$btnMove.on("click", function () {
    $diamond.toggleClass("js-btn-move");
});

$btnExpand.on("click", function () {
    $panel.toggleClass("btn-collapse-expand");
});


$btnBounce.on("click", function () {
    $circle.toggleClass("js-btn-bounce");
});

$btnAppend.on("click", function () {
    var $li = $('<li>').html('New List Item');
    $li.addClass('js-list-append');
    $list.append($li);
});