$('.close').click(function () {
    $('.os-modal').fadeOut(500);
});

$('.active-btn').click(function (e) {
    if(profile = $(this).data("profile")){
        getProfile(profile);
    }
    // if($(this).data("profile") != undefined){
    //     console.log($(this).data("profile"));
    // }
});


function getProfile(id) {
    //to do implement ID to request
    $.get("get-trainer-profile.php", function(data, status){
        // alert("Data: " + data + "\nStatus: " + status);
        if(status=="success") {
            var info = JSON.stringify(data);

            console.log(info);
        }
    });
}