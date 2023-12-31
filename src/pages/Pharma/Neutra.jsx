import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./pharma.css";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import { gsap } from "gsap";
import { neutraData } from "./data";
import { Table, Thead, Tbody, Tr, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import TopHeader from "../../components/TopHeader/TopHeader";
import NavBar2 from "../../components/Navbar/Navbar2";

const tableHead = {
  name: "Product Name",
  parentId: "CAS No.",
  campaignType: "Grade",
  status: "Make",
};

function Neutra() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // ========================search bar
  const countPerPage = 15;
  const [value, setValue] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [collection, setCollection] = React.useState(
    cloneDeep(neutraData.slice(0, countPerPage))
  );
  const searchData = React.useRef(
    throttle(val => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const data = cloneDeep(
        neutraData
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
    setCollection(cloneDeep(neutraData.slice(from, to)));
  };

  const tableRows = rowData => {
    const { key, index } = rowData;
    const tableCell = Object.keys(tableHead);
    const columnData = tableCell.map((keyD, i) => {
      return <Td className='sm:h-[63px] h-auto font-[500] text-[15px]' key={i}>{key[keyD]}</Td>;
    });
    return <Tr className='sm:h-[63px] h-auto font-[500] text-[15px] bg-white' key={index}>{columnData}</Tr>;
  };

  const tableData = () => {
    return collection.map((key, index) => tableRows({ key, index }));
  };

  const headRow = () => {
    return Object.values(tableHead).map((title, index) => (
      <Td className='sm:h-[63px] h-auto font-[500] text-[15px] ' key={index}>{title}</Td>
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
    <div className="App ">
      <TopHeader />
      <div className="bg-white ">
        <div className="sm:mx-auto sm:w-[1280px] ">
          <NavBar2 />
        </div>
      </div>
      <div className="bg-gray-100 sm:pt-0 pt-14">
        <div className=" sm:pl-0 sm:pr-0">
          <div className="industrybg">
            <h1 className='flex justify-center font-semibold text-[20px] sm:text-[28px] sm:pt-10 pt-6' style={{ lineHeight: "42px" }}>List of the key products we offer</h1>
            <p className='sm:flex justify-center font-medium sm:text-[20px] text-[16px] pt-2 pb-8 text-black mb-0 ml text-center' style={{ letterSpacingz: "2%" }}>Trusted Supplier of Pharma Intermediates and  <span className="flex justify-center ml-2">Excipients for top Indian Manufactures</span> </p>
          </div>
        </div>
        {/* search bar */}
        <Link to = '/industry'>
        <div>
          <input
            className="mx-auto lg:w-[995px] lg:h-[64px] md:w-[700px]  md:h-[60px] h-[54px] w-[353px] flex justify-center sm:pl-5"
            placeholder="Search Products....."
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          {/* <button className="bg-[#8D2ED1] w-[66px] sm:w-[131px] h-[40px] sm:h-[44px] rounded text-white absolute  2xl:right-[11rem] xl:right-[8rem] right-[14px] md:right-[2rem] lg:right-[4rem] sm:right-0 top-[-65px] sm:top-[-60px] text-[13px]">Search</button> */}
        </div>
        </Link>
        {/* list */}
        <div className="overflow-auto mt-6 sm:mb-2">
          <ul className=' sm:w-[580px] sm:pl-16  sm:flex flex  h-[38px] w-max overflow-y-auto ml-5 sm:ml-auto sm:h-[50px] mx-auto  mt-2  overflow-x-auto sm:overflow-visible'>
            <Link to='/industry'>
              <li className='font-medium w-max text-[15px] sm:text-[16px] sm:mr-8 md:mr-14 link-underline-list link-underline-black-list sm:pb-[25px] ' style={{ lineHeight: "24px" }}>All Products</li></Link>
            <li className='font-medium w-max text-[16px] sm:mr-8 md:mr-14 link-underline-list link-underline-black-list' style={{ lineHeight: "24px" }}>
              <Link to="/pharma">
                Pharma
              </Link>
            </li>

            <li className='font-medium w-max text-[16px]  text-purple-700  sm:mr-8 md:mr-14 link-underline-list link-underline-black-list' style={{ lineHeight: "24px" }}>Nutraceuticals</li>

          </ul>
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
              <p className="accordion__name text-[15px] sm:text-[20px] font-[600] text-black">Nutraceutical <a className="text-[#666666] font-[400] text-[14px] ml-5"> {neutraData.length} items</a></p>
              <img src="./Groupup.svg" alt="up" />
            </div>

            <div className="accordion__details">
              <div className='ml-0 mr-0  relative sm:w-auto w-auto'>
                <Table className="responsive-table">
                  <Thead >
                    <Tr className="rounded-t-[18px]  bg-[#FBF6FF] text-[14px] h-auto sm:h-[63px] text-[#BDBDBD]   ">{headRow()}</Tr>
                  </Thead>
                  <Tbody className="trhover sm:bg-white bg-gray-100">{tableData()}</Tbody>
                </Table>
                <Pagination
                  pageSize={countPerPage}
                  onChange={updatePage}
                  current={currentPage}
                  total={neutraData.length}
                  style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
                />
              </div>
            </div>
          </div>
</div>
          
         
        <div className="mt-10">
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default Neutra;