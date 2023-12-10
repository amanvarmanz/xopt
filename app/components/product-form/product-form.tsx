import { Image, Button, Select, Text, TextInput } from '@mantine/core'
import React from 'react'
import * as Constants from '../../utilities/constants';
import './product-form.scss'

export type ProductFormProps = {
  productTitle: string,
  productSource: string,
  sources: string[]
  handleProductTitleChange: (title : string) => void
  handleProductSourceChange: (source : string | null) => void
  addNewProduct: () => void
}

const ProductForm = (props : ProductFormProps) => {
  return (
    <div className='form-container'>
      <div className='logo'>
          <Image src={Constants.TableLogo} h={60}/>
      </div>
          <div className='title-input'>
          <TextInput 
            value={props.productTitle} 
            label={Constants.ProductTitle} 
            placeholder={Constants.ProductTitlePlaceholder} 
            onChange={(e) => props.handleProductTitleChange(e.target.value)} 
            radius={'md'} 
            size={'md'} 
            variant={'filled'} 
          />
        </div>
        <div className='source-select'>
          <Select 
            value={props.productSource} 
            data={props.sources} 
            label={Constants.ProductSource} 
            placeholder={Constants.ProductSourcePlaceholder} 
            disabled={props.productTitle === Constants.emptyString} 
            onChange={(source) => props.handleProductSourceChange(source)} 
            radius={'md'} 
            size={'md'} 
            variant={'filled'} 
          />
        </div>
        <div className='submit'>
          <Button 
          size={'md'} 
          radius={'md'} 
          variant="light" 
          color="teal" 
          disabled={props.productTitle === Constants.emptyString || props.productSource === Constants.emptyString} 
          onClick={props.addNewProduct}
          >
            {Constants.Submit}
          </Button>
        </div>  
      </div>
  )
}

export default ProductForm