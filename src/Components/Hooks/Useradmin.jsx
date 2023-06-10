
import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import axios from "axios";

const Useradmin=()=>{
    const{user}=useAuth();
    console.log(user)

const{data:isAdmin}=useQuery({
    queryKey:['isAdmin',user?.email],
    queryFn:async()=>{
        const res = await axios.get(`http://localhost:4000/users/admin/${user?.email}`);
        
        // console.log('is admin response',res)
        return res.data
    }
})
// console.log(isAdmin);
return isAdmin?.admin;
}
export default Useradmin;