import "./Project.css"

const Project = () => {
    return (
        <div>
            <h1>Projects</h1>
            <div className="project-container">
                <div className="project-items">
                    <header><h1>Project Title</h1></header>
                    <body><p>Project Details</p></body>
                </div>
                <div className="project-items">
                    <body>
                        <img></img>
                    </body>
                    <footer>
                        <a>Project Link's</a>
                    </footer>
                </div>
        </div>
        </div>
    );
}
export default Project;