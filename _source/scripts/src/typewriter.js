(function(window, Typewriter, Scroller) {
	/*jshint undef:false*/
	'use strict';

	var elTypewriter = document.querySelectorAll('[data-typewriter]');

	var options = {
		selector: '[data-typewriter]',
		rowSelector: '[data-typewriter-row]',
		contentSelector: '[data-typewriter-content]',
		loop: true,
		letterSpeed: 150
	};

	var elTerminal = document.querySelectorAll(options.selector)[0];

	var terminal = new Typewriter(options);

	function supportsPromises() {
		return typeof Promise !== 'undefined' && Promise.toString().indexOf('[native code]') !== -1; // jshint ignore:line
	}

	function fallback() {
		elTypewriter[0].classList.add('show-commands');
	}

	function init() {
		supportsPromises() ? terminal.startTyping() : fallback(); // jshint ignore:line
	}

	Scroller.addElement(elTerminal, init);
	Scroller.init();

})(window, window.Typewriter, window.Scroller);
