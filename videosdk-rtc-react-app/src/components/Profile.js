import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar2 from "./Navbar2"
import ProfileCard from "./ProfileCard";

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
