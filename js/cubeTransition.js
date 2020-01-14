(function($) {

    var length = $('.cubeTransition>div').length,
        current = 1,
        next = 1,
        outClass, inClass, onGoing = false;
    $('.cubeTransition>div:eq(0)').addClass('visible');

    for (i = 0; i < length; i++) {
        var bullet = $("<li>" + (i + 1) + "</li>");
        if (i == 0) { bullet.addClass('active'); }
        if (i == 1) { bullet.addClass('precedent'); }
        if (i == length - 1) { bullet.addClass('suivant')};
           if (i == length - 2) { bullet.addClass('top'); }


        $("#bullets").append(bullet);
    }

    function openIndex(i) {
        if (!onGoing && next != i) {
            onGoing = true;
            next = i
            outClass = current > i ? 'rotateCubeBottomOut' : 'rotateCubeTopOut'
            inClass = current > i ? 'rotateCubeBottomIn' : 'rotateCubeTopIn';
            show()
        }
    }

    function trans(direction) {
        if (!onGoing) {
            onGoing = true;

            if (direction == 'up') {
                next = current > 1 ? current - 1 : length;
                outClass = 'rotateCubeBottomOut';
                inClass = 'rotateCubeBottomIn';
            } else {
                next = current < length ? current + 1 : 1;
                outClass = 'rotateCubeTopOut';
                inClass = 'rotateCubeTopIn';
            }
            show();
        }
    }

    function show() {
        console.log(length);
        $('.cubeTransition>div:eq(' + (next - 1) + ')').addClass('visible');
        $('.cubeTransition>div:eq(' + (current - 1) + ')').addClass(outClass);
        $('.cubeTransition>div:eq(' + (next - 1) + ')').addClass(inClass);
        $('#bullets>li:eq(' + (current - 1) + ')').removeClass('active');
        $('#bullets>li:eq(' + (next - 1) + ')').addClass('active');
        for (i = 0; i < length; i++) {
            $('#bullets>li:eq(' + (i) + ')').removeClass('precedent');
            $('#bullets>li:eq(' + (i) + ')').removeClass('suivant');
            $('#bullets>li:eq(' + (i) + ')').removeClass('top');

        }
        if ((next - 3) >= 0) {
            $('#bullets>li:eq(' + Math.abs(next - 3) + ')').addClass('top');
        } else {

                $('#bullets>li:eq(' + (length-(Math.abs(next - 3))) + ')').addClass('top');
        }


        if ((next != 1) && (next != length)) {


            $('#bullets>li:eq(' + (next - 2) + ')').addClass('suivant');
            $('#bullets>li:eq(' + (next) + ')').addClass('precedent');
        } else if (next == 1) {
            $('#bullets>li:eq(' + (next) + ')').addClass('precedent');
            $('#bullets>li:eq(' + (length - 1) + ')').addClass('suivant');
        } else {
            $('#bullets>li:eq(' + (next - 2) + ')').addClass('suivant');
            $('#bullets>li:eq(' + 0 + ')').addClass('precedent');
        }

        animationOut(current - 1)
        setTimeout(function() {
            $('.cubeTransition>div:eq(' + (current - 1) + ')').removeClass('visible');
        }, 500)
        setTimeout(function() {

            $('.cubeTransition>div:eq(' + (current - 1) + ')').removeClass(outClass);
            $('.cubeTransition>div:eq(' + (next - 1) + ')').removeClass(inClass);
            animationIn(next - 1)
            current = next;
            onGoing = false;
        }, 600)
    }

    $(document).ready(

        function() {

            //for scroll by mouse or MAC track pad
            var indicator = new WheelIndicator({
                callback: function(e) {
                    if (e.direction == 'down') {
                        trans('down')
                    } else {
                        trans('up')
                    }
                }
            });
            indicator.getOption('preventMouse'); // true
            //update this instead of mousewheel.js
            //in issuses#2 a friend want to use this plugin on MAC track pad

            $(document).keydown(function(e) {
                if (e.keyCode == 38) {
                    trans('up')
                }
                if (e.keyCode == 40) {
                    trans('down')
                }

            });

            $(document).swipe({
                swipe: function(event, direction, distance, duration, fingerCount) {
                    if (direction == "up") {
                        trans('down')
                    } else if (direction == "down") {
                        trans('up')
                    }
                }
            });


            $('#bullets>li').on('click', function() {
                openIndex($(this).index() + 1);
            });

        });
})(jQuery);