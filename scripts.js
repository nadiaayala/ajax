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
    $.ajax("info.txt").done(function(data){
        alert(data);
    })
});