import Link from "next/link";
import ProductList from "src/components/contents/ProductList";

const ProductPage = () => {
    return (
        <div>
            <div className="text-xl font-medium p-4">
                Product Page
            </div>
            <Link href="/product/create" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'">Add a new product</Link>
            
            <ProductList/>
        </div>
    );
};

export default ProductPage;