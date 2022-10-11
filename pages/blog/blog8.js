import styles from '/styles/Home.module.css'
import BlogPost from '/components/blogpost'

export default function BlogEntry({title, text}){

    return(
<> 
       <BlogPost
        title="Why I am , what I am"
        text=" Because I am a G"
        />

</>
    );
}