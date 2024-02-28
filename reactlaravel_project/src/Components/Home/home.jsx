import React from 'react'
import { Link } from 'react-router-dom'
import Homeproduct from './homeproduct';
import { FaArrowRight } from "react-icons/fa";
import { FaTruck } from "react-icons/fa6";
import { TbCoinTaka } from "react-icons/tb";
import { CiPercent } from "react-icons/ci";
import { FaHeadphones } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
// import Homeproduct from './homeproduct';
import './home.css'

const Home = ({detail , view ,close,setClose,addtocart}) => {
  // const [homeProduct ,setHomeproduct] = useState(Homeproduct)
  return (
    <>
{
                close ?

                    <div className='product_detail'>
                        <div className='container'>
                            <button onClick={() => setClose(false)} className='closebtn'><IoIosCloseCircleOutline /></button>
                            {
                                detail.map((curElm) => {
                                    return (
                                        <div className='productbox'>
                                            <div className='img-box'>
                                                <img src={curElm.Img} width={550} height={325} alt={curElm.Titel}></img>
                                            </div>
                                            <div className='detail'>
                                                <h4>{curElm.Cat}</h4>
                                                <h2>{curElm.Titel}</h2>
                                                <p>A Screen Everyone Will Love:Whether your family is streaming or video chatting with friend tablet A8...</p>
                                                <h3>Tk{curElm.Price}</h3>
                                                <button>Add To Cart</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className='productbox'></div>
                        </div>
                    </div> : null
            }




      <div className='top_banner'>
        <div className='container'>
          <div className='detail'>
            <h2>The best note book colletion 2023</h2>
            <Link to="/product" className='link'>Shop Now <FaArrowRight /></Link>
          </div>
          <div className='img_box'>
            {/* <img src="" alt="" /> */}
            <img src="./img/slider2.jpg" width={550} height={325} alt="sliderimg" />

          </div>
        </div>
      </div>

      <div className='product_type'>
        <div className='container'>
          <div className='box'>
            <div className='img_box'>
              <img src="./img/box3.jpg" width={200} height={200} alt="mobile"></img>
            </div>
            <div className='detail'>
              <p>45 products</p>
            </div>
          </div>

          <div className='box'>
            <div className='img_box'>
              <img src="./img/watch1.jpg" width={200} height={200} alt="mobile"></img>
            </div>
            <div className='detail'>
              <p>40 products</p>
            </div>
          </div>

          <div className='box'>
            <div className='img_box'>
              <img src="./img/earphones.jpg" width={200} height={200} alt="mobile"></img>
            </div>
            <div className='detail'>
              <p>50 products</p>
            </div>
          </div>

          <div className='box'>
            <div className='img_box'>
              <img src="./img/cup1.jpg" width={200} height={200} alt="mobile"></img>
            </div>
            <div className='detail'>
              <p>60 products</p>
            </div>
          </div>
        </div>
      </div>

      {/* about section */}

      <div className='about'>
        <div className='container'>
          <div className='box'>
            <div className='icon'>
              <FaTruck />
            </div>
            <div className='detail'>
              <h3>Free Shipping</h3>
              <p>Order above $1000</p>
            </div>
          </div>

          <div className='box'>
            <div className='icon'>
              <TbCoinTaka />
            </div>
            <div className='detail'>
              <h3>Member Discount</h3>
              <p>On every Order</p>
            </div>
          </div>

          <div className='box'>
            <div className='icon'>
              <CiPercent />
            </div>
            <div className='detail'>
              <h3>Return & Refund</h3>
              <p>Money Back Gaurenty</p>
            </div>
          </div>

          <div className='box'>
            <div className='icon'>
              <FaHeadphones />
            </div>
            <div className='detail'>
              <h3>Customer Support</h3>
              <p>Every Time Call Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* about section */}

      <div className='product'>
        <h2>Top Products</h2>
        <div className='container'>
          {
            Homeproduct.map((curElm) => {
              return (
                <div className='box' key={curElm.id}>
                  <div className='img_box'>
                    <img src={curElm.Img} alt={curElm.Titel}></img>
                    <div className='icon'>
                      <li onClick={() => addtocart (curElm)}><CiShoppingCart /></li>
                      <li onClick={() => view (curElm)}><MdOutlineRemoveRedEye /></li>
                      <li><FaRegHeart /></li>
                    </div>
                  </div>
                  <div className='detail'>
                    <p>{curElm.Cat}</p>
                    <h3>{curElm.Titel}</h3>
                    <h4>{curElm.Price}</h4>
                  </div>
                </div>

              )
            })
          }

        </div>
      </div>

      {/* banner section */}


      <div className='banner'>
        <div className='container'>
          <div className='detail'>
            <h4>LATES TECHNOLOGY ADDED</h4>
            <h3>Apple ipad 10.2 Gen</h3>
            <p> TK 10000</p>
            <Link to='/product' className='link'>Shop Now <FaArrowRight /></Link>
          </div>
          <div className='img_box'>
            <img src="./img/slider3.jpg" width={550} height={325} alt="sliderimg"></img>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home