const RecentSales = () => {
  // Datos falsos de ventas recientes
  const data = [
    {
      remito: "1234",
      fecha: "01/12/2023",
      remitente: "Juan Pérez",
      destinatario: "María García",
      monto: "$100k",
      estado: "Pagado",
    },
    {
      remito: "5678",
      fecha: "02/12/2023",
      remitente: "Pedro López",
      destinatario: "Carlos Rodríguez",
      monto: "$500k",
      estado: "Pendiente",
    },
    {
      remito: "9012",
      fecha: "03/12/2023",
      remitente: "Ana Sánchez",
      destinatario: "Laura González",
      monto: "$800k",
      estado: "Anulado",
    },
    {
      remito: "3456",
      fecha: "04/12/2023",
      remitente: "Luis Martínez",
      destinatario: "Sofía Díaz",
      monto: "$700",
      estado: "Pagado",
    },
    {
      remito: "7890",
      fecha: "05/12/2023",
      remitente: "Marta Fernández",
      destinatario: "Jorge Sánchez",
      monto: "$900",
      estado: "Pendiente",
    },
    {
      remito: "1235",
      fecha: "06/12/2023",
      remitente: "José Gómez",
      destinatario: "Elena Pérez",
      monto: "$600",
      estado: "Anulado",
    },
    {
      remito: "6789",
      fecha: "07/12/2023",
      remitente: "Laura González",
      destinatario: "Carlos Rodríguez",
      monto: "$800",
      estado: "Pagado",
    },
    {
      remito: "9013",
      fecha: "08/12/2023",
      remitente: "Pedro López",
      destinatario: "Ana Sánchez",
      monto: "$500",
      estado: "Pendiente",
    },
    {
      remito: "4567",
      fecha: "09/12/2023",
      remitente: "María García",
      destinatario: "Juan Pérez",
      monto: "$1000",
      estado: "Anulado",
    },
  ];

  return (
    <div className="-mt-8 rounded-lg py-8 text-textTitleColor shadow-xl">
      <div className="rounded-lg border bg-white p-5 ">
        <h1 className="mb-2 p-3 text-xl font-extrabold">Ventas Recientes</h1>
        <button
          href="/dashboard/stock"
          className="float-right -mt-12 mb-5 rounded-xl bg-textTitleColor px-4 py-2 font-bold text-white"
        >
          Generar Nueva Venta
        </button>
        <table className="w-full">
          <thead className="border-b-2">
            <tr className="text-textTitleColor">
              <th className="p-3 text-left text-sm tracking-wide">
                N° de Remito
              </th>
              <th className="p-3 text-left text-sm tracking-wide">Fecha</th>
              <th className="p-3 text-left text-sm tracking-wide">Remitente</th>
              <th className="p-3 text-left text-sm tracking-wide">
                Destinatario
              </th>
              <th className="p-3 text-left text-sm tracking-wide">Monto</th>
              <th className="p-3 text-left text-sm tracking-wide">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 ">
            {data.map((sale, index) => (
              // Asegúrate de tener una clave única para cada fila, como sale.remito
              <tr key={sale.remito} className="hover:bg-gray-100">
                <td className="w-24 whitespace-nowrap p-3 text-sm">
                  {sale.remito}
                </td>
                <td className="w-24 whitespace-nowrap p-3 text-sm">
                  {sale.fecha}
                </td>
                <td className="max-w-[250px] break-all p-3 text-sm">
                  {sale.remitente}
                </td>
                <td className="max-w-[250px] break-all p-3 text-sm">
                  {sale.destinatario}
                </td>
                <td className="whitespace-nowrap p-3 text-sm">{sale.monto}</td>
                <td className="whitespace-nowrap p-3 text-sm">{sale.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentSales;
