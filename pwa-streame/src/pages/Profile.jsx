import React, { useContext} from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar2 from "../components/profile/Navbar2"
import ProfileCard from "../components/profile/ProfileCard";

function Profile() {

    const { currentUser } = useContext(AuthContext);
    return (
        <>
        <Navbar2/>
        <ProfileCard/>
        </>
    );
}
  
  export default Profile;
