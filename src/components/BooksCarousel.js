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
            src="https://www.freepik.com/free-psd/open-book-mockup_12953935.htm#query=books&position=30&from_view=search&track=sph"
            alt={this.props.books[i].title}
          />
          <Carousel.Caption>
            <h3>{this.props.books[i].title}</h3>
            <p>{this.props.books[i].description}</p>
            <p>{this.props.books[i].available ? 'We have this on the shelf!' : 'Apologies, we\'ll have to order this.'}</p>
            <Button id = {this.props.books[i]._id} variant='light' onClick={(e) => this.props.deleteHandler(e.target.id)}>Delete Book</Button>
          </Carousel.Caption>
        </Carousel.Item>
      );
    }

    return <Carousel>{items}</Carousel>;
  }
}

export default BooksCarousel;