import CONST from './_const.js';

import hack from './module/_hack.js';
hack();

import smoothScroll from './module/_smoothScroll.js';
smoothScroll();

import tab from './module/_tab.js';
tab();

//navigation
let $nav = $('.js-nav');
$('.js-nav-trigger').on('click', () => {
    $nav.fadeIn(CONST.DURATION);
    $nav.addClass(CONST.ACTIVE_CLASS);
});
$('.js-nav-close').on('click', () => {
    $nav.fadeOut(CONST.DURATION);
    $nav.removeClass(CONST.ACTIVE_CLASS);
});

