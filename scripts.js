$(function() {
    console.log( "ready!" );
    $( "#draggable" ).draggable();
    $( "#droppable").droppable({
        drop: function(event, ui){
            alert('OK');
        }
    });

    $('#accordion').accordion();
    $('#sortable').sortable();
    $.ajax("infoo.txt").done(function(data){
        alert(data);
    }).fail(function(){
        alert('Could not get data! :(');
    })
});