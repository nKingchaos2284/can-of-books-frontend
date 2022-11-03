import axios from 'axios';
import React from 'react';
import BooksCarousel from './BooksCarousel.js';
import ConfirmModal from './ConfirmModal';
import UpdateModal from './UpdateModal';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
      showUpdateModal: false,
      delete_id: "",
      update_id: "",
      available: false
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  getBooks = async () => {
    try {
      let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      this.setState({
        books: bookData.data,
      });
      console.log("We have books fool!");
      console.log(this.state.books);
    } catch (error) {
      console.log("Books not retrieved due to: ", error.response);
    }
  };


  handleCheckbox = event => {
    this.setState({
      available: event.target.checked
    })
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleCloseUpdate = () => {
    this.setState({ showUpdateModal: false });
  };

  deleteHandler = (id) => {
    console.log(id);
    this.setState({
      showModal: true,
      delete_id: id
    });
  };

  updateHandler = (id) => {
    console.log(id);
    this.setState({
      showUpdateModal: true,
      update_id: id,
    });
  };

  updateBook = async (updatedBookObj) => {
    let id = this.state.update_id;
    console.log(id, updatedBookObj);
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`;
      await axios.put(url, updatedBookObj);

      let updatedBooks = this.state.books.filter((book) => book._id !== id);

      this.setState({
        books: [...updatedBooks, updatedBookObj]
      });
    } catch (error) {
      console.log("Book not updated due to: " + error.message);
    }
    this.handleCloseUpdate();
  };

  submitUpdate = (e) => {
    e.preventDefault();
    console.log(e.target.title.value);
    this.updateBook({
      title: e.target.title.value,
      description: e.target.description.value,
      available: this.state.available,
    });
  };


  deleteBooks = async () => {
    let id = this.state.delete_id;

    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`;
      await axios.delete(url);

      let updatedBooks = this.state.books.filter((book) => book._id !== id);

      this.setState({
        books: updatedBooks,
      });

    } catch (error) {
      console.log("Book not deleted due to: " + error.message);
    }
    this.handleCloseModal();
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {
    
    return (
      <>
        <h2>The e_library of @lexandr.ia</h2>

        {this.state.books.length ? (
          <BooksCarousel
            books={this.state.books}
            deleteHandler={this.deleteHandler}
            updateHandler={this.updateHandler}
          />

        ) : (
          <h3>No Books Found</h3>
        )}
         <ConfirmModal
          show={this.state.showModal}
          onHide={this.handleCloseModal}
          delete={this.deleteBooks}
        />
          <UpdateModal
            show={this.state.showUpdateModal}
            onHide={this.handleCloseUpdate}
            submitUpdate={this.submitUpdate}
            handleCheckbox = {this.handleCheckbox}
            available = {this.state.available}
          />
        </>
        );
      }
    }

export default BestBooks;