import React from 'react';
import {ColumnsType} from "antd/es/table";
import {Table} from "antd";
import {gql, useQuery, useMutation} from "@apollo/client";

interface Author {
  key: React.Key;
  name: string;
  age: number;
  books: Book[];
}
interface Book {
  id: string;
  name: string;
  genre: string;
  author: Author;
  key: React.Key;
}

const columns: ColumnsType<Book> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Genre',
    dataIndex: 'genre',
    key: 'genre',
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  }
];
const GET_BOOKS = gql`
    {
        books {
            name,
            id,
            genre,
            author{
                name
            }
        }
    }
`
const BookList = () => {
  const {error, data, loading} = useQuery(GET_BOOKS);
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>{error.message}</div>
  }
  console.log(data.books[0].author);
  const transformedData = data.books.map((book: Book) => {
    return {
      id: book.id,
      name: book.name,
      genre: book.genre,
      key: book.id,
      author: book.author.name
    }
  });
  return (
      <>
        <h1>Book List</h1>
        <Table columns={columns} dataSource={transformedData} />
      </>
  );
};

export default BookList;