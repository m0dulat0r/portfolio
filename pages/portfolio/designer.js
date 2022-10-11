import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import Link from 'next/link'

import LandingPage from 'components/portfolio/landingpage'
import Project from 'components/portfolio/projects'
import Services from 'components/portfolio/services'
import Tools from 'components/portfolio/tools'


export default function developerPortfolio()
{
    return(
<>
       <LandingPage
            branch= "Designer"
        />

        <br></br>

        <h2>Projects</h2>
        <br></br>
        <br></br>

        <div>
            <div className={styles.row}>
            <Project 
                link="abcd.com"
                projectName="Project 1 " 
                details= " details " 
                longDetails1=" * sudo nano chiga po, swastika is a fucking hoe"
                longDetails2=" * sudo nano chiga po, swastika is a fucking hoe"
                longDetails3=" * sudo nano chiga po, swastika is a fucking hoe"
            />
            </div>

            <div className={styles.row}>
            <Project 
                link="abcd.com"
                projectName="Project 1 " 
                details= " details " 
                longDetails1=" * sudo nano chiga po, swastika is a fucking hoe"
                longDetails2=" * sudo nano chiga po, swastika is a fucking hoe"
                longDetails3=" * sudo nano chiga po, swastika is a fucking hoe"
            />
            </div>

            <div className={styles.row}>
            <Project 
                link="abcd.com"
                projectName="Project 1 " 
                details= " details " 
                longDetails1=" * sudo nano chiga po, swastika is a fucking hoe"
                longDetails2=" * sudo nano chiga po, swastika is a fucking hoe"
                longDetails3=" * sudo nano chiga po, swastika is a fucking hoe"
            />
            </div>
        </div>

        
        <br></br>
        <br></br>


        <h2> What else can I do</h2>
        <br></br>
        <br></br>
        <div>
            <div className={styles.row}>
                <Services
                    Service="UI/UX" 
                    Point1="User Experience" 
                    Point2="Interaction Design"
                    Point3="User Research"
                />
                
                <Services
                    Service="Graphic Design" 
                    Point1="Mockups" 
                    Point2="Illustrations"
                    Point3="Printables"
                />

            </div>
          </div>

        <br></br>
        <br></br>


        <h2> Tools & Technologies</h2>
        <br></br>
        <br></br>
        <div>
            <div className={styles.row}>
                <Tools
                    toolTittle="blah"
                    tool1="on thursday"
                    tool2="i only love her"
                    tool3="nigga"
                /> 
            </div>

            <div className={styles.row}>
                <Tools
                    toolTittle="blah"
                    tool1="on thursday"
                    tool2="i only love her"
                    tool3="nigga"
                /> 
            </div>
          </div>

</>

    );
}