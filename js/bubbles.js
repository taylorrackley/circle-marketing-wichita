
var timeToggle = true;

(function ($) {
    var opts;
    var methods =
    {
        init: function (options) {
            opts = $.extend({ addCss: true, //if set to false you have to add 'display:block;position:absolute;' to the css of the moving object
                maxHeight: (window.innerHeight * .75), //height bound for moving
                maxWidth: (window.innerWidth + 100), //width bound for moving
                minDuration: 4000, //minimun length of animation
                deltaDuration: 7000 //maximum random number to be added to the minDuration
            }, options);

            return this.each(function () {
                var o = $(this).attr('data-move', true);
                //Add display:block;position:absolute; to attribute style. if addCss = true (default)
                if (opts.addCss)
                    o.attr('style', 'display:block;position:absolute;');

                moveObject(o);
            });
        },
        stop: function () {
            return this.each(function () {
                $(this).stop().removeAttr('data-move');

            });
        },
        toggle: function () {
            return this.each(function () {
                var o = $(this);
                if (o.attr('data-move'))
                    o.movingBubble('stop');
                else
                    o.movingBubble({ addCss: false });
            });
        }
    };

    function moveObject(i) {

        // if(timeToggle) {
        //     delay = 3000;
        // } else {
        //     delay = 0;
        // }
        //
        // timeToggle != timeToggle;

        //Random new x,y inside bounds
        $(i).css({top: 300, left: "50%"});
        $(i).fadeTo(0, 1);

        var x = Math.floor(Math.random() * opts.maxWidth);
        var y = Math.floor(Math.random() * opts.maxHeight);

        // subtract number so circles go off left side of screen
        x = x - 50;

        //Compute animation time
        var s = opts.minDuration + (Math.random() * opts.deltaDuration);
        var myDelay = Math.random() * s;

        //When animation finishes, start the function again.
        setTimeout(function() {
            $(i).animate({ "left": x + "px", "top": y + "px" }, {duration: s, queue: false, complete: function () { moveObject(i, opts) }});
            $(i).fadeTo(s, 0);
        }, myDelay);
    }

    $.fn.movingBubble = function (method) {
        // Method calling logic
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.movingBubble');
        }
    }
})(jQuery);
