import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/router'

const AddStory = () => {

    const router = useRouter();

    const [submitting, setSubmitting] = useState(false);

    const { handleSubmit, errors, register } = useForm({
        defaultValues: {
            title: "lost angels",
            description: "dtb"
        }
    });

    return (
        <div className='container'>
            <h1>Add Story</h1>
            <form onSubmit={handleSubmit(async formData => {
                setSubmitting(true);

                try {
                    const config = {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_END || process.env.API_END}/api/stories`, formData, config);

                    console.log(`story added`);

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
                    <label htmlFor="title">Title</label>
                    {errors.title ? <span className="red-text helper-text">
                        {errors.title.message}
                    </span> : null}
                </div>
                <div className="input-field">
                    <input type="text" name='description' ref={register({
                        required: 'Required'
                    })} />
                    <label htmlFor="description">Description</label>
                    {errors.description ? <span className="red-text helper-text">
                        {errors.description.message}
                    </span> : null}
                </div>
                <div className="input-field">
                    <button disabled={submitting} type="submit" className='btn red'>
                        Add Story
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddStory
