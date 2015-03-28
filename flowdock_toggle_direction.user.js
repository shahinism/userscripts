// ==UserScript==
// @id             www.flowdock.com-7a5b7690-e5ff-48da-9951-7cfdf0d6967e@PMOCounter
// @name           Flowdock toggle direction
// @version        0.1
// @namespace      Flowdock.com
// @author         Shahin Azad
// @description    Double click on message texts and toggle text direction. 
// @include        https://www.flowdock.com*
// @run-at         window-load
// ==/UserScript==
$(document).dblclick(function (event) {
    if ($(event.target).attr('class') == 'msg-body') {
	var current_obj = $(event.target);
	if (current_obj.css('direction') == undefined || current_obj.css('direction') == 'ltr') {
	    current_obj.parent().css({
		textAlign: 'right',
		direction: 'rtl'
	    });
	} else {
	    current_obj.parent().css({
		textAlign: 'left',
		direction: 'ltr'
	    });
	}
    }
});
