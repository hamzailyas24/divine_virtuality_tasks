import React from "react";
import { Container, Button } from "react-bootstrap";
import axios from "axios";
import Table from "react-bootstrap/Table";
import LoadingSpinner from "../components/LoadingSpinner";

function Parttwo() {
  const [loader, setLoader] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [tableHeaders, setTableHeaders] = React.useState([
    "ID",
    "First Name",
    "Last Name",
    "Gender",
    "Student Status",
    "Major",
    "Country",
    "Age",
    "Grade",
    "Address",
  ]);
  const getData = async () => {
    try {
      setLoader(true);
      const response = await axios.get(
        "https://hamzakhan2121.github.io/jsonapi/student.json"
      );
      // console.log("Student Data ===>", response.data);
      setData(response.data.Student);
      console.log("Grade ===>", response.data.Student[0]["Grade "]);
      setLoader(false);
    } catch (error) {
      alert("Internal Server Error Check Console");
      console.log(error);
      setLoader(false);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loader ? (
        <LoadingSpinner />
      ) : (
        <Container>
          <h1 className="text-center mt-4">TASK 2.2</h1>
          <Table responsive striped bordered hover size="sm">
            <thead>
              <tr>
                {tableHeaders.map((headers, index) => (
                  <th className="text-center" key={index}>
                    {headers}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="text-center"> {item.ID} </td>
                  <td className="text-center"> {item.FirstName} </td>
                  <td className="text-center"> {item.LastName} </td>
                  <td className="text-center"> {item.Gender} </td>
                  <td className="text-center"> {item.StudentStatus} </td>
                  <td className="text-center"> {item.Major} </td>
                  <td className="text-center"> {item.Country} </td>
                  <td className="text-center"> {item.Age} </td>
                  <td className="text-center">{item["Grade "]}</td>
                  <td className="text-center">
                    {" "}
                    {`${item.address.street}, ${item.address.City}, ${item.address.State}`}{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      )}
    </>
  );
}

export default Parttwo;
