import styles from '/styles/Home.module.css'
import Link from 'next/link'

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

export default function SocialLink({link,name, text1, text2, emoji}){
    return(
<>  
                <dl className={styles.code}>    
                        <ExternalLink href="{link}">
                            <h3 className='text-white font-bold'>{name} &rarr;</h3>
                        </ExternalLink>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{text1}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{text2}</p>
                        <p className="text-2xl">{emoji}</p>
                    </dl>
                <br></br>
</>
    );
}