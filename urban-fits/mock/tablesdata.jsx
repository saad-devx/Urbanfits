import Image from "next/image";

import tableAvatarMan1 from "@/public/tableAvatarMan1.png"
import tableAvatarMan2 from "@/public/tableAvatarMan2.png"
import tableAvatarMan3 from "@/public/tableAvatarMan3.png"
import tableAvatarGirl1 from "@/public/tableAvatarGirl1.png"
import tableAvatarGirl2 from "@/public/tableAvatarGirl2.png"
import ActionButton from "@/components/GenericTables/ActionButton";


export const userListTableColumns = [
    {
      accessor: "profile",
      Header: "Profile",
      Cell: ({ cell: { value }, row }) => <span> {value} </span>
  
    },
    {
      accessor: "name",
      Header: "Name",
      Cell: ({ cell: { value }, row }) => <span> {value} </span>
  
  
    },
    {
      accessor: "email",
      Header: "Email",
      Cell: ({ cell: { value }, row }) => <span> {value} </span>
  
    },
    {
      accessor: "phone",
      Header: "Phone",
      Cell: ({ cell: { value }, row }) => <span> {value} </span>
  
    },
    {
      accessor: "totalbuy",
      Header: "Total Buy",
      Cell: ({ cell: { value }, row }) => <span> {value} </span>
  
    },
    {
      accessor: "status",
      Header: "Status",
      Cell: ({ cell: { value }, row }) => <span> {value} </span>
  
    },
    {
      accessor: "joinon",
      Header: "Join On",
      Cell: ({ cell: { value }, row }) => <span> {value} </span>
  
    },
    {
      accessor: "action",
      Header: "Action",
      Cell: ({ cell: { value }, row }) => <span> {value} </span>
  
    },
  ];
  
  export const userListTableData = [
    
    {
      profile: <Image src={tableAvatarMan1} /> ,
      name: "John",
      email: "Bilawalashraf@gmail.com",
      phone: "+91-989-325-8652",
      totalbuy: "1845",
      status: "Active",
      joinon: "Active",
      action: <ActionButton/> ,
  
    },
    {
      profile: <Image src={tableAvatarGirl1} /> ,
      name: "Artur",
      email: "Bilawalashraf@gmail.com",
      phone: "+91-989-325-8652",
      totalbuy: "1845",
      status: "Active",
      joinon: "Active",
      action: <ActionButton/>,
  
    },
    {
      profile: <Image src={tableAvatarGirl2} /> ,
      name: "Arthur",
      email: "Bilawalashraf@gmail.com",
      phone: "+91-989-325-8652",
      totalbuy: "1845",
      status: "Active",
      joinon: "Active",
      action: <ActionButton/>,
  
    },
    {
      profile: <Image src={tableAvatarMan2} /> ,
      name: "Doe John",
      email: "Bilawalashraf@gmail.com",
      phone: "+91-989-325-8652",
      totalbuy: "1845",
      status: "Active",
      joinon: "Active",
      action: <ActionButton/>,
  
    },
    {
      profile: <Image src={tableAvatarMan3} /> ,
      name: "Willson",
      email: "Bilawalashraf@gmail.com",
      phone: "+91-989-325-8652",
      totalbuy: "1845",
      status: "Active",
      joinon: "Active",
      action: <ActionButton/>,
  
    },
    {
      profile: <Image src={tableAvatarMan1} /> ,
      name: "Dikra Willson",
      email: "Bilawalashraf@gmail.com",
      phone: "+91-989-325-8652",
      totalbuy: "1845",
      status: "Active",
      joinon: "Active",
      action: <ActionButton/>,
  
    },
    {
      profile: <Image src={tableAvatarGirl1} /> ,
      name: "Sara Khan",
      email: "Bilawalashraf@gmail.com",
      phone: "+91-989-325-8652",
      totalbuy: "1845",
      status: "Active",
      joinon: "Active",
      action: <ActionButton/>,
  
    },
    {
      profile: <Image src={tableAvatarGirl2} /> ,
      name: "Natellie",
      email: "Bilawalashraf@gmail.com",
      phone: "+91-989-325-8652",
      totalbuy: "1845",
      status: "Active",
      joinon: "Active",
      action: <ActionButton/>,
  
    },
    {
      profile: <Image src={tableAvatarMan2} /> ,
      name: "Mark Gomis",
      email: "Bilawalashraf@gmail.com",
      phone: "+91-989-325-8652",
      totalbuy: "1845",
      status: "Active",
      joinon: "Active",
      action: <ActionButton/>,
  
    },
  ];
  