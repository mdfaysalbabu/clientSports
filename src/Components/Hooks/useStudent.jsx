// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import axios from "axios";

// const useStudent = () => {
//   // const token = localStorage.getItem('access-token');

//   const { user } = useAuth();
//   console.log(user);

//   const { data: isStudent } = useQuery({
//     queryKey: ["isStudent", user?.email],
//     queryFn: async () => {
//       const res = await axios.get(
//         `http://localhost:4000/users/student/${user?.email}`
//       );

//     //   console.log("is student response", res);
//       return res.data;
//     },
//   });
//   return isStudent?.student;
// };
// export default useStudent;
