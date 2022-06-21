import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'
import Axios from 'axios';
import { useEffect } from 'react';


function Home(){
  useEffect(() => {
    Axios.get('https://gorest.co.in/public/v2/users')
    .then(res => console.log(res.data)).catch(err => console.log())
  }, [])
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />

      <section className="home-section">
        <div className="container">
          <div className="text-wrapper home-content">
            <h4 className="co-title">FrontEnd Developer</h4>
            <h1 className="title">Rino Indra Wicaksono</h1>
            <p className="description">Undergraduate Computer Science Student At University of Gunadarma</p>

            <Link href="/contact"><a className="cta">Contact Me</a></Link>
          </div>
          <div className="image-wrapper">
            <div className="image-inner">
              <img src="/PasFoto.jpeg" alt="" className='img-profile'/>              
            </div>
          </div>
        </div>
      </section>

      <section className="home-section about-wrapper">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title other-title">About</h1>
            <p className="description about-description">I am a college student who wants to gain experience and really
            interested in Web Developer, especially Front End Developer.I am a person who likes to look for opportunities and can work in a team.</p>  
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title other-title">Portfolio</h1>
            <p className="description">My Work in FrontEnd Web Developer, Graphic Designer, and UX Designer</p>

            <div className="portfolio-wrapper">
                <div className="portfolio-item">
                  <div className="portfolio-inner">
                    <img src="/work1.PNG" alt="" className="portfolio-image" />
                  </div>
                    <h4 className="portfolio-name">Web Profile</h4>
                    <div className="portfolio-category">FrontEnd Developer</div>
                </div>
                  
                <div className="portfolio-item">
                  <div className="portfolio-inner">
                    <img src="/work2.PNG" alt="" className="portfolio-image" />                  
                  </div>
                    <h4 className="portfolio-name">Web Login</h4>
                    <div className="portfolio-category">FrontEnd Developer</div>
                </div>
            </div>  

            <div className="portfolio-wrapper">
                <div className="portfolio-item">
                  <div className="portfolio-inner">
                    <img src="/work3.PNG" alt="" className="portfolio-image" />
                  </div>
                    <h4 className="portfolio-name">Web Profile</h4>
                    <div className="portfolio-category">FrontEnd Developer</div>
                </div>

                <div className="portfolio-item">
                  <div className="portfolio-inner">
                    <img src="/work4.PNG" alt="" className="portfolio-image" />
                  </div>
                    <h4 className="portfolio-name">Web Vclass</h4>
                    <div className="portfolio-category">FrontEnd Developer</div>
                </div>
            </div>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <div className="portfolio-inner">
                    <img src="/work5.png" alt="" className="portfolio-image" />
                </div>
                    <h4 className="portfolio-name">Logo Designer</h4>
                    <div className="portfolio-category">Graphic Designer</div>
                </div>

              <div className="portfolio-item">
                <div className="portfolio-inner">
                    <img src="/work6.jpg" alt="" className="portfolio-image" />
                </div>

                    <h4 className="portfolio-name">Creative Poster</h4>
                    <div className="portfolio-category">Graphic Designer</div>
              </div>
            </div>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <div className="portfolio-inner">
                    <img src="/work7.png" alt="" className="portfolio-image ux-design" />
                </div>
                    <h4 className="portfolio-name">Mobile App Designer</h4>
                    <div className="portfolio-category">UX Designer</div>
                </div>

                <div className="portfolio-item">
                  <div className="portfolio-inner">
                    <img src="/work8.png" alt="" className="portfolio-image ux-design" />
                  </div>
                    <h4 className="portfolio-name">Mobile App Designer</h4>
                    <div className="portfolio-category">UX Designer</div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section contact-wrapper">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title other-title contact-title">Contact</h1>
            <p className="description">Thanks for review my work</p>
            <ul className="contact-link">
              <Link href="/contact"><li className="contact-item"><a className="cta email">Email: rinoindra75@gmail.com</a></li></Link>  
              <Link href="/contact"><li className="contact-item"><a className="cta whatsapp">WhatsApp: 087818917880</a></li></Link>  
              <Link href="/contact"><li className="contact-item"><a className="cta linkedin">Linkedin: rinoindraw</a></li></Link>  
            </ul>  
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;