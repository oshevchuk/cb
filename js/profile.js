$('.addExperience').click(function (e) {
    $('<div><input type="text" name="company_name" placeholder="Company Name"><input type="text" name="position" placeholder="Position"></div>').insertAfter('#Experience');
});

$('.addCertifications').click(function (e) {
    $('<div><input type="text" name="Certifications" placeholder="Certifications" class="full"></div>').insertAfter('#Certifications');;
});