import styles from '/styles/Home.module.css'
import Footer from "components/footer"

import Heading from 'components/blogposts/heading'
import Info from 'components/blogposts/info'



export default function BlogEntry({title, text}){

    return(
<>    
        <Heading
            title= "Time Management like A-man"
        />

        <Info
            day="Mon"
            date="May 2, 2022"
            words="172"
            minutes="1"
        />
        
        <br></br> <br></br>
        <main className={styles.container}>

        <p>18yo me didn't know anything being productive, there were no distractions, no priorities just there to sit up and study all day. Times change, making the 
            20yo me wonder about what was time management was. I am still no expert in Time Management but here I discuss some of my thought processes.
        </p>
        <br></br>
        <p>Wikipedia, that I downloaded back in 2016 defines Time Management as:</p>
        <b className="text-light text-gray-400 mb-16">
        "Time management is the process of planning and exercising conscious control of time spent on specific activities, 
        especially to increase effectiveness,efficiency, and productivity. It involves of various demands upon a person relating to work, 
        social life, family, hobbies, personal interests, and commitments with the finite nature of time."</b>
        <br></br><br></br>
        <p>So, that solved me for why do I have to do to manage my time. College is just a drunk chaotic festival, if you don't manage time.</p>
        <p>I started off with creating a tight schedule in which my self-consiousness races against my self worth. After all that's how it has always been
            for me since as far as I remember. It's a good mindset to derive your self-worth from how productive your day was.
        </p>
        <p>I found myself truely fulfilled on days when I upgraded my tech skills a bit and had a skin tearing pump from the gym and spent the least time wondering
            about other's opinion of me and spent the remaining of my energy figuring out a way to make more time to make decisions for the day with more efficiency.
        </p>
        <p>What I realised about decisions is that, most of the decisions I used to take were not even consious. They were motivated by my habits, mindset and
            a 2 minute distraction.
        </p>
        <p>I used to get repulsive from things which destablize my routine, I used to feel that I am just one scroll away from spending couples hours on reddit or
            I am one bite away from cheating on my meal.
        </p>

        <p>Time management is a crucial skill that set aparts people who can do it and people who can&apos;t do it in a wide spectrum. 
        No pioneer has been ever a bad manager of his time, it was always a race against time for them.</p>
        <br></br>
        <p>There are some work related choices we often screw up. For me as a university student, I come across a lot of students with indecisiveness and a herd-decision nature.
        They dip their toes in literally every pool they see. After all, why miss an opportunity?
        Unfortunately,I often get wound up in less important tasks, events or commitments that hinder my involvement to more important
        events and purposes I have for my life.</p>
        <p></p>
        
        </main>
        
        <br></br><br></br><br></br><br></br>
        <Footer />
</>
    );
}