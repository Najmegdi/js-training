
const boxes = document.querySelectorAll(".row")

let moves = 0;

let turn = 0;
// 0 => player 1
// 1 => player 2

//                 0: P1       1: P2
const classes = ['triangle', 'circle'];

const winCases = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagonal
    [0, 4, 8],
    [2, 4, 6],

]

function checkWinner() {
    for (const winCase of winCases) {
        // code zir. mire box haii ke tooye winCase hast ro migire
        // class nameshoon ro migire va bar migardoone
        // [0, 1, 2] -> ['triangle', 'circle', null]
        // ke null yani inke bazi nashode oon khoone ok
        const classesInWinCase = winCase.map((index) => { // inja az esme index estefade kardam chon vaghean item haye araye index hastand
            const box = boxes[index];

            let playerClass = null;

            if (box.classList.contains('circle'))
                playerClass  = 'circle';

            if (box.classList.contains('triangle'))
                playerClass  = 'triangle';

            return playerClass;
        });

        // in check mikone ke hameye class haye bala null nabashan
        // va hamashoon be className avali barabar bashan
        // injoori ke hamasho ba khooneye avval moghayese mikone
        const cellsAreSimilar = classesInWinCase.every((className, _, array) => className !== null && className === array[0])

        if (cellsAreSimilar) {
            // indexe bazikone barande ro return kone
            return classes.indexOf(classesInWinCase[0]);
        }
    }

    // null return kone. yani hanooz kasi barande nashode
    return null;
}

boxes.forEach((elem) =>{
    elem.addEventListener('click' , (e) => {
        // 1. check konim khoone khali bashe
        // 2. age khali bood class name set konim roote elem
        // 3. turn ro taghir bedim ke playere baadi click kone

        const isPlayedCell = elem.classList.contains('circle') || elem.classList.contains('triangle');

        if (!isPlayedCell) {
            // shemordane harkat ha
            moves++;

            // set kardane class name player
            elem.classList.add(classes[turn]);

            const winner = checkWinner();

            if (winner !== null) { // barande null nist. yani ye kasi barande shode
                alert(`Player ${winner + 1} Wins!`);

                // TODO: Reset game
            } else { // inja yani barande nulle va kasi barande nashode hanuz
                // amaaaaaaa. age 9 ta harkat anjam beshe bazi mosavi mishe.

                if (moves === 9) {
                    alert('Game has no winner!');

                    // TODO: Reset game
                }
            }

            // taghire turn
            turn = (turn + 1) % 2;
        }
    });
});

// alan bazi dare anjam mishe. tanha kari ke lazeme anjam bedim
// ine ke tashkis bedim ki barande shode




/*
In jadvale bazie. ba shomareye khune ha
+---+---+---+
| 0 | 1 | 2 |
+---+---+---+
| 3 | 4 | 5 |
+---+---+---+
| 6 | 7 | 8 |
+---+---+---+

Dar soorati barande shode kasi ke yeki az in halat ha class name yeksani dashte bashan

0 - 1 - 2
3 - 4 - 5
6 - 7 - 8
0 - 3 - 6
1 - 4 - 7
2 - 5 - 8
0 - 4 - 8
2 - 4 - 6

ma bad az har harkat bayad ino check konim
albate in check kardan bayad az ye jaii shoroo beshe
chon avvale bazi emkan nadare kasi barande beshe
be in halat fekr kon ke in tori bazi mishe:
XOXOX
OXOXO
tooye 4 harkate avval emkan nadare barande moshakhas beshe
pas bi fayde ast ke check konim
bayad az harkate 5om be bad check konim ke ki barande shode
baraye in kar bayad tedade harkat ha ro beshmorim
*/