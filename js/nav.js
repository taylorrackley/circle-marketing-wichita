function moveScroller() {
    var $anchor = $("#scroller-anchor");
    var $scroller = $('#fp-social-media');
    var $placeholder = $('#social-media-placeholder');

    var move = function() {
        var st = $(window).scrollTop();
        var ot = $anchor.offset().top;
        ot = ot-15;
        //if(st > ot) {
            $scroller.css({
                position: "fixed",
                top: "15px",
                left: "calc(50% + 9px)",
                transform: "translateX(-50%)"
            });
            $placeholder.css("padding-bottom", "65px");
        // } else {
        //     if(st <= ot) {
        //         $scroller.css({
        //             position: "absolute",
        //             top: "",
        //             left: "50%",
        //             transform: "translateX(-50%)"
        //         });
        //         $placeholder.css("padding-bottom", "0px");
        //     }
        // }
    };
    $(window).scroll(move);
    move();
}

function moveNav() {
    var $navAnchor = $("#nav-anchor");
    var $navScroller = $('#skyline-links');

    var navMove = function() {
        var st = $(window).scrollTop();
        var ot = $navAnchor.offset().top;
        ot = ot - 110;
        //if(st > ot) {
            $navScroller.css({
                position: "fixed",
                width: "100%",
                height: "115px",
                top: "0px",
                left: "50%",
                transform: "translateX(-50%)"
            }).css("padding-top","80px").css("z-index","1").css("background-image","linear-gradient(rgba(255,255,255,1) 75%, rgba(255,255,255,0))");

//          WORKS VVV

            // $navScroller.css({
            //     position: "fixed",
            //     width: "100%",
            //     height: "150px",
            //     top: "0px",
            //     left: "50%",
            //     transform: "translateX(-50%)",
            //     //background: "linear-gradient(rgba(255,255,255,1) 70%, rgba(255,255,255,0))"
            // }).css("padding-top","80px").css("padding-bottom","25px").css("z-index","1").css("background-image","url('img/fade.png')").css("background-size","cover").css("background-repeat","repeat-x");

        // } else {
        //     if(st <= ot) {
        //         $navScroller.css({
        //             position: "absolute",
        //             background: "none",
        //             top: ""
        //         });
        //     }
        // }
    };
    $(window).scroll(navMove);
    navMove();
}

$(function() {
    moveScroller();
    moveNav();
});
