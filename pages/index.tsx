import { useEffect } from 'react';
import { getItems } from "../lib/itemRequest"

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
    <div>Welcome to Next.js!</div>
  )
}

export default Home