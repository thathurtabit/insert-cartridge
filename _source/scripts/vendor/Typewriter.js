(function(window, undefined) {
	/*jshint undef:false*/
	'use strict';

	window.Typewriter = window.Typewriter || {};


	window.Typewriter = function(options) {

		var component 	= document.querySelectorAll(options.selector)[0];
		var rows 		= component.querySelectorAll(options.rowSelector);
		var rowLength 	= rows.length - 1;

		options.contentAttr = options.contentSelector.replace('[', '').replace(']', '');

		function typing(element, text, letterNumber, callback) {
			if (letterNumber < text.length) {

				element.textContent = text.substring(0, letterNumber + 1);

				letterNumber++;

				setTimeout(function() {
					typing(element, text, letterNumber, callback);
				}, options.letterSpeed);

			} else {
				if(typeof callback !== 'undefined') {
					callback();
				}
			}
		}

		function newLine(rowNumber) {
			rows[rowNumber].style.visibility = 'visible';
		};

		function reset() {

			for(var i = 0; i < rows.length; i++) {
				rows[i].querySelectorAll(options.contentSelector)[0].textContent = '';
				rows[i + 1].style.visibility = 'hidden';
			}

			startTyping(0);
		}

		function startTyping(rowNumber) {
			var rowNumber 	= rowNumber || 0;
			var rowContent 	= rows[rowNumber].querySelectorAll(options.contentSelector)[0];
			var letters 	= rowContent.getAttribute(options.contentAttr);

			new Promise(function(resolve) {
				typing(rowContent, letters, 0, resolve);
			})
			.then(function() {
				rowNumber++;

				if(rowNumber <= rowLength) {
					newLine(rowNumber);
					startTyping(rowNumber);
				}
			});
		};

		return {
			startTyping: startTyping
		};

	};

})(window);
