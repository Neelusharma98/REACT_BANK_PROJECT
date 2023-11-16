import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';



const GetAll = () => {
  const [pageSize, setPageSize] = useState(); 
  const [pageNumber, setPageNumber] = useState(); 
  const [numberOfPages, setNumberOfPages] = useState(); 
  const [totalNumberOfRecords, setTotalNumberOfRecords] = useState(); 
  const [data, setData] = useState([]);

  const getAllUsers = async () => {
    console.log('pageSize', pageSize);
    console.log('pageNumber', pageNumber);

    let response = await bank(pageNumber, pageSize);

    if (response.data) {
      setData(response.data);
    }

    console.log(response);

    let totalNumberOfRecords = response.headers['X-Total-Count'];
    setTotalNumberOfRecords(totalNumberOfRecords);
    setNumberOfPages(Math.ceil(totalNumberOfRecords / pageSize));
  };

  const pageNumberOptions = [Array(numberOfPages).keys()].map((number) => (
    <option key={number + 1} value={number + 1}>
      {number + 1}
    </option>
  ));

  useEffect(() => {
    console.log('useEffect called');
    fetchData();
  }, [totalNumberOfRecords, pageSize, pageNumber]);

  return (
    <>
      <div className="form-floating">
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            setPageSize(e.target.value);
            setNumberOfPages(Math.ceil(totalNumberOfRecords / e.target.value));
          }}
        >
          <option selected>Page size</option>
          <option value="2" selected={2 == pageSize}>2</option>
          <option value="5" selected={5 == pageSize}>5</option>
          <option value="10" selected={10 == pageSize}>10</option>
        </select>
      </div>

      <div className="form-floating">
        <PaginationOfApp numberOfPages={numberOfPages}
        getFunction={getAllUsers}
        setPageNumber={setPageNumber} />
      </div>
      <button type="button" className="btn btn-success" onClick={getAllUsers}>success</button>
      <Table data={data}/>
    </>
  );
};

export default GetAll;
