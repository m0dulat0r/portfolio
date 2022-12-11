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
        <div className={styles.main}>
        <h2 className={styles.code}>Projects</h2>
        <br></br>
        <br></br>

        <div>
            <div className={styles.row}>
            <Project 
                link=""
                projectName="AeroLeads " 
                details= " Sales Intelligence SaaS Product " 
                longDetails1=" * Created strategies for User Acquisition"
                longDetails2=" * Proident commodo sunt mollit enim in laborum incididunt velit in."
                longDetails3=" * Consequat incididunt sunt labore enim."
            />
            </div>

            <div className={styles.row}>
            <Project 
                link="abcd.com"
                projectName="Project 1 " 
                details= " details " 
                longDetails1=" * Ex do cupidatat nisi qui occaecat."
                longDetails2=" * Anim cillum commodo in fugiat qui sunt dolore minim sint ut est irure laborum."
                longDetails3=" * Irure et ullamco cillum proident sunt proident voluptate sint sit ullamco fugiat."
            />
            </div>

            <div className={styles.row}>
            <Project 
                link="abcd.com"
                projectName="Project 1 " 
                details= " details " 
                longDetails1=" * Deserunt proident nisi reprehenderit cupidatat."
                longDetails2=" * Lorem ullamco ad quis aute irure et tempor sit culpa et aliquip enim voluptate reprehenderit."
                longDetails3=" * Tempor nisi eu elit fugiat nulla labore culpa qui incididunt proident elit fugiat consequat elit."
            />
            </div>
        </div>
        </div>
        
        <br></br>
        <br></br>

        <div className={styles.main}>
        <h2 className={styles.code}> My Skills</h2>
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
        </div>

        <div className={styles.main}>
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
          </div>
          <Footer />

</>

    );
}