import { useState, useEffect } from 'react';
import { getItems } from "../lib/itemRequest"
import Image from "next/image";
import styles from "../styles/Home.module.scss";

function Home() {
  const [isItemHover, setIsItemHover] = useState(false);

  useEffect(() => {
    (async() => {
      const tokenMetadatas = await getItems()
      console.log(tokenMetadatas)

      const openseaUrl = `https://opensea.io/assets/${tokenMetadatas[0].contractAddress}/${tokenMetadatas[0].tokenId}`
      console.log(openseaUrl)
    })()
  });

  return (
    <>
      <div className={styles.header}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="Logo"
          width={130}
          height={20}
        />
      </div>
      <div className={styles.content}>
        <ul className={styles.items}>
          <li
            className={styles.item}
            onMouseEnter={() => setIsItemHover(true)}
            onMouseLeave={() => setIsItemHover(false)}
          >
            <Image
              className={styles.itemImage}
              src="/sample.png"
              alt="sample"
              width={212}
              height={212}
            />
            {isItemHover && (
              <div className={styles.buttons}>
                <a
                  className={styles.openseaButton}
                  href={`https://opensea.io/`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/opensea.svg"
                    alt="OpenSea"
                    width={20}
                    height={20}
                    layout="fixed"
                  />
                  <span className={styles.buttonText}>Go OpenSea</span>
                </a>
              </div>
            )}
          </li>
        </ul>
      </div>
    </>
  )
}

export default Home