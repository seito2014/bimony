import CONST from '../_const.js';

export default function tab() {

    'use strict';

    //tab
    let $tab = $('#js-tab');
    let $tabNav = $tab.find('.tab-nav');
    let $tabLink = $tabNav.find('a');
    let $tabContentItem = $('.tab-content-item');

    $tabLink.on('click', (e) => {

        e.preventDefault();

        let $this = $(e.currentTarget);

        //class
        $tabLink.removeClass(CONST.ACTIVE_CLASS);
        $this.addClass(CONST.ACTIVE_CLASS);

        //content
        let target = $this.attr('href');
        $tabContentItem.fadeOut(CONST.DURATION);
        $(target).fadeIn(CONST.DURATION);
    });
}