import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'


function Contact(){
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Navbar></Navbar>
  
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

export default Contact;