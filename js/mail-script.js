    // -------   Mail Send ajax

     $(document).ready(function() {
        var form = $('#rsvp-form'); // rsvp form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert-msg'); // alert div for show alert message


        // form submit event
        form.on('submit', function(e) {
            $('#myModal').modal('show');
            e.preventDefault(); // prevent default form submit
            debugger
            var loader = document.getElementById('loader');

            var name = document.getElementById('fname').value;
            var email = document.getElementById('email').value;
            var attendance = document.getElementById('attendingDropdown');
            var attendResponse = attendance.options[attendance.selectedIndex].text;
            var guestInput = document.getElementsByClassName("guestInput");

            loader.removeAttribute("hidden");

            var guestList = $.map(guestInput, function (x, i) { return x.value });
            guestList = guestList.join('<br>');

            var service_id = 'mailjet';
            var template_id = 'template_e7OCO7ZO';
            var template_params = {
                                    name: name,
                                    reply_email: email,
                                    attendance: attendResponse,
                                    message: guestList
            };

            emailjs.send(service_id,template_id,template_params);

            loader.setAttribute("hidden", true);
        });
    });
