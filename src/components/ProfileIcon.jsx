import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/Profile.svg";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
    return (
        <div className="flex gap-2">

            <span className="flex justify-center items-center h-10 w-10 rounded-full cursor-pointer hover:bg-black/[0.05]">
                <TbGridDots size={20} color="#5f6368"/>
            </span>

            <span className="h-10 w-10 relative flex items-center justify-center">
                <img src={ProfileRing} alt="" className="absolute"/>

                <span className="h-8 w-8 rounded-full overflow-hidden">
                    <img src={Profile} alt="" className="h-full w-full object-cover"/>
                </span>
            </span>

        </div>
    );
};

export default ProfileIcon;