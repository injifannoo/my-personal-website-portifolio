import React from "react";
import { Link } from 'react-scroll';
import './intro.css'
import profile from '../../../src/images/gada1.png'
const Intro = () => {
    return (
        <section id='intro'>
            <div className="introContent">
                <span className='hello'> Wel come,</span>
                <span className="introName"> I'm Enjifano Tammiru Urgessa.</span>
                <h2 className="introPara"> Skilled MERN stack developer | Flutter developer <br />
                    Do you have idea to be changes to product? <br/> </h2>
                    <h3 className="introContact">Here are my Contacts:</h3>
                    <p className="introList"><li><a href="injifanotu@gmail.com">injifanotu@gmail.com</a></li>
                    <li> <a href="+251962408198"> +251962408198 </a></li>
                    </p>
        
                <Link activeClass='active' to='myContacts' spy={true} smooth={true} offset={true} ><button className="btn"> Contact me</button></Link>
            </div>

            <img src={profile} alt="profile" className="bg" />
        </section>
    );
}
export default Intro