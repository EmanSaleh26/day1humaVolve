interface TableProps {
    columns: string[];
    data: Record<string, string | number>[];
    striped?: boolean;
  }
  
  export default function Table({ columns, data, striped = false }: TableProps) {
    return (
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              {columns.map((col) => (
                <th key={col} className="px-4 py-2 font-semibold">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={striped && rowIndex % 2 === 1 ? "bg-gray-50" : "bg-white"}
              >
                {columns.map((col) => (
                  <td key={col} className="px-4 py-2 border-t border-gray-100">
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }