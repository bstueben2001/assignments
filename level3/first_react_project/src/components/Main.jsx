function Main(){
    const userName = "Sam Flynn"

    const userStyles = {
        backgroundColor: "black",
        color: "#75D4FF"
    }
    return (

        <div className="mainContent">
            <h1 style = {userStyles}>Welcome, {userName}</h1>
                <ol>
                    <li>I want to advance my skill set.</li>
                    <li>I want my coding to become more efficient.</li>
                </ol>
        </div>
    )
}

export default Main