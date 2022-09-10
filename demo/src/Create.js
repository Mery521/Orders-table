import React from "react";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import axios from "axios";

const Create = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const history = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/orders',{
        product: product,
        quantity: quantity
    });
    history("/");
}

  return (
    <div>
    <form onSubmit={ saveProduct }>
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
  );
};

export default Create;