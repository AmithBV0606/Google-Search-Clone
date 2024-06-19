import { GoSearch } from "react-icons/go";
import { BsImage } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
import { SlTag } from "react-icons/sl";

export const menu = [
    { name: "All", icon: <GoSearch /> },
    { name: "Images", icon: <BsImage size={14} /> },
    { name: "News", icon: <BiNews /> },
    { name: "Videos", icon: <RiVideoLine /> },
    { name: "Shopping", icon: <SlTag size={14} /> },
];

export const quickLinks = [
    "About",
    "Advertising",
    "Business",
    "How Search works",
];

export const settingMenu = ["Privacy", "Terms", "Settings"];

export const pagination = [
    { pageNo: 1, startIndex: 1 },
    { pageNo: 2, startIndex: 11 },
    { pageNo: 3, startIndex: 21 },
    { pageNo: 4, startIndex: 31 },
    { pageNo: 5, startIndex: 41 },
    { pageNo: 6, startIndex: 51 },
    { pageNo: 7, startIndex: 61 },
    { pageNo: 8, startIndex: 71 },
    { pageNo: 9, startIndex: 81 },
    { pageNo: 10, startIndex: 91 },
];