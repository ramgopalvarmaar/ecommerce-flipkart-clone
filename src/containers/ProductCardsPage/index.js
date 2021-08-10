import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySearchTerm } from "../../actions";
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
        borderColor: '#rgb(80, 82, 82)',
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
          {sortedProducts.length > 0 ?
            <div>
              {sortedProducts.map((product, index) => (
                <div class="card border-success w3-container w3-animate-opacity">
                  <img class="product-image" src={product.ImgUrl} />
                  <div class="product-card-body">
                    <h5 class="card-title">{product.Title}</h5>
                    {index == 0 &&
                      <p style={{ color: "green", fontWeight: "bold" }}> Cheapest </p>
                    }
                    <p class="card-text" style={{ fontWeight: "bold", fontSize: "18px" }}>
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
            :
            <div>
              <div class="card border-success w3-container w3-animate-opacity">
                  <img class="product-image" src="https://live.staticflickr.com/1917/45259347801_1e899439f7_n.jpg" />
                  <div class="product-card-body" style={{textAlign:"center"}}>
                    <h5 class="card-title">Sorry! Couldn't find. Please try again later</h5>
                    <a target="_blank" href="https://www.amazon.in/s/ref=mega_elec_s23_1_1_1_1?rh=i%253Aelectronics%252Cn%253A1389401031&amp;ie=UTF8&amp;bbn=976419031&_encoding=UTF8&tag=geekyvids-21&linkCode=ur2&linkId=ca073eb0696e352578c6e03cff8880a5&camp=3638&creative=24630">
                      Try searching from amazon.in
                    </a>
                </div>
                </div>
            </div>
          }
          <AmazonWidget />
        </div>
      </>
      </Layout>
  );
};

export default ProductCardsPage;
