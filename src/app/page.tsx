import Link from 'next/link';
export default function Home() {
    return (
        <div className=''>
            <h1>Classroom Quiz</h1>
            <Link href='/game/init'>Start the Game</Link>
        </div>
    );
}
