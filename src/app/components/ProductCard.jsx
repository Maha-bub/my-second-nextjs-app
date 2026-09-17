import Image from 'next/image';
import React from 'react';

const ProductCardPage = ({ product }) => {
    const {
        name,
        price,
        category,
        brand,
        image,
        description,
        rating,
        stock,
        watchType,
        color
    } = product;

    return (
        <div className="card card-border bg-base-100 shadow-sm">
            <figure className="bg-gray-100">
                <Image
                    src={image}
                    alt={name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                />
            </figure>

            <div className="card-body">
                <div className="flex justify-between items-center">
                    <span className="badge badge-primary">
                        {category}
                    </span>

                    <span className="text-yellow-500 font-semibold">
                        ⭐ {rating}
                    </span>
                </div>

                <h2 className="card-title">
                    {name}
                </h2>

                <p className="text-sm text-gray-500">
                    {description}
                </p>

                <div className="flex justify-between items-center space-y-1 text-sm mt-2">
                    <p><span className="font-semibold">Brand:</span> {brand}</p>

                    <p><span className="font-semibold">Type:</span> {watchType}</p>

                    <p><span className="font-semibold">Color:</span> {color}</p>

                    <p><span className="font-semibold">Stock:</span> {stock}</p>
                </div>
                <div className="card-actions justify-between items-center mt-4">
                    <span className="text-2xl font-bold">
                        ${price}
                    </span>
                    <button className="btn btn-primary">                        Buy Now                    </button>
                </div>
            </div>
        </div>
    );
};


export default ProductCardPage;