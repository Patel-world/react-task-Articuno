import React, { useState } from 'react';

const Posts = ({ item, loading }) => {
  let myStyle = {
    display: 'grid'
  };
 
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
  
  const [active, setActive]=useState(null)
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div id="contur">
         
        
            <>
          <div
        id="resizable" key={i}
        className="grid-container1"
      >
          <div className="grid-item1">{item.company_name}</div>
          <div className="grid-item1"><p className="fw-bold">CONTACT</p><br></br>{item.contact_person}</div>
          <div className="grid-item1"><p className="fw-bold">CITY</p><br></br>{item.city}</div>
          <div className="grid-item1"><p className="fw-bold">STATE</p><br></br>{item.state}</div>
          <div className="grid-item1"><button><a href="#">view details</a></button></div>
          </div>
          <div className="grid-item1 grid-container2"><h1>Description</h1><p>{item.description}</p>
          
          <div
        id="resizable"
        className="grid-container3"
      >
        <div className="grid-item1"><p className="fw-bold">Contact Person</p><br></br>{item.contact_person}</div>
          <div className="grid-item1"><p className="fw-bold">Address</p><br></br>{item.address}</div>
          <div className="grid-item1"><p className="fw-bold">Designation</p><br></br>{item.designation}</div>
          <div className="grid-item1"><p className="fw-bold">City</p><br></br>{item.city}</div>
          <div className="grid-item1"><p className="fw-bold">Emails</p><br></br>{item.emails}</div>
          <div className="grid-item1"><p className="fw-bold">STATE</p><br></br>{item.state}</div>
          <div className="grid-item1"><p className="fw-bold">Phones</p><br></br>{item.phones}</div>
          <div className="grid-item1"><p className="fw-bold">Country</p><br></br>{item.country}</div>
      </div>
          </div>
          </>
         
          
          
      
        </div>

  );
};

export default Posts;
