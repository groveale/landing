import React from 'react';
import './landing.css';
import { Link } from 'react-router-dom';

import secureIcon from '../../img/lock-icon.png'
import trustedIcon from '../../img/star-icon.png'
import supportedIcon from '../../img/cog-icon.png'
import banner from '../../img/banner-asset.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

import * as ROUTES from '../../constants/routes';

const Landing = () => (
  <div>
    <LandingHeader/>
    <KeyringEcosystem/>
  </div>
);

const LandingHeader = () => (

    <div className="fh-container center-text">
        <div className="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h1 class="headers">KEYRING</h1>
                    <h2 class="headers">Protocol</h2> 
                    <p class="text p-heading">Verify exchange users with confidence using our leading KYC protocol</p>  
                    <div class="socials col-md-3">
                        <Link to={ROUTES.TWITTER}>
                            <FontAwesomeIcon color='#ffffff' size="2x" icon={faTwitter} />
                        </Link>
                        <Link to={ROUTES.GITHUB}>
                            <FontAwesomeIcon color='#ffffff' size="2x" icon={faGithub} />
                        </Link>
                        <Link to={ROUTES.DISCORD}>
                            <FontAwesomeIcon color='#ffffff' size="2x" icon={faDiscord} />
                        </Link>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src={banner} alt="Image" className="resize_fit_center" />
                </div>
            </div>
        </div>
    </div>
);

const KeyringEcosystem = () => (
    <div className="container eco-section">
        <div class="row align-items-start gy-3">
            <div class="col-md-3">
            <h2 class="headers">KEYRING</h2>
            <h3 class="headers">ECOSYSTEM</h3>
             <p class="text">Our ecosystem has been developed to support businesses looking to harness the power of crypto currency exchanges using KYC protocols</p>
            </div>
            <div class="col-md-3">
            
             <EcoBox img={secureIcon} title="SECURE" text="Our verified platform uses secure protocols to ensure our users and their data is protected" />
            </div>
            <div class="col-md-3">
            <EcoBox img={trustedIcon} title="TRUSTED" text="Trusted by over 200 defi apps to meet their know your customer needs" />
            
            </div>
            <div class="col-md-3" >
            <EcoBox img={supportedIcon} title="SUPPORTED" text="Active and supportive development team that is dedicated to ensuring our service remains operational at all times." />
            </div>
        </div>
        
    </div>
)

const EcoBox = props => (
    <div class="ecosystem-box ">
        
        <div className="ecosystem-box-img-container">
            <img src={props.img} alt="Image" class="resize_fit_center" />
        </div>
        <h3 class="headers">{props.title}</h3>
        <p class="text">{props.text}</p>
    </div>
)

export default Landing;