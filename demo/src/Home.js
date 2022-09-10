import './App.css';
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

export default function Home() {
  const [orders, setOrders] = useState([{}]);
  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
  const response = await axios.get('http://localhost:3000/orders', 
    {
      body: JSON.stringify(),
      headers: {
      'Content-Type': 'application/json'
    },
  });
    setOrders(response.data);
  }
  
  return (
    <div className='App'>
    <table id='customers'>
    <thead>
      <h1>Farmer's market</h1>
      <tr>
        <th>No</th>
        <th>Product</th>
        <th>Quantity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        { 
        orders.map((order, index) => (
        <tr key={ order._id }>
          <td>{ index + 1 }</td>
          <td>{ order.product }</td>
          <td>{ order.quantity }</td>
          <td>
          <button className='edit'><Link to={`/update/${order._id}`}><AiFillEdit /></Link></button>
          </td>
        </tr>
        )) 
        }             
      </tbody>
    </table>
      <p>
        <button className='add'><Link to="/create">Add New</Link></button>
      </p>
    </div>
  );
}