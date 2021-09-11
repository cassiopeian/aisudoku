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
            rowOne.sort().push($(this).children().attr('src'));
        });

        $('.row-two').each(function() {
            rowTwo.sort().push($(this).children().attr('src'));
        });

        $('.row-three').each(function() {
            rowThree.sort().push($(this).children().attr('src'));
        });

        $('.row-four').each(function() {
            rowFour.sort().push($(this).children().attr('src'));
        });

        $('.row-five').each(function() {
            rowFive.sort().push($(this).children().attr('src'));
        });

        $('.row-six').each(function() {
            rowSix.sort().push($(this).children().attr('src'));
        });

        $('.row-seven').each(function() {
            rowSeven.sort().push($(this).children().attr('src'));
        });

        $('.row-eight').each(function() {
            rowEight.sort().push($(this).children().attr('src'));
        });

        $('.row-nine').each(function() {
            rowNine.sort().push($(this).children().attr('src'));
        });

        $('.column-one').each(function() {
            columnOne.sort().push($(this).children().attr('src'));
        });

        $('.column-two').each(function() {
            columnTwo.sort().push($(this).children().attr('src'));
        });

        $('.column-three').each(function() {
            columnThree.sort().push($(this).children().attr('src'));
        });

        $('.column-four').each(function() {
            columnFour.sort().push($(this).children().attr('src'));
        });

        $('.column-five').each(function() {
            columnFive.sort().push($(this).children().attr('src'));
        });

        $('.column-six').each(function() {
            columnSix.sort().push($(this).children().attr('src'));
        });

        $('.column-seven').each(function() {
            columnSeven.sort().push($(this).children().attr('src'));
        });

        $('.column-eight').each(function() {
            columnEight.sort().push($(this).children().attr('src'));
        });

        $('.column-nine').each(function() {
            columnNine.sort().push($(this).children().attr('src'));
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
                alert(`Congrats! You won!`);
        } else {
            alert(`Hmm, something is not right. Check each square carefully.`);
        }
    };

    $('#check-solution').on('click', function() {
        const iceInGrid = $('img[src="images/aisu-cubes/aisu-cube.svg"]');

        // populate the rows and columns arrays
        checkRowsAndColumns();

        // if the grid still contains aisu-cube images 
        if (iceInGrid.length > 0) {
            // tell the user to complete the puzzle
            alert(`Uh oh! There shouldn't be any ice cubes left! Try again.`);
        } else if (iceInGrid.length == 0) {
            // otherwise, check the user's work
            compareArrays();
        }
    });
});