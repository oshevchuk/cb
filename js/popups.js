$('.close').click(function () {
    $('.os-modal').fadeOut(500);
});

$('.active-btn').click(function (e) {
    if (profile = $(this).data("profile")) {
        getProfile(profile);
    }
    if (contact = $(this).data("contact")) {
        getContact(contact);
    }
});


function getProfile(id) {
    $.get("get-trainer-profile.php?id="+id, function (data, status) {
        if (status == "success") {
            $('.os-modal.modal-skills').css("display", "flex").hide().fadeIn(500);

            var info = JSON.parse(data);
            $('.os-name').html(info["name"]);
            $('.skills').html('');
            $.each(info["skills"], function (i, val) {
                var newElement = document.createElement('li');
                newElement.innerHTML = val;
                $('.skills').append("<li><a href='#'>" + val + "</a></li>");
            });
            $('.education').html(info["education"].join(', '));
            $('.experience').html(info["experience"].join(', '));
            $('.certifications').html(info["certifications"].join(', '));
            $('.about-me').html(info["about-me"].join('. '));
        } else {
            ShowErr();
        }
    });
}
function getContact(id) {
    $.get("get-trainer-contact.php?id="+id, function (data, status) {

        if (status == "success") {
            $('.os-modal.modal-contact').css("display", "flex").hide().fadeIn(500);
            var info = JSON.parse(data);
            $('.os-name').html(info["name"]);
            $('.skills').html('');
            $.each(info["skills"], function (i, val) {
                var newElement = document.createElement('li');
                newElement.innerHTML = val;
                $('.skills').append("<li><a href='#'>" + val + "</a></li>");
            });

            $('.email').html(info["e-mail"]);
            $('.location').html(info["location"]);
            $('.phone').html(info["phone"]);
            $('.skype').html(info["skype"]);
        } else {
            ShowErr();
        }
    });
}

function ShowErr() {
    $('.os-modal').find('.modal-body').hide();
    $('.os-modal').find('.err').fadeIn(400);
    setTimeout(function () {
        $('.os-modal').find('.modal-body').show();
        $('.os-modal').find('.err').hide();
    }, 1000)
}