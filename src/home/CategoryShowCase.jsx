import React, { useState } from 'react'
import Ratting from '../components/Ratting';
import { Link } from 'react-router-dom';

const title = "Our Products";

const ProductData = [
    {
        imgUrl: 'src/assets/images/categoryTab/Long dress with an outside back with multicolored stripes.jpg',
        cate: 'Dress',
        title: 'Long dress with an outside back with multicolored stripes',
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
        title: 'Blue denim shirt with short sleeves and floral details',
        author: 'src/assets/images/categoryTab/brand/apple.png',
        brand: 'attrattivo',
        price: '5,400.00 ALL',
        id: 3,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/White jumpsuit with blue and green prints with slippers.webp',
        cate: 'Jumpsuit',
        title: 'White jumpsuit with blue and green prints with slippers',
        author: 'assets/images/course/author/04.jpg',
        brand: 'attrattivo',
        price: '7,700.00 ALL',
        id: 4,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/Long brown and green zhapone dress with front buttons and belt.webp',
        cate: 'Dress',
        title: 'Long brown and green zhapone dress with front buttons and belt',
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
        title: 'White cotton blouse with short sleeves with blue flowers ',
        author: 'assets/images/course/author/01.jpg',
        brand: 'ALE',
        price: '3,100.00 ALL',
        id: 7,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/Short pink dress.webp',
        cate: 'Dress',
        title: 'Short pink dress',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Only',
        price: '$2,300.00',
        id: 8,
    },
]


const CategoryShowCase = () => {
    const [items, setItems] = useState(ProductData)

    //    category baded filtering
    const filterItem = (categItem) => {
        const updateItems = ProductData.filter((curElem) => {
            return curElem.cate === categItem;
        });
        setItems(updateItems)
    };
    return (<div className='course-section style-3 padding-tb'>
        {/*shapes*/}
        <div className='course-shape one'><img src='/src/assets/images/shape-img/icon/01.png' alt="" /></div>
        <div className='course-shape two'><img src='/src/assets/images/shape-img/icon/02.png' alt="" /></div>

        {/*main section*/}
        <div className='container'>
            {/* section header*/}
            <div className='section-header'>
                <h2 className='title'>{title}</h2>
                <div className='course-filter-group'>
                    <ul className='lab-ul'>
                        <li onClick={() => setItems(ProductData)}>All Products</li>
                        <li onClick={() => filterItem("Clothing")}>Clothing</li>
                        <li onClick={() => filterItem("Shoes")}>Shoes</li>
                        <li onClick={() => filterItem("Accessories")}>Accessories</li>
                    </ul>
                </div>

            </div>

            {/* section body*/}
            <div className='section-wrapper'>
                <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter'>
                    {
                        items.map((product) => <div key={product.id} className='col'>
                            <div className='course-item style-4'>
                                <div className='course-inner'>
                                    <div className='course-thumb'>
                                        <img src={product.imgUrl} alt='' />
                                        <div className='course-category'>
                                            <div className='course-cate'>
                                                <a href='#'>{product.cate}</a>
                                            </div>
                                            <div className='course-reiew'>
                                                <Ratting />
                                            </div>
                                        </div>
                                    </div>

                                    {/* content*/}
                                    <div className='course-content'>
                                        <Link to={`/shop/${product.id}`}><h6>{product.title}</h6></Link>
                                        <div className='course-footer'>
                                            <div className='course-author'>
                                                <Link to="/" className='ca-name'>{product.brand}</Link>
                                            </div>
                                            <div className='course-price'>
                                                {product.price}
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>)
                    }

                </div>

            </div>
        </div>
    </div>
    )
}

export default CategoryShowCase