/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Productdetail from './productdetail';
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useAuth0 } from '@auth0/auth0-react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import './product.css'

const Product = ({ product, setProduct, detail, view, close, setClose,addtocart }) => {

    // const [product, setProduct] = useState(Productdetail)
    const filtterproduct = (product) => {
        const update = Productdetail.filter((x) => {
            return x.Cat === product;
        })

        setProduct(update);
    }
    const AllProducts = () => {
        setProduct(Productdetail)
    }
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
                                                <img src={curElm.Img} alt={curElm.Titel}></img>
                                            </div>
                                            <div className='detail'>
                                                <h4>{curElm.Cat}</h4>
                                                <h2>{curElm.Titel}</h2>
                                                <p>A Screen Everyone Will Love:Whether your family is streaming or video chatting with friend tablet A8...</p>
                                                <h3>{curElm.Price}</h3>
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
            <div className='products'>
                <h2> # Product</h2>
                <p>Home . products</p>
                <div className='container'>
                    <div className='filter'>
                        <div className='categories'>
                            <h3>categories</h3>
                            <ul>
                                <li onClick={() => AllProducts()}>All Product</li>
                                <li onClick={() => filtterproduct("Headphone")}>Headphone</li>
                                <li onClick={() => filtterproduct("Cup")}>Cup</li>
                                <li onClick={() => filtterproduct("Watch")}>Watch</li>
                                <li onClick={() => filtterproduct("Camera")}>Camera</li>
                                <li onClick={() => filtterproduct("Battery")}>Battery</li>
                                <li onClick={() => filtterproduct("Mobile")}>Mobile</li>

                            </ul>
                        </div>
                    </div>
                    <div className='productbox'>
                        <div className='contant'>
                            {
                                product.map((curElm) => {
                                    return (
                                        <>
                                            <div className='box' key={curElm.id}>
                                                <div className='img_box'>
                                                    <img src={curElm.Img} alt={curElm.Titel}></img>
                                                    <div className='icon'>
                                                        <li onClick={() => addtocart (curElm)}><CiShoppingCart /></li>
                                                        <li onClick={() => view(curElm)}><MdOutlineRemoveRedEye /></li>
                                                        <li><FaRegHeart /></li>
                                                    </div>
                                                </div>
                                                <div className='detail'>
                                                    <p>{curElm.Cat}</p>
                                                    <h3>{curElm.Titel}</h3>
                                                    <h4>Tk{curElm.Price}</h4>

                                                </div>

                                            </div>
                                        </>
                                    )
                                }
                                )
                            }


                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Product