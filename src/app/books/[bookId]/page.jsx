import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const generateStaticParams = async () => {
    const res = await fetch('http://localhost:5000/books')
    const books = await res.json()
    return books.slice(0, 3).map(book => ({ bookId: book.id }))
}
const BookDetailPage = async ({ params }) => {
    const { bookId } = await params;
    const res = await fetch(`http://localhost:5000/books/${bookId}`)
    const book = await res.json()
    return (
        <div className="card card-border bg-base-100 max-w-xl mx-auto shadow-sm">
            <figure className="bg-gray-100">
                <Image
                    src={book.image}
                    alt={book.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                />
            </figure>

            <div className="card-body">

                <div className="flex justify-between items-center">
                    <span className="badge badge-primary">
                        {book.category}
                    </span>

                    <span className="text-yellow-500 font-semibold">
                        ⭐ {book.rating}
                    </span>
                </div>

                <h2 className="card-title">
                    Book Name: {book.name}
                </h2>
                <div>
                    <span>Wrriten By:{book.author}</span>
                </div>

                <p className="text-sm text-gray-500">
                    {book.description}
                </p>

                <div className="card-actions justify-between items-center mt-4">
                    <span className="text-2xl font-bold">
                        ${book.price}
                    </span>
                    <Link href={`/books`}><button className='btn btn-outline btn-warning'>Back </button></Link>
                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;