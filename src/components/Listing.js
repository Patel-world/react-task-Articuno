import React, { useEffect, useState } from "react";
import axios from "axios";

const Listing = () => {
  const url = "https://patel-world.github.io/codot/api.json";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const page =1;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [url]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div id="contur">
      <div
        id="resizable"
        className="ui-widget-content ui-resizable grid-container1"
      >   
        {items.map((item, i) => (
          if(page*3<=i){
            <>
          <div className="ui-widget-content ui-resizable grid-item1">{item.company_name}</div>
          <div className="ui-widget-content ui-resizable grid-item1"><p className="fw-bold">CONTACT</p><br></br>{item.contact_person}</div>
          <div className="ui-widget-content ui-resizable grid-item1"><p className="fw-bold">CITY</p><br></br>{item.city}</div>
          <div className="ui-widget-content ui-resizable grid-item1"><p className="fw-bold">STATE</p><br></br>{item.state}</div>
          <div className="ui-widget-content ui-resizable grid-item1"><button><a href="#">view details</a></button></div>
          </>
          }
          
          
        ))}
        </div>
        <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
    </div>
    );
  }
};

export default Listing;
