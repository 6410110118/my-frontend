import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
    const [product, setProduct] = useState({
        name: '',
        imag: '',
        short_description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/', product)
            .then(response => {
                console.log('Product added successfully', response.data);
                // หลังจากเพิ่มสินค้าสำเร็จ คุณสามารถทำอย่างอื่นตามต้องการได้ที่นี่
            })
            .catch(error => {
                console.error('There was an error adding the product!', error);
            });
    };

    return (
        <div className="container mt-5">
            <h1>Add New Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="imag" className="form-label">Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        id="imag"
                        name="imag"
                        value={product.imag}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="short_description" className="form-label">Short Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="short_description"
                        name="short_description"
                        value={product.short_description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;
