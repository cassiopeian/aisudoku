$(document).ready(function() {
    
    $(window).on('resize', function() {
        // get the total width of the main grid
        let mainGridWidth = $('#main-grid').css('width');

        // and set its height equal to its width 
        $('#main-grid').css('height', mainGridWidth);
    });

    $('.aisu-cube').on('click', function() {
        // if the parent div is already active
        if ($(this).parent().hasClass('active')) {
            // remove the active class
            $(this).parent().removeClass('active');
        } else {
            // set the selected cell's background blue
            $(this).parent().addClass('active');
        }
    });

    $('.game-pieces').on('click', function() {
        // log the source of the selected game piece
        let gamePiece = $(this).attr('src');
        
        // if any grid cell is selected/active
        if ($('div').hasClass('active') == true) {
            // replace the active div's child img w/ the game piece
            $('.active').children().attr('src', `${gamePiece}`).css({'opacity': '1', 'height': '66%'});

            // tag the cube as populated and strip its active status 
            $('.active').addClass('no-aisu').removeClass('active');
        }
    });

    $('.subgrid div').on('click', function() {
        const green = 'rgb(224, 243, 237)';
        const red = 'rgb(230, 163, 172)';
        const white = 'rgb(255, 255, 255)';
        const dessertCell = $(this).hasClass('no-aisu');
        const cellColor = $(this).css('backgroundColor');

        // if cells are populated, toggle through 3 bg colors
        if (dessertCell == true && cellColor == white) {
            $(this).css('backgroundColor', green);
        } else if (dessertCell == true && cellColor == green) {
            $(this).css('backgroundColor', red);
        } else if (dessertCell == true && cellColor == red) {
            $(this).css('backgroundColor', white);
        }
    });
});