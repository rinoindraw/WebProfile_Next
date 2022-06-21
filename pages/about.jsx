import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'


function About(){
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar></Navbar>

      <section className="home-section about-wrapper">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title other-title">About</h1>
            <p className="description about-description">I am a college student who wants to gain experience and really
            interested in Web Developer, especially Front End Developer.I am a person who likes to look for opportunities and can work in a team.</p>  
          </div>
        </div>
      </section>
    </>
  );
}

export default About;