import React from "react";
import { Link } from "react-router";

const ReadListedBooks = ({ singleBook }) => {
  const { bookName, bookId, author, image, rating, category, tags } = singleBook || {};
  return (
    <div>
      <div className="flex items-center gap-12 w-full p-6 border border-gray-200 rounded-2xl">
        <div className="px-12 py-7 bg-base-200 rounded-2xl">
          <img
            className="max-w-[129px] max-h-[564px]"
            src={image}
            alt="books"
          />
        </div>
        <div className="w-full">
          <h2 className="text-4xl font-bold">{bookName}</h2>
          <p className="text-xl font-medium mt-4">By:{author}</p>
          {/* tags */}
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
          <div className="flex gap-3">
            <p className="btn btn-soft btn-info rounded-3xl">
              Rating: {rating}
            </p>
            <p className="btn btn-soft btn-warning rounded-3xl">
              Category : {category}
            </p>
            <Link to={`/bookDetails/${bookId}`}><p className="btn btn-success rounded-3xl">View details</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadListedBooks;
