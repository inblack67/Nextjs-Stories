import axios from 'axios'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { server } from '../../utils/server'

const EditStory = ({ story: { _id, title, description } }) => {

    const router = useRouter();

    const [submitting, setSubmitting] = useState(false);

    const { handleSubmit, errors, register } = useForm({
        defaultValues: {
            title,
            description
        }
    });


    return (
        <div className='container'>
            <h3>Edit Story</h3>
            <form onSubmit={handleSubmit(async formData => {
                setSubmitting(true);

                try {
                    const config = {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                    const res = await axios.put(`${server}/api/stories/${_id}`, formData, config);
                    console.log(`story updated`);

                    router.push('/');

                } catch (err) {
                    console.error(err)
                }

                setSubmitting(false);
            })}>
                <div className="input-field">
                    <input type="text" name='title' ref={register({
                        required: 'Required'
                    })} />
                    <label htmlFor="title"></label>
                    {errors.title ? <span className="red-text helper-text">
                        {errors.title.message}
                    </span> : <span className='helper-text'>
                            Title</span>}
                </div>
                <div className="input-field">
                    <input type="text" name='description' ref={register({
                        required: 'Required'
                    })} />
                    <label htmlFor="description"></label>
                    {errors.description ? <span className="red-text helper-text">
                        {errors.description.message}
                    </span> : <span className='helper-text'>
                            Description</span>}
                </div>
                <div className="input-field">
                    <button disabled={submitting} type="submit" className='btn red'>
                        Update Story
                    </button>
                </div>
            </form>
        </div>
    )
}

EditStory.getInitialProps = async ({ query: { id } }) => {
    const res = await axios(`http://localhost:3000/api/stories/${id}`)

    return { story: res.data.data };
}

export default EditStory
