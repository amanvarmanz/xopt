import { Text, Table, Button } from '@mantine/core'
import React from 'react'
import * as Constants from '../../utilities/constants';
import { AllProducts, Product, ProductTableProps } from '../../utilities/types';
import './product-table.scss'

export const ProductTable = (props : ProductTableProps) => {
    
    const header = (
        <Table.Tr>
          <Table.Th><Text ta={'center'} fw={450}>{Constants.Title}</Text></Table.Th>
          <Table.Th><Text ta={'center'} fw={450}>{Constants.Source}</Text></Table.Th>
          <Table.Th><Text ta={'center'} fw={450}>{Constants.Actions}</Text></Table.Th>
        </Table.Tr> 
      )

    const rows = (
        props.allProducts.map((product: Product, index: number) => (
          <Table.Tr key={index}>
              <Table.Td align='center'>   
                <Text size="lg" fw={300} c={'black'}>
                    {product.title}
                </Text>
            </Table.Td>
            <Table.Td align='center'>
              <Text size="lg" fw={300} c={'black'}>
                {product.source}
            </Text>
            </Table.Td>
            <Table.Td align='center'>
                <div className='delete-button'>
                <Button variant="light" color="pink" onClick={() => props.deleteProduct(index)}> 
                    {Constants.Delete} 
                </Button>
              </div>
            </Table.Td>
          </Table.Tr>
        ))
      )

    const emptyHeaderFooter = (
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th></Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      )
    
      const emptyBody = (
        <Table.Tr>
          <Table.Td></Table.Td>
          <Table.Td>
            <div className='no-products-warning'>
            <Text 
              size="lg"
              ta={'center'}
              fw={400}
              c={'red'}>
                {Constants.NoProductsWarning}
            </Text>
            </div>
          </Table.Td>
          <Table.Td></Table.Td>
        </Table.Tr>
      )

  return (
    <Table stickyHeader stickyHeaderOffset={60}>
    <Table.Thead>{props.allProducts.length === 0 ? emptyHeaderFooter : header}</Table.Thead>
    <Table.Tbody>{props.allProducts.length === 0 ? emptyBody : rows}</Table.Tbody>
    <Table.Tfoot>{emptyHeaderFooter}</Table.Tfoot>
  </Table>
  )
}
