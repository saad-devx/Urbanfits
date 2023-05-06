import Image from "next/image";

import tableAvatarMan1 from "@/public/tableAvatarMan1.png";
import tableAvatarMan2 from "@/public/tableAvatarMan2.png";
import tableAvatarMan3 from "@/public/tableAvatarMan3.png";
import tableAvatarGirl1 from "@/public/tableAvatarGirl1.png";
import tableAvatarGirl2 from "@/public/tableAvatarGirl2.png";
import smartWatch from "@/public/smartWatch.png";
import sneakers from "@/public/sneakers.png";

import ActionButton from "@/components/GenericTables/ActionButton";
import StatusBadge from "@/components/GenericTables/StatusBadge";

export const userListTableColumns = [
  {
    accessor: "profile",
    Header: "Profile",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "name",
    Header: "Name",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "email",
    Header: "Email",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "phone",
    Header: "Phone",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "totalbuy",
    Header: "Total Buy",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "status",
    Header: "Status",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "joinon",
    Header: "Join On",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "action",
    Header: "Action",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
];

export const userListTableData = [
  {
    profile: <Image src={tableAvatarMan1} />,
    name: "John",
    email: "Bilawalashraf@gmail.com",
    phone: "+91-989-325-8652",
    totalbuy: "1845",
    status: "Active",
    joinon: "Active",
    action: <ActionButton />,
  },
  {
    profile: <Image src={tableAvatarGirl1} />,
    name: "Artur",
    email: "Bilawalashraf@gmail.com",
    phone: "+91-989-325-8652",
    totalbuy: "1845",
    status: "Active",
    joinon: "Active",
    action: <ActionButton />,
  },
  {
    profile: <Image src={tableAvatarGirl2} />,
    name: "Arthur",
    email: "Bilawalashraf@gmail.com",
    phone: "+91-989-325-8652",
    totalbuy: "1845",
    status: "Active",
    joinon: "Active",
    action: <ActionButton />,
  },
  {
    profile: <Image src={tableAvatarMan2} />,
    name: "Doe John",
    email: "Bilawalashraf@gmail.com",
    phone: "+91-989-325-8652",
    totalbuy: "1845",
    status: "Active",
    joinon: "Active",
    action: <ActionButton />,
  },
  {
    profile: <Image src={tableAvatarMan3} />,
    name: "Willson",
    email: "Bilawalashraf@gmail.com",
    phone: "+91-989-325-8652",
    totalbuy: "1845",
    status: "Active",
    joinon: "Active",
    action: <ActionButton />,
  },
  {
    profile: <Image src={tableAvatarMan1} />,
    name: "Dikra Willson",
    email: "Bilawalashraf@gmail.com",
    phone: "+91-989-325-8652",
    totalbuy: "1845",
    status: "Active",
    joinon: "Active",
    action: <ActionButton />,
  },
  {
    profile: <Image src={tableAvatarGirl1} />,
    name: "Sara Khan",
    email: "Bilawalashraf@gmail.com",
    phone: "+91-989-325-8652",
    totalbuy: "1845",
    status: "Active",
    joinon: "Active",
    action: <ActionButton />,
  },
  {
    profile: <Image src={tableAvatarGirl2} />,
    name: "Natellie",
    email: "Bilawalashraf@gmail.com",
    phone: "+91-989-325-8652",
    totalbuy: "1845",
    status: "Active",
    joinon: "Active",
    action: <ActionButton />,
  },
  {
    profile: <Image src={tableAvatarMan2} />,
    name: "Mark Gomis",
    email: "Bilawalashraf@gmail.com",
    phone: "+91-989-325-8652",
    totalbuy: "1845",
    status: "Active",
    joinon: "Active",
    action: <ActionButton />,
  },
];

export const newOrderTableColumns = [
  {
    accessor: "id",
    Header: "ID",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "item",
    Header: "Item",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "customer",
    Header: "Customer",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "quantity",
    Header: "Quantity",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "price",
    Header: "Price",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "payment",
    Header: "Payment",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "status",
    Header: "Status",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "date",
    Header: "Date",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "action",
    Header: "Action",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
];

export const newOrderTableData = [
  {
    id: <p className="text-[14px] "> 354 </p>,
    item: (
      <span className="flex gap-[10px] items-center text-[14px] font-[400] ">
        <Image src={smartWatch} /> <p className="w-[500px] ">Smart Watch </p>{" "}
        <p> </p>
      </span>
    ),
    customer: (
      <span className="text-[14px] ">
        <p className="font-[400] "> Bilawal Ashraf </p>
        <p className="font-[300]"> Bilawalashraf@gmail.com</p>
      </span>
    ),
    quantity: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] ">PAID</p>,
    status: <StatusBadge status="ready" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    item: (
      <span className="flex gap-[10px] items-center text-[14px] font-[400] ">
        <Image src={smartWatch} /> <p className="w-[500px] ">Smart Watch </p>{" "}
        <p> </p>
      </span>
    ),
    customer: (
      <span className="text-[14px] ">
        <p className="font-[400] "> Bilawal Ashraf </p>
        <p className="font-[300]"> Bilawalashraf@gmail.com</p>
      </span>
    ),
    quantity: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] ">PAID</p>,
    status: <StatusBadge status="ontheway" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    item: (
      <span className="flex gap-[10px] items-center text-[14px] font-[400] ">
        <Image src={smartWatch} /> <p className="w-[500px] ">Smart Watch </p>{" "}
        <p> </p>
      </span>
    ),
    customer: (
      <span className="text-[14px] ">
        <p className="font-[400] "> Bilawal Ashraf </p>
        <p className="font-[300]"> Bilawalashraf@gmail.com</p>
      </span>
    ),
    quantity: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] ">PAID</p>,
    status: <StatusBadge status="delivered" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    item: (
      <span className="flex gap-[10px] items-center text-[14px] font-[400] ">
        <Image src={smartWatch} /> <p className="w-[500px] ">Smart Watch </p>{" "}
        <p> </p>
      </span>
    ),
    customer: (
      <span className="text-[14px] ">
        <p className="font-[400] "> Bilawal Ashraf </p>
        <p className="font-[300]"> Bilawalashraf@gmail.com</p>
      </span>
    ),
    quantity: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] ">PAID</p>,
    status: <StatusBadge status="pending" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    item: (
      <span className="flex gap-[10px] items-center text-[14px] font-[400] ">
        <Image src={smartWatch} /> <p className="w-[500px] ">Smart Watch </p>{" "}
        <p> </p>
      </span>
    ),
    customer: (
      <span className="text-[14px] ">
        <p className="font-[400] "> Bilawal Ashraf </p>
        <p className="font-[300]"> Bilawalashraf@gmail.com</p>
      </span>
    ),
    quantity: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] ">PAID</p>,
    status: <StatusBadge status="ready" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    item: (
      <span className="flex gap-[10px] items-center text-[14px] font-[400] ">
        <Image src={smartWatch} /> <p className="w-[500px] ">Smart Watch </p>{" "}
        <p> </p>
      </span>
    ),
    customer: (
      <span className="text-[14px] ">
        <p className="font-[400] "> Bilawal Ashraf </p>
        <p className="font-[300]"> Bilawalashraf@gmail.com</p>
      </span>
    ),
    quantity: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] ">PAID</p>,
    status: <StatusBadge status="ready" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    item: (
      <span className="flex gap-[10px] items-center text-[14px] font-[400] ">
        <Image src={smartWatch} /> <p className="w-[500px] ">Smart Watch </p>{" "}
        <p> </p>
      </span>
    ),
    customer: (
      <span className="text-[14px] ">
        <p className="font-[400] "> Bilawal Ashraf </p>
        <p className="font-[300]"> Bilawalashraf@gmail.com</p>
      </span>
    ),
    quantity: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] ">PAID</p>,
    status: <StatusBadge status="ready" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    item: (
      <span className="flex gap-[10px] items-center text-[14px] font-[400] ">
        <Image src={smartWatch} /> <p className="w-[500px] ">Smart Watch </p>{" "}
        <p> </p>
      </span>
    ),
    customer: (
      <span className="text-[14px] ">
        <p className="font-[400] "> Bilawal Ashraf </p>
        <p className="font-[300]"> Bilawalashraf@gmail.com</p>
      </span>
    ),
    quantity: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] ">PAID</p>,
    status: <StatusBadge status="ready" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    item: (
      <span className="flex gap-[10px] items-center text-[14px] font-[400] ">
        <Image src={smartWatch} /> <p className="w-[500px] ">Smart Watch </p>{" "}
        <p> </p>
      </span>
    ),
    customer: (
      <span className="text-[14px] ">
        <p className="font-[400] "> Bilawal Ashraf </p>
        <p className="font-[300]"> Bilawalashraf@gmail.com</p>
      </span>
    ),
    quantity: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] ">PAID</p>,
    status: <StatusBadge status="ready" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    item: (
      <span className="flex gap-[10px] items-center text-[14px] font-[400] ">
        <Image src={smartWatch} /> <p className="w-[500px] ">Smart Watch </p>{" "}
        <p> </p>
      </span>
    ),
    customer: (
      <span className="text-[14px] ">
        <p className="font-[400] "> Bilawal Ashraf </p>
        <p className="font-[300]"> Bilawalashraf@gmail.com</p>
      </span>
    ),
    quantity: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] ">PAID</p>,
    status: <StatusBadge status="ready" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
];

export const orderHistoryTableColumns = [
  {
    accessor: "id",
    Header: "ID",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "customer",
    Header: "Customer",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "email",
    Header: "Email",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "item",
    Header: "Item",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "price",
    Header: "Price",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "payment",
    Header: "Payment",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "status",
    Header: "Status",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "date",
    Header: "Date",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "action",
    Header: "Action",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
];

export const orderHistoryTableData = [
  {
    id: <p className="text-[14px] "> 354 </p>,
    customer: <p className="font-[400] "> Bilawal Ashraf </p>,
    email: <p className="w-[500px] ">Bilawalashraf@gmail.com</p>,
    item: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] font-[400] ">PAID</p>,
    status: <StatusBadge status="delivered" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    customer: <p className="font-[400] "> Bilawal Ashraf </p>,
    email: <p className="w-[500px] ">Bilawalashraf@gmail.com</p>,
    item: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] font-[400] ">PAID</p>,
    status: <StatusBadge status="delivered" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    customer: <p className="font-[400] "> Bilawal Ashraf </p>,
    email: <p className="w-[500px] ">Bilawalashraf@gmail.com</p>,
    item: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] font-[400] ">PAID</p>,
    status: <StatusBadge status="delivered" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    customer: <p className="font-[400] "> Bilawal Ashraf </p>,
    email: <p className="w-[500px] ">Bilawalashraf@gmail.com</p>,
    item: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] font-[400] ">PAID</p>,
    status: <StatusBadge status="delivered" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    customer: <p className="font-[400] "> Bilawal Ashraf </p>,
    email: <p className="w-[500px] ">Bilawalashraf@gmail.com</p>,
    item: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] font-[400] ">PAID</p>,
    status: <StatusBadge status="delivered" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    customer: <p className="font-[400] "> Bilawal Ashraf </p>,
    email: <p className="w-[500px] ">Bilawalashraf@gmail.com</p>,
    item: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] font-[400] ">PAID</p>,
    status: <StatusBadge status="return" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    customer: <p className="font-[400] "> Bilawal Ashraf </p>,
    email: <p className="w-[500px] ">Bilawalashraf@gmail.com</p>,
    item: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] font-[400] ">PAID</p>,
    status: <StatusBadge status="delivered" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    customer: <p className="font-[400] "> Bilawal Ashraf </p>,
    email: <p className="w-[500px] ">Bilawalashraf@gmail.com</p>,
    item: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] font-[400] ">PAID</p>,
    status: <StatusBadge status="return" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    customer: <p className="font-[400] "> Bilawal Ashraf </p>,
    email: <p className="w-[500px] ">Bilawalashraf@gmail.com</p>,
    item: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] font-[400] ">PAID</p>,
    status: <StatusBadge status="return" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    customer: <p className="font-[400] "> Bilawal Ashraf </p>,
    email: <p className="w-[500px] ">Bilawalashraf@gmail.com</p>,
    item: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] font-[400] ">PAID</p>,
    status: <StatusBadge status="delivered" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    customer: <p className="font-[400] "> Bilawal Ashraf </p>,
    email: <p className="w-[500px] ">Bilawalashraf@gmail.com</p>,
    item: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] font-[400] ">PAID</p>,
    status: <StatusBadge status="delivered" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
];

export const orderProductDetailTableColumns = [
  {
    accessor: "id",
    Header: "#",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "image",
    Header: "Image",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "product",
    Header: "Product",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "quantity",
    Header: "Quantity",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "price",
    Header: "Price/Unit",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "subtotal",
    Header: "Subtotal",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
];

export const orderProductDetailTableData = [
  {
    id:  <p className="text-[14px] font-[400]"> 1 </p>, 
    image:  <Image src={sneakers} /> ,
    product:  <span className="flex flex-col text-[14px] " >
      <p className="font-[400] " >  Baby Pink Shoes</p>
      <p className="font-[300]"> A very smooth and comfort shoes ever for baby </p>
    </span> ,
    quantity: <p className="text-[14px] font-[400]"> 4 </p>   ,
    price:  <p className="text-[14px] font-[400]">$50.00 </p>  ,
    subtotal: <p className="text-[14px] font-[400]"> $200.00</p> 
  },
  {
    id:  <p className="text-[14px] font-[400]"> 1 </p>, 
    image:  <Image src={sneakers} /> ,
    product:  <span className="flex flex-col text-[14px] " >
      <p className="font-[400] " >  Baby Pink Shoes</p>
      <p className="font-[300]"> A very smooth and comfort shoes ever for baby </p>
    </span> ,
    quantity: <p className="text-[14px] font-[400]"> 4 </p>   ,
    price:  <p className="text-[14px] font-[400]">$50.00 </p>  ,
    subtotal: <p className="text-[14px] font-[400]"> $200.00</p> 
  },
  {
    id:  <p className="text-[14px] font-[400]"> 1 </p>, 
    image:  <Image src={sneakers} /> ,
    product:  <span className="flex flex-col text-[14px] " >
      <p className="font-[400] " >  Baby Pink Shoes</p>
      <p className="font-[300]"> A very smooth and comfort shoes ever for baby </p>
    </span> ,
    quantity: <p className="text-[14px] font-[400]"> 4 </p>   ,
    price:  <p className="text-[14px] font-[400]">$50.00 </p>  ,
    subtotal: <p className="text-[14px] font-[400]"> $200.00</p> 
  },
  {
    id:  <p className="text-[14px] font-[400]"> 1 </p>, 
    image:  <Image src={sneakers} /> ,
    product:  <span className="flex flex-col text-[14px] " >
      <p className="font-[400] " >  Baby Pink Shoes</p>
      <p className="font-[300]"> A very smooth and comfort shoes ever for baby </p>
    </span> ,
    quantity: <p className="text-[14px] font-[400]"> 4 </p>   ,
    price:  <p className="text-[14px] font-[400]">$50.00 </p>  ,
    subtotal: <p className="text-[14px] font-[400]"> $200.00</p> 
  },
  {
    id:  <p className="text-[14px] font-[400]"> 1 </p>, 
    image:  <Image src={sneakers} /> ,
    product:  <span className="flex flex-col text-[14px] " >
      <p className="font-[400] " >  Baby Pink Shoes</p>
      <p className="font-[300]"> A very smooth and comfort shoes ever for baby </p>
    </span> ,
    quantity: <p className="text-[14px] font-[400]"> 4 </p>   ,
    price:  <p className="text-[14px] font-[400]">$50.00 </p>  ,
    subtotal: <p className="text-[14px] font-[400]"> $200.00</p> 
  },

];
