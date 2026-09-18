import BookCard from "../components/BookCard";

const getBooks = async () => {
    const res = await fetch('http://localhost:5000/books')
    if (!res.ok) {
        throw new Error('Failed to load books.')
    }
    return res.json();
}
const BookPage = async () => {
    const books = await getBooks()
    return (
        <div>
            <h3>Total Books:{books.length}</h3>
            <div className="grid grid-cols-3 gap-4">
                {
                    books.map(book => <BookCard key={book.id} book={book}></BookCard>)
                }
            </div>

        </div>
    );
};

export default BookPage;