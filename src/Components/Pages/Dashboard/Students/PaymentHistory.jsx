import { useLoaderData } from "react-router-dom";

const PaymentHistory = () => {
  const paymentData = useLoaderData();
  console.log(paymentData);
  return (
    <div>
      <h2 className="text-3xl text-center mb-5">Payment History</h2>
      <div className="bg-pink-200 rounded-lg shadow-lg p-4 overflow-x-auto ms-5">
        <table className="w-full table-fixed">
          <thead className="bg-pink-500 text-white">
            <tr>
              
              <th className="w-1 px-4 py-2 sm:w-auto">Class Name</th>
              <th className="w-1 px-4 py-2 sm:w-auto">User Email</th>
              <th className="w-1 px-4 py-2 sm:w-auto">Price</th>
              <th className="w-1/2 px-4 py-2 sm:w-auto">Payment Id</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((item) => (
              <tr className="bg-white" key={item._id}>
                <td className="border px-4 py-2 sm:w-auto">{item.name}</td>
                <td className="border px-4 py-2 sm:w-auto">{item.email}</td>
                <td className="border px-4 py-2 sm:w-auto">${item.price}</td>
                <td className="border px-4 py-3 sm:w-auto ">${item.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
