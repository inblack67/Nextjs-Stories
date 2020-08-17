import axios from 'axios'
import Link from 'next/link'
import { server } from '../utils/server'

const Home = ({ stories }) => {

  return (
    <div className='container'>
      <h3>Stories</h3>
      <ul className='collection'>
        {stories.map(story => <li className='collection-item' key={story._id}>
          <Link as={`/${story._id}`} href='/[id]'>
            <a>
              {story.title}
            </a>
          </Link>
          <Link as={`/${story._id}/edit`} href='/[id]/edit'>
            <a className="secondary-content green-text">
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
