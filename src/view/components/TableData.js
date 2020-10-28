import React, { useState, useEffect } from "react";

import axios from "axios";
import { Table } from "reactstrap";
import { Badge } from "reactstrap";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit";

function TableData(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://localhost:8080/api/demo"
      );

      setProducts(result.data);
    };

    fetchData();
  }, [products]);
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Image</th>
          <th>Edit/Delete</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td><img src={item.img} alt={item.name} style={{'height':'10%'}}></img></td>
            <td>
              <Badge color="success">
                <ModalEdit
                  id={item.id}
                  price={item.price}
                  description={item.description}
                  name={item.name}
                  img ={item.img}
                />
              </Badge>{" "}
              <Badge color="danger">
                <ModalDelete id={item.id} />
              </Badge>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableData;
