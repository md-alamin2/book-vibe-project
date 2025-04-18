import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const { bookName, author, bookId, image, rating, category, tags } = singleBook;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 shadow-sm p-6">
        <figure className="py-8 bg-base-200 rounded-2xl">
          <img className="h-40" src={image} alt="Shoes" />
        </figure>
        <div className="card-body border-b border-dashed">
          <div className="card-actions">
            {tags.map((tag, index) => (
              <div key={index} className="badge badge-soft badge-success">{tag}</div>
            ))}
          </div>
          <h2 className="card-title text-2xl font-bold">{bookName}</h2>
          <p className="font-medium">By: {author}</p>
        </div>
        <div className="flex justify-between items-center mt-5">
          <p className="font-medium">{category}</p>
          <div className="flex items-center gap-1">
            <p>{rating}</p>
            <Star />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
