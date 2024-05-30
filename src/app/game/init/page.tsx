'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function GameInit() {
    const router = useRouter();

    let students = process.env.NEXT_PUBLIC_students;
    let studentsArray = students.split(',');
    const [players, setPlayers] = useState(studentsArray);

    function startGame() {
        localStorage.setItem('players', JSON.stringify(players));
        router.push('/game/0');
    }

    function removePlayer(player: string) {
        setPlayers((prev) => prev.filter((person) => person !== player));
    }

    return (
        <div>
            <p>Who is playing?</p>
            {players.map((player) => (
                <div key={player}>
                    <span className='mx-2'>{player}</span>
                    <span onClick={() => removePlayer(player)}>x</span>
                </div>
            ))}

            <button onClick={startGame}>Start Game</button>
        </div>
    );
}

export default GameInit;
