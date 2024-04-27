import React, { useState, useEffect } from "react";

const Pagination = ({ products, updateProducts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  var itemsPerPage = 6;
  var nbPage = Math.ceil(products.length / itemsPerPage);

  function previousPage() {
    if (currentPage <= 1) this.setAttribute("disabled", "");
    else setCurrentPage(currentPage - 1);
  }
  function nextPage() {
    if (currentPage >= nbPage) this.setAttribute("disabled", "");
    else setCurrentPage(currentPage + 1);
  }

  const updatePaginnation = () => {
    var indexStart = (currentPage - 1) * itemsPerPage;
    var indexEnd = indexStart + itemsPerPage;
    updateProducts(indexStart, indexEnd, products);
  }
  // paginnation mount
  useEffect(() => {
    updatePaginnation();
  }, [])
  // paginnation change
  useEffect(() => {
    updatePaginnation();
  }, [currentPage])
  // update products
  useEffect(() => {
    setCurrentPage(1);
  }, [products])

  if (nbPage <= 1) {
    return (
      <div className="flex items-center justify-between">
        <div className="join opacity-0" id="paginnation">
          <button className="join-item btn" disabled>«</button>
          <button className="join-item btn">Page 1</button>
          <button className="join-item btn" disabled>»</button>
        </div>
        <div>
          <p>{currentPage} / {nbPage}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-between">
        <div className="join opacity-0" id="paginnation">
          {
            currentPage == 1 ?
              <button className="join-item btn" onClick={previousPage} disabled>«</button>
              :
              <button className="join-item btn" onClick={previousPage}>«</button>
          }
          <button className="join-item btn">Page {currentPage}</button>
          {
            currentPage == nbPage ?
              <button className="join-item btn" onClick={nextPage} disabled>»</button>
              :
              <button className="join-item btn" onClick={nextPage}>»</button>
          }
        </div>
        <div>
          <p>{currentPage} / {nbPage}</p>
        </div>
      </div>
    );
  }
}

export default Pagination;