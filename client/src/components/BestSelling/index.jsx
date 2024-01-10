import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const BestSelling = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const res = await fetch("http://localhost:8000/api/products")
        const jsonData = await res.json()
        setData(jsonData)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <section id='bestselling'>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                className="mySwiper"
            >
                {
                    data && data.map((item) => (
                        <SwiperSlide>
                            <ul key={item._id}>
                                <img src={item.image} alt="" />
                                <li>{item.categories}</li>
                                <li>{item.title}</li>
                                <li>{item.price}</li>
                            </ul>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </section>
    )
}

export default BestSelling
