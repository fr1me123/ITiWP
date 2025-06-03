import React from 'react';
import './ChessBoard.css';

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const numbers = [8, 7, 6, 5, 4, 3, 2, 1];

function ChessBoard() {
    return (
        <div className="board">
            {numbers.map((row, i) => (
                <div className="row" key={row}>
                    {letters.map((col, j) => {
                        const isBlack = (i + j) % 2 === 1;
                        return (
                            <div className={`cell ${isBlack ? 'black' : 'white'}`} key={col + row}>
                                {col}{row}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

export default ChessBoard;
