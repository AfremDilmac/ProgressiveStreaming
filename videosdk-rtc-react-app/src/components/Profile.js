import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar2 from "./Navbar2"

function Profile() {

    const { currentUser } = useContext(AuthContext);
    console.log(currentUser.displayName);
    console.log(currentUser.email);
    console.log(currentUser.photoURL);
  
    return (
        <>
        <Navbar2/>
        <p>Profile</p>
        <p>Display name:</p>
        <p>{currentUser.displayName}</p>
        <p>email:</p>
        <p>{currentUser.email}</p>
        <p>photoUrl:</p>
        <p>{currentUser.photoURL}</p>
        <br/>
        <form>
            <p>Wie mag mij bereiken:</p>
        <input type="checkbox" id="groep" name="groep" value="Groep"/>
        <label for="groep">Mensen die dezelfde cursussen volgen als ik</label><br/>
        <input type="checkbox" id="bericht" name="bericht" value="Bericht"/>
        <label for="bericht">Mensen aan wie ik eerst een bericht stuur</label><br/>
        <input type="checkbox" id="iedereen" name="iedereen" value="Iedereen"/>
        <label for="iedereen">Iedereen</label><br/>
        </form>
        </>
    );
}
  
  export default Profile;
