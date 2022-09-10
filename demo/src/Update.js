import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Update = () => {
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState('');
    const history = useNavigate();
    const { id } = useParams();
 
    const updateProduct = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:3000/orders/${id}`, {
            product: product,
            quantity: quantity
        });
        history("/");
    }

    // useEffect(() => {
    //     getOrderById();
    // }, []);
 
    // const getOrderById = async () => {
    //     const response = await axios.get(`http://localhost:3000/orders/${id}`, {
    //         method: "GET",
    //     });
    //     setProduct(response.data.product);
    //     setQuantity(response.data.quantity);
    // }

    return (
        <div>
            <form onSubmit={ updateProduct }>
                <div className="field">
                <label className="label">Product Name</label>
                <input 
                className="input"
                type="text"
                placeholder="Product Name"
                value={ product }
                onChange={ (e) => setProduct(e.target.value) }
                />
                </div>
 
                <div className="field">
                <label className="label">Quantity</label>
                <input 
                className="input"
                type="number"
                placeholder="Quantity"
                value={ quantity }
                onChange={ (e) => setQuantity(e.target.value) }
                />
                </div>
 
                <div className="field">
                    <button>Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default Update;