import Image from "../../Assets/business.webp"
import { FaCheckCircle } from "react-icons/fa";
import { IconButton } from "rsuite";
import { IoMdCloseCircle } from "react-icons/io";

import './UserProfile.css'


const UserProfile = () => {
    const handleTick = () => {

    }

    const handleCross = () => {

    }
    return(
        <>
            <div className = "hero">
                <div className = "hero_card">
                    <img src = {Image} />
                    <div className = "description">
                        <h3>Reshav Thapa</h3>
                        <IconButton icon={<FaCheckCircle />}></IconButton>
                        <IconButton icon = {<IoMdCloseCircle/>}></IconButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile;