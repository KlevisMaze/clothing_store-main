import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from "../assets/images/shop/del.png";
import CheckOutPage from './CheckOutPage';
import Shop from './Shop';

export const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [cities, setCities] = useState([]);

    useEffect(() => {
        // Fetch cart items from local storage
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCartItems);
    }, []);

    // Calculate total price for each item
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    };

    // Handle quantity increase
    const handleIncrease = (item) => {
        item.quantity += 1;
        setCartItems([...cartItems]);

        // Update local storage with new cart items
        localStorage.setItem("cart", JSON.stringify(cartItems));
    };

    // Handle quantity decrease
    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setCartItems([...cartItems]);

            // Update local storage with new cart items
            localStorage.setItem("cart", JSON.stringify(cartItems));
        }
    };

    // Handle item removal
    const handleRemoveItem = (item) => {
        const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

        // Update cart and local storage
        setCartItems(updatedCart);
        updateLocalStorage(updatedCart);
    };

    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    // Calculate cart subtotal
    const cartSubTotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0);

    // Data for cities based on selected country
    const citiesData = {
        Alb: ['Tirana',
            'Durrës',
            'Vlorë',
            'Kamëz',
            'Fier',
            'Shkodër',
            'Elbasan',
            'Korçë',
            'Sarandë',
            'Berat',
            'Lushnjë',
            'Kavajë',
            'Gjirokastër',
            'Pogradec',
            'Fushë-Krujë',
            'Laç',
            'Kukës',
            'Sukth',
            'Buçimas',
            'Lezhë',
            'Patos',
            'Peshkopi',
            'Librazhd',
            'Kuçovë',
            'Krujë',
            'Burrel',
            'Perondi',
            'Libonik',
            'Rrëshen',
            'Belsh',
            'Divjakë', 'Gramsh',
            'Mamurras',
            'Bulqizë',
            'Vau i Dejës',
            'Shëngjin',
            'Ballsh',
            'Shijak',
            'Bilisht',
            'Rrogozhinë',
            'Librazhd',
            'Cërrik',
            'Roskovec',
            'Manzë',
            'Peqin',
            'Krumë',
            'Përmet',
            'Përrenjas-Fshat',
            'Prrenjas',
            'Delvinë',
            'Orikum',
            'Bajram Curri',
            'Vorë',
            'Këlcyrë',
            'Ura Vajgurore',
            'Himarë',
            'Rubik',
            'Tepelenë',
            'Poliçan',
            'Çorovodë',
            'Ersekë',
            'Maliq',
            'Koplik',
            'Pukë',
            'Lazarat',
            'Memaliaj',
            'Velçan',
            'Banaj',
            'Fushë-Arrëz',
            'Krrabë',
            'Selenicë',
            'Voskopojë',
            'Bitinckë',
            'Drenovë',
            'Libohovë',
            'Reps',
            'Gjinkar',
            'Krastë',
            'Leskovik',
            'Kurbnesh',
            'Konispol',
            'Finiq',
            'Ulëz',
            'Boboshticë',
            'Sinaballaj',
            'Liqenas',
            'Aliaj',
            'Burgajet',
            'Plasë',
            'Rapshë',
            'Vukpalaj-Bajzë',
            'Guri i Bardhë',
            'Dobër',
            'Kastrat',
            'Bogiç-Palvar',
            'Stërbeq',
            'Shtanë',
            'Vernicë',
            'Goricë e Madhe',
            'Dardhë',
            'Vuno',
            'Lajthizë',
            'Gjinovec',
            'Vërnik',
            'Klenjë',
            'Rripë',],
        Ks: ['Pristina', 'Peja', 'Gjakova'],
        Mkd: ['Skopje', 'Bitola', 'Ohrid'],
        Gre: ['Athens', 'Thessaloniki', 'Patras'],
    };

    // Handle country selection
    const handleCountryChange = (event) => {
        const countryCode = event.target.value;
        setSelectedCountry(countryCode);
        setCities(citiesData[countryCode] || []);
    };
    // Calculate shipping cost based on subtotal
    const calculateShipping = (subtotal) => {
        const freeShippingThreshold = 6000;
        const shippingCost = 300;

        if (subtotal > freeShippingThreshold) {
            return 0; // Free shipping for orders above the threshold
        }
        return shippingCost;
    };

    const shippingCost = calculateShipping(cartSubTotal);

    // Order total including shipping cost
    const orderTotal = cartSubTotal + shippingCost;
    return (
        <div>
            <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />

            <div className='shop-cart padding-tb'>
                <div className='container'>
                    <div className='section-wrapper'>
                        {/* cart top */}
                        <div className='cart-top'>
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cart-product'>Product</th>
                                        <th className='cart-price'>Price</th>
                                        <th className='cart-quantity'>Quantity</th>
                                        <th className='cart-total'>Total</th>
                                        <th className='cart-edit'>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item, index) => (
                                        <tr key={index}>
                                            <td className='product-item cat-product'>
                                                <div className='p-thumb'>
                                                    <Link to="/shop">
                                                        <img src={item.img} alt="" />
                                                    </Link>
                                                </div>
                                                <div className='p-content'>
                                                    <Link to="/shop">{item.name}</Link>
                                                </div>
                                            </td>
                                            <td className='cat-price'>ALL {item.price}</td>
                                            <td className='cat-quantity'>
                                                <div className='cart-plus-minus'>
                                                    <div className='dec qtybutton' onClick={() => handleDecrease(item)}>-</div>
                                                    <input type='text' className='cart-plus-minus-box' name='qtybutton' value={item.quantity} readOnly />
                                                    <div className='inc qtybutton' onClick={() => handleIncrease(item)}>+</div>
                                                </div>
                                            </td>
                                            <td className='cat-toprice'>ALL {calculateTotalPrice(item)}</td>
                                            <td className='cat-edit'>
                                                <a href='#' onClick={() => handleRemoveItem(item)}>
                                                    <img src={delImgUrl} alt="" />
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* cart top ends */}

                        {/* cart bottom */}
                        <div className='cart-bottom'>
                            {/* checkout box */}
                            <div className='cart-checkout-box'>
                                <form className='coupon'>
                                    <input className='cart-page-input-text' type='text' name='coupon' id='coupon' placeholder='Coupon code ...' />
                                    <input type='submit' value="Apply Coupon" />
                                </form>

                                <form className='cart-checkout'>
                                    <input type="submit" value="Update Cart" />
                                    <div>
                                    <CheckOutPage/>
                                    </div>
                                </form>
                            </div>
                            {/* checkout box ends */}

                            {/* shipping box */}
                            <div className='shiping-box'>
                                <div className='row'>
                                    <div className='col-md-6 col-12'>
                                        <div className='calculate-shiping'>
                                            <h3>Shipping Adress</h3>
                                            <div className='outline-select'>
                                                <select onChange={handleCountryChange}>
                                                    <option value="">Select Country</option>
                                                    <option value="Alb">Albania (ALB)</option>
                                                    <option value="Ks">Kosovo (KS)</option>
                                                    <option value="Mkd">North Macedonia (NMC)</option>
                                                    <option value="Gre">Greece (GRE)</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>
                                            </div>

                                            {selectedCountry && (
                                                <div className='outline-select shipping-select'>
                                                    <select>
                                                        <option value="">Select City</option>
                                                        {cities.map((city, index) => (
                                                            <option key={index} value={city}>
                                                                {city}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <span className='select-icon'>
                                                        <i className='icofont-rounded-down'></i>
                                                    </span>
                                                </div>
                                            )}
                                            <input type='text' name='postalcode' id='postalcode' placeholder='Postcode/ZIP' className='cart-page-input-text'></input>
                                            <button type='submit'>Update Adress</button>
                                        </div>
                                    </div>

                                    {/* Right side */}
                                    <div className='col-md-6 col-12'>
                                        <div className='cart-overview'>
                                            <h3>Cart Totals</h3>
                                            <ul className='lab-ul'>
                                                <li>
                                                    <span className='pull-left'>Cart Subtotal</span>
                                                    <p className='pull-right'>ALL {cartSubTotal}</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Shipping and Handling</span>
                                                    <p className='pull-right'>
                                                        {shippingCost === 0 ? "Free Shipping" : `ALL ${shippingCost}`}
                                                    </p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Order Total</span>
                                                    <p className='pull-right'>ALL {orderTotal.toFixed(2)}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* shipping box ends */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
