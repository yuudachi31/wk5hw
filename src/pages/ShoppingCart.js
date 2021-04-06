import { Layout } from 'antd';
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import Cart from "../components/Cart"
import products from "../json/products.json";

const { Header, Content, Footer } = Layout;

function ShoppingCart() {
   
    return (
       <Layout className="container main-layout">
          <Layout className="bg-gray">
             <NavBar />
          </Layout>
          <Layout className="bg-gray">     
          <Header className="layout-header">
               <AppHeader title="Shopping cart" />
            </Header>
             <Content className=" layout-content">
                <Cart/>
             </Content>
             <Footer className="layout-footer">
                <AppFooter />
             </Footer>
          </Layout>
       </Layout>
    );
 }
 
 export default ShoppingCart;
 