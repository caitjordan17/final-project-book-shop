import React, {useState} from "react";

function BookForm({addBook}) {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [url, setUrl] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        console.log(e)
        fetch('http://localhost:3000/books', {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                author: author,
                likes: 0,
                image: url,
            })
        })
        .then((r) => r.json())
        .then((data) => addBook(data))
    }

    return (
    <div className="book-form">
        <h2 id="new-book-h2">Let's Borrow a Book:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} name="title" placeholder="Book Title" onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" value={author} name="author" placeholder="Author" onChange={(e) => setAuthor(e.target.value)}/>
            <input type="text" value={url} name="image" placeholder="Book Cover URL" onChange={(e) => setUrl(e.target.value)}/>
            <button type="submit" id="book-btn">Add Book</button>
        </form>
        <img id="belle-gif" src="https://images.gr-assets.com/hostedimages/1381457293ra/4903435.gif" alt="belle library gif"/>
    </div>
  );
}

export default BookForm;
