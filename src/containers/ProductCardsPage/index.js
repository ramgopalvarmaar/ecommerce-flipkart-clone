import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySearchTerm } from "../../actions";
import { Link } from "react-router-dom";
import Card from "../../components/UI/Card";
import { MaterialButton } from "../../components/MaterialUI";
import Rating from "../../components/UI/Rating";
import Layout from '../../components/Layout'
import Price from "../../components/UI/Price";
import "./style.css";
import PriceChart from './pricechart';
import AmazonWidget from './amazonadd';
import { SearchBar } from "../../components/SearchBar";

/**
 * @author
 * @function ProductCardsPage
 **/

const ProductCardsPage = (props) => {
  const product = useSelector((state) => state.product);
  const products = product.products;
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    console.log("######## ProductCardsPage match.params.searchTerm #######");
    console.log(match.params.searchTerm);
    dispatch(getProductsBySearchTerm(match.params.searchTerm));
  }, []);

  console.log("####### productDetails");
  console.log(products);
  const sortedProducts = products.sort((a, b) => Number(a.Price) - Number(b.Price));

  const productdata = {
    labels: products.map(mobile => mobile.vendor)
    .filter((value, index, self) => self.indexOf(value) === index),
    datasets: [
      {
        label: 'Rupees',
        data: products.map(mobile => mobile.Price)
        .filter((value, index, self) => self.indexOf(value) === index),
        fill: false,
        backgroundColor: '#ff9900',
        borderColor: '#035982',
      },
    ],
  };

  const chartoptions = {
    scales: {
      yAxes: [ {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Price'
        }
      } ]
    },
    plugins: {
      legend: {
        display: true
      }
    }
  };

  return (
    <Layout>
      <>
        <div class="price-cards-container">
            <div class="search-bar">
            <SearchBar></SearchBar>
            </div>
            <div class="card price-chart">
              <PriceChart data={productdata} options={chartoptions} />
            </div>
        <div >
          {sortedProducts.map((product, index) => (
                <div class="card border-success">
              <img class="product-image" src={product.ImgUrl} />
              <div class="product-card-body">
                <h5 class="card-title">{product.Title}</h5>
                {index == 0 &&
                  <p style={{color:"green", fontWeight:"bold"}}> Cheapest </p>
                }
                <p class="card-text" style={{fontWeight:"bold", fontSize:"18px"}}>
                  <Price value={product.Price} />
                </p>
                <div class="vendor-container">
                  <span>Buy From</span>&nbsp;&nbsp;
                  <a href={product.ProductUrl} target="_blank">
                    <img src={product.vendorImg} alt="vendor" height="100" class="image"></img>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
          <AmazonWidget />
        </div>
      </>
      </Layout>
  );
};

export default ProductCardsPage;
