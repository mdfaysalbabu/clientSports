import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useInstructor=()=>{
    // const token = localStorage.getItem('access-token');
    const [axiosSecure]=useAxiosSecure();

    const{user}=useAuth();
    console.log(user)

const{data:isInstructor,isLoading:isInstructorLoading}=useQuery({
    queryKey:['isInstructor',user?.email],
    queryFn:async()=>{
        const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
        
        console.log('is instructor response',res)
        return res.data.student
    }
})
return[isInstructor,isInstructorLoading]
}
export default useInstructor;