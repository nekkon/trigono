
jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

var app = {
    direction:0,
	deg: 0,
    boot: function() {
        var boot_screen = document.getElementById('boot_screen');

        setTimeout(function(){ 
            boot_screen.setAttribute('style', 'display:none;');
            main_screen.setAttribute('style', 'display:block;');
        }, 5000);

        var sound = new Howl({urls: ['img/hit1.mp3']}).play();

        var center = Math.floor(window.innerWidth/2);

        $("#obj-trigono").on("touchstart mousedown", function(event){
        	event.preventDefault(); 
        	app.animating = true;

        	console.log('animation_on');
        });

        $(document).on("touchend mouseup touchcancel", function(event){
        	event.preventDefault();

        	app.animating = false;
        	console.log('animation_off');
        });

        $(document).on("touchmove mousemove", function(event){
        	event.preventDefault(); 

        	if(app.animating){
                if(event.pageX){
                    app.deg = center - event.pageX;
                } else if(event.originalEvent.touches[0].pageX){
                    app.deg = center - event.originalEvent.touches[0].pageX;
                } else if(event.originalEvent.changedTouches[0].pageX){
                    app.deg = center - event.originalEvent.changedTouches[0].pageX;
                }
        		

                if(app.deg > 45){
                    app.deg = 45;
                } else if(app.deg < -45) {
                    app.deg = -45;
                }

				$("#obj-trigono").rotate(app.deg);

                if(app.direction > 0){
                    if(app.deg < 0){
                        sound.play();
                    }
                } else if(app.direction < 0){
                    if(app.deg > 0){
                        sound.play();
                    }
                } else {
                    sound.play();
                }
                app.direction = app.deg;

				$("#info").text(app.deg + ' : ' + center);
        	}
        });


    },
    animating: false
};
