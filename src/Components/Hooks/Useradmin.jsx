import { useContext } from "react"
import { AuthContext } from "../Providers/Authprovider"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const Useradmin=()=>{
    // const token = localStorage.getItem('access-token');

    const{user}=useContext(AuthContext)
    console.log(user)

const{data:isAdmin,isLoading:isAdminLoading}=useQuery({
    queryKey:['isAdmin',user?.email],
    queryFn:async()=>{
        const res=await axios.get (`http://localhost:4000/users/admin/${user?.email}`);
        
        console.log('is admin response',res)
        return res.data.admin
    }
})
return[isAdmin,isAdminLoading]
}
export default Useradmin;