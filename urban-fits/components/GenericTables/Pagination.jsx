import React from "react";

const Pagination = ({
  canNextPage,
  canPreviousPage,
  gotoPage,
  pageCount,
  nextPage,
  previousPage,
}) => {
  return (
    <div className="pagination">
      {/* <button
        className="p-[5px] bg  cursor-pointer"
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
      >
        {"<<"}
      </button> */}
      <button className=" rounded-l-[25px] bg-[#F4F4F4] w-[87px] h-[40px] "
      onClick={() => previousPage()} disabled={!canPreviousPage}>
        Previous
      </button>
      <button className=" border-[1px] border-[#F4F4F4] w-[40px] h-[40px] bg-black text-white "
      onClick={() => previousPage()} disabled={!canPreviousPage}>
      1
      </button>
      <button className=" border-[1px] border-[#F4F4F4] w-[40px] h-[40px]  "
      onClick={() => previousPage()} disabled={!canPreviousPage}>
      2
      </button>
      <button className=" border-[1px] border-[#F4F4F4] w-[40px] h-[40px] "
      onClick={() => previousPage()} disabled={!canNextPage}>
      3
      </button>
      

      <button className=" rounded-r-[25px] bg-[#F4F4F4] w-[87px] h-[40px] "
       onClick={() => nextPage()} disabled={!canNextPage}>
       Next
      </button>
      {/* <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {">>"}
      </button> */}
    </div>
  );
};

export default Pagination;
