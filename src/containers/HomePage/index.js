import React from 'react'
import Layout from '../../components/Layout'
import MenuHeader from '../../components/MenuHeader'
import { faAmazon } from '@fortawesome/free-brands-svg-icons'
import ratestarLogo from "../../images/logo/ratestar-bgremoved.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SearchBar } from "../../components/SearchBar";
import "./style.css";


/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
  return (
    <Layout>
      <div>
      <div style={{ marginTop: "0px" }}>
          <div class="jumbotron" style={{textAlign: "center", backgroundColor:"#ffffff00"}}>
            <img src={ratestarLogo} style={{width: "40%"}}/>
            <p style={{fontWeight:"bold"}}>Find cheapest mobile across your favorite online shopping sites. All in one place..</p>
          </div>
        </div>
        <div class="vendorInfo">
          <div class="search-div">
            <SearchBar></SearchBar>
          </div>
          <div style={{marginTop:"30px"}}></div>
          <h1 style={{fontSize:"18px"}}>We compare multiple shopping sites at once</h1>
          <div class="images">
            <div class="photo w3-container w3-center w3-animate-right">
                <img src="https://logos-download.com/wp-content/uploads/2016/09/Flipkart_logo.png" alt="photo" />
            </div>

            <div class="photo w3-container w3-center w3-animate-right">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Poorvika-logo1.png" alt="photo" />
            </div>

            <div class="photo w3-container w3-center w3-animate-right">
                <img src="http://www.pngimagesfree.com/LOGO/R/Reliance-Digital/Reliance-Digital-Logo-PNG-Transparent-image.png" alt="photo" />
            </div>

            <div class="photo w3-container w3-center w3-animate-right">
                <img src="https://cdn.icon-icons.com/icons2/2429/PNG/512/mi_logo_icon_147262.png" alt="photo" />
            </div>

            <div class="photo w3-container w3-center w3-animate-right">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Tata_Cliq_Logo.png/320px-Tata_Cliq_Logo.png" alt="photo" />
            </div>

            <div class="photo w3-container w3-center w3-animate-right">
                <img src="https://www.seekpng.com/png/full/147-1471515_credit-card-logos-png-tata-croma-logo-png.png" alt="photo" />
            </div>
            <div class="w3-container w3-center w3-animate-right" style={{paddingTop:"10px"}}>+more</div>
          </div>
          </div>
      </div>
    </Layout>
  )

}

export default HomePage