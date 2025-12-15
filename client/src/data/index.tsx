export * from './types';

import type { LinkT, IconT, HeroImageT, EllipseT, AuctionCardT } from './types';
import { RiSearchLine } from 'react-icons/ri';
import { TbGardenCart } from 'react-icons/tb';
import { IoNotificationsOutline } from 'react-icons/io5';

import img1 from "../assets/homecarousels/image.jpg";
import img2 from "../assets/homecarousels/image2.jpg";
import img3 from "../assets/homecarousels/image3.jpg";
import img4 from "../assets/homecarousels/image4.jpg";
import img5 from "../assets/homecarousels/image5.jpg";
import img6 from "../assets/homecarousels/image6.jpg";
import img7 from "../assets/homecarousels/image7.jpg";
import img8 from "../assets/homecarousels/image8.jpg";

export const navLinks: LinkT[] = [
  { name: "Home", path: "/" },
  { name: "Marketplace", path: "/Marketplace" },
  { name: "Auctions", path: "/Auctions" },
  { name: "Drop", path: "/Drop" }
];

export const navIcons: IconT[] = [
  { icon: <RiSearchLine />, label: "Search" },
  { icon: <TbGardenCart />, label: "Cart" },
  { icon: <IoNotificationsOutline />, label: "Notifications" },
];

export const footLinks: LinkT[] = [
  { name: "Blog", path: "/#" },
  { name: "Wallets", path: "/#" },
  { name: "Rates", path: "/#" },
  { name: "High bids", path: "/#" },
];


export const desktopImages: HeroImageT[] = [
  {
    src: img1,
    style: {
      width: "358px",
      height: "332px",
      objectFit: "cover",
      marginTop: "100px",
    },
  },
  {
    src: img2,
    style: {
      width: "358px",
      height: "428px",
      objectFit: "cover",
      marginTop: "50px",
    },
  },
  {
    src: img3,
    style: { width: "358px", height: "444px", objectFit: "cover" },
  },
  {
    src: img4,
    style: {
      width: "358px",
      height: "428px",
      objectFit: "cover",
      marginTop: "50px",
    },
  },
  {
    src: img5,
    style: {
      width: "358px",
      height: "428px",
      objectFit: "cover",
      marginTop: "60px",
    },
  },
];

export const mobileImageStyle = { width: "336px", height: "296px", objectFit: "cover" as const };

export const mobileImages: HeroImageT[] = [
  { src: img6, rotate: "rotate-10" },
  { src: img7, rotate: "" },
  { src: img8, rotate: "-rotate-10" },
];


export const mobileEllipses: EllipseT[] = [
  {
    className: "absolute left-[330px] mt-[-190px] -translate-y-1/2 rounded-full",
    style: {
      width: "80px",
      height: "80px",
      background: "#3341C1",
      filter: "blur(30px)",
      zIndex: 1,
    },
  },
  {
    className: "absolute left-[330px] mt-[370px] -translate-y-1/2 rounded-full",
    style: {
      width: "80px",
      height: "80px",
      background: "red",
      filter: "blur(30px)",
      zIndex: 1,
    },
  },
  {
    className: "absolute -left-10 mt-[300px] rounded-full",
    style: {
      width: "80px",
      height: "80px",
      background: "#E27625",
      filter: "blur(30px)",
      zIndex: 1,
    },
  },
];


import productImg from "../assets/featuredproducts/product.jpg";
import productImg2 from "../assets/featuredproducts/product2.jpg";
import productImg3 from "../assets/featuredproducts/product3.jpg";
import creator1 from "../assets/featuredproducts/creator.png";
import creator2 from "../assets/featuredproducts/creator2.png";
import creator3 from "../assets/featuredproducts/creator3.png";
import creator4 from "../assets/featuredproducts/creator4.png";
import creator5 from "../assets/featuredproducts/creator5.png";

export const creators = [creator1, creator2, creator3, creator4, creator5];

export const products = [
  {
    img: productImg,
    title: "The Boolean Egyptian",
    desc:
      "Discover the unique story and artistry behind The Boolean Egyptian, a featured product that blends tradition with modern creativity. This piece stands out for its craftsmanship and cultural significance.",
  },
  {
    img: productImg2,
    title: "Are We There Yet?",
    desc:
      "Discover the unique story and artistry behind Are We There Yet? a featured product that blends tradition with modern creativity. This piece stands out for its craftsmanship and cultural significance.",
  },
  {
    img: productImg3,
    title: "Oloibiri 1997",
    desc:
      "Discover the unique story and artistry behind Oloibiri 1997, a featured product that blends tradition with modern creativity. This piece stands out for its craftsmanship and cultural significance.",
  },
];


import auctionImg from "../assets/auctioncards/auction.jpg";
import auctionImg2 from "../assets/auctioncards/auction2.jpg";


export const auctionCards: AuctionCardT[] = [
  {
    image: auctionImg,
    number: "01",
    title: ["MONALISA REDEFINED", "IN STYLE."],
    bullet: true,
    start: "START ON : 08:00 GTS . MONDAY",
    description:
      "GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.",
    loader: 60,
  },
  {
    image: auctionImg2,
    number: "02",
    title: ["THE STARRY NIGHT", "EXPERIENCE."],
    bullet: true,
    start: "START ON : 10:30 GTS . FRIDAY",
    description:
      "DISCOVER THE MAGIC OF POST-IMPRESSIONISM WITH AN EXCLUSIVE SHOWCASE OF MASTERPIECES. MEET RENOWNED ARTISTS AND PLACE YOUR BIDS ON RARE, INSPIRING WORKS FROM AROUND THE GLOBE.",
    loader: 35,
  },
];