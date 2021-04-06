import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Product from './pages/Product'
import ShoppingCart from './pages/ShoppingCart'
import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  exact path="/home/:pageName" component={Home} />
          <Route  exact path="/ShoppingCart" component={ShoppingCart} />
          <Route path="/product/:productId" component={Product} />
     
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
