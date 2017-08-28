(function(window, undefined) {
	/*jshint undef:false*/
	'use strict';

	var ACTIVE_CLASS = 'header--nav-openYOYO';
	var elSiteHeader;
	var elHeaderNav;

	// Regex is to support ie9
	function hasClass(el, className) {
		var boolean = false;
		el.classList ? boolean = el.classList.contains(className) : boolean = new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className); // jshint ignore:line

		return boolean;
	}

	function isWindowInScope() {
		return window.innerWidth < 768;
	}

	function getNavHeight() {
		return elHeaderNav.querySelectorAll('.header-nav-list')[0].offsetHeight;
	}

	function setNavHeight() {
		elHeaderNav.setAttribute('style', 'height: ' + getNavHeight() + 'px');
	}

	function showNav() {
		setNavHeight();
		elSiteHeader.classList.add(ACTIVE_CLASS);
	}

	function hideNav() {
		elHeaderNav.removeAttribute('style');
		elSiteHeader.classList.remove(ACTIVE_CLASS);
	}

	function toggleNav() {
		var isNavOpen = hasClass(elSiteHeader, ACTIVE_CLASS);
		isNavOpen === true ? hideNav() : showNav(); // jshint ignore:line
	}

	function handleClickEvent(event) {
		event.preventDefault();
		toggleNav();
	}

	function bindEvents() {
		var elMenuToggle = document.querySelectorAll('[data-menu-toggle]')[0];
		elMenuToggle.addEventListener('click', handleClickEvent);
	}

	function reset() {
		var elMenuToggle = document.querySelectorAll('[data-menu-toggle]')[0];
		elMenuToggle.removeEventListener('click', handleClickEvent);
		hideNav();
	}

	function init() {
		elSiteHeader = document.querySelectorAll('[data-site-header]')[0];
		elHeaderNav = document.querySelectorAll('[data-header-nav]')[0];

		if(isWindowInScope()) {
			bindEvents();
		} else {
			reset();
		}
	}

	function debouceHandler(callback) {
		setTimeout(callback, 500);
	}

	function handleResize() {
		debouceHandler(function() {
			init();
			if(hasClass(elSiteHeader, ACTIVE_CLASS)) setNavHeight(); // jshint ignore:line
		});
	}

	init();

	window.addEventListener('resize', handleResize);

})(window);
