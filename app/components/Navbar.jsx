import Link from 'next/link'
import Image from 'next/image'
import Logo from './Ardanese-logo.png'

export default function Navbar() {
  return (
    <div>
      <nav>
          <Image  src={Logo} 
            alt='Logo'
            width={200}
            quality={100}
            placeholder='blur'
          />
          <h1>Dojo Helpdesk</h1>
          <Link href="/">Dashboard</Link>
          <Link href="/tickets">Tickets</Link>
        </nav>
    </div>
  )
}
