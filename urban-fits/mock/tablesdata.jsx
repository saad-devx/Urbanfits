export const stocksTransactionsColumns = [
    {
      accessor: "symbol",
      Header: "Symbol",
      Cell: ({ cell: { value }, row }) => <CryptoCellAssetDate row={row} value={value}  cssClass="stock_data_symbol" />
  
    },
    {
      accessor: "description",
      Header: "Description",
      Cell: ({ cell: { value }, row }) => <CryptoCellAll value={value} row={row} cssClass="black_bold" />
  
  
    },
    {
      accessor: "quantity",
      Header: "Quantity",
      Cell: ({ cell: { value }, row }) => <CryptoCellAll value={value} row={row} cssClass="blue_gradient" />
  
    },
    {
      accessor: "balance",
      Header: "Balance",
      Cell: ({ cell: { value }, row }) => <CryptoCellAll value={value} row={row} cssClass="blue_gradient" />
  
    },
    // {
    //   accessor: "value",
    //   Header: "Value",
    //   Cell: ({ cell: { value } }) => <span  > {value} </span>
  
    // },
  ];
  
  export const stocksTransactionsData = [
    {
      symbol: { subrow: false, icon: <AppleIcon />, value: "3 Aug 2022" },
      description: { subrow: false, value: "AAPL Alsthisssss" },
      quantity: { subrow: false, value: 456 },
      balance: { subrow: false, value: 20 },
      subRows: [
        {
          symbol: { subrow: true, header: "Date", subvalue: "3 Aug 2022" },
          description: { subrow: true, subvalue: "AAPL Alsthisssss", header: "Time" },
          quantity: { subrow: true, subvalue: 456, header: "Quantity" },
          balance: { subrow: true, subvalue: 20, header: "Balance" },
        }
      ]
    },
    {
      symbol: { subrow: false, icon: <JPMIcon />, value: "4 Aug 2022" },
      description: { subrow: false, value: "AAPL Alsthisssss" },
      quantity: { subrow: false, value: 456 },
      balance: { subrow: false, value: 20 },
      subRows: [
        {
          symbol: { subrow: true, header: "Date", subvalue: "3 Aug 2022" },
          description: { subrow: true, subvalue: "AAPL Alsthisssss", header: "Time" },
          quantity: { subrow: true, subvalue: 456, header: "Quantity" },
          balance: { subrow: true, subvalue: 20, header: "Balance" },
        }
      ]
    },
    {
      symbol: { subrow: false, icon: <MSFIcon />, value: "8 Aug 2022" },
      description: { subrow: false, value: "AAPL Alsthisssss" },
      quantity: { subrow: false, value: 456 },
      balance: { subrow: false, value: 20 },
      subRows: [
        {
          symbol: { subrow: true, header: "Date", subvalue: "3 Aug 2022" },
          description: { subrow: true, subvalue: "AAPL Alsthisssss", header: "Time" },
          quantity: { subrow: true, subvalue: 456, header: "Quantity" },
          balance: { subrow: true, subvalue: 20, header: "Balance" },
        }
      ]
    },
    {
      symbol: { subrow: false, icon: <VIcon />, value: "2 Aug 2022" },
      description: { subrow: false, value: "AAPL Alsthisssss" },
      quantity: { subrow: false, value: 456 },
      balance: { subrow: false, value: 20 },
      subRows: [
        {
          symbol: { subrow: true, header: "Date", subvalue: "3 Aug 2022" },
          description: { subrow: true, subvalue: "AAPL Alsthisssss", header: "Time" },
          quantity: { subrow: true, subvalue: 456, header: "Quantity" },
          balance: { subrow: true, subvalue: 20, header: "Balance" },
        }
      ]
    },
    {
      symbol: { subrow: false, icon: <TeslaIcon />, value: "9 Aug 2022" },
      description: { subrow: false, value: "AAPL Alsthisssss" },
      quantity: { subrow: false, value: 456 },
      balance: { subrow: false, value: 20 },
      subRows: [
        {
          symbol: { subrow: true, header: "Date", subvalue: "3 Aug 2022" },
          description: { subrow: true, subvalue: "AAPL Alsthisssss", header: "Time" },
          quantity: { subrow: true, subvalue: 456, header: "Quantity" },
          balance: { subrow: true, subvalue: 20, header: "Balance" },
        }
      ]
    },
    {
      symbol: "6 Aug 2022",
      description: "AAPL F",
      quantity: 934,
      balance: 20,
  
    },
    {
      symbol: "1 Aug 2022",
      description: "AAPL G",
      quantity: 765,
      balance: 20,
  
    },
    {
      symbol: "3 Aug 2022",
      description: "AAPL H",
      quantity: 353,
      balance: 20,
  
    },
    {
      symbol: "7 Aug 2022",
      description: "AAPL J",
      quantity: 867,
      balance: 20,
  
    },
    {
      symbol: "4 Aug 2022",
      description: "AAPL K",
      quantity: 276,
      balance: 20,
  
    },
  ];
  