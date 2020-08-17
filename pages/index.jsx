import axios from 'axios'
import Link from 'next/link'
import { server } from '../utils/server'

const Home = ({ stories }) => {

  return (
    <div className='container'>
      <h1>Stories</h1>
      <ul className='collection'>
        {stories.map(story => <li className='collection-item' key={story._id}>
          <Link href={`/${story._id}`}>
            <a>
              {story.title}
            </a>
          </Link>
          <Link href={`/${story._id}/edit`}>
            <a className="secondary-content red-text">
              <i className="material-icons">edit</i>
            </a></Link>
        </li>)}
      </ul>
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await axios(`${server}/api/stories`);
  return { stories: res.data.data };
}

export default Home
