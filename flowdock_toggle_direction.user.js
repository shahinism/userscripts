// ==UserScript==
// @name        Flowdock toggle direction
// @namespace   Flowdock
// @include     https://www.flowdock.com/*
// @version     1
// @grant       none
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// ==/UserScript==
$(document).ready(function(){
    $('.msg-body').dblclick(function(){
	var current_dir = $(this).parent().css('direction');
	if(current_dir == undefined || current_dir == 'ltr'){
	    $(this).parent().css({direction: 'rtl'});
	} else {
	    $(this).parent().css({direction: 'ltr'});
	}
    });
});
