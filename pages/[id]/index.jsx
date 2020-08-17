import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const SingleStory = ({ story: { title, description, _id } }) => {
    const router = useRouter();

    const onDelete = async e => {
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_API_END}/api/stories/${_id}`);
            console.log('story deleted');
            router.push('/');
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className='container'>
            <h3>
                {title}
            </h3>
            <p className="flow-text">
                {description}
            </p>
            <button className="btn red" onClick={onDelete}>Delete</button>
        </div>
    )
}

SingleStory.getInitialProps = async ({ query: { id } }) => {
    const res = await axios(`http://localhost:3000/api/stories/${id}`);
    return { story: res.data.data };
}

export default SingleStory
