export type Product = {
    title: string,
    source: string
  }
  
export type AllProducts = Product[]

export type ProductTableProps = {
    allProducts : AllProducts,
    addNewProduct: () => void,
    deleteProduct: (index : number) => void;
}

  