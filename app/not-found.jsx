import Link from "next/link";

export default function NotFound() {
    return (
        <main>
            <h2>404 - Page Not Found</h2>
            <p>Sorry, we couldn't find the page you were looking for.</p>
            <p><Link href="/">Go back to the homepage</Link></p>
        </main>
    );
}