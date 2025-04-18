import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ books }) => {
  return (
    <div className="mt-28">
      <h3 className="text-3xl font-semibold text-center">Books</h3>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-self-center mt-9">
        {books.map((singleBook) => (
          <Book key={singleBook.bookId} singleBook={singleBook}></Book>
        ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
