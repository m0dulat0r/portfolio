import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import Link from 'next/link'

import SocialLink from "components/sociallink"
import Footer from "components/footer"

const ExternalLink = ({ href, children }) => (
    <a
      className="text-gray-500 hover:text-gray-600 transition"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );


export default function myLinks() {
  return (
<>
<div className={styles.container}>
      <Head>
        <title>My Gear</title>
        <meta name="description" content="Portfolio Aman Punia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br></br>
      <br></br>

        <h3 className="font-bold text-5xl">My Links for the web </h3>
        <br></br>
        <br></br>
        <br></br>

        <SocialLink
            link="https://www.linkedin.com/in/amanpunia/"
            name="LinkedIn" 
            text1="I post about development, designing & growth hacking."
            text2="Connect to me for news, new blog articles & memes." 
            emoji="🤚🏻👾👨🏻‍💻"
        />

        <SocialLink
            link="https://www.linkedin.com/in/amanpunia/"
            name="Instagram" 
            text1="I post about me, myself and I."
            text2="Follow me to see my lifestyle, memes and news." 
            emoji="🤚🏻👾👨🏻‍💻"
        />

        <SocialLink
            link="https://www.linkedin.com/in/amanpunia/"
            name="Behance" 
            text1="I post about development, designing & growth hacking."
            text2="Connect to me for news, new blog articles & memes." 
            emoji="🤚🏻👾👨🏻‍💻"
        />

        <SocialLink
            link="https://www.linkedin.com/in/amanpunia/"
            name="Dribble" 
            text1="I post about development, designing & growth hacking."
            text2="Connect to me for news, new blog articles & memes." 
            emoji="🤚🏻👾👨🏻‍💻"
        />

        <SocialLink
            link="https://www.linkedin.com/in/amanpunia/"
            name="CodePen" 
            text1="I save snippets for front end development."
            text2="Connect to me for news, new blog articles & memes." 
            emoji="🤚🏻👾👨🏻‍💻"
        />
        <SocialLink
            link="https://www.linkedin.com/in/amanpunia/"
            name="Twitter" 
            text1="I post about development, designing & growth hacking."
            text2="Follow me for novel & pragmatic code snippets." 
            emoji="🤚🏻👾👨🏻‍💻"
        />

        <SocialLink
            link="https://www.linkedin.com/in/amanpunia/"
            name="GitHub" 
            text1="I post about development, designing & growth hacking."
            text2="Connect to me for news, new blog articles & memes." 
            emoji="🤚🏻👾👨🏻‍💻"
        />

</div>    
<Footer />
</>
);
}
