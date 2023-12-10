"use client"
import React, { useState } from 'react'
import { MantineProvider, Select, TextInput, Table, Button, Text, Image } from '@mantine/core'
import '@mantine/core/styles.css';
import * as Constants from './utilities/constants';
import { ProductTable } from './components/product-table/product-table';
import { AllProducts, Product } from './utilities/types';
import ProductForm from './components/product-form/product-form';

export default function Home() {
  const [productTitle, setProductTitle] = useState<string>(Constants.emptyString)
  const [sources, setSources] = useState<string[]>(Constants.sourceList)
  const [allProducts, setAllProducts] = useState<AllProducts>([])
  const [productSource, setProductSource] = useState<string>(Constants.emptyString)

  const handleProductTitleChange = (title : string) => {
    setProductTitle(title)
  }

  const handleProductSourceChange = (source: string | null) => {
    setProductSource(source === null ? Constants.emptyString : source)
  }

  const addNewProduct = () => {
    const newProduct : Product = {title: productTitle, source: productSource}
    setAllProducts((products : AllProducts) => [...products, newProduct])
    setProductTitle(Constants.emptyString)
  }

  const deleteProduct = (index: number) => {
    let copyProductDefinitions = [...allProducts]
    copyProductDefinitions.splice(index, 1)
    setAllProducts(copyProductDefinitions)
  }

  return (
    <MantineProvider>
      <div className='container'>
        <ProductForm
          productTitle={productTitle}
          productSource={productSource}
          sources={sources}
          handleProductTitleChange={handleProductTitleChange}
          handleProductSourceChange={handleProductSourceChange}
          addNewProduct={addNewProduct}
        />
        <ProductTable
          allProducts={allProducts}
          addNewProduct={addNewProduct}
          deleteProduct={deleteProduct} 
        />
      </div>
    </MantineProvider>
  )
}
