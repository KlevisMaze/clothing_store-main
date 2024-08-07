import React from 'react'
import { Link } from 'react-router-dom';

const title = "Sale Products";

const productSale = [{
    imgUrl: 'src/assets/images/categoryTab/Long dress with an outside back with multicolored stripes.jpg',
    cate: 'Dress',
    title: 'Long dress with outside back',
    author: 'assets/images/course/author/01.jpg',
    brand: 'attrattivo',
    price: '6,200.00 ALL',
    id: 1,
},
{
    imgUrl: 'src/assets/images/categoryTab/Blue cotton shirt with short sleeves.jpg',
    cate: 'Shirt',
    title: 'Blue cotton shirt with short sleeves',
    author: 'assets/images/course/author/02.jpg',
    brand: 'attrattivo',
    price: '4,600.00 ALL',
    id: 2,
},
{
    imgUrl: 'src/assets/images/categoryTab/Blue denim shirt with short sleeves and floral details.webp',
    cate: 'Shirt',
    title: 'Blue denim shirt with short sleeves',
    author: 'src/assets/images/categoryTab/brand/apple.png',
    brand: 'attrattivo',
    price: '5,400.00 ALL',
    id: 3,
},
{
    imgUrl: 'src/assets/images/categoryTab/White jumpsuit with blue and green prints with slippers.webp',
    cate: 'Jumpsuit',
    title: 'White jumpsuit with blue and green prints',
    author: 'assets/images/course/author/04.jpg',
    brand: 'attrattivo',
    price: '7,700.00 ALL',
    id: 4,
},
{
    imgUrl: 'src/assets/images/categoryTab/Long brown and green zhapone dress with front buttons and belt.webp',
    cate: 'Dress',
    title: 'Long brown and green zhapone dress',
    author: 'assets/images/course/author/05.jpg',
    brand: 'attrattivo',
    price: '9,200.00 ALL',
    id: 5,
},
{
    imgUrl: 'src/assets/images/categoryTab/Short dress with straps.webp',
    cate: 'Dress',
    title: 'Short dress with straps',
    author: 'assets/images/course/author/06.jpg',
    brand: 'ALE',
    price: '5,400.00 ALL',
    id: 6,
},
{
    imgUrl: 'src/assets/images/categoryTab/White cotton blouse with short sleeves with blue flowers.webp',
    cate: 'Shirt',
    title: 'White cotton blouse with short sleeves',
    author: 'assets/images/course/author/01.jpg',
    brand: 'ALE',
    price: '3,100.00 ALL',
    id: 7,
},
]
const Popularproducts = () => {
    return (
        <div className='widget widget-post'>
            <div className='widget-header'>
                <h5 className='title'>{title}</h5>
            </div>
            <ul className='widget-wrapper'>
                {
                    productSale.map((product, i) => (
                        <li key={i} className='d-flex-wrap justify-content-between'>
                            <div className='product-thumb'>
                                <div className='product-thumb'>
                                    <Link to={`/products/${product.id}`}>
                                        <img src={product.imgUrl} alt="" style={{ width: '100px', height: 'auto', objectFit: 'cover', borderRadius: '8px' }} />
                                    </Link>
                                </div>

                            </div>
                            <div className='product-content'>
                                <Link to={`/products/${product.id}`}><h5>{product.title}</h5></Link>
                                <p>{product.price}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Popularproducts