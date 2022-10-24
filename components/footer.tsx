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

export default function Footer(){
  return (
<>
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <br></br><br></br><br></br><br></br>
      
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
            <div className="flex flex-col space-y-4">
              <Link href="/">
                <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
              </Link>

              <Link href="/articles">
                <a className="text-gray-500 hover:text-gray-600 transition">Articles</a> 
              </Link>

              <Link href="/blog">
                <a className="text-gray-500 hover:text-gray-600 transition">Blog</a> 
              </Link>

              <Link href="/snippets">
                  <a className="text-gray-500 hover:text-gray-600 transition">Snippets</a>
                </Link>
            </div>

            <div className="flex flex-col space-y-4">
              <ExternalLink href="https://www.linkedin.com/in/amanpunia/">
                <a className="text-gray-500 hover:text-gray-600 transition">LinkedIn</a>
              </ExternalLink>

              <ExternalLink href="https://github.com/m0dulat0r">
                <a className="text-gray-500 hover:text-gray-600 transition">Github</a>
              </ExternalLink>

              <ExternalLink href="https://twitter.com/amanprograms">
                  <a className="text-gray-500 hover:text-gray-600 transition">Twitter</a>
              </ExternalLink>

              <ExternalLink href="https://www.instagram.com/amanprograms/">
                <a className="text-gray-500 hover:text-gray-600 transition">Instagram</a>
              </ExternalLink>
              </div>

              <div className="flex flex-col space-y-4">
                <Link href="/aboutme">
                  <a className="text-gray-500 hover:text-gray-600 transition">About</a>
                </Link>

                <Link href="/mygear">
                  <a className="text-gray-500 hover:text-gray-600 transition">My Gear</a>
                </Link>

                <Link href="/mylinks">
                  <a className="text-gray-500 hover:text-gray-600 transition">My Links</a>
                </Link>

                <Link href="/contact">
                  <a className="text-gray-500 hover:text-gray-600 transition">Contact</a>
                </Link>

                

              </div>
        </div>
    </div>
</>
  );
}
 