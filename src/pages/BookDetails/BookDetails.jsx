import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const booksId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === booksId);
  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = singleBook || {};

  const handleMarkAsRead = (id) => {
    MySwal.fire({
      title: "Good job!",
      text: "Book added to read list!",
      icon: "success",
    });
    addToStoredDB(id);
  };
  return (
    <div className="flex items-center gap-12">
      <div className="p-[74px] bg-base-200 rounded-2xl">
        <img className="max-w-[425px] max-h-[564px]" src={image} alt="books" />
      </div>
      <div>
        <h2 className="text-4xl font-bold">{bookName}</h2>
        <p className="text-xl font-medium mt-4">By:{author}</p>
        <div className="divider"></div>
        <p className="text-xl font-medium">{category}</p>
        <div className="divider"></div>
        <p>
          <span className="font-bold">Review</span> : {review}
        </p>
        <div className="flex gap-4 mt-6">
          <p className="font-bold">Tags</p>
          <div className="flex gap-3">
            {tags.map((tag, index) => (
              <p key={index} className="badge badge-soft badge-success">
                #{tag}
              </p>
            ))}
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <p>
            Number of Pages: <span className="font-semibold">{totalPages}</span>
          </p>
          <p>
            Publisher: <span className="font-semibold">{publisher}</span>
          </p>
          <p>
            Year of Publishing:{" "}
            <span className="font-semibold">{yearOfPublishing}</span>
          </p>
          <p>
            rating: <span className="font-semibold">{rating}</span>
          </p>
        </div>
        <div className="flex gap-4 mt-8">
          <button onClick={() => handleMarkAsRead(id)} className="btn">
            Mark as Read
          </button>
          <button className="btn btn-accent text-white">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
