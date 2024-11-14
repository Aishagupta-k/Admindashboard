// UserActivityTable.js
import React from 'react';
import { useTable } from 'react-table';

function UserActivityTable({ data }) {
  const columns = React.useMemo(
    () => [
      { Header: 'Event ID', accessor: 'id' },
      { Header: 'Type', accessor: 'type' },
      { Header: 'User', accessor: 'actor.login' },
      { Header: 'Timestamp', accessor: 'created_at' },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <table {...getTableProps()} className="w-full text-left table-auto">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} className="border-b">
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} className="p-2 font-medium">
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="border-b hover:bg-gray-100">
              {row.cells.map(cell => (
                <td {...cell.getCellProps()} className="p-2">
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default UserActivityTable;
