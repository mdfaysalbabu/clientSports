import { Link } from "react-router-dom";


const Students = () => {
  return (
    <div>
      <div className="uppercase font-bold flex justify-evenly h-[60px] items-center">
        <h3 className="3xl">Total Items </h3>
        <h3 className="3xl">Total Price: </h3>
        <Link to='/dashboard/payment'><button className="btn btn-warning btn-sm">Pay</button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
        <tr>
          <th className="border border-gray-400 px-4 py-2">Class Name</th>
          <th className="border border-gray-400 px-4 py-2">Instructor Name</th>
          <th className="border border-gray-400 px-4 py-2">Available Seats</th>
          <th className="border border-gray-400 px-4 py-2">Price</th>
          <th className="border border-gray-400 px-4 py-2">Actions</th>
        </tr>
      </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            
            
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default Students;
