import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {/* Throw error if cannot fetch resource */}
            {error && <div> {error} </div>}

            {/* Show loading message while data is being fetched */}
            {isPending && <div> Loading... </div>}

            {/* Use conditional templating. This logical AND checks if blogs has a value yet.
            Initially the blogs data is set to NULL. */}
            {data && <BlogList blogs={data} title="All Blogs" />}
        </div>
    );
}

export default Home;