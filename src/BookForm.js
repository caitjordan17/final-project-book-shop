import React, {useState} from "react";


function BookForm({handleUpdate, books}) {
    const [formData, setFormData] = useState({
        id:0,
        title: "",
        author: "",
        likes: 0,
        image: "",
    })
    const idNumber = (books.length + 1)

    function handleChange(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(e)
        fetch('http://localhost:3000/books', {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: idNumber,
                title: formData.title,
                author: formData.author,
                likes: 0,
                image: formData.image,
            })
        })
        handleUpdate(formData);
    }

    return (
    <div className="book-form">
        <h2 id="new-book-h2">Let's Borrow a Book:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Book Title" onChange={(e) => handleChange(e)}/>
            <input type="text" name="author" placeholder="Author" onChange={(e) => handleChange(e)}/>
            <input type="text" name="image" placeholder="Book Cover URL" onChange={(e) => handleChange(e)}/>
            <button type="submit" id="book-btn">Add Book</button>
        </form>
        <img id="belle-gif" src="https://images.gr-assets.com/hostedimages/1381457293ra/4903435.gif" alt="belle library gif"/>
    </div>
  );
}

export default BookForm;