import './app.css';

function AddProduct() {
    return (
        <div>
            <h1>Add Product</h1>
            <form>
                <label>
                    Product Name:
                    <input type="text" name="productName" />
                </label>
                <br />
                <label>
                    Price:
                    <input type="number" name="price" />
                </label>
                <br />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddProduct;
