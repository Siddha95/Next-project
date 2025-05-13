import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="text-center">
            <h2 className="text-3x1">We Hit a Brick Wall</h2>
            <p>Sorry, we couldn't find the page you were looking for.</p>
            <p>Go back to the <Link href="/">tickets</Link></p> 
        </main>
    );
}