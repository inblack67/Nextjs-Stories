import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Nextjs | Stories</title>
            </Head>
            <Navbar />
            { children }
        </div>
    )
}

export default Layout
