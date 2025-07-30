import React from "react";

const Table = () => {
  return (
    <div className="overflow-clip rounded-2xl border boder-light-grey mt-5 flex mx-auto container">
      <table className="table-auto w-full  text-left text-base lg:text-xl ">
        <thead className="bg-secondary">
          <tr className="bg-secondary contents lg:hidden">
            <th
              className="col-span-full px-6 py-6 rounded-tl-2xl border-b boder-light-grey rounded-tr-2xl"
              colSpan="2"
            >
              Fee type & Charges
            </th>
          </tr>
          <tr className="bg-secondary w-full hidden lg:contents">
            <th className="px-6 py-6 w-2/5 rounded-tl-2xl border-b boder-light-grey">
              Fee Type
            </th>
            <th className="px-6 rounded-tr-2xl border-b  border-l boder-light-grey">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white even:bg-ghost-white">
            <td className="px-6 py-6 font-medium">Loan amount</td>
            <td className="px-6 py-6 border-0 lg:border-l boder-light-grey">
              Up to ₹5 lakhs
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
