import React, { useState } from 'react';

const Posts = ({ posts, loading }) => {
  
 
  const [isActive, setIsActive] = useState(false);

  
  
  const [active, setActive]=useState('view details')

  
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div id="contur">
         
        {posts.map((item, i) => (
         
            <>
          <div
        id="resizable" key={i}
        className="grid-container1"
      >
          <div className="grid-item1">{item.company_name}</div>
          <div className="grid-item1"><p className="fw-bold">CONTACT</p><br></br>{item.contact_person}</div>
          <div className="grid-item1"><p className="fw-bold">CITY</p><br></br>{item.city}</div>
          <div className="grid-item1"><p className="fw-bold">STATE</p><br></br>{item.state}</div>
          <div className="grid-item1"><button onClick={()=>{active=='view details' && isActive===item.uuid_ ? setActive('hide details'):setActive('view details');isActive===item.uuid_ ? setIsActive(false): setIsActive(item.uuid_)}}>view details</button></div>
          </div>
          <div className="grid-item1 grid-container2 btr" id={item.uuid_} style={{display: isActive===item.uuid_ ? 'grid' : 'none',}}><div className='grid-item1 grid-container2'><h4>Description</h4><p id="left">{item.description}</p>
          </div>
          <div
        id="resizable"
        className="grid-container3"
      >
        <div className="grid-item1"><p className="fw-bold">Contact Person</p><br></br>{item.contact_person}</div>
          <div className="grid-item1"><p className="fw-bold">Address</p><br></br>{item.address}</div>
          <div className="grid-item1"><p className="fw-bold">Designation</p><br></br>{item.designation}</div>
          <div className="grid-item1"><p className="fw-bold">City</p><br></br>{item.city}</div>
          <div className="grid-item1"><p className="fw-bold">Emails</p><br></br><p id="em">{item.emails}</p></div>
          <div className="grid-item1"><p className="fw-bold">STATE</p><br></br>{item.state}</div>
          <div className="grid-item1"><p className="fw-bold">Phones</p><br></br>{item.phones}</div>
          <div className="grid-item1"><p className="fw-bold">Country</p><br></br>{item.country}</div>
      </div>
        </div>
          </>
         
          
          
        ))}
        </div>

  );
};

export default Posts;
