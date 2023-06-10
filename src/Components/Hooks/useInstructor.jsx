import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";




const useInstructor=()=>{
    

    const{user}=useAuth();
    console.log(user)

const{data:isInstructor}=useQuery({
    queryKey:['isInstructor',user?.email],
    queryFn:async()=>{
        const res = await axios.get(`http://localhost:4000/users/instructor/${user?.email}`);
        
        // console.log('is instructor response',res)
        return res.data
    }
})
console.log(isInstructor);
return isInstructor?.instructor
}
export default useInstructor;