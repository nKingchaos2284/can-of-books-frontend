import React from "react";
import styles from "./BooksCarousel.module.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

class BooksCarousel extends React.Component {
  render() {
    let items = [];
    for (let i = 0; i < this.props.books.length; i++) {
      items.push(
        <Carousel.Item key = {this.props.books[i]._id} className = {styles.BooksCarousel__container}>
            <img
            className= {`d-block w-50 ${styles.BooksCarousel}`}
            src="https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg"
            alt={this.props.books[i].title}
          />
           <Carousel.Caption>
            <h3>{this.props.books[i].title}</h3>
            <p>{this.props.books[i].description}</p>
            <p>{this.props.books[i].available ? 'We have this in stock!' : 'Sorry, we\'ll have to order this.'}</p>
            <Button id = {this.props.books[i]._id} variant='danger' onClick={(e) => this.props.deleteHandler(e.target.id)}>Delete Book</Button>
            <Button id = {this.props.books[i]._id} variant='light' onClick={(e) => this.props.updateHandler(e.target.id)}>Edit Book</Button>
          </Carousel.Caption>
        </Carousel.Item>
      );
    }

    return <Carousel>{items}</Carousel>;
  }
}

export default BooksCarousel;