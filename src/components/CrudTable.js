import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3>
        Hogwards
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>House</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="3">No data</td>
              </tr>
            ) : (
              data.map((el) => (
                <CrudTableRow
                  key={el.id}
                  el={el}
                  setDataToEdit={setDataToEdit}
                  deleteData={deleteData}
                />
              ))
            )}
          </tbody>
        </table>
      </h3>
    </div>
  );
};

export default CrudTable;
