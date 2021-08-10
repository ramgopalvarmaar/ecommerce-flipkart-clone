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
                <img src="https://i.im.ge/2021/08/10/9SY5D.png" alt="photo" />
            </div>

            <div class="photo w3-container w3-center w3-animate-right">
                <img src="https://i.im.ge/2021/08/10/9SCNh.png" alt="photo" />
            </div>

            <div class="photo w3-container w3-center w3-animate-right">
                <img src="https://i.im.ge/2021/08/10/9S3rY.png" alt="photo" />
            </div>

            <div class="photo w3-container w3-center w3-animate-right">
                <img src="https://i.im.ge/2021/08/10/9StJX.png" alt="photo" />
            </div>

            <div class="photo w3-container w3-center w3-animate-right">
                <img src="https://i.im.ge/2021/08/10/9SAS8.png" alt="photo" />
            </div>

            <div class="photo w3-container w3-center w3-animate-right">
                <img src="https://i.im.ge/2021/08/10/9SEfM.png" alt="photo" />
            </div>
            <div class="w3-container w3-center w3-animate-right" style={{paddingTop:"10px"}}>+more</div>
          </div>
          </div>
      </div>
    </Layout>
  )

}

export default HomePage