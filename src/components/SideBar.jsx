import React from 'react';
import {
    SloganContainer,
    SloganPhrase,
} from "../assets/HomeContent";
import {Fath } from "react-icons/fa";

import '../App.css';
import vsiLogo from '../VSI_logo.png';

const SideBar = () => {
    const menuItem= [
        {
            path:"/",
            name:"Game Dev",
            icon: <Fath/>
        },
        {
            path:"/",
            name:"UI-WEB Designer",
            icon: <Fath/>
        },
        {
            path:"/electronica",
            name:"Electronica",
            icon: <Fath/>
        }

    ]
    return(
        <div></div>
    );
}
export default SideBar;


