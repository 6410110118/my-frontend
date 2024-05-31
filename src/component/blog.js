import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Blogs() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/')
            .then(response => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}/`)
            .then(response => {
                console.log('Product deleted successfully');
                // อัปเดต state หลังจากลบสินค้าสำเร็จ
                setProducts(products.filter(product => product.id !== productId));
            })
            .catch(error => {
                console.error('Error deleting product:', error);
            });
    };

    return (
        <div className="container mt-5">
            <h1>Today's New Blogs</h1>
            <div className="row card-column"> {/* เรียกใช้ className card-column เพื่อให้แสดงผลเป็นคอลัมน์ */}
                {products.map(product => (
                    <div className="col-md-4 mb-4 product-card" key={product.id}> {/* เรียกใช้ className product-card เพื่อปรับแต่งการแสดงผลสินค้า */}
                        <div className="card">
                            <img src={product.imag} alt={product.name} className="card-img-top product-image" /> {/* เรียกใช้ className product-image เพื่อปรับแต่งรูปภาพสินค้า */}
                            <div className="card-body product-info"> {/* เรียกใช้ className product-info เพื่อปรับแต่งส่วนข้อมูลสินค้า */}
                                <h5 className="card-title product-name">{product.name}</h5> {/* เรียกใช้ className product-name เพื่อปรับแต่งชื่อสินค้า */}
                                <p className="card-text product-description">{product.short_description}</p> {/* เรียกใช้ className product-description เพื่อปรับแต่งคำอธิบายสั้นๆ ของสินค้า */}
                                <small className="card-text product-text">Created at: {new Date(product.created_at).toLocaleString()}</small> <br />
                                
                                <small className="card-text product-text">Updated at: {product.updated_at ? new Date(product.updated_at).toLocaleString() : 'N/A'}</small>
                                <div>
                                    <button onClick={() => deleteProduct(product.id)} className="btn btn-danger mt-2 delete-button">Delete</button> {/* เรียกใช้ className delete-button เพื่อปรับแต่งปุ่มลบสินค้า */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blogs;
