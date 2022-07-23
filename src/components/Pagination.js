import React, { useState } from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const[active, setActive] = useState('page-link')
  const [isActive, setIsActive] = useState(false);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => {paginate(number); isActive===number?setIsActive(false):setIsActive(number)}} id={number} href='!#' style={{backgroundColor: isActive===number ? '#dc3545' : '#ffff',}} className={active}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
