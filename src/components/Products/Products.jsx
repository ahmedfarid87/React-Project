import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products`
    );
    setProducts(data.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <section className="portfolio px-5 pt-32 pb-24 text-center">
        <h2 className="uppercase text-4xl font-bold">Products</h2>

        <div className="star my-5 flex items-center justify-center">
          <span className="w-20 h-1 bg-black"></span>
          <i className="fa-solid fa-star mx-5"></i>
          <span className="w-20 h-1 bg-black"></span>
        </div>

        {products.length ? (
          <div className="data flex flex-wrap">
            {products.map((el, i) => (
              <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-3">
                <div className="item">
                  <img className="w-full" src={el.imageCover} alt="" />
                  <h3>{el.title}</h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-screen flex justify-center items-center">
            <i className="fas fa-spinner fa-spin-pulse fa-5x"></i>
          </div>
        )}
      </section>
    </>
  );
}
