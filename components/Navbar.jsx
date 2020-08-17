import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="container">
                    <Link href='/'>
                        <a className='brand-logo'>
                            Nextjs Stories
                        </a>
                    </Link>
                    <ul className="right">
                        <li>
                            <Link href='/about'>
                                <a>
                                    About
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/add-story'>
                                <a>
                                    Add Story
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
