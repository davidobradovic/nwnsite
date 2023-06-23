import React, { useState, useRef } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {AiOutlineHome, AiOutlinePhone} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import emailjs from '@emailjs/browser'

function Home() {

    const [mobileMenu, setMobileMenu] = useState(null)
    const [selectedButton, setSelectedButton] = useState(0)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rssxdtd', 'template_6x9s1zj', form.current, 'DMJbbF1Vbpgn9txRz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    const buttons = [
        {
            id: 1,
            name: 'Home',
            icon: <AiOutlineHome />,
            link: '/'
        },
        {
            id: 2,
            name: 'About',
            icon: <SiAboutdotme />,
            link: '/'
        },
        {
            id: 3,
            name: 'Contact US',
            icon: <AiOutlinePhone />,
            link: '/'
        }
    ]

  return (
    <div className='home-screen-bas'>
        <Navigation />
        <button className='mobileMenuButton' onClick={() => setMobileMenu(true)}>
            <HiOutlineMenuAlt3 />
        </button>
        <div className='mobileMenu' style={mobileMenu ? { display: 'flex' } : null}>
            <button onClick={() => setMobileMenu(false)}>Zatvori MENI</button>
            {
                buttons.map((button) => <Link to='/'><h1 style={{ paddingRight: 5 }}>{button.icon}</h1> {button.name}</Link>)
            }
        </div>

        <div class="cut-div2">
            <button>Apply for service!</button>
        </div>

        <div class="cut-div" style={mobileMenu ? { display: 'none' } : null}>
            <div className="inside-of-div">
                <nav className='righ-side-nav'>
                    {
                        buttons.map((button, i) => <Link onClick={() => setSelectedButton(i)} style={selectedButton === i ? { color: 'red' } : null} key={i} to='/'>{button.name}</Link>)
                    }
                </nav>


                {
                    selectedButton === 0 ? (
                        <div className="brandambassadortext">
                            <h1 className='mb-5'>Brand Ambassador</h1>
                            <p className='mb-5'>Do you want to be one of Brand ambassadors of this brands?</p>
                            <Link to='/apply-for-ambassador'>Apply now!</Link>
                        </div>
                    ) : selectedButton === 1 ? (
                        <div className="brandambassadortext">
                            <h1 className='mb-5'>About US</h1>
                            <p className='mb-5'>Our team members are highly educated and qualified multilingual ambassadors. They go through extensive training to gain the following skills: great product knowledge, brand awareness, basic comprehension of marketing, effective communication, a high level of professionalism, top knotch interpersonal skills as well as the ability to gather feedback and provide innovative insight. We guarantee that our brand ambassadors will ensure you have a great shopping experience.</p>
                        </div>
                    ) : selectedButton === 2 ? (
                        <div className="brandambassadortext">
                            <h1 className='mb-5'>Contact US</h1>
                            <p className='mb-5'>Do you want to be one of Brand ambassadors of this brands?</p>
                        </div>
                    ) : null
                }

                <div className="marks-for-promotion">
                    <div class="slider">
                        <div class="slide-track">
                            <div class="slide">
                                <img className="sb-image" src="https://i.ibb.co/MN9g5Fb/Untitled-design-4.png" />
                            </div>
                            <div class="slide">
                                <img className="sb-image" src="https://i.ibb.co/sPVjcP8/Untitled-design.png" />
                            </div>
                            <div class="slide">
                                <img className="sb-image" src="https://i.ibb.co/Bq1B5Gq/Untitled-design-5.png" />
                            </div>
                            <div class="slide">
                                <img className="sb-image" src="https://i.ibb.co/N6y43WQ/Untitled-design-6.png" />
                            </div>
                            <div class="slide">
                                <img className="sb-image" src="https://i.ibb.co/j68HTWZ/Untitled-design-7.png" />
                            </div>
                            <div class="slide">
                                <img className="sb-image" src="https://i.ibb.co/jZV1VXF/Untitled-design-10.png" />
                            </div>
                            <div class="slide">
                                <img className="sb-image" src="https://i.ibb.co/FzswYrK/Untitled-design-11.png" />
                            </div>
                            <div class="slide">
                                <img className="sb-image" src="https://i.ibb.co/sPVjcP8/Untitled-design.png" />
                            </div>
                            <div class="slide">
                                <img className="sb-image" src="https://i.ibb.co/MN9g5Fb/Untitled-design-4.png" />
                            </div>
                            <div class="slide">
                                <img className="sb-image" src="https://i.ibb.co/sPVjcP8/Untitled-design.png" />
                            </div>
                            <div class="slide">
                                <img className="sb-image" src="https://i.ibb.co/Bq1B5Gq/Untitled-design-5.png" />
                            </div>
                            <div class="slide">
                                <img className="sb-image" src="https://i.ibb.co/N6y43WQ/Untitled-design-6.png" />
                            </div>
                            <div class="slide">
                                <img className="sb-image" src="https://i.ibb.co/j68HTWZ/Untitled-design-7.png" />
                            </div>
                            <div class="slide">
                                <img className="sb-image" src="https://i.ibb.co/jZV1VXF/Untitled-design-10.png" />
                            </div>
                            <div class="slide">
                                <img className="sb-image" src="https://i.ibb.co/FzswYrK/Untitled-design-11.png" />
                            </div>
                            <div class="slide">
                                <img className="sb-image" src="https://i.ibb.co/sPVjcP8/Untitled-design.png" />
                            </div>
                        </div>
                    </div>              
                </div>

            </div>
        </div>
    </div>
  )
}

export default Home