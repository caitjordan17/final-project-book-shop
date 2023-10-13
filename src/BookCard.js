import React from "react";


function BookCard({book}) {
  return (
    <div className="bookCard">
      <h2>{book.title}</h2>
      <h5>by {book.author}</h5>
      <img src={book.image} alt={book.name} className="bookCover"/>
      <div><p>{book.likes} Likes<button className="like-btn">♡</button></p></div>
    </div>
  );
}

export default BookCard;

//♡
//♥