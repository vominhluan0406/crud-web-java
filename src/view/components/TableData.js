import React, { useState, useEffect } from "react";
 
import axios from "axios";
import { NavLink, Table } from "reactstrap";
import { Button } from "reactstrap";
import { Badge } from "reactstrap";

function TableData(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://webbanhangapi.herokuapp.com/api/product"
      );

      setProducts(result.data);
    };

    fetchData();
  }, []);
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Edit/Delete</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td>
              <Badge href="edit" color="primary">
                <Button color="primary">Edit</Button>
              </Badge>
              {" "}
              <Badge href={"https://webbanhangapi.herokuapp.com/api/product/delete/"+item.id} color="danger" formMethod="delete">
                <Button color="danger" formMethod="delete">Delete</Button>
              </Badge>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableData;
