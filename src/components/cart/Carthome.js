import React from 'react'
import Cartitem from './Cartitem'
import cartdata from './cartdata'

const carthome = () => {
    console.warn(cartdata.productData)
    return (
        <>
            <h1 className="text-center mt-3">All Items </h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {cartdata.productData.map((item, index) => {
                        return (
                            <Cartitem
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                                item={item} key={index}
                            />
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default carthome;