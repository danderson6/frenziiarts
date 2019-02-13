$(document).ready(function() {
    $("#contact-submit").click(function(e) {
        var returnedResponse;
        var formInput = $("form").serialize();
        $('#response').empty();
        $.ajax({
            method: "POST",
            url: "contact.php",
            data: formInput,
            dataType: 'json',
            success: function(response) {
              returnedResponse = response;
                if (response.status) {
                    $('#contact-form input').val('');
                    $('#contact-form textarea').val('');
                  }

            },
            complete:function() {
              $('#response').empty().html(returnedResponse.html);

              if(returnedResponse.html.length < 1)
              {
                  $('#response').empty().html(returnedResponse.completed);

              }

            },
        });
        e.preventDefault();
    });
});
