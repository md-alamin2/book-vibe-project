import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import ReadListedBooks from "../ReadListedBooks/ReadListedBooks";

const ReadList = () => {

    const [readList, steReadList]=useState([])
    const data = useLoaderData();

    useEffect(()=>{
        const storedBooks= getStoredBook();
        const convertedStoredBooks = storedBooks.map(id=>parseInt(id));
        const myReadList = data.filter(book=> convertedStoredBooks.includes(book.bookId));
        steReadList(myReadList);
    },[data])
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read books</Tab>
          <Tab>Wishlist books</Tab>
        </TabList>

        <TabPanel>
          <div className="mt-10 grid grid-cols-1 gap-4">
          {
            readList.map(book=> <ReadListedBooks key={book.bookId} singleBook={book}></ReadListedBooks>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
