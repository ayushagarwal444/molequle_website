import React from 'react'
import { Table, Thead, Tbody, Tr, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import { ImpuritesData } from './data';

const tableHead = {
    name: "Campaign Name",
    parentId: "Campaign Id",
    campaignType: "Type",
    status: "Status",
    channel: "Channel",
    action: "Actions"
  };
const Impurities = () => {
    const countPerPage = 15;
    const [value, setValue] = React.useState("");
    const [currentPage, setCurrentPage] = React.useState(1);
    const [collection, setCollection] = React.useState(
      cloneDeep(ImpuritesData.slice(0, countPerPage))
    );
    const searchData = React.useRef(
      throttle(val => {
        const query = val.toLowerCase();
        setCurrentPage(1);
        const data = cloneDeep(
            ImpuritesData
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
      setCollection(cloneDeep(ImpuritesData.slice(from, to)));
    };
  
    const tableRows = rowData => {
      const { key, index } = rowData;
      const tableCell = Object.keys(tableHead);
      const columnData = tableCell.map((keyD, i) => {
        return <Td className = 'sm:h-[63px] h-auto font-[500] text-[15px]' key={i}>{key[keyD]}</Td>;
      });
      return <Tr className = 'sm:h-[63px] h-auto font-[500] text-[15px]' key={index}>{columnData}</Tr>;
    };
  
    const tableData = () => {
      return collection.map((key, index) => tableRows({ key, index }));
    };
  
    const headRow = () => {
      return Object.values(tableHead).map((title, index) => (
        <Td className = 'sm:h-[63px] h-auto font-[500] text-[15px]' key={index}>{title}</Td>
      ));
    };
  
    // search bar end =  =========== ====
  
    return (
      <div className='ml-0 mr-0  relative w-auto'>
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
                    total={ImpuritesData.length}
                    style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
                  />
                </div>
    )
  }

export default Impurities