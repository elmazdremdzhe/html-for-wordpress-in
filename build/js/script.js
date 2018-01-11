$(function() {





	$(document).on('click', '[data-toggle="collapse"]', function(){

			var target = $(this).data('target');
		console.log(target);
		$(target).addClass('in');

			$('.button__close').show();
			$('.flexslider').flexslider({
				animation: "fade",
				directionNav: false,
				controlNav: true
			});


	});

	$(document).on('click', '[data-dismiss]', function(){
		$($(this).data('dismiss')).removeClass('in');
	});
});

var sources =  {
		"files": [{
	"type":"VIDEO",
	"sources": {
		"webm":{
			"source":"build/media/Charter_1280x768.webm",
			"size":2962.215
		},
		"ogg":{
			"source":"build/media/Charter_1280x768.ogv",
			"size":3065.275
		},
		"h264":{
			"source":"build/media/Charter_1280x768_converted.mp4",
			"size":4462.614
		},
		"vp9": {
			"source":"build/media/Charter_1280x768.webm",
			"size":2962.215
		}
	}
}]}
;

window.sr = new scrollReveal();

if (Modernizr.touch){
	$('.progress-bar').hide();
	// Show the image please
} else {
	$.html5Loader({
		filesToLoad:    sources, // this could be a JSON or simply a javascript object
		onBeforeLoad:       function () {

		},
		onComplete:         function () {

			var BV = new $.BigVideo({container: $('.header__video')});
			BV.init();
			BV.show([
				{ type: "video/mp4",  src: "build/media/Charter_1280x768_converted.mp4" },
				{ type: "video/webm", src: "build/media/Charter_1280x768.webm" },
				{ type: "video/ogg",  src: "build/media/Charter_1280x768.ogv" }
			], {ambient:true, loop: true, autoplay : true
			});
			setTimeout(function(){
				$('.progress-bar').hide();
			}, 1000);

		},
		onElementLoaded:    function ( obj, elm) { },
		onUpdate:           function ( percentage ) {
			console.log(percentage);
			$('.progress').css('width', percentage + '%');
		}
	});


}
