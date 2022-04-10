import { useEffect } from 'react';
import { getItems } from "../lib/itemRequest"
import Image from "next/image";
import styles from "../styles/Home.module.scss";

function Home() {
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
          <li className={styles.item}>
            <a href={`https://opensea.io/`} target="_blank" rel="noreferrer" className={styles.isDesktop}>
              <Image
                className={styles.itemImage}
                src="/sample.png"
                alt="sample"
                width={212}
                height={212}
              />
              <div className={styles.button}>
                <Image
                  src="/opensea.svg"
                  alt="OpenSea"
                  width={20}
                  height={20}
                  layout="fixed"
                />
                <span className={styles.buttonText}>Go OpenSea</span>
              </div>
            </a>
            <a href={`https://opensea.io/`} target="_blank" rel="noreferrer" className={styles.isMobile}>
              <Image
                className={styles.itemImage}
                src="/sample.png"
                alt="sample"
                width={165}
                height={165}
              />
            </a>
          </li>
          <li className={styles.item}>
            <a href={`https://opensea.io/`} target="_blank" rel="noreferrer" className={styles.isDesktop}>
              <Image
                className={styles.itemImage}
                src="/sample.png"
                alt="sample"
                width={212}
                height={212}
              />
            </a>
            <a href={`https://opensea.io/`} target="_blank" rel="noreferrer" className={styles.isMobile}>
              <Image
                className={styles.itemImage}
                src="/sample.png"
                alt="sample"
                width={165}
                height={165}
              />
            </a>
          </li>
          <li className={styles.item}>
            <a href={`https://opensea.io/`} target="_blank" rel="noreferrer" className={styles.isDesktop}>
              <Image
                className={styles.itemImage}
                src="/sample.png"
                alt="sample"
                width={212}
                height={212}
              />
            </a>
            <a href={`https://opensea.io/`} target="_blank" rel="noreferrer" className={styles.isMobile}>
              <Image
                className={styles.itemImage}
                src="/sample.png"
                alt="sample"
                width={165}
                height={165}
              />
            </a>
          </li>
          <li className={styles.item}>
            <a href={`https://opensea.io/`} target="_blank" rel="noreferrer" className={styles.isDesktop}>
              <Image
                className={styles.itemImage}
                src="/sample.png"
                alt="sample"
                width={212}
                height={212}
              />
            </a>
            <a href={`https://opensea.io/`} target="_blank" rel="noreferrer" className={styles.isMobile}>
              <Image
                className={styles.itemImage}
                src="/sample.png"
                alt="sample"
                width={165}
                height={165}
              />
            </a>
          </li>
          <li className={styles.item}>
            <a href={`https://opensea.io/`} target="_blank" rel="noreferrer" className={styles.isDesktop}>
              <Image
                className={styles.itemImage}
                src="/sample.png"
                alt="sample"
                width={212}
                height={212}
              />
            </a>
            <a href={`https://opensea.io/`} target="_blank" rel="noreferrer" className={styles.isMobile}>
              <Image
                className={styles.itemImage}
                src="/sample.png"
                alt="sample"
                width={165}
                height={165}
              />
            </a>
          </li>
          <li className={styles.item}>
            <a href={`https://opensea.io/`} target="_blank" rel="noreferrer" className={styles.isDesktop}>
              <Image
                className={styles.itemImage}
                src="/sample.png"
                alt="sample"
                width={212}
                height={212}
              />
            </a>
            <a href={`https://opensea.io/`} target="_blank" rel="noreferrer" className={styles.isMobile}>
              <Image
                className={styles.itemImage}
                src="/sample.png"
                alt="sample"
                width={165}
                height={165}
              />
            </a>
          </li>
          <li className={styles.item}>
            <a href={`https://opensea.io/`} target="_blank" rel="noreferrer" className={styles.isDesktop}>
              <Image
                className={styles.itemImage}
                src="/sample.png"
                alt="sample"
                width={212}
                height={212}
              />
            </a>
            <a href={`https://opensea.io/`} target="_blank" rel="noreferrer" className={styles.isMobile}>
              <Image
                className={styles.itemImage}
                src="/sample.png"
                alt="sample"
                width={165}
                height={165}
              />
            </a>
          </li>
          <li className={styles.item}>
            <a href={`https://opensea.io/`} target="_blank" rel="noreferrer" className={styles.isDesktop}>
              <Image
                className={styles.itemImage}
                src="/sample.png"
                alt="sample"
                width={212}
                height={212}
              />
            </a>
            <a href={`https://opensea.io/`} target="_blank" rel="noreferrer" className={styles.isMobile}>
              <Image
                className={styles.itemImage}
                src="/sample.png"
                alt="sample"
                width={165}
                height={165}
              />
            </a>
          </li>
          <li className={styles.item}>
            <a href={`https://opensea.io/`} target="_blank" rel="noreferrer" className={styles.isDesktop}>
              <Image
                className={styles.itemImage}
                src="/sample.png"
                alt="sample"
                width={212}
                height={212}
              />
            </a>
            <a href={`https://opensea.io/`} target="_blank" rel="noreferrer" className={styles.isMobile}>
              <Image
                className={styles.itemImage}
                src="/sample.png"
                alt="sample"
                width={165}
                height={165}
              />
            </a>
          </li>
          <li className={styles.item}>
            <a href={`https://opensea.io/`} target="_blank" rel="noreferrer" className={styles.isDesktop}>
              <Image
                className={styles.itemImage}
                src="/sample.png"
                alt="sample"
                width={212}
                height={212}
              />
            </a>
            <a href={`https://opensea.io/`} target="_blank" rel="noreferrer" className={styles.isMobile}>
              <Image
                className={styles.itemImage}
                src="/sample.png"
                alt="sample"
                width={165}
                height={165}
              />
            </a>
          </li>
          <li className={styles.item}>
            <a href={`https://opensea.io/`} target="_blank" rel="noreferrer" className={styles.isDesktop}>
              <Image
                className={styles.itemImage}
                src="/sample.png"
                alt="sample"
                width={212}
                height={212}
              />
            </a>
            <a href={`https://opensea.io/`} target="_blank" rel="noreferrer" className={styles.isMobile}>
              <Image
                className={styles.itemImage}
                src="/sample.png"
                alt="sample"
                width={165}
                height={165}
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Home