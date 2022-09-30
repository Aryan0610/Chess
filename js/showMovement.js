
var whitePieces = ['whiteRook', 'whiteKnight', 'whiteBishop', 'whiteQueen', 'whiteKing','whitePawn']
var blackPieces = ['blackRook', 'blackKnight', 'blackBishop', 'blackQueen', 'blackKing','blackPawn']

function showPawnMovement(pieceColor, piecePositionId, piecePosition) {
    var piecePositionArray = piecePositionId.match(/(\d+)/)
    piecePositionId = parseInt(piecePositionArray[0])
    var positionPieceCanMoveTo = new Array()
    if(pieceColor == 'black') {
        if(piecePosition.firstChild.classList[1] == 'initialPosition') {
            if(document.getElementById('grid-'+(piecePositionId+8)).classList[3] != 'occupied') {
                positionPieceCanMoveTo[0] = piecePositionId+8
                if(positionPieceCanMoveTo[0]) {
                    if(document.getElementById('grid-'+(positionPieceCanMoveTo[0]+8)).classList[3] != 'occupied') {
                        positionPieceCanMoveTo[1] = positionPieceCanMoveTo[0]+8
                    }
                }
            }
            /**attacking from initial position is still not enabled */
        }
        else {
            if(document.getElementById('grid-'+(piecePositionId+8)).classList[3] != 'occupied') {
            positionPieceCanMoveTo[0] = piecePositionId+8
            }

            if(document.getElementById('grid-'+(piecePositionId+7))) {
                var pieceAtPosition = document.getElementById('grid-'+(piecePositionId+7))
                if(pieceAtPosition.hasChildNodes) {
                    try {
                        if(whitePieces.includes(pieceAtPosition.firstChild.classList[0])) {
                            if(!target.includes(piecePositionId+7)) {
                                target = target.concat(piecePositionId+7)
                            }
                        }
                    } catch (error) {
                        /**if the try statement is not being used it will give an error */
                    }
                }
            }
            if(document.getElementById('grid-'+(piecePositionId+9))) {
                var pieceAtPosition = document.getElementById('grid-'+(piecePositionId+9))
                if(pieceAtPosition.hasChildNodes) {
                    try {
                        if(whitePieces.includes(pieceAtPosition.firstChild.classList[0])) {
                            if(!target.includes(piecePositionId+9)) {
                                target = target.concat(piecePositionId+9)
                            }
                        }
                    } catch (error) {
                        /**if the try statement is not being used it will give an error */
                    }
                }
            }
        }
        for(var i = 0; i < positionPieceCanMoveTo.length; i++) {
            document.getElementById('grid-'+positionPieceCanMoveTo[i]).classList.add('canMoveTo')
        }
    }
    else if(pieceColor == 'white') {
        if(piecePosition.firstChild.classList[1] == 'initialPosition') {
            if(document.getElementById('grid-'+(piecePositionId-8)).classList[3] != 'occupied') {
                positionPieceCanMoveTo[0] = piecePositionId-8
                if(positionPieceCanMoveTo[0]) {
                    if(document.getElementById('grid-'+(positionPieceCanMoveTo[0]-8)).classList[3] != 'occupied') {
                        positionPieceCanMoveTo[1] = positionPieceCanMoveTo[0]-8
                    }
                }
            }
            /**attacking from initial position is still not enabled */
        }
        else {
            if(document.getElementById('grid-'+(piecePositionId-8)).classList[3] != 'occupied') {
                positionPieceCanMoveTo[0] = piecePositionId-8
            }

            if(document.getElementById('grid-'+(piecePositionId-7))) {
                var pieceAtPosition = document.getElementById('grid-'+(piecePositionId-7))
                if(pieceAtPosition.hasChildNodes) {
                    try {
                        if(blackPieces.includes(pieceAtPosition.firstChild.classList[0])) {
                            if(!target.includes(piecePositionId-7)) {
                                target = target.concat(piecePositionId-7)
                            }
                        }
                    } catch (error) {
                        /**if the try statement is not being used it will give an error */
                    }
                }
            }
            if(document.getElementById('grid-'+(piecePositionId-9))) {
                var pieceAtPosition = document.getElementById('grid-'+(piecePositionId-9))
                if(pieceAtPosition.hasChildNodes) {
                    try {
                        if(blackPieces.includes(pieceAtPosition.firstChild.classList[0])) {
                            if(!target.includes(piecePositionId-9)) {
                                target = target.concat(piecePositionId-9)
                            }
                        }
                    } catch (error) {
                        /**if the try statement is not being used it will give an error */
                    }
                }
            }
        }
        for(var i = 0; i < positionPieceCanMoveTo.length; i++) {
            document.getElementById('grid-'+positionPieceCanMoveTo[i]).classList.add('canMoveTo')
        }
    }
    return positionPieceCanMoveTo

    /**need to add the code for pawn if it reaches the end */
}

/**rook movement */
function showRookMovement(pieceColor, piecePositionId) {
    var piecePositionArray = piecePositionId.match(/(\d+)/)
    piecePositionId = parseInt(piecePositionArray[0])
    var initialPosition = piecePositionId
    var positionPieceCanMoveTo = new Array()
    var down = new Array()
    var up = new Array()
    var left = new Array()
    var right = new Array()

    for(var i=0; i<8; i++) {
        piecePositionId = piecePositionId + 8
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList.contains(
                document.getElementById('grid-'+initialPosition).classList[2])) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    if(pieceColor == 'white') {
                        if(blackPieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else if(pieceColor == 'black') {
                        if(whitePieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else {break}
                    break
                } else {
                    down[i] = piecePositionId
                }  
            } else {break}
        } else {break}
    }
    piecePositionId = initialPosition

    for(var i=0; i<8; i++) {
        piecePositionId = piecePositionId - 8
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList.contains(
                document.getElementById('grid-'+initialPosition).classList[2])) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    if(pieceColor == 'white') {
                        if(blackPieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else if(pieceColor == 'black') {
                        if(whitePieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else {break}
                    break
                } else {
                    up[i] = piecePositionId
                }  
            } else {break}
        } else {break}
    }
    piecePositionId = initialPosition

    for(var i=0; i<7; i++) {
        piecePositionId = piecePositionId - 1
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList.contains(
                document.getElementById('grid-'+initialPosition).classList[1])) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    if(pieceColor == 'white') {
                        if(blackPieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else if(pieceColor == 'black') {
                        if(whitePieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else {break}
                    break
                } else {
                    left[i] = piecePositionId
                }  
            } else {break}
        } else {break}
    }
    piecePositionId = initialPosition

    for(var i=0; i<7; i++) {
        piecePositionId = piecePositionId + 1
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList.contains(
                document.getElementById('grid-'+initialPosition).classList[1])) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    if(pieceColor == 'white') {
                        if(blackPieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else if(pieceColor == 'black') {
                        if(whitePieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else {break}
                    break
                } else {
                    right[i] = piecePositionId
                }  
            } else {break}
        } else {break}
    }
    piecePositionId = initialPosition

    /**adding all the movements in one array */
    positionPieceCanMoveTo = down.concat(up)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(left)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(right)
    
    for(var i = 0; i < positionPieceCanMoveTo.length; i++) {
        document.getElementById('grid-'+positionPieceCanMoveTo[i]).classList.add('canMoveTo')
    }

    return positionPieceCanMoveTo
}

function showBishopMovement(pieceColor, piecePositionId) {
    var piecePositionArray = piecePositionId.match(/(\d+)/)
    piecePositionId = parseInt(piecePositionArray[0])
    var initialPosition = piecePositionId
    var colorOfThePiece = document.getElementById('grid-'+piecePositionId).classList[0]
    var positionPieceCanMoveTo = new Array()
    var NW = new Array()
    var NE = new Array()
    var SE = new Array()
    var SW = new Array()

    for(var i=0; i<8; i++) {
        piecePositionId = piecePositionId + 7
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList[0] == colorOfThePiece) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    if(pieceColor == 'white') {
                        if(blackPieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else if(pieceColor == 'black') {
                        if(whitePieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else {break}
                } else {
                    SW[i] = piecePositionId
                }
            }
        } else {break}
    }
    piecePositionId = initialPosition

    for(var i=0; i<8; i++) {
        piecePositionId = piecePositionId - 7
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList[0] == colorOfThePiece) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    if(pieceColor == 'white') {
                        if(blackPieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else if(pieceColor == 'black') {
                        if(whitePieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else {break}
                } else {
                    NE[i] = piecePositionId
                }
            }
        } else {break}
    }
    piecePositionId = initialPosition

    for(var i=0; i<7; i++) {
        piecePositionId = piecePositionId + 9
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList[0] == colorOfThePiece) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    if(pieceColor == 'white') {
                        if(blackPieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else if(pieceColor == 'black') {
                        if(whitePieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else {break}
                } else {
                    SE[i] = piecePositionId
                }
            }
        } else {break}
    }
    piecePositionId = initialPosition

    for(var i=0; i<7; i++) {
        piecePositionId = piecePositionId - 9
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList[0] == colorOfThePiece) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    if(pieceColor == 'white') {
                        if(blackPieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else if(pieceColor == 'black') {
                        if(whitePieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else {break}
                } else {
                    NW[i] = piecePositionId
                }
            }
        } else {break}
    }
    piecePositionId = initialPosition

    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(NW)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(NE)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(SW)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(SE)
    
    for(var i = 0; i < positionPieceCanMoveTo.length; i++) {
        document.getElementById('grid-'+positionPieceCanMoveTo[i]).classList.add('canMoveTo')
    }

    return positionPieceCanMoveTo
}

function showKnightMovement(pieceColor, piecePositionId) {
    var piecePositionArray = piecePositionId.match(/(\d+)/)
    piecePositionId = parseInt(piecePositionArray[0])
    var initialPosition = piecePositionId
    var opponent
    var colorOfThePiece = document.getElementById('grid-'+piecePositionId).classList[0]
    var positionPieceCanMoveTo = new Array()
    var right_top = new Array()
    var left_top = new Array()
    var top_right = new Array()
    var top_left = new Array()
    var right_bottom = new Array()
    var left_bottom = new Array()
    var bottom_right = new Array()
    var bottom_left = new Array()

    if(getGrid(initialPosition).firstChild.classList[0] == 'whiteKnight') {
        opponent = 'blackPiece'
    } else {
        opponent = 'whitePiece'
    }
    
    /**right top */
    for(var i=0; i<3; i++) {
        if(i<1) {
            piecePositionId = piecePositionId - 8
        } else {
            piecePositionId = piecePositionId + 1
            if(getGrid(initialPosition-8)) {
                if(getGrid(piecePositionId)) {
                    if(getGrid(initialPosition-8).classList[1] == getGrid(piecePositionId).classList[1]) {
                        if(i == 2) {
                            right_top[0] = piecePositionId
                        }
                    } //else {break}
                } //else {break}
            } //else {break}
        }
    }
    piecePositionId = initialPosition

    /**left top */
    for(var i=0; i<3; i++) {
        if(i<1) {
            piecePositionId = piecePositionId - 8
        } else {
            piecePositionId = piecePositionId - 1
            if(getGrid(initialPosition-8)) {
                if(getGrid(piecePositionId)) {
                    if(getGrid(initialPosition-8).classList[1] == getGrid(piecePositionId).classList[1]) {
                        if(i == 2) {
                            left_top[0] = piecePositionId
                        }
                    } //else {break}
                } //else {break}
            } //else {break}
        }
    }
    piecePositionId = initialPosition

    /**top right */
    for(var i=0; i<3; i++) {
        if(i<1) {
            piecePositionId = piecePositionId + 1
        } else {
            piecePositionId = piecePositionId - 8
            if(getGrid(initialPosition+1)) {
                if(getGrid(piecePositionId)) {
                    if(getGrid(initialPosition+1).classList[2] == getGrid(piecePositionId).classList[2]) {
                        if(i == 2) {
                            top_right[0] = piecePositionId
                        }
                    } //else {break}
                } //else {break}
            } //else {break}
        }
    }
    piecePositionId = initialPosition

    /**top left */
    for(var i=0; i<3; i++) {
        if(i<1) {
            piecePositionId = piecePositionId - 1
        } else {
            piecePositionId = piecePositionId - 8
            if(getGrid(initialPosition-1)) {
                if(getGrid(piecePositionId)) {
                    if(getGrid(initialPosition+-1).classList[2] == getGrid(piecePositionId).classList[2]) {
                        if(i == 2) {
                            top_left[0] = piecePositionId
                        }
                    } //else {break}
                } //else {break}
            } //else {break}
        }
    }
    piecePositionId = initialPosition

    /**right bottom */
    for(var i=0; i<3; i++) {
        if(i<1) {
            piecePositionId = piecePositionId + 8
        } else {
            piecePositionId = piecePositionId + 1
            if(getGrid(initialPosition+8)) {
                if(getGrid(piecePositionId)) {
                    if(getGrid(initialPosition+8).classList[1] == getGrid(piecePositionId).classList[1]) {
                        if(i == 2) {
                            right_bottom[0] = piecePositionId
                        }
                    } //else {break}
                } //else {break}
            } //else {break}
        }
    }
    piecePositionId = initialPosition

    /**left bottom */
    for(var i=0; i<3; i++) {
        if(i<1) {
            piecePositionId = piecePositionId + 8
        } else {
            piecePositionId = piecePositionId - 1
            if(getGrid(initialPosition+8)) {
                if(getGrid(piecePositionId)) {
                    if(getGrid(initialPosition+8).classList[1] == getGrid(piecePositionId).classList[1]) {
                        if(i == 2) {
                            left_bottom[0] = piecePositionId
                        }
                    } //else {break}
                } //else {break}
            } //else {break}
        }
    }
    piecePositionId = initialPosition

    /**bottom right */
    for(var i=0; i<3; i++) {
        if(i<1) {
            piecePositionId = piecePositionId + 1
        } else {
            piecePositionId = piecePositionId + 8
            if(getGrid(initialPosition+1)) {
                if(getGrid(piecePositionId)) {
                    if(getGrid(initialPosition+1).classList[2] == getGrid(piecePositionId).classList[2]) {
                        if(i == 2) {
                            bottom_right[0] = piecePositionId
                        }
                    } //else {break}
                } //else {break}
            } //else {break}
        }
    }
    piecePositionId = initialPosition

    /**bottom left */
    for(var i=0; i<3; i++) {
        if(i<1) {
            piecePositionId = piecePositionId - 1
        } else {
            piecePositionId = piecePositionId + 8
            if(getGrid(initialPosition-1)) {
                if(getGrid(piecePositionId)) {
                    if(getGrid(initialPosition-1).classList[2] == getGrid(piecePositionId).classList[2]) {
                        if(i == 2) {
                            bottom_left[0] = piecePositionId
                        }
                    } //else {break}
                } //else {break}
            } //else {break}
        }
    }
    piecePositionId = initialPosition

    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(top_left)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(top_right)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(left_top)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(right_top)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(bottom_left)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(bottom_right)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(left_bottom)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(right_bottom)

    /**removes the places where the pieces has its own commarade */
    for(var i=0; i<positionPieceCanMoveTo.length; i++) {
        var currentGrid = "grid-"+positionPieceCanMoveTo[i]
        if(document.getElementById(currentGrid).firstChild) {
            if(pieceColor == "white") {
                if(whitePieces.includes(document.getElementById(currentGrid).firstChild.classList[0])) {
                    positionPieceCanMoveTo.splice(i, 1)
                }
            } if(pieceColor == "black") {
                if(blackPieces.includes(document.getElementById(currentGrid).firstChild.classList[0])) {
                    positionPieceCanMoveTo.splice(i, 1)
                }
            } 
        }
    }

    
    for(var i=0; i<positionPieceCanMoveTo.length; i++) {
        if(opponent == 'blackPiece') {
            if(getGrid(positionPieceCanMoveTo[i]).firstChild) {
                if(blackPieces.includes(getGrid(positionPieceCanMoveTo[i]).firstChild.classList[0])) {
                    target = target.concat(positionPieceCanMoveTo[i]) 
                } 
            }
        } else {
            if(getGrid(positionPieceCanMoveTo[i]).firstChild) {
                if(blackPieces.includes(getGrid(positionPieceCanMoveTo[i]).firstChild.classList[0])) {
                    target = target.concat(positionPieceCanMoveTo[i])
                } 
            }
        }
        
        if(getGrid(positionPieceCanMoveTo[i]).classList.contains('occupied')) {
            positionPieceCanMoveTo.splice(i, 1)
        }
    }
    
    for(var i = 0; i < positionPieceCanMoveTo.length; i++) {
        document.getElementById('grid-'+positionPieceCanMoveTo[i]).classList.add('canMoveTo')
    }
    return positionPieceCanMoveTo
}

function showQueenMovement(pieceColor, piecePositionId) {
    console.log(piecePositionId)
    var piecePositionArray = piecePositionId.match(/(\d+)/)
    piecePositionId = parseInt(piecePositionArray[0])
    var initialPosition = piecePositionId
    var colorOfThePiece = document.getElementById('grid-'+piecePositionId).classList[0]
    var positionPieceCanMoveTo = new Array()
    var down = new Array()
    var up = new Array()
    var left = new Array()
    var right = new Array()
    var NW = new Array()
    var NE = new Array()
    var SE = new Array()
    var SW = new Array()

    for(var i=0; i<8; i++) {
        piecePositionId = piecePositionId + 8
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList.contains(
                document.getElementById('grid-'+initialPosition).classList[2])) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    if(pieceColor == 'white') {
                        if(blackPieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else if(pieceColor == 'black') {
                        if(whitePieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else {break}
                } else {
                    down[i] = piecePositionId
                }  
            } else {break}
        } else {break}
    }
    piecePositionId = initialPosition

    for(var i=0; i<8; i++) {
        piecePositionId = piecePositionId - 8
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList.contains(
                document.getElementById('grid-'+initialPosition).classList[2])) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    if(pieceColor == 'white') {
                        if(blackPieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else if(pieceColor == 'black') {
                        if(whitePieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else {break}
                } else {
                    up[i] = piecePositionId
                }  
            } else {break}
        } else {break}
    }
    piecePositionId = initialPosition

    for(var i=0; i<7; i++) {
        piecePositionId = piecePositionId - 1
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList.contains(
                document.getElementById('grid-'+initialPosition).classList[1])) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    if(pieceColor == 'white') {
                        if(blackPieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else if(pieceColor == 'black') {
                        if(whitePieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else {break}
                } else {
                    left[i] = piecePositionId
                }  
            } else {break}
        } else {break}
    }
    piecePositionId = initialPosition

    for(var i=0; i<7; i++) {
        piecePositionId = piecePositionId + 1
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList.contains(
                document.getElementById('grid-'+initialPosition).classList[1])) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    if(pieceColor == 'white') {
                        if(blackPieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else if(pieceColor == 'black') {
                        if(whitePieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else {break}
                } else {
                    right[i] = piecePositionId
                }  
            } else {break}
        } else {break}
    }
    piecePositionId = initialPosition

    for(var i=0; i<8; i++) {
        piecePositionId = piecePositionId + 7
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList[0] == colorOfThePiece) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    if(pieceColor == 'white') {
                        if(blackPieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else if(pieceColor == 'black') {
                        if(whitePieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else {break}
                } else {
                    SW[i] = piecePositionId
                }
            }
        } else {break}
    }
    piecePositionId = initialPosition

    for(var i=0; i<8; i++) {
        piecePositionId = piecePositionId - 7
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList[0] == colorOfThePiece) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    if(pieceColor == 'white') {
                        if(blackPieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else if(pieceColor == 'black') {
                        if(whitePieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else {break}
                } else {
                    NE[i] = piecePositionId
                }
            }
        } else {break}
    }
    piecePositionId = initialPosition

    for(var i=0; i<7; i++) {
        piecePositionId = piecePositionId + 9
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList[0] == colorOfThePiece) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    if(pieceColor == 'white') {
                        if(blackPieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else if(pieceColor == 'black') {
                        if(whitePieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else {break}
                } else {
                    SE[i] = piecePositionId
                }
            }
        } else {break}
    }
    piecePositionId = initialPosition

    for(var i=0; i<7; i++) {
        piecePositionId = piecePositionId - 9
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList[0] == colorOfThePiece) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    if(pieceColor == 'white') {
                        if(blackPieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else if(pieceColor == 'black') {
                        if(whitePieces.includes(document.getElementById('grid-'+piecePositionId).firstChild.classList[0])) {
                            target = target.concat(piecePositionId)
                        } else {break}
                    } else {break}
                } else {
                    NW[i] = piecePositionId
                }
            }
        } else {break}
    }
    piecePositionId = initialPosition

    positionPieceCanMoveTo = down.concat(up)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(left)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(right)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(NW)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(NE)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(SW)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(SE)
    
    for(var i = 0; i < positionPieceCanMoveTo.length; i++) {
        document.getElementById('grid-'+positionPieceCanMoveTo[i]).classList.add('canMoveTo')
    }

    return positionPieceCanMoveTo
}

function showKingMovement(pieceColor, piecePositionId) {
    console.log(piecePositionId)
    var piecePositionArray = piecePositionId.match(/(\d+)/)
    piecePositionId = parseInt(piecePositionArray[0])
    var initialPosition = piecePositionId
    var colorOfThePiece = document.getElementById('grid-'+piecePositionId).classList[0]
    var positionPieceCanMoveTo = new Array()
    var down = new Array()
    var up = new Array()
    var left = new Array()
    var right = new Array()
    var NW = new Array()
    var NE = new Array()
    var SE = new Array()
    var SW = new Array()

    for(var i=0; i<1; i++) {
        piecePositionId = piecePositionId + 8
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList.contains(
                document.getElementById('grid-'+initialPosition).classList[2])) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    break
                } else {
                    down[i] = piecePositionId
                }  
            } else {break}
        } else {break}
    }
    piecePositionId = initialPosition

    for(var i=0; i<1; i++) {
        piecePositionId = piecePositionId - 8
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList.contains(
                document.getElementById('grid-'+initialPosition).classList[2])) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    break
                } else {
                    up[i] = piecePositionId
                }  
            } else {break}
        } else {break}
    }
    piecePositionId = initialPosition

    for(var i=0; i<1; i++) {
        piecePositionId = piecePositionId - 1
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList.contains(
                document.getElementById('grid-'+initialPosition).classList[1])) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    break
                } else {
                    left[i] = piecePositionId
                }  
            } else {break}
        } else {break}
    }
    piecePositionId = initialPosition

    for(var i=0; i<1; i++) {
        piecePositionId = piecePositionId + 1
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList.contains(
                document.getElementById('grid-'+initialPosition).classList[1])) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    break
                } else {
                    right[i] = piecePositionId
                }  
            } else {break}
        } else {break}
    }
    piecePositionId = initialPosition

    for(var i=0; i<1; i++) {
        piecePositionId = piecePositionId + 7
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList[0] == colorOfThePiece) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    break
                } else {
                    SW[i] = piecePositionId
                }
            }
        } else {break}
    }
    piecePositionId = initialPosition

    for(var i=0; i<1; i++) {
        piecePositionId = piecePositionId - 7
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList[0] == colorOfThePiece) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    break
                } else {
                    NE[i] = piecePositionId
                }
            }
        } else {break}
    }
    piecePositionId = initialPosition

    for(var i=0; i<1; i++) {
        piecePositionId = piecePositionId + 9
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList[0] == colorOfThePiece) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    break
                } else {
                    SE[i] = piecePositionId
                }
            }
        } else {break}
    }
    piecePositionId = initialPosition

    for(var i=0; i<1; i++) {
        piecePositionId = piecePositionId - 9
        if(document.getElementById('grid-'+piecePositionId)) {
            if(document.getElementById('grid-'+piecePositionId).classList[0] == colorOfThePiece) {
                if(document.getElementById('grid-'+piecePositionId).classList.contains('occupied')) {
                    break
                } else {
                    NW[i] = piecePositionId
                }
            }
        } else {break}
    }
    piecePositionId = initialPosition

    positionPieceCanMoveTo = down.concat(up)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(left)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(right)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(NW)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(NE)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(SW)
    positionPieceCanMoveTo = positionPieceCanMoveTo.concat(SE)
    
    for(var i = 0; i < positionPieceCanMoveTo.length; i++) {
        document.getElementById('grid-'+positionPieceCanMoveTo[i]).classList.add('canMoveTo')
    }

    return positionPieceCanMoveTo
}


function getGrid(grid) {
    return document.getElementById('grid-'+grid)
}