import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import ProductDataService from "../services/product.services";

const ProductsList = ({ getProductId }) => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await ProductDataService.getAllProducts();
    console.log(data.docs);
    setProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await ProductDataService.deleteProduct(id);
    getProducts();
  };
  return (
    <>
      <div>

       {/* <Button variant="dark edit" onClick={getProducts}>
          Refresh List
        </Button>  */}

        <button type="button" className="btn btn-outline-success" onClick={getProducts}>Refresh List</button>

      </div>

      {/* <pre>{JSON.stringify(product, undefined, 2)}</pre>} */}
      {/* <div className="container mx-auto">
        <Table striped bordered hover size="sm" className="mx-3">
          <thead>
            <tr>
              <th>Sr. no.</th>
              <th>Product Title</th>
              <th>Product Image</th>
              <th>Product Price</th>
              <th>Rating</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((doc, index) => {
              return (
                <tr key={doc.id}>
                  <td>{index + 1}</td>
                  <td>{doc.title}</td>
                  <td><img src={doc.image} className="img-thumbnail" /></td>
                  <td>₹{doc.price}</td>
                  <td>{doc.rating}</td>
                  <td>{doc.status}</td>
                  <td>
                    <Button
                      variant="secondary"
                      className="edit mx-3 my-3"
                      onClick={(e) => getProductId(doc.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      className="delete mx-3 my-3"
                      onClick={(e) => deleteHandler(doc.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div> */}

      <div className="container d-flex justify-content-center">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Sr. no.</th>
              <th>Product Title</th>
              <th>Product Image</th>
              <th>Product Price</th>
              <th>Rating</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((doc, index) => {
              return (
                <tr key={doc.id}>
                  <td>{index + 1}</td>
                  <td>{doc.title}</td>
                  <td><img src={doc.image} className="img-thumbnail" alt="" /></td>
                  <td>₹{doc.price}</td>
                  <td>{doc.rating}</td>
                  <td>{doc.status}</td>
                  <td>
                    <Button
                      variant="warning"
                      className="edit mx-3 my-3"
                      onClick={(e) => getProductId(doc.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      className="delete mx-3 my-3"
                      onClick={(e) => deleteHandler(doc.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductsList;