<<<<<<< HEAD
import React from 'react';
import './presentationAlt.css'

import Logo from '../../../assets/logo/Isotipo.png'

function PresentationAlt(props) {
    return (
        <section className='presentation-alt-section'>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>

            
            <div className="text">
            <h1 className="title">CB</h1>
            <div className="separator"></div>
            <h2 className="subtitle">Desarrollo de software</h2>
            </div>

        </section>
    );
}

=======
import React from 'react';
import './presentationAlt.css'

import Logo from '../../../assets/logo/Isotipo.png'

function PresentationAlt(props) {
    return (
        <section className='presentation-alt-section'>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>

            
            <div className="text">
            <h1 className="title">CB</h1>
            <div className="separator"></div>
            <h2 className="subtitle">Desarrollo de software</h2>
            </div>

        </section>
    );
}

>>>>>>> 33e23e6fec986364e78a1762dda785d5ad147cd8
export default PresentationAlt;