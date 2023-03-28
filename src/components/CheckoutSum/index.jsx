import { StyledCheckoutSum } from './style';
import { Link } from 'react-router-dom';
import SecondButton from '../SecondButton';

export default function CheckoutSum({
    calcSubtotal,
    calcVAT,
    calcTotal,
    clearCart,
}) {

    return (
        <StyledCheckoutSum>
            <h3>Your Order Summary</h3>
            <div className='price-sum'>
                <p>Subtotal</p>
                <p>{calcSubtotal()} USD</p>
            </div>
            <div className='price-sum'>
                <p>Shipping</p>
                <p>Free</p>
            </div>
            <div className='price-sum'>
                <p>VAT 25%</p>
                <p>{calcVAT()} USD</p>
            </div>
            <div className='price-sum'>
                <p className='total'>Total</p>
                <p className='total'>{calcTotal()} USD</p>
            </div>
            <Link to={"/success"} onClick={() => clearCart()}>Place Order</Link>
            <SecondButton onClick={() => clearCart()} text={'Empty Cart'} />
        </StyledCheckoutSum>
    );
}