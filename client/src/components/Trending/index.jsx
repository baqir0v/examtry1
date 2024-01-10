import React, { useEffect, useState } from 'react'
import "./index.scss"

const Trending = () => {
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
        <section id='trending'>
            <div className="container">
                <div className="producttext">
                    <p>Popular Item in the market</p>
                    <h2>Trending <span class="section-intro__style">Product</span></h2>
                    <div className="products">
                        {data && data.map((item) => (
                            <ul key={item._id}>
                                <img src={item.image} alt="" />
                                <p>{item.categories}</p>
                                <h4>{item.title}</h4>
                                <li>${item.price}.00</li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trending
