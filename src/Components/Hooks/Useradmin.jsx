
import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import useAuth from "./useAuth"

const Useradmin=()=>{
    // const token = localStorage.getItem('access-token');
    const [axiosSecure]=useAxiosSecure();

    const{user,loading}=useAuth();
    console.log(user)

const{data:isAdmin,isLoading:isAdminLoading}=useQuery({
    queryKey:['isAdmin',user?.email],
    enabled: !loading,
    queryFn:async()=>{
        const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        
        console.log('is admin response',res)
        return res.data.admin
    }
})
return[isAdmin,isAdminLoading]
}
export default Useradmin;