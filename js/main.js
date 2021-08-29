$(document).ready(function() {
    $('.aisu-cube').on('click', function() {
        // set the selected cell's background blue
        $(this).parent().addClass('active');
    });
});