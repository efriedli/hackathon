$( "tr" ).on( "click", function() {
    if($(this).find('form').is(':hidden')) {
        if($(this).closest('tr').find('.content').css('height')=="0px") { // we're opening it
            $(this).closest('tr').find('.content').css('height','auto');
        } else {
            $(this).closest('tr').find('.content').css('height','0px');    // we're closing it
        }
    }
} );


$("button.read").on("click",function() {
    removeItem($(this),"Message archived");
});

$("button.approve").on("click",function() {
    removeItem($(this),"Approved");
});

$("button.decline").on("click",function() {
    removeItem($(this),"Declined");
});

$("button.send").on("click",function() {
    removeItem($(this),"Message sent");
});


$("button.reply").on("click",function(event) {
    event.stopPropagation();

    if($(this).closest('tr').find('.content').css('height')=="0px") { // we're opening it
        $(this).closest('tr').find('.content').css('height','auto');
    } else {
        $(this).closest('tr').find('.content').css('height','0px');    // we're closing it
    }
    $(this).closest('tr').find('form').toggle();
});

function removeItem(item, messageText) {
    let parent = item.closest('.demo-card-wide');

    if(item.closest('.demo-card-wide').find('tr').length==1) {
        parent.remove();
        item.closest('tr').remove();
    } else {
        item.closest('tr').remove();
        parent.find('span.mdl-badge').attr('data-badge',parent.find('tr').length);
    }

    if($('#main').find('table').length==0) {
        console.log("empty state");
        $('#empty').show();
    } 

    var notification = document.querySelector('.mdl-js-snackbar');
    var data = {
      message: messageText,
      actionHandler: function(event) {},
      actionText: 'Undo',
      timeout: 1000
    };
    notification.MaterialSnackbar.showSnackbar(data);
}


$( document ).ready(function() {
    let nActions = $("#actions").find('tr').length;
    $("#actions").find('span.mdl-badge').attr('data-badge',nActions);

    let nRecaps = $("#recap").find('tr').length;
    $("#recap").find('span.mdl-badge').attr('data-badge',nRecaps);
});