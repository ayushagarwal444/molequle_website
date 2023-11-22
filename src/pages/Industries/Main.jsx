import "./Industry.css"
import { Link } from "react-router-dom";
import React from 'react';
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import "./industry.less";
import { Table, Thead, Tbody, Tr, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

import { allData } from "./constants";
import NavBar2 from '../../components/Navbar/Navbar2';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

import TopHeader from "../../components/TopHeader/TopHeader";

const tableHead = {
	channel: "Application Industry",
	status: "Category",
	name: "Product Name",
	parentId: "CAS Number",
	campaignType: "Application / Make",	
};
const Main = () => {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const countPerPage = 100;
	const [value, setValue] = React.useState("");
	const [currentPage, setCurrentPage] = React.useState(1);
	const [collection, setCollection] = React.useState(
		cloneDeep(allData.slice(0, countPerPage))
	);
	const searchData = React.useRef(
		throttle(val => {
			const query = val.toLowerCase();
			setCurrentPage(1);
			const data = cloneDeep(
				allData
					.filter(item => item.name.toLowerCase().indexOf(query) > -1 || item.parentId.toLowerCase().indexOf(query) > -1 || item.status.toLowerCase().indexOf(query) > -1 || item.campaignType.toLowerCase().indexOf(query) > -1)
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
		setCollection(cloneDeep(allData.slice(from, to)));
	};

	const tableRows = rowData => {
		const { key, index } = rowData;
		const tableCell = Object.keys(tableHead);
		const columnData = tableCell.map((keyD, i) => {
			return <Td className='sm:h-[63px] h-auto font-[500] text-[15px]' key={i}>{key[keyD]}</Td>;
		});
		return <Tr className='sm:h-[63px] h-auto pl-5 font-[500] text-[15px] bg-white' key={index}>{columnData}</Tr>;
	};

	const tableData = () => {
		return collection.map((key, index) => tableRows({ key, index }));
	};

	const headRow = () => {
		return Object.values(tableHead).map((title, index) => (
			<Td className='sm:h-[63px] h-auto font-[500] text-[15px]' key={index}>{title}</Td>
		));
	};


	return (
		<>
			<TopHeader />
			<div className="bg-white">
        <div className="sm:mx-auto sm:w-[1280px]">
          <NavBar2 />
          </div>
        </div>
			<div className='bg-gray-100 overflow-hidden sm:pt-0 pt-14'>
				<div className=" sm:pl-0 sm:pr-0">
					<div className="industrybg">
						<h1 className='flex justify-center font-semibold text-[20px] sm:text-[28px] sm:pt-10 pt-6' style={{ lineHeight: "42px" }}>List of the key products we offer</h1>
						<p className='sm:flex justify-center font-medium sm:text-[20px] text-[16px] pt-2 pb-8 text-black mb-0 ml text-center' style={{ letterSpacingz: "2%" }}>Trusted Supplier of Pharma Intermediates and<span className="flex justify-center sm:ml-2">Excipients for top Indian Manufactures</span> </p>
					</div>
					
					{/* search bar */}
					<div>
							<input
								className="mx-auto lg:w-[995px] lg:h-[64px] md:w-[700px]  md:h-[60px] h-[54px] w-[353px] flex justify-center sm:pl-5"
								placeholder="Search Products....."
								autoFocus
								value={value}
								onChange={e => setValue(e.target.value)}
							/>
							{/* <button className="bg-[#8D2ED1] w-[66px] sm:w-[131px] h-[40px] sm:h-[44px] rounded text-white absolute  2xl:right-[11rem] xl:right-[8rem] right-[14px] md:right-[2rem] lg:right-[4rem] sm:right-0 top-[-65px] sm:top-[-60px] text-[13px]">Search</button> */}
						</div>

					{/* list */}
					<div className="overflow-auto mt-6">
						<ul className=' sm:w-[580px] sm:pl-16  sm:flex flex  h-[38px] w-max overflow-y-auto ml-5 sm:ml-auto sm:h-[50px] mx-auto  mt-2  overflow-x-auto sm:overflow-visible'>
							<Link to='/industry'>
								<li className='font-medium w-max text-[15px] sm:text-[16px] sm:mr-8 md:mr-14 link-underline-list link-underline-black-list sm:pb-[25px] text-purple-700 ' style={{ lineHeight: "24px" }}>All Products</li></Link>
							<li className='font-medium w-max text-[16px] sm:mr-8 md:mr-14 link-underline-list link-underline-black-list' style={{ lineHeight: "24px" }}>
								<Link to="/pharma">
									Pharma
								</Link>
							</li>
							<Link to = '/neutra'>
							<li className='font-medium w-max text-[15px] sm:text-[16px] sm:mr-8 md:mr-14 link-underline-list link-underline-black-list sm:pb-[25px]' style={{ lineHeight: "24px" }}>Nutraceuticals</li>
							</Link>
							
						</ul>
					</div>

					<div className='mx-auto sm:w-[1198px] max-w-[100%]  relative sm:pb-8'>
						
						<Table className="responsive-table rounded-t-[18px] sm:mt-[10px] sm:w-[1199px] w-[350px] mx-auto">
							<Thead className="rounded-t-[18px] " >
								<Tr className="rounded-t-[18px]  bg-[#FBF6FF] text-[14px] h-auto sm:h-[63px] text-[#BDBDBD] border border-[#E9EFF4] ">{headRow()}</Tr>
							</Thead>
							<Tbody className="trhover sm:bg-white bg-gray-100">{tableData()}</Tbody>
						</Table>
						<Pagination
							pageSize={countPerPage}
							onChange={updatePage}
							current={currentPage}
							total={allData.length}
							style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
						/>

					</div>
				</div >
				<Contact />
				<Footer />
			</div>

		</>
	);
};

export default Main;
