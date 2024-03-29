import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

const Navbar = () => {
  const { openCart, cartQuantityTotal } = useShoppingCart()

  return (
    <NavbarBs className='bg-white shadow-sm mb-3'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link to='/' as={NavLink}>
            STORE
          </Nav.Link>

          <Nav.Link to='/about' as={NavLink}>
            ABOUT
          </Nav.Link>
        </Nav>
        {cartQuantityTotal > 0 && (
          <Button
            style={{ width: '3rem', height: '3rem', position: 'relative' }}
            variant='outline-primary'
            className='rounded-circle btn-cart'
            onClick={openCart}
          >
            <svg
              viewBox='0 0 32 32'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              fill='#000000'
              className='cart-icon'
            >
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                {' '}
                <title>cart 2</title> <desc>Created with Sketch Beta.</desc>{' '}
                <defs> </defs>{' '}
                <g
                  id='Page-1'
                  stroke='none'
                  strokeWidth='1'
                  fill='none'
                  fillRule='evenodd'
                >
                  {' '}
                  <g
                    id='Icon-Set-Filled'
                    transform='translate(-518.000000, -725.000000)'
                    fill='#0475d0'
                  >
                    {' '}
                    <path
                      d='M528,751 C529.104,751 530,751.896 530,753 C530,754.104 529.104,755 528,755 C526.896,755 526,754.104 526,753 C526,751.896 526.896,751 528,751 L528,751 Z M524,753 C524,755.209 525.791,757 528,757 C530.209,757 532,755.209 532,753 C532,750.791 530.209,749 528,749 C525.791,749 524,750.791 524,753 L524,753 Z M526,747 C524.896,747 524,746.104 524,745 C524,745 547,743 546.972,743.097 C547.482,741.2 549.979,730.223 550,730 C550.054,729.45 549.553,729 549,729 L524,729 L524,727 L525,727 C525.553,727 526,726.553 526,726 C526,725.448 525.553,725 525,725 L519,725 C518.447,725 518,725.448 518,726 C518,726.553 518.447,727 519,727 L522,727 L522,745 C522,747.209 523.791,749 526,749 L549,749 C549.031,749 549,748.009 549,747 L526,747 L526,747 Z M540,751 C541.104,751 542,751.896 542,753 C542,754.104 541.104,755 540,755 C538.896,755 538,754.104 538,753 C538,751.896 538.896,751 540,751 L540,751 Z M536,753 C536,755.209 537.791,757 540,757 C542.209,757 544,755.209 544,753 C544,750.791 542.209,749 540,749 C537.791,749 536,750.791 536,753 L536,753 Z'
                      id='cart-2'
                    >
                      {' '}
                    </path>{' '}
                  </g>{' '}
                </g>{' '}
              </g>
            </svg>
            <div
              className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
              style={{
                color: 'white',
                width: '1.5rem',
                height: '1.5rem',
                position: 'absolute',
                bottom: 0,
                right: 0,
                transform: 'translate(25%,25%)',
              }}
            >
              {cartQuantityTotal}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  )
}

export default Navbar
