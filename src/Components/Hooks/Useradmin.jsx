
import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import axios from "axios";

const Useradmin=()=>{
    const{user}=useAuth();
    

const{data:isAdmin}=useQuery({
    queryKey:['isAdmin',user?.email],
    queryFn:async()=>{
        const res = await axios.get(`https://sports-academy-server-pi.vercel.app/users/admin/${user?.email}`);
        
        
        return res.data
    }
})

return isAdmin?.admin;
}
export default Useradmin;