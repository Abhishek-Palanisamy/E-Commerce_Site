import React, { useEffect, useState } from 'react';
import '../Assests/CSS/Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart, removeSingleIteams, emptycartIteam } from '../Redux/features/cartSlice';
import { toast } from 'react-toastify';
import Navbar1 from '../Components/Navbar1';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { carts } = useSelector((state) => state.allCart);
  const [totalprice, setPrice] = useState(0);
  const [totalquantity, setTotalQuantity] = useState(0);
  const dispatch = useDispatch();

  // store product names in local storage
  const storeProductNames = (names) => {
    localStorage.setItem('productNames', JSON.stringify(names));
  };

  // retrieve product names from local storage
  const retrieveProductNames = () => {
    const storedNames = localStorage.getItem('productNames');
    return storedNames ? JSON.parse(storedNames) : {};
  };

  // add to cart
  const handleIncrement = (e) => {
    dispatch(addToCart(e));
  };

  // remove to cart
  const handleDecrement = (e) => {
    dispatch(removeToCart(e));
  };

  // remove single item
  const handleSingleDecrement = (e) => {
    dispatch(removeSingleIteams(e));
  };

  // empty cart
  const emptycart = () => {
    dispatch(emptycartIteam());
  };

  // count total price
  const total = () => {
    let totalprice = 0;
    carts.map((ele, ind) => {
      totalprice = ele.price * ele.qnty + totalprice;
    });
    setPrice(totalprice);
    localStorage.setItem('totalprice', totalprice);
  };

  // count total quantity
  const countquantity = () => {
    let totalquantity = 0;
    carts.map((ele, ind) => {
      totalquantity = ele.qnty + totalquantity;
    });
    setTotalQuantity(totalquantity);
  };

  useEffect(() => {
    total();
  }, [total]);

  useEffect(() => {
    countquantity();
  }, [countquantity]);

  useEffect(() => {
    // Update stored product names whenever carts change
    const productNames = {};
    carts.forEach((product) => {
      productNames[product.id] = product.name;
    });
    storeProductNames(productNames);
  }, [carts]);

  return (
    <>
      <Navbar1 />
      <div className='row justify-content-center mb-2'>
        <div className='col-md-8 mt-5 mb-5 cardsdetails'>
          <div className="card">
            <div className="card-header bg-dark p-3">
              <div className='card-header-flex'>
                <h5 className='text-white m-0'>Cart {carts.length > 0 ? `(${carts.length})` : ""}</h5>
                {carts.length > 0 ? (
                  <button
                    className='btn btn-danger mt-0 btn-sm btn-empty'
                    onClick={emptycart}
                  >
                    <i className='fa fa-trash-alt'></i>
                    <span> EmptyCart</span>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="card-body p-0">
              {carts.length === 0 ? (
                <table className='table cart-table mb-0'>
                  <tbody>
                    <tr>
                      <td colSpan={6}>
                        <div className='cart-empty'>
                          <i className='fa fa-shopping-cart'></i>
                          <p>Your Cart Is Empty</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table className='table cart-table mb-0 table-responsive-sm'>
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th className='text-right'>
                        <span id="amount" className='amount'>
                          Total Amount
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts.map((data, index) => {
                      const storedNames = retrieveProductNames();
                      const productName = storedNames[data.id] || data.name;

                      return (
                        <tr key={index}>
                          <td>
                            <button
                              className='prdct-delete '
                              onClick={() => handleDecrement(data.id)}
                            >
                              <i className='fa fa-trash-alt'></i>
                            </button>
                          </td>
                          <td>
                            <div className='product-img'>
                              <img src={data.img} alt="" />
                            </div>
                          </td>
                          <td>
                            <div className='product-name'>
                              <p>{productName}</p>
                            </div>
                          </td>
                          <td>{data.price}</td>
                          <td>
                            <div className="prdct-qty-container">
                              <button
                                className='prdct-qty-btn'
                                type='button'
                                onClick={
                                  data.qnty <= 1
                                    ? () => handleDecrement(data.id)
                                    : () => handleSingleDecrement(data)
                                }
                              >
                                <i className='fa fa-minus'></i>
                              </button>
                              <input
                                type="number"
                                className='qty-input-box'
                                value={data.qnty}
                                disabled
                                name=""
                                id=""
                              />
                              <button
                                className='prdct-qty-btn'
                                type='button'
                                onClick={() => handleIncrement(data)}
                              >
                                <i className='fa fa-plus'></i>
                              </button>
                            </div>
                          </td>
                          <td className='text-right'>
                            ₹ {data.qnty * data.price}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>&nbsp;</th>
                      <th colSpan={3}>&nbsp;</th>
                      <th>
                        Items In Cart{" "}
                        <span className='ml-2 mr-2'>:</span>
                        <span className='text-danger'>{totalquantity}</span>
                      </th>
                      <th className='text-right'>
                        Total Price
                        <span className='ml-2 mr-2'>:</span>
                        <span className='text-danger'> ₹{totalprice}</span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              )}
            </div>
            <div>
              {" "}
              <Link to='/billing'>
                {" "}
                <button className='btn-primary btn-checkout '>
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <br /><br />
      <Footer />
    </>
  );
};

export default Cart;
