import Head from 'next/head'
import styles from '/styles/Home.module.css'

import Footer from "components/footer"

export default function myGear() {
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

        <h3 className="font-bold text-5xl">My Gear</h3>
        <br></br>
        <br></br>
        <br></br>

        <ul>    
            <h3>Acer Nitro 5</h3>
            <li>i5 9300h</li>
            <li>16GB DDR4</li>
            <li>Nvidia GTX 1660ti 6GB</li>
            <li>1 TB HDD + 1 TB nVME SSD</li>
        </ul>
        <br></br>

        <ul>    
            <h3>Apple MacBook</h3>
            <li>M2</li>
            <li>8GB </li>
            <li>10 Core GPU</li>
            <li>512 SSD</li>
        </ul>
        <br></br>

        <ul>    
            <h3>Accessories</h3>
            <li>HyperX Alloy FPS Keyboard (with cherry MX Red Keys)</li>
            <li>Logitech G633s RGB Headphone </li>
            <li>AirPods 2 Gen </li>
            <li>Boat AirDopes 331</li>
            <li>Logitech G203 Wireless Mouse</li>
            <li>Segate 2TB Portable HDD</li>
        </ul>
    </div>

    <Footer />
</>
  );
  }