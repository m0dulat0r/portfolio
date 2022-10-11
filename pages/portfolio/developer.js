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
            branch= "Development"
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
                    Service="Web Design" 
                    Point1="User Experience" 
                    Point2="Responsive designing"
                    Point3="Interaction Design"
                />

                <Services
                    Service="Web Development" 
                    Point1="Front End" 
                    Point2="Back End"
                    Point3="API Development"
                />

                <Services
                    Service="Web Performance" 
                    Point1="Load & Stress Testing" 
                    Point2="Scalability Testing"
                    Point3="Server Reconfig"
                />

                <Services
                    Service="Cloud" 
                    Point1="AWS & GCP" 
                    Point2="Load Balancing"
                    Point3="CI/CD Pipeline"
                />

                <Services
                    Service="Operations" 
                    Point1="CMS Development" 
                    Point2="E-Commerce"
                    Point3="Blogs"
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
                    toolTittle="Front End"
                    tool1="Language: HTML | CSS | JavaScript"
                    tool2="Technologies: Sass | Tailwind | ReactJS | NextJS | GSAP"
                    tool3="Tools: npm | VSCode | MacOs | Bash | CodePen"
                /> 

                <Tools
                    toolTittle="Backend"
                    tool1="Language: JavaScript | SQL| GoLang |Python"
                    tool2="Technologies: ExpressJS | NodeJS | MongoDO | PostgreSQL | gin| beego| Django | Flask | "
                    tool3="Tools: GitHub | Firebase | Apache | Postman | Jira | Linux | Bash"
                /> 
            </div>

            <div className={styles.row}>   
                <Tools
                    toolTittle="Cloud "
                    tool1="Language: JavaScript | GoLang | Python | C#"
                    tool2="Technologies: AWS ECS, RDS, S3, CloudFront, Beanstalk, Lambda | GCP VPC, Cloud-Storage, CloudSDK "
                    tool3="Tools: Amazon Web Services | Google Cloud Platform"
                /> 

                <Tools
                    toolTittle="Pentesting"
                    tool1="Language: Python | Bash"
                    tool2="Technologies: NMap | MetaSploit | Maltego | Wireshark | John | BurpSuite"
                    tool3="Tools: Kali Linux "
                /> 
            </div>

            <div className={styles.row}>   
                <Tools
                    toolTittle="Performance "
                    tool3="Tools: LoadNinja | Jmeter | WebLoad"
                /> 

                <Tools
                    toolTittle="Blockchain"
                    tool1="Language: Solidity | Python"
                    tool2="Technologies: Ethereum | Truffle "
                    tool3="Tools: Hardhat | Ganache | Waffle | MetaMask"
                /> 
            </div>

            <div className={styles.row}>   
                
            </div>

            <div className={styles.row}>
              
            </div>

            <div className={styles.row}>
              
            </div>
          </div>

</>

    );
}