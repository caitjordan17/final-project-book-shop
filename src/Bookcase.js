import React, {useState, useEffect} from "react";
import BookCard from "./BookCard"
import BookForm from "./BookForm"


function Bookcase() {
  
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/books')
            .then((r) => r.json())
            .then((r) => setBooks(r))
    }, [])

    console.log(books)

    return (
    <div>
        {books.map((book) => (
            <BookCard book={book} key={book.id}/>
        ))}
        <BookForm />
    </div>
  );
}

export default Bookcase;