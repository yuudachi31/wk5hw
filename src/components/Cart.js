import { Button, Select,Row, Col } from "antd";

import { useContext } from "react";
import { StoreContext } from "../store"
import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "../utils/constants";
const { Option } = Select;

export default function Cart() {
    const { state: { cartItems }, dispatch } = useContext(StoreContext);
   
    const addToCart = (product, qty) => {
       dispatch({
          type: ADD_CART_ITEM,
          payload: {
             id: product.id,
             name: product.name,
             image: product.image,
             price: product.price,
             countInStock: product.countInStock,
             qty,
          },
       });
    };

    const getTotalPrice = () => {
        return (cartItems.length > 0) ?
           cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
           : 0;
     }

    return (
    <Col gutter={[32, 32]}>
        {
cartItems.length===0?(<div>Cart is Empty</div>):(
cartItems.map((item)=>{
   
      return(
            <Row  lg={{ span: 10 }} key={item.id} className="cart-item">
                <div className="cart-cont1">
<img src={item.image} alt={item.name} className="cart-img"></img>
<div className="cart-cont2">
    <div>{item.name} </div>
    <div className="marginTop10">Qty: {"   "}
    <Select
     defaultValue={item.qty}
      className="select-style"
      onChange={(val) => addToCart(item, val)}
      >
     {[...Array(item.countInStock).keys()].map((x) => (
       <Option key={x + 1} value={x + 1}>
    {x + 1}
     </Option>
      ))}
     </Select></div>
</div>
</div>
<div >
$ {item.price*item.qty}
</div>
            </Row>
        )
        }
)

)


        }

<div className="fixItem">
<div>Total: </div>
<div>${getTotalPrice()+" "} </div>
<button className="checkBtn">Checkout</button>
</div>

</Col>





    )




}