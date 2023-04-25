// import DashboardIcon from "../public/sidebaricons/Dashboardicon.jsx";
import { AccountIcon } from "@/public/sidebaricons/AccountIcon";
import { BrandIcon } from "@/public/sidebaricons/BrandIcon";
import { CartIcon } from "@/public/sidebaricons/CartIcon";
import { CategoriesIcon } from "@/public/sidebaricons/CategoriesIcon";
import { CouponIcon } from "@/public/sidebaricons/CouponIcon";
import { DaimondIcon } from "@/public/sidebaricons/DaimondIcon";
import { Dashboardicon } from "@/public/sidebaricons/Dashboardicon";
import { DollarIcon } from "@/public/sidebaricons/DollarIcon";
import { ExitIcon } from "@/public/sidebaricons/ExitIcon";
import { PagesIcon } from "@/public/sidebaricons/PagesIcon";
import { PaymentIcon } from "@/public/sidebaricons/PaymentIcon";
import { ProductIcon } from "@/public/sidebaricons/ProductIcon";
import { ReviewsIcon } from "@/public/sidebaricons/ReviewsIcon";
import { Vendoricon } from "@/public/sidebaricons/Vendoricon";
import React from "react";

export const sidebarItems = [
 
  {
    id: 1,
    label: "Dashboard",
    icon: <Dashboardicon />,
    navlink: "/admin",
  },
  {
    id: 2,
    label: "Products",
    icon: <ProductIcon />,
    navlink: "/admin",
    expanded: false,
    subrows: [
      {
        label: "All Products",

        navlink: "/admin",
      },
      {
        label: "Addnew",

        navlink: "/admin",
      },
      {
        label: "Tags",

        navlink: "/admin",
      },
      {
        label: "Attributes",

        navlink: "/admin",
      },
    ],
  },
  {
    id: 3,
    label: "Categories",
    icon: <CategoriesIcon />,
    navlink: "/admin",
    expanded: false,
    subrows: [
      {
        label: "All Categories",

        navlink: "/admin",
      },
      {
        label: "Addnew",

        navlink: "/admin",
      },
    ],
  },
  {
    id: 4,
    label: "Orders",
    icon: <CartIcon />,
    navlink: "/admin",
    expanded: false,
    subrows: [
      {
        label: "All Orders",

        navlink: "/admin",
      },
      {
        label: "Addnew",

        navlink: "/admin",
      },
    ],
  },
  {
    id: 5,
    label: "Transactions",
    icon: <DollarIcon />,
    navlink: "/admin",
    expanded: false,
    subrows: [
      {
        label: "All Transactions",

        navlink: "/admin",
      },
      {
        label: "Addnew",

        navlink: "/admin",
      },
    ],
  },
  {
    id: 6,
    label: "Users",
    icon: <ProductIcon />,
    navlink: "/admin",
    expanded: false,
    subrows: [
      {
        label: "All users",
        navlink: "/admin",
      },
      {
        label: "Add New User",
        navlink: "/admin",
      },
      {
        label: "Change Password",
        navlink: "/admin",
      },
      {
        label: "Authentication",
        navlink: "/admin",
      },
      {
        label: "Security Settings",
        navlink: "/admin",
      },
      {
        label: "Notifications",
        navlink: "/admin",
      },
    ],
  },
  {
    id: 7,
    label: "Vendors",
    icon: <ProductIcon />,
    navlink: "/admin",
    expanded: false,
  },
  {
    id: 8,
    label: "Account",
    icon: <AccountIcon/> ,
    navlink: "/admin",
    expanded: false,
    subrows: [
      {
        label: "General Settings",
        navlink: "/admin",
      },
      {
        label: "Account Settings",
        navlink: "/admin/accounts/accountsetting",
      },
      {
        label: "Inventory Managment",
        navlink: "/admin",
      },
    ],
  },
  {
    id: 9,
    label: "Payment Methods",
    icon: <PaymentIcon/> ,
    navlink: "/admin",
    expanded: false,
    subrows: [
      {
        label: "All Payment Methods",
        navlink: "/admin",
      },
      {
        label: "Add New",
        navlink: "/admin",
      },
    ],
  },
  {
    id: 10,
    label: "Coupon",
    icon: <CouponIcon/> ,
    navlink: "/admin",
    expanded: false,
    subrows: [
      {
        label: "All Coupon",
        navlink: "/admin",
      },
      {
        label: "Add New Coupon ",
        navlink: "/admin",
      },
    ],
  },
  {
    id: 11,
    label: "Shipping Settings",
    icon: <ProductIcon />,
    navlink: "/admin",
    expanded: false,
    subrows: [
      {
        label: "All Shipping Zone",
        navlink: "/admin",
      },
      {
        label: "Add Shipping Zone",
        navlink: "/admin",
      },
      {
        label: "Add Shipping Method",
        navlink: "/admin",
      },
      {
        label: "Shipping Settings",
        navlink: "/admin",
      },
    ],
  },
  {
    id: 12,
    label: "Reviews",
    icon: <ReviewsIcon />,
    navlink: "/admin",
    expanded: false,
  },
  {
    id: 13,
    label: "Brands",
    icon: <BrandIcon/> ,
    navlink: "/admin",
    expanded: false,
  },
  {
    id: 14,
    label: "Authentication",
    icon: <ExitIcon/>  ,
    navlink: "/admin",
    expanded: false,
    
  },
  {
    id: 15,
    label: "Icons",
    icon: <DaimondIcon/>  ,
    navlink: "/admin",
    expanded: false,
    
  },
  {
    id: 16,
    label: "Other Pages",
    icon: <PagesIcon/>  ,
    navlink: "/admin",
    expanded: false,
    
  },
  {
    id: 17,
    label: "Profile (temp)",
    icon: <DaimondIcon/> ,
    subrows: [
      {
        label: "Profile",

        navlink: "/admin/profile",
      },
    ]
  },

];
