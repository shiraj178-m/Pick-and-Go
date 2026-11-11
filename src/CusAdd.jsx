
import { useState } from "react";
import "./App.css";
import { useLocation } from "react-router-dom";

export default function CusAdd({ cartItems = [] }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        pincode: "",
        country: "",
    });

    const location = useLocation();

    const {
        selectedProduct = null,
        quantity = 1,
    } = location.state || {};



    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Address submitted successfully!");
    };

    const totalPrice = cartItems.reduce(
        (total, item) => total + Number(item.price) * item.quantity,
        0
    );

    return (
        <div className="Full-form d-flex justify-content-center align-items-center gap-5">

            {/* ADDRESS FORM */}

            <div className="address-form  d-flex justify-content-center    ">


                <form onSubmit={handleSubmit}>

                    <div className="person-name d-flex gap-3">
                        <div >
                            <h6>First Name</h6>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Enter First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <h6>Last Name</h6>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Enter Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="adress d-flex flex-column">
                        <h6>Address 1</h6>
                        <input
                            type="text"
                            name="address1"
                            placeholder="Enter your address"
                            value={formData.address1}
                            onChange={handleChange}
                            required
                        />

                        <h6>Address 2 (Optional)</h6>
                        <input
                            type="text"
                            name="address2"
                            placeholder="Apartment, street, landmark"
                            value={formData.address2}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="city-state d-flex gap-3">
                        <div>
                            <h6>City</h6>
                            <input
                                type="text"
                                name="city"
                                placeholder="City Name"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <h6>State</h6>
                            <input
                                type="text"
                                name="state"
                                placeholder="State"
                                value={formData.state}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="city-state d-flex gap-3">
                        <div>
                            <h6>ZIP / Postal Code</h6>
                            <input
                                type="text"
                                name="pincode"
                                placeholder="eg. 600028"
                                value={formData.pincode}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <h6>Country</h6>
                            <input
                                type="text"
                                name="country"
                                placeholder="eg. India"
                                value={formData.country}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-success mt-3">
                        Proceed to Pay
                    </button>

                </form>
            </div>

            {/* ORDER SUMMARY */}

            <div className="order-summary">
                <h4>Order Summary</h4>

                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div key={item.cartId || item.id}> <p>
                            {item.name} × {item.quantity || 1} </p>

                            <p>
                                ₹{Number(item.price) * (item.quantity || 1)}
                            </p>
                        </div>
                    ))


                ) : selectedProduct ? (<div> <p>
                    {selectedProduct.name} × {quantity} </p>


                    <p>
                        <span className="delivery">
                             Delivery fee = 50</span>
                        <br />

                      <p className="total-price">₹ Total: ₹
                        {cartItems.length > 0
                            ? cartItems.reduce(
                                (total, item) => total + Number(item.price) * item.quantity,
                                0
                            ) + 50
                            : selectedProduct
                                ? Number(selectedProduct.price) * quantity + 50
                                : 0}</p>  

                    </p>
                </div>


                ) : (

                    <p>Your cart is empty!</p>
                )}

            </div>




        </div>


    );
}
