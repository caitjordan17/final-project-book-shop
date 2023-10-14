import React from "react";
import BookCard from "./BookCard"


function Bookcase({books, handleLike}) {
    return (
    <div>
        {books.map((book) => (
            <BookCard book={book} key={book.id} handleLike={handleLike}/>
        ))}
    </div>
  );
}

export default Bookcase;