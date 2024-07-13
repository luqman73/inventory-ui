import AddColorForm from "src/components/contents/AddColorForm";
import AddProductForm from "src/components/contents/AddProductForm";

const AddProduct = () => {
    return (
        <div className="flex space-x-8">
           <AddProductForm/>
           <AddColorForm/>
        </div>
    );
};

export default AddProduct;