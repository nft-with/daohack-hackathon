import YanchaCatsTokenABI from "../yancha_cats.js"
const Web3 = require("web3")

interface TokenMetadata {
  name: string;
  description: string;
  imageUrl: string;
  contractAddress: string;
  tokenId: number;
}

export async function getItems(): Promise<TokenMetadata[]> {
  // Caution: It is a prototype. Dummy contract address and token id are used.
  const contractAddress = "0xE46774F5f602c6dE7aE056d15C1eb92a6397cEEc"
  const tolenIds = [1, 2]

  const web3 = new Web3((window as any).ethereum)
  const contract = new web3.eth.Contract(YanchaCatsTokenABI, contractAddress)

  const tokenMetadatas: TokenMetadata[] = []

  for (let i = 0; i < tolenIds.length; i++) {
    const tokenId = tolenIds[i];

    let tokenMetadataURI = await contract.methods.tokenURI(tokenId).call()
    if (tokenMetadataURI.startsWith("ipfs://")) {
      tokenMetadataURI = `https://ipfs.io/ipfs/${tokenMetadataURI.split("ipfs://")[1]}`
    }

    const tokenMetadata = await fetch(tokenMetadataURI).then((response) => response.json())
    tokenMetadatas.push(
      {
        name: tokenMetadata["name"],
        description: tokenMetadata["description"],
        imageUrl: tokenMetadata["image"],
        contractAddress: contractAddress,
        tokenId: tokenId,
      }
    )
  }

  return tokenMetadatas
}