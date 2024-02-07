import { Col, Row } from 'react-bootstrap'
import storeItems from '../data/items.json'
import ProductItem from '../components/ProductItem'

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className='g-3'>
        {storeItems.map((item) => (
          <Col key={item.id}>
            <ProductItem key={item.id} {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Store
