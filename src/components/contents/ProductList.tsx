"use client"
import { useEffect, useState } from "react";
import api from "src/api/api";

const ProductList = () => {

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await api.get('/products');
                setProductList(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch product list', error);
                setErrorMsg('Failed to fetch product list. Something went wrong :(');
            }
        };
        fetchProduct();
    }, []);

    if (loading) {
        return <p className="text-lg mt-10">Loading product list</p>
    }

    if (errorMsg) {
        return <p>{errorMsg}</p>
    }
    
    return (
        <div className="container mx-auto">
            <div className="bg-white w-3/4 shadow-md rounded my-6">
                <table className="min-w-max w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th>Model Name</th>
                            <th>Storage</th>
                            <th>Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map((product) => (
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap">{product.model_name}</td>
                                <td className="py-3 px-6 text-center">{product.storage_capacity}</td>
                                <td className="py-3 px-6 text-center">{product.color_name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductList;