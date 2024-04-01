import carticon from "../assets/shopping_cart_white.svg"
export const CartWidget = () =>{
    return (
        <div id="cart-widget">
            <img src={carticon} alt="imagen de carrito"/>
            <span>55</span>
        </div>
    )
}
