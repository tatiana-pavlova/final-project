import React from "react";
import { Button } from "react-bootstrap";

function Pagination(props) {
  return(
    <>
      <Button variant="secondary" className="mx-auto mb-4 mt-4 lg d-flex" onClick={props.onLoadMoreClick}>Load More</Button>
    </>
  )
  
}

export default Pagination;