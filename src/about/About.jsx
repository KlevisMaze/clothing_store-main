import React from 'react'
import PageHeader from '../components/PageHeader';

const subTitle = "About Our Brand"; const title = "Built trust with the customers"; const desc = "Attrattivo company aims to expand its horizons to even more places and create multidimensional, subversive fashion that embraces body positivity and sustainability, while remaining true to its DNA and the type of woman it represents.";

const year = "10+"; const experience = "Years in Market";

const aboutList =[
{ imgUrl: '/src/assets/images/about/icon/01.jpg', imgAlt: 'about icon rajibraj91 rajibraj', title: 'Excellent Staff', desc: 'At Atra Shop, our team of dedicated professionals is committed to providing exceptional service. With their expertise and friendly approach, our staff ensures a personalized shopping experience that exceeds your expectations every time.', },
{ imgUrl: '/src/assets/images/about/icon/02.jpg', imgAlt: 'about icon rajibraj91 rajibraj', title: 'Multi Brand', desc: 'Atra Shop proudly offers a diverse selection of premium brands, including Attrattivo, Only, and Desire. Discover the latest in fashion and style from your favorite labels, all in one place.', }, 
{ imgUrl: '/src/assets/images/about/icon/03.jpg', imgAlt: 'about icon rajibraj91 rajibraj', title: 'Customer Support', desc: 'At Atra Shop, we prioritize your satisfaction with dedicated customer support available to assist with any inquiries, ensuring a seamless and enjoyable shopping experience.', },]

export const About = () => {
    return (
        <div>
            <PageHeader title={"About Our Brand"} curPage={"About"} />
            <div className='about-section style-3 padding-tb section-bg'>
                <div className='container'>
                    <div className='row justify-content-center row-cols-xl-2 row-cols-1 align-items-center'>
                        <div className='col'>
                            <div className='about-left'>
                                <div className="about-thumb">
                                    <img src='src/assets/images/about/icon/logo.webp' alt=''></img>
                                </div>
                                <div className='abs-thumb'>
                                    <img src='src/assets/images/sponsor/attrattivologo.png' alt=''></img>
                                </div>
                                <div className='about-left-content'>
                                    <h3>{year}</h3>
                                    <p>{experience}</p>
                                </div>
                            </div>
                        </div>

                        {/* sec col */}
                        <div className='col'>
                            <div className='about-right'>
                                <div className="section-header">
                                    <span className='subtitle'>{subTitle}</span>
                                    <h2 className='title'>{title}</h2>
                                    <p>{desc}</p>
                                </div>
                                <div className='section-wrapper'>
                                    <ul className='lab-ul'>
                                        {
                                            aboutList.map((val, i) =>(
                                                <li key={i}>
                                                    <div className='sr-left'>
                                                        <img src={val.imgUrl} alt=''></img>
                                                    </div>
                                                    <div className='sr-right'>
                                                        <h5>{val.title}</h5>
                                                         <p>{val.desc}</p>
                                                    </div>
                                                </li>
                                            ))
                                        }

                                    </ul>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
