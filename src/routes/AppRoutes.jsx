import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout.jsx'
import About from '../pages/About.jsx'
import AddProduct from '../pages/AddProduct.jsx'
import Cart from '../pages/Cart.jsx'
import Contact from '../pages/Contact.jsx'
import Home from '../pages/Home.jsx'
import NotFound from '../pages/NotFound.jsx'
import ProductDetail from '../pages/ProductDetail.jsx'
import ProductList from '../pages/ProductList.jsx'
import { PATHS } from './paths.js'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={PATHS.home} element={<Home />} />
        <Route path={PATHS.contact} element={<Contact />} />
        <Route path={PATHS.about} element={<About />} />
        <Route path={PATHS.addProduct} element={<AddProduct />} />
        <Route path={PATHS.products} element={<ProductList />} />
        <Route path={PATHS.productDetail(':id')} element={<ProductDetail />} />
        <Route path={PATHS.cart} element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
