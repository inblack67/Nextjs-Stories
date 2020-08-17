import React from 'react'
import axios from 'axios'

const Home = ({ stories }) => {

  return (
    <div className='container'>
      <h1>Stories</h1>
      <ul className='collection'>
        {stories.map(story => <li className='collection-item' key={story._id}>
          {story.title}
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
