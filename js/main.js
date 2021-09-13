const dessertOrder = [
    'images/game-pieces/berry-gelato.svg', 
    'images/game-pieces/chipwich-tower.svg', 
    'images/game-pieces/cornetto.svg', 
    'images/game-pieces/creamsicle.svg', 
    'images/game-pieces/firecracker-pop.svg', 
    'images/game-pieces/kiwimelon-pop.svg', 
    'images/game-pieces/mango-sorbet.svg', 
    'images/game-pieces/mint-choco.svg', 
    'images/game-pieces/smoothie.svg'
];
const rowOne = [];
const rowTwo = [];
const rowThree = [];
const rowFour = [];
const rowFive = [];
const rowSix = [];
const rowSeven = [];
const rowEight = [];
const rowNine = [];
const columnOne = [];
const columnTwo = [];
const columnThree = [];
const columnFour = [];
const columnFive = [];
const columnSix = [];
const columnSeven = [];
const columnEight = [];
const columnNine = [];

$(document).ready(function() {
    
    function setGridHeight() {
        // get the total width of a grid
        let mainGridWidth = $('#main-grid').css('width');
        let dessertGridWidth = $('#selections').css('width');
    
        // and set its height equal to its width 
        $('#main-grid').css('height', mainGridWidth);
        $('#selections').css('height', dessertGridWidth);
    };
    
    setGridHeight();

    $(window).on('resize', setGridHeight);
    
    // set the populated cells apart from the others
    $('.populated-cell').parent().css('backgroundColor', 'rgb(240, 248, 255)');

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

        // apply the dessert-dance keyframes animation
        $(this).addClass('dessert-dance');
        
        // if any grid cell is selected/active
        if ($('div').hasClass('active') == true) {
            // replace the active div's child img w/ the game piece
            $('.active').children().attr('src', `${gamePiece}`).css({'opacity': '1', 'height': '66%'});
    
            // tag the cube as populated and strip its active status 
            $('.active').addClass('no-aisu').removeClass('active');
        }
    });

    $('.game-pieces').on('animationend', function() {
        // remove the animation, so it can be reapplied later
        $(this).removeClass('dessert-dance');
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

    function checkRowsAndColumns() {
        // for each div in the .row-one class
        $('.row-one').each(function() {
            // push the element's nested img src into the rowOne array
            rowOne.push($(this).children().attr('src'));
            rowOne.sort();
        });

        $('.row-two').each(function() {
            rowTwo.push($(this).children().attr('src'));
            rowTwo.sort();
        });

        $('.row-three').each(function() {
            rowThree.push($(this).children().attr('src'));
            rowThree.sort();
        });

        $('.row-four').each(function() {
            rowFour.push($(this).children().attr('src'));
            rowFour.sort();
        });

        $('.row-five').each(function() {
            rowFive.push($(this).children().attr('src'));
            rowFive.sort();
        });

        $('.row-six').each(function() {
            rowSix.push($(this).children().attr('src'));
            rowSix.sort();
        });

        $('.row-seven').each(function() {
            rowSeven.push($(this).children().attr('src'));
            rowSeven.sort();
        });

        $('.row-eight').each(function() {
            rowEight.push($(this).children().attr('src'));
            rowEight.sort();
        });

        $('.row-nine').each(function() {
            rowNine.push($(this).children().attr('src'));
            rowNine.sort();
        });

        $('.column-one').each(function() {
            columnOne.push($(this).children().attr('src'));
            columnOne.sort();
        });

        $('.column-two').each(function() {
            columnTwo.push($(this).children().attr('src'));
            columnTwo.sort();
        });

        $('.column-three').each(function() {
            columnThree.push($(this).children().attr('src'));
            columnThree.sort();
        });

        $('.column-four').each(function() {
            columnFour.push($(this).children().attr('src'));
            columnFour.sort();
        });

        $('.column-five').each(function() {
            columnFive.push($(this).children().attr('src'));
            columnFive.sort();
        });

        $('.column-six').each(function() {
            columnSix.push($(this).children().attr('src'));
            columnSix.sort();
        });

        $('.column-seven').each(function() {
            columnSeven.push($(this).children().attr('src'));
            columnSeven.sort();
        });

        $('.column-eight').each(function() {
            columnEight.push($(this).children().attr('src'));
            columnEight.sort();
        });

        $('.column-nine').each(function() {
            columnNine.push($(this).children().attr('src'));
            columnNine.sort();
        });

        console.log(rowOne);
        console.log(rowTwo);
        console.log(rowThree);
        console.log(rowFour);
        console.log(rowFive);
        console.log(rowSix);
        console.log(rowSeven);
        console.log(rowEight);
        console.log(rowNine);
        console.log(columnOne);
        console.log(columnTwo);
        console.log(columnThree);
        console.log(columnFour);
        console.log(columnFive);
        console.log(columnSix);
        console.log(columnSeven);
        console.log(columnEight);
        console.log(columnNine);
    };

    function compareArrays() {
        if ((rowOne.toString() == dessertOrder) &&
            (rowTwo.toString() == dessertOrder) &&
            (rowThree.toString() == dessertOrder) &&
            (rowFour.toString() == dessertOrder) &&
            (rowFive.toString() == dessertOrder) &&
            (rowSix.toString() == dessertOrder) &&
            (rowSeven.toString() == dessertOrder) &&
            (rowEight.toString() == dessertOrder) &&
            (rowNine.toString() == dessertOrder) &&
            (columnOne.toString() == dessertOrder) &&
            (columnTwo.toString() == dessertOrder) &&
            (columnThree.toString() == dessertOrder) &&
            (columnFour.toString() == dessertOrder) &&
            (columnFive.toString() == dessertOrder) &&
            (columnSix.toString() == dessertOrder) &&
            (columnSeven.toString() == dessertOrder) &&
            (columnEight.toString() == dessertOrder) &&
            (columnNine.toString() == dessertOrder)) {
                // tell users they've won
                $('#winning-solution').show();
        } else {
            // tell users to keep trying or start over
            $('#wrong-solution').show();
        }
    };

    $('#check-solution').on('click', function() {
        const iceInGrid = $('img[src="images/aisu-cubes/aisu-cube.svg"]');

        // populate the rows and columns arrays
        checkRowsAndColumns();

        // if the grid still contains aisu-cube images 
        if (iceInGrid.length > 0) {
            // tell the user to complete the puzzle
            $('#incomplete-grid').show();
        } else if (iceInGrid.length == 0) {
            // otherwise, check the user's work
            compareArrays();
        }
    });

    // when a continue button is clicked
    $('.continue').on('click', function() {
        // close its modal box
        $(this).parents('section').hide();
    });

    $('#start-over').on('click', function() {
        // reload the page
        location.reload(true);
    });
});