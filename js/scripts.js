

$('button').click(
    function(){
        var toAdd = $('input[name=toDoTask').val();
        $('ul').append('<li>'+toAdd+'</li>');
    }
)







li.on('click', function(){
    li.addClass('strike');
});


