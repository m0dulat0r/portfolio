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
            branch= "Designer"
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
                longDetails1=" * Exercitation elit tempor laboris eu amet aliquip elit reprehenderit sunt sunt eu sint et et."
                longDetails2=" * sEu ipsum velit tempor proident."
                longDetails3=" * Consectetur sunt reprehenderit fugiat voluptate occaecat deserunt."
            />
            </div>

            <div className={styles.row}>
            <Project 
                link="abcd.com"
                projectName="Project 1 " 
                details= " details " 
                longDetails1=" * Exercitation elit tempor laboris eu amet aliquip elit reprehenderit sunt sunt eu sint et et."
                longDetails2=" * Exercitation elit tempor laboris eu amet aliquip elit reprehenderit sunt sunt eu sint et et."
                longDetails3=" * Exercitation elit tempor laboris eu amet aliquip elit reprehenderit sunt sunt eu sint et et."
            />
            </div>

            <div className={styles.row}>
            <Project 
                link="abcd.com"
                projectName="Project 1 " 
                details= " details " 
                longDetails1=" * Exercitation elit tempor laboris eu amet aliquip elit reprehenderit sunt sunt eu sint et et."
                longDetails2=" * Exercitation elit tempor laboris eu amet aliquip elit reprehenderit sunt sunt eu sint et et."
                longDetails3=" * Exercitation elit tempor laboris eu amet aliquip elit reprehenderit sunt sunt eu sint et et."
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


        <h2 className={styles.code}> Tools & Technologies</h2>
        <br></br>
        <br></br>
        <div>
            <div className={styles.row}>
                <Tools
                    toolTittle="Designing"
                    tool1="Adobe Photoshop , Illustrator, Xd"
                    tool2="Figma"
                /> 

                <Tools
                    toolTittle="Research & Data Analytics"
                    tool1="Microsoft Office | LibreOffice | Sheets"
                    tool2="Notion | Zapier | Todoist"
                /> 
            </div>

            <div className={styles.row}>
                
            </div>
          </div>
          <Footer />

</>

    );
}