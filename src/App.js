// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Reviews from './Reviews';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo
        isDiscount="true"
        nameProduct="Dress Code"
        category="SPORTS"
      />
      <Reviews />
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="baju-1.jpg" alt="" />
    </div>
  );
}

function CheckDiscount(props, propTypes) {
  const { isDiscount, discount } = props;
  if (isDiscount === "true") {
    return (
      <p>Diskon {discount}% Off</p>
    );
  } else if (isDiscount === "coming") {
    return (
      <p>Diskon akan datang</p>
    );
  } else {
    return (
      <p>Diskon tidak tersedia</p>
    );
  }
}

function ProdukInfo(props) {
  const { category, nameProduct, isDiscount } = props;
  const benefits = ["Baju tidak mudah kusut", "Mudah disetrika", "Warna tidak mudah luntur"];
  const listBenefits = benefits.map((itemBenefits) => (
    <li key={itemBenefits}>{itemBenefits}</li>
  ));
  
  return (
    <div className="Deskripsi">
      <p className="Cate">{category}</p>
      <h1 className="Title">{nameProduct}</h1>
      <CheckDiscount isDiscount={isDiscount} discount={50} />
      <p className="Price">Rp. 13.000.000;</p>
      <p className="Info">
        Lorem ipsum dolor sit amet consectetur adipisicing elitUllam neque rerum
        aperiam architecto ex, laudantium laborum temporibus vel repellat sequi
        quasi ipsum ea vero eveniet obcaecati consectetur,suscipit atque
        repellendus?
      </p>
      <ul>{listBenefits}</ul>
      <a onClick={(e) => TambahCart(nameProduct, e)} href="#">
        Add to cart
      </a>
    </div>
  );
}

function TambahCart(e) { 
  return console.log("Baju " + e + " Berhasil ditambahkan ke keranjang");
}

CheckDiscount.propTypes = {
  discount: PropTypes.number.isRequired
};

export default App;
