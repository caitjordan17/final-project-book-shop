import React from "react";


function BookCard({book, handleLike}) {

    function updateLikes(){
        fetch(`http://localhost:3000/books/${book.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                likes: book.likes+1,
            })
        })
        .then((r) => r.json())
        .then(handleLike)
    }
  
    return (
    <div className="bookCard">
      <h2>{book.title}</h2>
      <h5>by {book.author}</h5>
      <img src={book.image} alt={book.name} className="bookCover"/>
      <div>
        <p>{book.likes} {book.likes === 1 ? "Like" : "Likes"}
            <button className="like-btn" onClick={updateLikes}>
                {book.likes > 0 ? "♥" : "♡"}
            </button>
        </p>
      </div>
    </div>
  );
}

export default BookCard;