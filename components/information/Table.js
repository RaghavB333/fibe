import React from "react";

const Table = ({tableData}) => {
  return (
    <div className="overflow-clip rounded-2xl border border-[#e5e7eb] mt-5 flex mx-auto container">
      <table className="table-auto w-full  text-left text-base lg:text-xl ">
        <thead className="bg-[#ebffff]">
          <tr className="bg-[#ebffff] contents lg:hidden">
            <th
              className="col-span-full px-6 py-6 rounded-tl-2xl border-b border-[#e5e7eb] rounded-tr-2xl"
              colSpan="2"
            >
              Fee type & Charges
            </th>
          </tr>
          <tr className="bg-secondary w-full hidden lg:contents">
            <th className="px-6 py-6 w-2/5 rounded-tl-2xl border-b border-[#e5e7eb]">
              Fee Type
            </th>
            <th className="px-6 rounded-tr-2xl border-b  border-l border-[#e5e7eb]">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item,index)=>(
            <tr key={index} className="odd:bg-white even:bg-[#f9f9f9]">
            <td className="px-6 py-6 font-medium">{item.first}</td>
            <td className="px-6 py-6 border-0 lg:border-l border-[#e5e7eb]">{item.second}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
