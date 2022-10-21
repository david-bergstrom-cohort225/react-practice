const Home = () => {

    const handleClick = (name) => {
        console.log("Hello " + name);
    }

    const name = "mario";

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={() => {handleClick(name)}}>Click Me</button>
        </div>
    );
}

export default Home;