import React, { Component } from 'react';

export default class ShoeItem extends Component {
  render() {
    const { shoe, handleAddShoe } = this.props;
    return (
      <div className="card mx-3 mt-3" style={{ height: 500 }}>
        <img className="card-img-top" src={shoe.image} height={300} alt="Title" />
        <div className="card-body" style={{ fontSize: '16px' }}>
          <h4 className="card-title">{shoe.name}</h4>
          <p>{shoe.price}$</p>
          <button onClick={() => handleAddShoe(shoe)} className="btn btn-success">
            Add to Cart <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    );
  }
}
