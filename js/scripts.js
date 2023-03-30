

$(document).ready(function() {
// Add event listeners for the add button and the enter key
// to add that task to the list and clear the field

$('button').click(
    function(){
        var toAdd = $('input[name=toDoTask]').val();
        $('ul').append('<li>'+toAdd+'</li>');
        $('input[name=toDoTask]').val('');
    }
)

$('input[name=toDoTask]').keypress(function(event){
    if(event.keyCode === 13) {
        event.preventDefault();
        var toAdd = $('input[name=toDoTask]').val();
        $('ul').append('<li>' + toAdd + '</li>');
        $(this).val('');
    }
})



$('ul').on('click', 'li', function() {
    $(this).toggleClass('strike');
});

$('ul').on('dblclick', 'li', function() {
    $(this).addClass('delete');
});



$('ul').sortable({
    axis: 'y',
    containment: 'parent'
});

});
