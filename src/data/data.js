import React from "react";
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilMoneyWithdrawal,
  uilUsdSquare,
} from "@iconscout/react-unicons";

export const sideBarData = [
  {
    id: 1,
    icon: UilEstate,
    title: "Dashboard",
  },
  {
    id: 2,
    icon: UilClipboardAlt,
    title: "Orders",
  },
  {
    id: 3,
    icon: UilUsersAlt,
    title: "Customers",
  },
  {
    id: 4,
    icon: UilPackage,
    title: "Products",
  },
  {
    id: 5,
    icon: UilChart,
    title: "Analytics",
  },
];

export const cardData = [
  {
    id: 1,
    title: "Sales",
    color:{
    backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
    boxShadow: "Opx 10px 20px Opx #e0c6f5",
  },
  barValue: 70,
value: "25,970",
png: UilClipboardAlt,
series:[
  {
    name: "Sales",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
]
  },
  {
    id: 2,
    title: "Revenue",
    color:{
    backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
    boxShadow: "Opx 10px 20px Opx #e0c6f5",
  },
  barValue: 70,
value: "25,970",
png: UilClipboardAlt,
series:[
  {
    name: "Sales",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
]
  },
  {
    id: 3,
    title: "Expenses",
    color:{
    backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
    boxShadow: "Opx 10px 20px Opx #e0c6f5",
  },
  barValue: 70,
value: "25,970",
png: UilClipboardAlt,
series:[
  {
    name: "Sales",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
]
  },


];
