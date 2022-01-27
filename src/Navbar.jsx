import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

const Navbar = () => {
    const [show, setShow] = useState(false)
    return <div className="mainNav">
        <div className="innerNav">
            <div className="logo-side">
                <h2>web<span>site</span></h2>
            </div>
            <div className="menuIcon">
                <FiMenu className="icon" onClick={() => setShow(!show)} />
            </div>
        </div>
        <div className={show ? `linkcontainer showBox` : `linkcontainer`}>
            <ul className="links">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Signup</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
                <li>
                    <a href="#">profile</a>
                </li>
            </ul>

        </div>
        <div className="socials">
            <IoLogoTwitter />
            <AiFillFacebook />
            <AiFillLinkedin />
            <AiFillInstagram />
        </div>
    </div>;
};

export default Navbar;
