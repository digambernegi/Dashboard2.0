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

import person1 from '../imgs/img1.png';
import person2 from '../imgs/img2.png';
import person3 from '../imgs/img3.png';



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


// Recent Update Card Data
export const UpdatesData=[
  {
  img: person1,
  name: "Andrew Thomas",
  noti: "has ordered Apple smart watch 2500mh battery.",
  time: "25 seconds ago",
  img: person2,
  name: "James Bond",
  noti: "has received Samsung gadget for charging battery.",
  time: "30 minutes ago",
 },
 {
  img: person3,
  name: "Iron Man",
  noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
  time: "2 hours ago",
 }
]