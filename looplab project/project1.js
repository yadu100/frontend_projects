$('#exploreregionhidden,#createregionhidden,#shareregionhidden').hide()


$('#createbtn').click(function(){
    $('#createregionhidden').stop().slideToggle(550,function(){
        var btnstate = $('#createbtn').text()
        // alert(btnstate)
        if (btnstate=='See More'){
            btnstate = 'See Less'
        }
        else{
            btnstate = 'See More'
        }
        $('#createbtn').text(btnstate)
    })
})
$('#sharebtn').click(function(){
    $('#shareregionhidden').stop().slideToggle(550,function(){
        var btnstate = $('#sharebtn').text()
        // alert(btnstate)
        if (btnstate=='See More'){
            btnstate = 'See Less'
        }
        else{
            btnstate = 'See More'
        }
        $('#sharebtn').text(btnstate)
    })
})
$('#explorebtn').click(function(){
    $('#exploreregionhidden').stop().slideToggle(550,function(){
        var btnstate = $('#explorebtn').text()
        if (btnstate=='See More'){
            btnstate = 'See Less'
        }
        else{
            btnstate = 'See More'
        }
        $('#explorebtn').text(btnstate)
    })
})
