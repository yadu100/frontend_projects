$('#Subscribebtn,#submitbtn').stop().mouseenter(
    function(){
    $(this).css('background','rgb(30, 95, 92)')
    
})
$('#Subscribebtn,#submitbtn').stop().mouseleave(function(){
    $(this).css('background','rgb(50, 141, 136)')

})

$('fieldset').mouseenter(
    function(){
        $(this).stop().addClass('author')
        
    }
)
$('fieldset').stop().mouseleave(
    function(){
        $(this).removeClass('author')
    }
)