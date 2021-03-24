//open Modal
$(document).ready(function() {
    $('#clickm').click(function() {
        $('#openm').css(
            {
                'display': 'block'
            }
        );
    });

//close Modal
$('#closem').click(function() {
    $('#openm').css (
        {
        'display' : 'none'
        }
    );
 });
//send mail ajax
$('#evm').click(function(e){
    e.preventDefault();
    var data = {
        email: $('#m').val(),
        name: $('#n').val(),
        objet: $('#fn').val(),
        message: $('#msg').val()
    };
    //AJAX
    $.ajax({
        url: "mail.php",
        type: 'POST',
        data: data,
        success: function(data) {
            $('#js_alert_success').css({'display' : 'block'});
            setTimeout(function(){
                $('#js_alert_success').css({'display' : 'none'});
                $('#m').val("");
                $('#n').val("");
                $('#fn').val("");
                $('#msg').val("");
            }, 3000);
        },
        error: function(data) {
            $('#js_alert_danger').css({'display' : 'block'});
            setTimeout(function(){
                $('#js_alert_danger').css({'display' : 'none'});
                $('#m').val("");
                $('#n').val("");
                $('#fn').val("");
                $('#msg').val("");
            }, 3000);
        }
    });
});
});

//copier le numero
$('#evn').click(function getText(num) {
    /* Creer la variable num */
    num = 0766133263;

    /* Copier le contenu de la variable */
    document.execCommand(num);
}
);
