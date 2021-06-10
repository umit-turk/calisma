import React, {  useState } from "react";
import {PaginationUl} from "./paginationStyles";



const Pagination = ({generated}) => {

    const pages = 5;

    const numOfPages = [];

    for(let i=1; i <= pages; i++){
        numOfPages.push(i);
    }

    const [currentButton, setCurrentButton] = useState(1);

  return (
    <div>
      <h1>Todo List</h1>
        <PaginationUl>
            <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item'}`}
                onclick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}
            ><button>Previous</button></li>

            <li className={`${currentButton === numOfPages.length ? 'page-item disabled' : 'page-item'}`}
                onclick={() => setCurrentButton((prev) => prev === numOfPages.length ? prev : prev + 1)}
            ><button>Next</button></li>
        </PaginationUl>
    </div>
  );
};

export default Pagination;
