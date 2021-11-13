import { IoStatsChartSharp } from 'react-icons/io5';
import { HiMusicNote } from 'react-icons/hi';
import { FiUsers, FiSettings } from 'react-icons/fi';
import { SiDatacamp } from 'react-icons/si';
import { RiPlayListFill } from 'react-icons/ri'
import Logo from '../assets/logo2.png';
import Player from './Player';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top-container">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                
                <div className="links">
                    <ul>
                        <li>
                            <IoStatsChartSharp />
                            <a href="">Overview</a>
                        </li>
                        <li>
                            <SiDatacamp />
                            <a href="">A&R Data</a>
                        </li>
                        <li>
                            <RiPlayListFill />
                            <a href="">Featured Playlists</a>
                        </li>
                        <li>
                            <HiMusicNote />
                            <a href="">Songs</a>
                        </li>
                        <li>
                            <FiUsers />
                            <a href="">Users</a>
                        </li>
                        <li>
                            <FiSettings />
                            <a href="">Settings</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bottom-container">
                <div className="music-container">
                    <Player />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
