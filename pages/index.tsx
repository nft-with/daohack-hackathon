import { useState, useEffect } from 'react';
import { getItems } from "../lib/itemRequest"
import Image from "next/image";
import styles from "../styles/Home.module.scss";

type item = {
  imageUrl: string;
  openseaUrl: string;
}

function Home() {
  const [items, setItems] = useState<item[]>(new Array<item>());

  useEffect(() => {
    (async() => {
      const tokenMetadatas = await getItems()

      setItems(tokenMetadatas.map(data => {
        return {imageUrl: data.imageUrl, openseaUrl: `https://opensea.io/assets/${data.contractAddress}/${data.tokenId}`}
      }))
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
          {items.map((item: any, index) => (
            <li
              key={index}
              className={styles.item}
            >
              <Image
                className={styles.itemImage}
                src={item.imageUrl}
                alt="sample"
                width={212}
                height={212}
              />
              <div className={styles.buttons}>
                <a
                  className={styles.openseaButton}
                  href={item.openseaUrl}
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
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Home