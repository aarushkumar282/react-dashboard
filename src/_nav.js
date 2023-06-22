import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilCalculator,
  cilDescription,
  cilPencil,
  cilSpeedometer,
  cilCalendar,
  cibHipchat,
  cilCart,
  cilEnvelopeClosed,
  cilViewQuilt,
  cilMap,
  cilFork,
  cilBarChart,
  cibBitcoin,
  cilBriefcase,
  cilCommentSquare,
  cilCash,
  cibBlogger,
  cilTask,
  cilBasket,
  cibReadme,
  cilList,
  cilContact,
  cilHeader,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Menu',
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Layout',
    to: '/layout',
    icon: <CIcon icon={cilViewQuilt} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Apps',
  },
  {
    component: CNavItem,
    name: 'Calenders',
    to: '/calender',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Chat',
    to: '/chart',
    icon: <CIcon icon={cibHipchat} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'File Manager',
    to: '/file-manager',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'E-Commerces',
    to: '/ecommerce',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Product',
        to: '/ecommerce/product',
      },
      {
        component: CNavItem,
        name: 'Product Details',
        to: '/ecommerce/product-details',
      },
      {
        component: CNavItem,
        name: 'Order',
        to: '/ecommerce/order',
      },
      {
        component: CNavItem,
        name: 'Customers',
        to: '/ecommerce/customers',
      },
      {
        component: CNavItem,
        name: 'Cart',
        to: '/ecommerce/cart',
      },
      {
        component: CNavItem,
        name: 'Checkout',
        to: '/ecommerce/checkout',
      },
      {
        component: CNavItem,
        name: 'Shops',
        to: '/ecommerce/shop',
      },
      {
        component: CNavItem,
        name: 'Add Product',
        to: '/ecommerce/add-product',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Crypto',
    to: '/theme/typography',
    icon: <CIcon icon={cibBitcoin} customClassName="nav-icon" />,
    items: [],
  },
  {
    component: CNavGroup,
    name: 'Email',
    to: '/theme/typography',
    icon: <CIcon icon={cilEnvelopeClosed} customClassName="nav-icon" />,
    items: [],
  },
  {
    component: CNavGroup,
    name: 'invoices',
    to: '/theme/typography',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    items: [],
  },

  {
    component: CNavGroup,
    name: 'Projects',
    to: '/theme/typography',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
    items: [],
  },
  {
    component: CNavGroup,
    name: 'Tasks',
    to: '/theme/typography',
    icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
    items: [],
  },
  {
    component: CNavGroup,
    name: 'Contacts',
    to: '/theme/typography',
    icon: <CIcon icon={cilCommentSquare} customClassName="nav-icon" />,
    items: [],
  },
  {
    component: CNavGroup,
    name: 'Blog',
    to: '/theme/typography',
    icon: <CIcon icon={cibBlogger} customClassName="nav-icon" />,
    items: [],
  },
  {
    component: CNavGroup,
    name: 'Jobs',
    to: '/theme/typography',
    icon: <CIcon icon={cilBriefcase} customClassName="nav-icon" />,
    items: [],
  },
  {
    component: CNavTitle,
    name: 'Apps',
  },
  {
    component: CNavGroup,
    name: 'Authentication',
    to: '/theme/typography',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
    items: [],
  },
  {
    component: CNavGroup,
    name: 'Utility',
    to: '/theme/typography',
    icon: <CIcon icon={cilBasket} customClassName="nav-icon" />,
    items: [],
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'UI Elements',
    to: '/theme/typography',
    icon: <CIcon icon={cilHeader} customClassName="nav-icon" />,
    items: [],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    to: '/theme/typography',
    icon: <CIcon icon={cibReadme} customClassName="nav-icon" />,
    items: [],
  },
  {
    component: CNavGroup,
    name: 'Tables',
    to: '/theme/typography',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
    items: [],
  },
  {
    component: CNavGroup,
    name: 'Charts',
    to: '/theme/typography',
    icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
    items: [],
  },
  {
    component: CNavGroup,
    name: 'Icons',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    items: [],
  },
  {
    component: CNavGroup,
    name: 'Maps',
    to: '/theme/typography',
    icon: <CIcon icon={cilMap} customClassName="nav-icon" />,
    items: [],
  },
  {
    component: CNavGroup,
    name: 'Multi Lavel',
    to: '/theme/typography',
    icon: <CIcon icon={cilFork} customClassName="nav-icon" />,
    items: [],
  },
]

export default _nav