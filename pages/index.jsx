import React from 'react'
import axios from 'axios'
import Link from 'next/link'

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
        </li>)}
      </ul>
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await axios('http://localhost:3000/api/stories');
  return { stories: res.data.data };
}

export default Home
