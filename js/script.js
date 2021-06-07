/** variable initialization */
var board = document.getElementById('board')
var grid = document.getElementById('grid')
var startButton = document.getElementById('start')
var pieces = document.getElementById('grid-1')
var gameStart = true
//var occupiedPiece = new Array()
var whiteTurn = false
var showMovementBool
var target = new Array
var whitePieces = ['whiteRook', 'whiteKnight', 'whiteBishop', 'whiteQueen', 'whiteKing','whitePawn']
var blackPieces = ['blackRook', 'blackKnight', 'blackBishop', 'blackQueen', 'blackKing','blackPawn']

var previousMovementFromAdd
var previousMovementToAdd
var previousMovementFromRemove
var previousMovementToRemove


/**creating a board
 * crating a for loop which creates a row and by using another for loop which creates columns inside the rows
 */
function createBoard() {
    var grid = 1
    var column_switcher = true
    for(var i = 1; i < 9; i++)
    {
        var row = document.createElement('div')
        row.className = 'row'
        board.appendChild(row)
        var color_switcher

        if(column_switcher) {
            color_switcher = true
            column_switcher = false
        }
        else {
            color_switcher = false
            column_switcher = true
        }

        for(var j = 1; j < 9; j++)
        {
            var column = document.createElement('div')
            if(color_switcher) {
                column.id = 'grid-'+grid
                column.className = 'white_square' + ' row-'+i+' column-'+j
                color_switcher = false
                grid++
            }
            else {
                column.id = 'grid-'+grid
                column.className = 'black_square' + ' row-'+i+' column-'+j
                color_switcher = true
                grid++
            }
            row.appendChild(column)
        }
    }
}

/**start game on click */
function startGame() {
    if(gameStart) {
        new addPieces()
        addMovement()
        gameStart = false
    }
}

/**adds movemnet to the pieces on the board. */
function addMovement() {
    if(previousMovementFromAdd) {
        previousMovementFromAdd.classList.add('previousMovementFrom')
        previousMovementToAdd.classList.add('previousMovementTo')
        //previousMovementFromRemove = previousMovementFromAdd
        //previousMovementToRemove = previousMovementToAdd

        //console.log(previousMovementFromAdd)
        //console.log(previousMovementToAdd)
        //console.log(previousMovementFromRemove)
        //console.log(previousMovementToRemove)

    }

    target = new Array()
    whiteTurn = !whiteTurn
    showMovementBool = true
    var occupiedPiece = document.querySelectorAll('.occupied')
    for(var i = 0; i < occupiedPiece.length; i++) {
        occupiedPiece[i].addEventListener('click', function(event) {
            /** event.path[1] returns the selected div */
            removeMovement()
            if(showMovementBool) {
                showPieceMovement(event.path[1])
                selectedPieceDiv = event.path[1]
                //showMovementBool = false
            }
        })
    }
}

/**show where the selected piece can move */
var canMoveToPlaces
function showPieceMovement(item) {
    previousMovementFromAdd = item
    //console.log('kamui')
    //previousMovementFromRemove = previousMovementFromAdd
    //console.log(previousMovementFromAdd)
    canMoveToPlaces = new Array()
    var selectedPieceClass = item.firstChild.classList
    
    if(whiteTurn) {
        if(item.firstChild.classList.contains('white')) {
            item.classList.add('selected')
        }
    } else {
        if(item.firstChild.classList.contains('black')) {
            item.classList.add('selected')
        }
    }

    if(whiteTurn){
        if(selectedPieceClass.contains('whitePawn')) {
            canMoveToPlaces = new showPawnMovement('white', item.id, item)
        }
        else if(selectedPieceClass.contains('whiteRook')) {
            canMoveToPlaces = new showRookMovement('white', item.id)
        }
        else if(selectedPieceClass.contains('whiteBishop')) {
            canMoveToPlaces = new showBishopMovement('white', item.id)
        }
        else if(selectedPieceClass.contains('whiteKnight')) {
            canMoveToPlaces = new showKnightMovement('white', item.id)
        }
        else if(selectedPieceClass.contains('whiteQueen')) {
            canMoveToPlaces = new showQueenMovement('white', item.id)
        }
        else if(selectedPieceClass.contains('whiteKing')) {
            canMoveToPlaces = new showKingMovement('white', item.id)
        } else {
            canMoveToPlaces = new Array()
        }
    } else {
        if(selectedPieceClass.contains('blackPawn')) {
            canMoveToPlaces = new showPawnMovement('black', item.id, item)
        }
        else if(selectedPieceClass.contains('blackRook')) {
            canMoveToPlaces = new showRookMovement('black', item.id)
        }
        else if(selectedPieceClass.contains('blackBishop')) {
            canMoveToPlaces = new showBishopMovement('black', item.id)
        }
        else if(selectedPieceClass.contains('blackKnight')) {
            canMoveToPlaces = new showKnightMovement('black', item.id)
        }
        /*else if(selectedPieceClass.contains('blackQueen')) {
            canMoveToPlaces = new showQueenMovement('black', item.id)
            //for some reason this isn't working
        }*/
        else if(selectedPieceClass.contains('blackKing')) {
            canMoveToPlaces = new showKingMovement('black', item.id)
        } else {
            canMoveToPlaces = new Array()
        }
    }  

    if(item.firstChild.classList.contains('blackQueen')) {
        canMoveToPlaces = new showQueenMovement('black', item.id)
    }

    for(var i=0; i<target.length; i++) {
        document.getElementById('grid-'+target[i]).classList.add('target')
    }

    if(target.length != 0) {
        selectedPieceAttack(item)
    }

    for(var i = 0; i < canMoveToPlaces.length; i++) {
        var showPieceMovementImg = document.createElement('img')
        showPieceMovementImg.id = 'canMoveToImg'
        showPieceMovementImg.src = 'Images/canMoveTo/canMoveTo.svg'
        document.getElementById('grid-'+canMoveToPlaces[i]).appendChild(showPieceMovementImg)
    }

    if(canMoveToPlaces.length != 0) {
        selectedPieceMovement(item)
    }
}

function selectedPieceMovement(selectedPiece) {
    var toMoveHere = document.querySelectorAll('.canMoveTo')
    toMoveHere.forEach(function(item){
        item.addEventListener('click', function() {
            if(selectedPiece.firstChild) {
                if(selectedPiece.firstChild.classList[1] == 'initialPosition') {
                    selectedPiece.firstChild.classList.remove('initialPosition')
                }

                if(previousMovementToRemove) {
                    console.log('hi')
                    //console.log(previousMovementFromRemove)
                    //console.log(previousMovementToRemove)
                    previousMovementFromRemove.classList.remove('previousMovementFrom')
                    previousMovementToRemove.classList.remove('previousMovementTo')
                }
                previousMovementToAdd = item
                previousMovementFromRemove = previousMovementFromAdd
                previousMovementToRemove = previousMovementToAdd
                console.log(previousMovementFromRemove)
                console.log(previousMovementToRemove)
                //console.log(previousMovementToAdd)

                item.replaceChild(selectedPiece.firstChild, item.firstChild)
                selectedPiece.classList.remove('occupied')
                selectedPiece.classList.remove('selected')
                item.classList.remove('canMoveTo')
                item.classList.add('occupied')
                
                addMovement()
                removeMovement()
            }
        })
    })
}

function selectedPieceAttack(selectedPiece) {
    var targetArray = document.querySelectorAll('.target')
    targetArray.forEach(function(item) {
        item.addEventListener('click', function() {
            try {
                item.replaceChild(selectedPiece.firstChild, item.firstChild)
                target = new Array
                addMovement()
                removeMovement()
            } catch(error) {}
        })
    })
}

/**removes the 'canMoveTo', 'selected', and 'target' from the board once the selcted piece has moved */
function removeMovement() {
    var removeMovementFrom = document.querySelectorAll('.canMoveTo')
    var removeSelected = document.querySelector('.selected')
    var removeTarget = document.querySelectorAll('.target')
    if(removeMovementFrom) {
        removeMovementFrom.forEach(function(item) {
            item.classList.remove('canMoveTo')
            try {
                if(item.firstChild)
                {
                    item.removeChild(item.firstChild)
                }
            } catch (error) {
                console.log(error)
            }
        })
    }
    if(removeSelected) {
        removeSelected.classList.remove('selected')
    }
    
    if(removeTarget) {
        removeTarget.forEach(function(item) {
            item.classList.remove('target')
        })
    }
}

/**adding event listners */
document.addEventListener('DOMContentLoaded', createBoard(), false)
startButton.addEventListener('click', startGame)