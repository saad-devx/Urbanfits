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
    navlink: "/admin/dashboard",
  },
  {
    id: 2,
    label: "Products",
    icon: <ProductIcon />,
    expanded: false,
    subrows: [
      {
        label: "All Products",

        navlink: "/admin/products/allproducts",
      },
      {
        label: "Add New",

        navlink: "/admin/products/addproduct",
      },
      {
        label: "Add Bundle",

        navlink: "/admin/products/addbundle",
      }
    ],
  },
  {
    id: 3,
    label: "Categories",
    icon: <CategoriesIcon />,
    expanded: false,
    subrows: [
      {
        label: "All Categories",

        navlink: "/admin/productcategories"
      },
      {
        label: "Add New",

        navlink: "/admin",
      },
    ],
  },
  {
    id: 4,
    label: "Orders",
    icon: <CartIcon />,
    expanded: false,
    subrows: [
      {
        label: "All Orders",

        navlink: "/admin/orders/neworder",
      },
      {
        label: "orderhistory",

        navlink: "/admin/orders/orderhistory",
      },
    ],
  },
  {
    id: 5,
    label: "Transactions",
    icon: <DollarIcon />,
    expanded: false,
    subrows: [
      {
        label: "All Transactions",
        navlink: "/admin/transactions/transaction",
      },
      {
        label: "Invoice",
        navlink: "/admin/transactions/invoice",
      },
      {
        label: "Add New",
        navlink: "/admin",
      },
    ],
  },
  {
    id: 6,
    label: "Users",
    icon: <ProductIcon />,
    expanded: false,
    subrows: [
      {
        label: "All users",
        navlink: "/admin/user/userlist",
      },
      {
        label: "Add New User",
        navlink: "/admin/user/userprofile",
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
    expanded: false,
  },
  {
    id: 8,
    label: "Account",
    icon: <AccountIcon />,
    expanded: false,
    subrows: [
      {
        label: "General Settings",
        navlink: "/admin/accounts/generalsetting",
      },
      {
        label: "Account Settings",
        navlink: "/admin/accounts/accountsetting",
      },
      {
        label: "Inventory Managment",
        navlink: "/admin/accounts/inventorymanagement",
      },
    ],
  },
  {
    id: 9,
    label: "Payment Methods",
    icon: <PaymentIcon />,
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
    icon: <CouponIcon />,
    expanded: false,
    subrows: [
      {
        label: "All Coupon",
        navlink: "/admin/coupon/allcoupon",
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
    expanded: false,
    subrows: [
      {
        label: "All Shipping Zone",
        navlink: "/admin/shippingsettings/shipping",
      },
      {
        label: "Add Shipping Zone",
        navlink: "/admin/shippingsettings/addzone",
      }
    ],
  },
  {
    id: 12,
    label: "Reviews",
    icon: <ReviewsIcon />,
    // navlink: "/admin",
    expanded: false,
  },
  {
    id: 13,
    label: "Brands",
    icon: <BrandIcon />,
    // navlink: "/admin",
    expanded: false,
  },
  {
    id: 14,
    label: "Authentication",
    icon: <ExitIcon />,
    // navlink: "/admin",
    expanded: false,

  },
  {
    id: 15,
    label: "Icons",
    icon: <DaimondIcon />,
    // navlink: "/admin",
    expanded: false,

  },
  {
    id: 16,
    label: "Other Pages",
    icon: <PagesIcon />,
    // navlink: "/admin",
    expanded: false,

  },
  {
    id: 17,
    label: "Profile (temp)",
    icon: <DaimondIcon />,
    subrows: [
      {
        label: "Profile",

        navlink: "/admin/profile",
      },
    ]
  },

];

export const SearchQueryData = [
  {
    label: "Dashboard",
    navlink: "/admin/dashboard",
  },
  {
    label: "Profile",
    navlink: "/admin/profile",
  },
  {
    label: "All Products",
    navlink: "/admin/products/allproducts",
  },
  {
    label: "Add New",
    navlink: "/admin/products/addproduct",
  },
  {
    label: "Add Bundle",
    navlink: "/admin/products/addbundle",
  },
  {
    label: "Attributes",
    navlink: "/admin",
  },
  {
    label: "All Categories",
    navlink: "/admin/productcategories"
  },
  {
    label: "Addnew",
    navlink: "/admin",
  },
  {
    label: "All Orders",
    navlink: "/admin/orders/neworder",
  },
  {
    label: "orderhistory",
    navlink: "/admin/orders/orderhistory",
  },
  {
    label: "All Transactions",
    navlink: "/admin/transactions/transaction",
  },
  {
    label: "Invoice",
    navlink: "/admin/transactions/invoice",
  },
  {
    label: "Addnew",
    navlink: "/admin",
  },
  {
    label: "All users",
    navlink: "/admin/user/userlist",
  },
  {
    label: "Add New User",
    navlink: "/admin/user/userprofile",
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
  {
    label: "Vendors",
    navlink: "",
  },
  {
    label: "General Settings",
    navlink: "/admin/accounts/generalsetting",
  },
  {
    label: "Account Settings",
    navlink: "/admin/accounts/accountsetting",
  },
  {
    label: "Inventory Managment",
    navlink: "/admin/accounts/inventorymanagement",
  },
  {
    label: "All Payment Methods",
    navlink: "/admin",
  },
  {
    label: "Add New",
    navlink: "/admin",
  },
  {
    label: "All Coupon",
    navlink: "/admin/coupon/allcoupon",
  },
  {
    label: "Add New Coupon ",
    navlink: "/admin",
  },
  {
    label: "All Shipping Zone",
    navlink: "/admin/shippingsettings/shipping",
  },
  {
    label: "Add Shipping Zone",
    navlink: "/admin/shippingsettings/addzone",
  },
  {
    label: "Reviews",
    navlink: "",
  },
  {
    label: "Brands",
    navlink: "",
  },
  {
    label: "Authentication",
    navlink: "",
  },
  {
    label: "Icons",
    navlink: "",
  },
  {
    label: "Other Pages",
    navlink: "",
  }
];