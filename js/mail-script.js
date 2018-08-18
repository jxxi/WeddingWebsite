    // -------   Mail Send ajax

     $(document).ready(function() {
        var form = $('#rsvp-form'); // rsvp form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert-msg'); // alert div for show alert message


        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit
            debugging 
            var name = document.getElementById('fname').value;
            var email = document.getElementById('email').value;
            var attendance = document.getElementById('attendingDropdown').value;
            var guestInput = document.getElementsByClassName("guestInput");

            var guestList = $.map(guestInput, function (x, i) { return x.value });
            guestList = guestList.join('<br>');

            var service_id = 'mailjet';
            var template_id = 'template_e7OCO7ZO';
            var template_params = {
                                    name: name,
                                    reply_email: email,
                                    message: guestList
            };

            emailjs.send(service_id,template_id,template_params);
        });
    });
