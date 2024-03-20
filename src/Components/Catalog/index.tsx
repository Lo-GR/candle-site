import MainContainer from "../MainContainer"
import Item from "./Item"

type CatalogProps = {
  collection: {
    name: string
    image?: string
    description: string
  }[]
}

const Catalog = ({ collection }: CatalogProps) => {
  return (
    <MainContainer>
      {collection.map(item => <Item name={item.name} image={item.image ? item.image : ''} description={item.description} />)}
    </MainContainer>
  )
}

export default Catalog