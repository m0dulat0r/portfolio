import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import Link from 'next/link'

import LandingPage from 'components/portfolio/landingpage'
import Project from 'components/portfolio/projects'
import Services from 'components/portfolio/services'
import Tools from 'components/portfolio/tools'

import Footer from "components/footer"


export default function developerPortfolio()
{
    return(
<>
       <LandingPage
            branch= "Growth Hacking"
        />

        <br></br>

        <h2 className={styles.code}>Projects</h2>
        <br></br>
        <br></br>

        <div>
            <div className={styles.row}>
            <Project 
                link="abcd.com"
                projectName="Project 1 " 
                details= " details " 
                longDetails1=" * sudo nano chiga po, swdsfsd is a fucking hoe"
                longDetails2=" * sudo nano chiga po, ssdfsdfsdika is a fucking hoe"
                longDetails3=" * sudo nano chiga po, ssdfewika is a fucking hoe"
            />
            </div>

            <div className={styles.row}>
            <Project 
                link="abcd.com"
                projectName="Project 1 " 
                details= " details " 
                longDetails1=" * sudo nano chiga po, sgdfgsa is a fucking hoe"
                longDetails2=" * sudo nano chiga po, werwea is a fucking hoe"
                longDetails3=" * sudo nano chiga po, swdsfgewika is a fucking hoe"
            />
            </div>

            <div className={styles.row}>
            <Project 
                link="abcd.com"
                projectName="Project 1 " 
                details= " details " 
                longDetails1=" * sudo nano chiga po, erwtika is a fucking hoe"
                longDetails2=" * sudo nano chiga po, srwerka is a fucking hoe"
                longDetails3=" * sudo nano chiga po, swawerwea is a fucking hoe"
            />
            </div>
        </div>

        
        <br></br>
        <br></br>


        <h2 className={styles.code}> What else can I do</h2>
        <br></br>
        <br></br>
        <div>
            <div className={styles.row}>

                <Services
                    Service="Growth Hacking" 
                    Point1="Business Development" 
                    Point2="Social Media"
                    Point3="Strategies"
                />

                <Services
                    Service="Search Engine" 
                    Point1="SEO Optimization" 
                    Point2="SEM Optimization"
                />

                <Services
                    Service="Pay Per Click" 
                    Point1="Advertisements" 
                    Point2="Keyword Research"
                    Point3="Competitiors Analysis"
                />

                <Services
                    Service="Content Marketing" 
                    Point1="Blog posts" 
                    Point2="Case Studies"
                    Point3="How-To Guides"
                />

                <Services
                    Service="Re-Branding" 
                    Point1="Brand Mapping" 
                    Point2="Creative Research"
                    Point3="Redesign & Revalue"
                />
            </div>
            <div className={styles.row}>
                
            </div> 
        </div>

        <br></br>
        <br></br>


        <h2 className={styles.code}> Tools & Technologies</h2>
        <br></br>
        <br></br>
        <div>
            <div className={styles.row}> 
                <Tools
                    toolTittle="Data Handling"
                    tool1="on thursday"
                    tool2="i only love her"
                    tool3="nigga"
                />

                <Tools
                    toolTittle="Research"
                    tool1="on thursday"
                    tool2="i only love her"
                    tool3="nigga"
                />
            </div>

           
          </div>

          <Footer />

</>

    );
}