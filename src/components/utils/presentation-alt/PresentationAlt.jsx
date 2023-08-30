import React from 'react';
import './presentationAlt.css'

import Logo from '../../../assets/logo/Isotipo.png'

function PresentationAlt(props) {
    return (
        <section className='presentation-alt-section'>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>

            
            <h1 className="title">CB</h1>
            <div className="separator"></div>
            <h2 className="subtitle">Desarrollo de software</h2>
        </section>
    );
}

export default PresentationAlt;