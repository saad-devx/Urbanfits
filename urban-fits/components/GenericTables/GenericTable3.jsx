
import React from "react";
// import Pagination from "@mui/material/Pagination";
import styled from "styled-components";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter

} from "react-table";







const Styled = styled.div`
  /* This is required to make the table full-width */
  display: block;
  max-width: 100%;
  margin-top: 20px;

  /* This will make the table scrollable when it gets too small */
  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    // border-bottom: 1px solid black;
  }

  table {
    /* Make sure the inner table is always as wide as needed */
    width: 100%;
    border-spacing: 0;
    text-align: left;

    thead { 
      tr{ 
        th {
          padding: 17px 0 24px 0 ;

          :last-child {
            border-right: 0;
            float: right;
          }

          }
        }
      }


    tbody { 
      tr{ 
        td {
          // text-align: center;
          // align-items: center;
          margin: 0;
          padding: 18px 0 18px 0 ;
          // border-bottom: 1px solid black;
          // border-right: 1px solid black;

          /* The secret sauce */
          /* Each cell should grow equally */
          // width: 1%;
          /* But "collapsed" cells should be as small as possible */
          &.collapse {
            width: 0.0000000001%;
          }

          :last-child {
            border-right: 0;
            float: right;
          }
        }
      }
    }
  }

 
`




const GenericTable3 = (props) => {
  const { columns, data } = props;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )
  const {globalFilter} = state;


  // const setGridTemplateColumns = (columns, i) => {
  //   let frs = ["1fr", "2fr", "1fr", "2fr", "1fr"];

  //   console.log("INDEX = ", i, subRowIndex);
  //   let makeString = "";
  //   columns.map((col, i) => {
  //     makeString = makeString + " auto ";
  //   });
  //   if (props.addActionColumn) makeString = makeString + " 1fr";
  //   if (i === subRowIndex)
  //     return { gridTemplateColumns: makeString, border: "5px solid red" };
  //   return { gridTemplateColumns: makeString };
  // };

  return (
    <>
    

  <Styled>
  {/* <input
              type="text"
              id="search"
              value={globalFilter || ''}
              onChange={(e) =>  setGlobalFilter(e.target.value)}
              className="w-[139px] h-[17px] flex items-center text-[14px] font-[400] font_futuralt bg-transparent outline-none  "
              placeholder="Search (Keyword, etc)"
            /> */}
      <div className="tableWrap">
        <table {...getTableProps()}>
          <thead  >
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th 
                    {...column.getHeaderProps(
                      column.getSortByToggleProps(),
                      {
                      className: column.collapse ? 'collapse' : '',
                    })}
                  >
                    <span className="flex items-center gap-[5px] text-[15px] font-[400] text-[#0000004a] ">
                    {column.render("Header")}
                    {/* <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <SortUpIcon />
                        ) : (
                          <SortDownIcon />
                        )
                      ) : (
                        <span className="flex items-center">
                          <SortUpIcon /> <SortDownIcon />
                        </span>
                      )}
                    </span> */}
                  </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody 
           {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr className={` ${i==0 ?"" : props.border? "border-t-[1px]": "" }  `}
                {...row.getRowProps()}  >
                  {row.cells.map(cell => {
                    return (
                      <td className="text-[14px] font-[400]"
                        {...cell.getCellProps({
                          className: cell.column.collapse ? 'collapse' : '',
                        })}
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      </div>
      
  
      </Styled>
    </>
  );
};

export default GenericTable3;
