
var app = {

    boot: function() {
        var boot_screen = document.getElementById('boot_screen');

        setTimeout(function(){ 
            boot_screen.setAttribute('style', 'display:none;');
            main_screen.setAttribute('style', 'display:block;');
        }, 5000);
    }
        //document.addEventListener('deviceready', this.onDeviceReady, false);
};
