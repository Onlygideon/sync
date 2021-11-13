import Pic from "../assets/profile-pic.webp"
import Logo from "../assets/logo2.png"




const Navbar = () => {
    return (
        <div className="navbar">
            <h1>OverView</h1>
            
            
            <nav>
                <img src={Logo}/>
            </nav>
            
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
