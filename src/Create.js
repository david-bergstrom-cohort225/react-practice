import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    //Store User Input
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    //State to show that user input is being added to database
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    //Handling the submit button
    const handleSubmit = e => {
        //Prevent Default Refresh when submitting
        e.preventDefault();

        //Save the user input in an object
        const blog = { title, body, author };
        // console.log(blog);


        //Set isPending to True to show that fetch post is running
        setIsPending(true);

        //Steps to upload user created blog to the Database
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New Blog Added");
            setIsPending(false);
            history.push('/');
        });

    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                {/* Grab the event target value */}
                <input type="text" required value={title} onChange={e => setTitle(e.target.value)} />

                <label>Blog body:</label>
                <textarea required value={body} onChange={e => setBody(e.target.value)}></textarea>

                <label>Blog Author</label>
                <select value={author} onChange={e => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

                {/* Outputs if isPending is False */}
                {!isPending && <button>Add Blog</button>}
                {/* Outputs if isPending is True */}
                {isPending && <button disabled>Ading Blog...</button>}
            </form>
        </div>
    );
}

export default Create;