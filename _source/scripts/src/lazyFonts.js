(function(window, undefined) {
	/*jshint undef:false*/
	'use strict';

	var LazyFonts = LazyFonts || {};

	LazyFonts = function() {

		function init() {
			var lato = document.createElement('link');
            lato.rel = 'stylesheet';
            lato.href = 'https://fonts.googleapis.com/css?family=Lato:300,900';
			document.head.appendChild(lato);
		}

		init();
	};

	new LazyFonts();

})(window);
