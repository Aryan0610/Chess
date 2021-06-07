/**add pieces to the board */
function addPieces() { 
    addRook()
    addKnight()
    addBishop()
    addQueen()
    addKing()
    addPawn()
}

function addRook() {
    /**adding black rook to the left */
    const blackRookPieceLeft = document.createElement('img')
    blackRookPieceLeft.src = 'Images/Pieces/Black-Rook.svg'
    blackRookPieceLeft.id = 'piece'
    blackRookPieceLeft.className = 'blackRook initialPosition'
    document.getElementById('grid-1').classList.add('occupied')
    document.getElementById('grid-1').appendChild(blackRookPieceLeft)

    /**adding black rook to the right */
    const blackRookPieceRight = document.createElement('img')
    blackRookPieceRight.src = 'Images/Pieces/Black-Rook.svg'
    blackRookPieceRight.id = 'piece'
    blackRookPieceRight.className = 'blackRook initialPosition'
    document.getElementById('grid-8').classList.add('occupied')
    document.getElementById('grid-8').appendChild(blackRookPieceRight)

    /**adding white rook to the left */
    const whiteRookPieceLeft = document.createElement('img')
    whiteRookPieceLeft.src = 'Images/Pieces/White-Rook.svg'
    whiteRookPieceLeft.id = 'piece'
    whiteRookPieceLeft.className = 'whiteRook initialPosition'
    document.getElementById('grid-57').classList.add('occupied')
    document.getElementById('grid-57').appendChild(whiteRookPieceLeft)

    /**adding white rook to the right */
    const whiteRookPieceRight = document.createElement('img')
    whiteRookPieceRight.src = 'Images/Pieces/White-Rook.svg'
    whiteRookPieceRight.id = 'piece'
    whiteRookPieceRight.className = 'whiteRook initialPosition'
    document.getElementById('grid-64').classList.add('occupied')
    document.getElementById('grid-64').appendChild(whiteRookPieceRight)
}

function addKnight() {
    /**adding black knight to the left */
    const blackKnightPieceLeft = document.createElement('img')
    blackKnightPieceLeft.src = 'Images/Pieces/Black-Knight_L.svg'
    blackKnightPieceLeft.id = 'piece'
    blackKnightPieceLeft.className = 'blackKnight initialPosition'
    document.getElementById('grid-2').classList.add('occupied')
    document.getElementById('grid-2').appendChild(blackKnightPieceLeft)

    /**adding black knight to the right */
    const blackKnightPieceRight = document.createElement('img')
    blackKnightPieceRight.src = 'Images/Pieces/Black-Knight_R.svg'
    blackKnightPieceRight.id = 'piece'
    blackKnightPieceRight.className = 'blackKnight initialPosition'
    document.getElementById('grid-7').classList.add('occupied')
    document.getElementById('grid-7').appendChild(blackKnightPieceRight)

    /**adding white knight to the left */
    const whiteKnightPieceLeft = document.createElement('img')
    whiteKnightPieceLeft.src = 'Images/Pieces/White-Knight_L.svg'
    whiteKnightPieceLeft.id = 'piece'
    whiteKnightPieceLeft.className = 'whiteKnight initialPosition'
    document.getElementById('grid-58').classList.add('occupied')
    document.getElementById('grid-58').appendChild(whiteKnightPieceLeft)

    /**adding white knight to the right */
    const whiteKnightPieceRight = document.createElement('img')
    whiteKnightPieceRight.src = 'Images/Pieces/White-Knight_R.svg'
    whiteKnightPieceRight.id = 'piece'
    whiteKnightPieceRight.className = 'whiteKnight initialPosition'
    document.getElementById('grid-63').classList.add('occupied')
    document.getElementById('grid-63').appendChild(whiteKnightPieceRight)
}

function addBishop() {
    /**adding black bishop to the left */
    const blackBishopPieceLeft = document.createElement('img')
    blackBishopPieceLeft.src = 'Images/Pieces/Black-Bishop.svg'
    blackBishopPieceLeft.id = 'piece'
    blackBishopPieceLeft.className = 'blackBishop initialPosition'
    document.getElementById('grid-3').classList.add('occupied')
    document.getElementById('grid-3').appendChild(blackBishopPieceLeft)

    /**adding black bishop to the right */
    const blackBishopPieceRight = document.createElement('img')
    blackBishopPieceRight.src = 'Images/Pieces/Black-Bishop.svg'
    blackBishopPieceRight.id = 'piece'
    blackBishopPieceRight.className = 'blackBishop initialPosition'
    document.getElementById('grid-6').classList.add('occupied')
    document.getElementById('grid-6').appendChild(blackBishopPieceRight)

    /**adding white bishop to the left */
    const whiteBishopPieceLeft = document.createElement('img')
    whiteBishopPieceLeft.src = 'Images/Pieces/White-Bishop.svg'
    whiteBishopPieceLeft.id = 'piece'
    whiteBishopPieceLeft.className = 'whiteBishop initialPosition'
    document.getElementById('grid-59').classList.add('occupied')
    document.getElementById('grid-59').appendChild(whiteBishopPieceLeft)

    /**adding white bishop to the right */
    const whiteBishopPieceRight = document.createElement('img')
    whiteBishopPieceRight.src = 'Images/Pieces/White-Bishop.svg'
    whiteBishopPieceRight.id = 'piece'
    whiteBishopPieceRight.className = 'whiteBishop initialPosition'
    document.getElementById('grid-62').classList.add('occupied')
    document.getElementById('grid-62').appendChild(whiteBishopPieceRight)
}

function addKing() {
    /**adding black king */
    const blackKingPiece = document.createElement('img')
    blackKingPiece.src = 'Images/Pieces/Black-Queen.svg'
    blackKingPiece.id = 'piece'
    blackKingPiece.className = 'blackKing initialPosition'
    document.getElementById('grid-5').classList.add('occupied')
    document.getElementById('grid-5').appendChild(blackKingPiece)

    /**adding white king */
    const whiteKingPiece = document.createElement('img')
    whiteKingPiece.src = 'Images/Pieces/White-Queen.svg'
    whiteKingPiece.id = 'piece'
    whiteKingPiece.className = 'whiteKing initialPosition'
    document.getElementById('grid-61').classList.add('occupied')
    document.getElementById('grid-61').appendChild(whiteKingPiece)
}

function addQueen() {
    /**adding black queen */
    const blackQueenPiece = document.createElement('img')
    blackQueenPiece.src = 'Images/Pieces/Black-King.svg'
    blackQueenPiece.id = 'piece'
    blackQueenPiece.className = 'blackQueen initialPosition'
    document.getElementById('grid-4').classList.add('occupied')
    document.getElementById('grid-4').appendChild(blackQueenPiece)

    /**adding white queen*/
    const whiteQueenPiece = document.createElement('img')
    whiteQueenPiece.src = 'Images/Pieces/White-King.svg'
    whiteQueenPiece.id = 'piece'
    whiteQueenPiece.className = 'whiteQueen initialPosition'
    document.getElementById('grid-60').classList.add('occupied')
    document.getElementById('grid-60').appendChild(whiteQueenPiece)
}

function addPawn() {
    /**adding black pawns using for loop */
    for(var i = 9; i < 17; i++)
    {
        const blackPawnPiece = document.createElement('img')
        blackPawnPiece.id = 'piece'
        blackPawnPiece.className = 'blackPawn initialPosition black'
        blackPawnPiece.src = 'Images/Pieces/Black-Pawn.svg'
        document.getElementById('grid-'+i).classList.add('occupied')
        document.getElementById('grid-'+i).appendChild(blackPawnPiece)
    }

    /**adding white pawns using for loop */
    for(var i = 49; i < 57; i++)
    {
        const whitePawnPiece = document.createElement('img')
        whitePawnPiece.id = 'piece'
        whitePawnPiece.className = 'whitePawn initialPosition white'
        whitePawnPiece.src = 'Images/Pieces/White-Pawn.svg'
        document.getElementById('grid-'+i).classList.add('occupied')
        document.getElementById('grid-'+i).appendChild(whitePawnPiece)
    }
}