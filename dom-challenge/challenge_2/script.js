function createChessBox(classList) {
    let box = document.createElement('span');
    box.classList.add(...classList);

    return box;
}

function updateDiagonal(chessboard, i, j, row, col) {

    let ii = i; let jj = j;

    // Diagonal left-top
    while (ii >= 0 && jj >= 0) {
        chessboard[ii--][jj--].classList.add('bg-marked');
    }

    // Diagonal right-top
    ii = i; jj = j;
    while (ii >= 0 && jj < col) {
        chessboard[ii--][jj++].classList.add('bg-marked');
    }

    // Diagonal left-bottom
    ii = i; jj = j;
    while (ii < row && jj >= 0) {
        chessboard[ii++][jj--].classList.add('bg-marked');
    }

    // Daigonal right-bottom
    ii = i; jj = j;
    while (ii < row && jj < col) {
        chessboard[ii++][jj++].classList.add('bg-marked');
    }
}

function reset(chessboard, row, col) {
    for (let r = 0; r < row; ++r) {
        for (let c = 0; c < col; ++c) {
            chessboard[r][c].classList.remove('bg-marked');
        }
    }
}

function Chessboard(el, row, col) {
    const _chessboard$ = document.querySelector(el);

    chessboard = Array(row);

    let _chessboardFragment$ = document.createDocumentFragment();
    let index = 0;
    for (let r = 0; r < row; ++r) {
        let row$ = document.createElement('span');
        row$.classList.add('row');

        rowList = Array(col);

        for (let c = 0; c < col; ++c) {
            let box = createChessBox(
                [
                    'box',
                    (index & 1 === 1) ? 'bg-black' : 'bg-white'
                ]
            );
            row$.appendChild(box);
            rowList[c] = box;

            box.addEventListener('mouseover', () => {
                reset(chessboard, row, col);
                updateDiagonal(chessboard, r, c, row, col);
            });
            ++index;
        }
        ++index;

        chessboard[r] = rowList;
        _chessboardFragment$.appendChild(row$);
    }
    _chessboard$.appendChild(_chessboardFragment$);
}


new Chessboard('#chessboard', 8, 8);