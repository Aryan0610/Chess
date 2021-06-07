function checkForCheckMate(whiteTurn) {
    //console.log('checkMate')
    var King
    var Opponent = new Array()
    var placesToMove = new Array()
    var Pieces = document.querySelectorAll('blackPawn')
    var blackKing = document.getElementsByClassName('blackKing')
    var whiteKing = document.getElementsByClassName('whiteKing')
    var whitePieces = ['whiteRook', 'whiteKnight', 'whiteBishop', 'whiteQueen', 'whiteKing','whitePawn']
    var blackPieces = ['blackRook', 'blackKnight', 'blackBishop', 'blackQueen', 'blackKing','blackPawn']
    if(whiteTurn) {
        King = whiteKing
        for(var i = 0; i < blackPieces.length; i++) {
            var CurrentPiece = document.getElementsByClassName(blackPieces[i]) 
            for(var j = 0; j < CurrentPiece.length; j++) {
                Opponent = Opponent.concat(CurrentPiece[j].parentElement)
            }
        }
    } else {
        King = blackKing
        for(var i = 0; i < whitePieces.length; i++) {
            var CurrentPiece = document.getElementsByClassName(whitePieces[i])
            for(var j = 0; j < CurrentPiece.length; j++) {
                Opponent = Opponent.concat(CurrentPiece[j].parentElement)
            }
        }
    }

    for(var i = 0; i < Opponent.length; i++) {
        var pieceDiv = Opponent[i]
        var pieceId = Opponent[i].id
        var pieceName =  Opponent[i].firstChild.classList

        placesToMove = placesToMove.concat(new showRookMovement('black', pieceId))
        //placesToMove = placesToMove.concat(new showBishopMovement('black', pieceId))
        //placesToMove = placesToMove.concat(new showKnightMovement('black', pieceId))
        //placesToMove = placesToMove.concat(new showQueenMovement('black', pieceId))
    }
}