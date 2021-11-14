import Pic from "../assets/profile-pic.webp"





const Navbar = () => {
    return (
        <div className="navbar">
            <h1>OverView</h1>
            
            <div className="info">
                <h4>Spacekniight</h4>
                <div className="profile-pic">
                    <img src={Pic} alt="image" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
