'use client';
import { useParams } from 'next/navigation';
function ActivePlayers() {
    const { page } = useParams();
    const players = JSON.parse(window.localStorage.getItem('players'));
    return (
        <ul>
            {players.map((player: string, index: number) => (
                <li
                    className={
                        parseInt(page) % players.length == index
                            ? 'bg-green-400'
                            : ''
                    }
                    key={player}
                >
                    {player}
                </li>
            ))}
        </ul>
    );
}

export default ActivePlayers;
