export default function MovesTable() {
  return (
    <table className="w-full mt-6 border">
      <thead className="bg-gray-300 dark:bg-gray-700">
        <tr>
          <th className="p-2">Lv.</th>
          <th>Name</th>
          <th>Type</th>
          <th>Power</th>
          <th>Acc</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 10 }).map((_, i) => (
          <tr key={i} className="text-center border-b dark:border-gray-600">
            <td className="p-2">--</td>
            <td>Move</td>
            <td>Type</td>
            <td>--</td>
            <td>--</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
