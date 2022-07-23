import React, { useEffect, useState } from "react";
import axios from "axios";

const Listing = () => {
  const url = "https://patel-world.github.io/codot/api.json";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

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
        {items.map((item) => (
          <>
          <div className="ui-widget-content ui-resizable grid-item1">{item.company_name}</div>
          <div className="ui-widget-content ui-resizable grid-item1"><p className="fw-bold">CONTACT</p><br></br>{item.contact_person}</div>
          <div className="ui-widget-content ui-resizable grid-item1"><p className="fw-bold">CITY</p><br></br>{item.city}</div>
          <div className="ui-widget-content ui-resizable grid-item1"><p className="fw-bold">STATE</p><br></br>{item.state}</div>
          <div className="ui-widget-content ui-resizable grid-item1"><button><a href="#">view details</a></button></div>
          </>
          
        ))}
        </div>
    </div>
    );
  }
};

export default Listing;
