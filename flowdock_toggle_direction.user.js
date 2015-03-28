$('.msg-body').dblclick(function(){
    var current_dir = $(this).parent().css('direction');
    if(current_dir == undefined || current_dir == 'ltr'){
	$(this).parent().css({direction: 'rtl'});
    } else {
	$(this).parent().css({direction: 'ltr'});
    }
});
