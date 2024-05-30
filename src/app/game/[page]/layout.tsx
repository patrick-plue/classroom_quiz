import ActivePlayers from '@/app/ui/activePlayers';
export default function GameLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='flex'>
            <section className='w-1/4'>
                <ActivePlayers />
            </section>
            <section className='w-3/4'>{children}</section>
        </div>
    );
}
