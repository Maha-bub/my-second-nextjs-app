import Image from 'next/image';
import React from 'react';

const BookCard = ({ book }) => {
    const { name, author, price, category, rating, stock, image, description } = book
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
                    Book Name: {name}
                </h2>
                <div>
                    <span>Wrriten By:{author}</span>
                </div>

                <p className="text-sm text-gray-500">
                    {description}
                </p>

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

export default BookCard;