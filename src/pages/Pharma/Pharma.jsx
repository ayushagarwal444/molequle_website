import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./pharma.css";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import Group from "../../assets/Group13.png";
import { gsap } from "gsap";
import { catalystsData, PharmaIntermidatesData, ImpuritesData } from "./data";
import { Table, Thead, Tbody, Tr, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import PharmaIntermidates from "./PharmaIntermidates";
import Impurities from "./Impurities";
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import TopHeader from "../../components/TopHeader/TopHeader";
import NavBar2 from "../../components/Navbar/Navbar2";

const tableHead = {
  name: "Campaign Name",
  parentId: "Campaign Id",
  campaignType: "Type",
  status: "Status",
  channel: "Channel",
  action: "Actions"
};

function Pharma() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // ========================search bar
  const countPerPage = 15;
  const [value, setValue] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [collection, setCollection] = React.useState(
    cloneDeep(catalystsData.slice(0, countPerPage))
  );
  const searchData = React.useRef(
    throttle(val => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const data = cloneDeep(
        catalystsData
          .filter(item => item.name.toLowerCase().indexOf(query) > -1)
          .slice(0, countPerPage)
      );
      setCollection(data);
    }, 400)
  );

  React.useEffect(() => {
    if (!value) {
      updatePage(1);
    } else {
      searchData.current(value);
    }
  }, [value]);

  const updatePage = p => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(catalystsData.slice(from, to)));
  };

  const tableRows = rowData => {
    const { key, index } = rowData;
    const tableCell = Object.keys(tableHead);
    const columnData = tableCell.map((keyD, i) => {
      return <Td className='sm:h-[63px] h-auto font-[500] text-[15px]' key={i}>{key[keyD]}</Td>;
    });
    return <Tr className='sm:h-[63px] h-auto font-[500] text-[15px]' key={index}>{columnData}</Tr>;
  };

  const tableData = () => {
    return collection.map((key, index) => tableRows({ key, index }));
  };

  const headRow = () => {
    return Object.values(tableHead).map((title, index) => (
      <Td className='sm:h-[63px] h-auto font-[500] text-[15px]' key={index}>{title}</Td>
    ));
  };

  // search bar end =  =========== ====




  const [openAccordion, setOpenAccordion] = useState(null);
  const accordionRefs = useRef([]);

  const handleAccordionClick = (index) => {
    if (index === openAccordion) {
      gsap.to(
        accordionRefs.current[index].querySelector(".accordion__details"),
        {
          height: "auto",
          duration: 1,
          ease: "power1.inOut",
          onComplete: () => setOpenAccordion(null),
        }
      );
      // console.log(openAccordion);
    } else {
      if (openAccordion !== null) {
        gsap.to(
          accordionRefs.current[openAccordion].querySelector(
            ".accordion__details"
          ),
          {
            height: 0,
            duration: 1,
            ease: "power1.inOut",

          }
        );
      }
      setOpenAccordion(index);
      gsap.fromTo(
        accordionRefs.current[index].querySelector(".accordion__details"),
        { height: "auto" },
        {
          height: 0,
          duration: 1,
          ease: "power1.inOut",
        }
      );
    }
  };

  return (
    <div className="App">
      <TopHeader />
      <NavBar2 />
      <div className="bg-gray-100">
        <div className="pl-4 pr-4 sm:pl-0 sm:pr-0">
          <div style={{ backgroundImage: `url(${Group})` }}>
            <h1 className='flex justify-center font-semibold text-[20px] sm:text-[28px] sm:pt-10 pt-6' style={{ lineHeight: "42px" }}>Some heading will come here</h1>
            <p className='sm:flex justify-center font-medium sm:text-[20px] text-[16px] pt-2 pb-8 text-black mb-0 ml text-center' style={{ letterSpacingz: "2%" }}>Need text let’s Discuss Get in touch & let us <span className="flex justify-center">know how we can help Your Project</span> </p>
          </div>
         
          <div>
            <div className="overflow-auto">
              <ul className=' sm:w-[995px]   w-max sm:flex flex sm:pl-10 h-[38px] ml-5 sm:ml-auto sm:h-[50px] mx-auto  mt-2 mb-5 overflow-auto sm:overflow-visible'>
                <Link to='/industry'>
                  <li className='font-medium  text-[15px] sm:text-[16px] sm:mr-8 md:mr-14 link-underline-list link-underline-black-list ' style={{ lineHeight: "24px" }}>All Products</li></Link>
                <li className='font-medium text-[16px] sm:mr-8 md:mr-14 link-underline-list link-underline-black-list  text-purple-700' style={{ lineHeight: "24px" }}> Pharma</li>
                <li className='font-medium text-[16px] sm:mr-8 md:mr-14 link-underline-list link-underline-black-list' style={{ lineHeight: "24px" }}> Agro Chemical</li>
                <li className='font-medium text-[16px] sm:mr-8 md:mr-14 link-underline-list link-underline-black-list' style={{ lineHeight: "24px" }}>Cosmetic & Personal Care</li>
                <li className='font-medium text-[16px] sm:mr-8 md:mr-14 link-underline-list link-underline-black-list' style={{ lineHeight: "24px" }}>Nutrition & Suppliment</li>
               
              </ul>
            </div>
          </div>

        </div>
         {/* seacrh bar */}
         
         <div className="search mx-auto flex justify-center mb-2 ">
         <Link to= '/industry'>
            <input
              className="search lg:w-[995px] pl-5 lg:h-[64px] md:w-[700px] md:h-[60px] h-[54px] w-[343px]"
              placeholder="Search Productss....."
              style={{ position: "relative", }}

            />
             </Link>
            {/* <button className="bg-[#8D2ED1] sm:block hidden  w-[131px] h-[44px] rounded text-white absolute  2xl:right-[11rem] md:right-[-2rem] lg:right-[5rem]  top-[-60px] ">Search</button> */}
          </div>
         
        <div className="accordion__container">
          <div
            className={`accordion__item  ${openAccordion === 0
              ? "open" : ""}`}
            ref={(el) => (accordionRefs.current[0] = el)}
          >
            <div
              className="accordion__header flex justify-between"
              onClick={() => handleAccordionClick(0)}
            >
              <p className="accordion__name text-[15px] sm:text-[20px] font-[600] text-black">Excipients, Catalysts and High Grade Solvents <a className="text-[#666666] font-[400] text-[14px] ml-5"> {catalystsData.length} items</a></p>
              <img src="./Groupup.svg" alt="up" />
            </div>

            <div className="accordion__details">
              <div className='ml-0 mr-0  relative sm:w-auto w-auto'>
                <Table className="responsive-table">
                  <Thead >
                    <Tr className="rounded-t-[18px]  bg-[#FBF6FF] text-[14px] h-auto sm:h-[63px] text-[#BDBDBD] border border-[#E9EFF4]  ">{headRow()}</Tr>
                  </Thead>
                  <Tbody className="trhover bg-white">{tableData()}</Tbody>
                </Table>
                <Pagination
                  pageSize={countPerPage}
                  onChange={updatePage}
                  current={currentPage}
                  total={catalystsData.length}
                  style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
                />
              </div>
            </div>
          </div>

          <div
            className={`accordion__item ${openAccordion === 1 ? "open" : ""}`}
            ref={(el) => (accordionRefs.current[1] = el)}
          >
            <div
              className="accordion__header flex justify-between"
              onClick={() => handleAccordionClick(1)}
            >
              <p className="accordion__name text-[15px] sm:text-[20px] font-[600] text-black">
                Pharma Intermediates
                <a className="text-[#666666] font-[400] text-[14px] ml-5"> {PharmaIntermidatesData.length} items</a>
              </p>
              <img src="./Groupup.svg" alt="up" />
            </div>
            <div className="accordion__details">
              <PharmaIntermidates />
            </div>
          </div>
          <div
            className={`accordion__item ${openAccordion === 2 ? "open" : ""}`}
            ref={(el) => (accordionRefs.current[2] = el)}
          >
            <div
              className="accordion__header flex justify-between"
              onClick={() => handleAccordionClick(2)}
            >

              <p className="accordion__name text-[15px] sm:text-[20px] font-[600] text-black">Impurities  <a className="text-[#666666] font-[400] text-[14px] ml-5"> {ImpuritesData.length} items</a></p>
              <img src="./Groupup.svg" alt="up" />
            </div>
            <div className="accordion__details">
              <Impurities />
            </div>
          </div>
        </div>
        <div >
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default Pharma;