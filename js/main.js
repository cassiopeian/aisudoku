$(document).ready(function() {
    $('.aisu-cube').on('click', function() {
        // set the selected cell's background blue
        $(this).parent().addClass('active');
    });

    $('.game-pieces').on('click', function() {
        // log the source of the selected game piece
        let gamePiece = $(this).attr('src');
        
        // if any grid cell is selected/active
        if ($('div').hasClass('active') == true) {
            // replace the active div's child img w/ the game piece
            $('.active').children().attr('src', `${gamePiece}`).css('opacity', '1');

            // ensure the active class only ever applies to one cell
            $('.active').removeClass('active');
        }
    });
});