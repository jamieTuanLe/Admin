import React, { useEffect } from 'react';
import { useTable, useRowSelect, usePagination, useSortBy, useFilters, useGlobalFilter, useAsyncDebounce } from "react-table";
import Checkbox from "./Checkbox";

import * as S from "./styles"

const CustomeTable = ({ columns, data, handleDispatch, checkBox }) => {
  const tableInstance = useTable(
    { columns, data },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return checkBox ? [
          {
            id: "selection",
            Header: ({ getToggleAllPageRowsSelectedProps }) => (
              <Checkbox {...getToggleAllPageRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            )
          },
          ...columns,
        ] : [...columns];
      });
    });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    prepareRow,
    selectedFlatRows,
  } = tableInstance;

  useEffect(() => {
    if (typeof handleDispatch == "function") {
      handleDispatch(selectedFlatRows)
    }
  }, [handleDispatch, selectedFlatRows])

  return (
    // apply the table props
    <>
      <S.TableWrapper>
        <table {...getTableProps()}>
          <thead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup, i) => (
                // Apply the header row props
                <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column, i) => (
                      // Apply the header cell props
                      <th key={i} {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {
                          // Render the header
                          column.render("Header")
                        }
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              rows.map((row, i) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr key={i} {...row.getRowProps()}>
                    {
                      // Loop over the rows cells
                      row.cells.map((cell, i) => {
                        // Apply the cell props
                        return (
                          <td
                            key={i}
                            {...cell.getCellProps()}
                          >
                            {
                              // Render the cell contents
                              cell.render("Cell")
                            }
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </S.TableWrapper>
    </>
  );
};

export default CustomeTable;
