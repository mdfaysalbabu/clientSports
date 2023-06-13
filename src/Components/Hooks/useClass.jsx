import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";
import { useQuery } from "@tanstack/react-query";


const useClass = () => {
    const {user}=useContext(AuthContext);
    const {data: classes=[],refetch}=useQuery({
        queryKey:['carts', user?.email],
        queryFn: async ()=>{
            const res= await fetch(`http://localhost:4000/carts?email=${user?.email}`)
            return res.json()
        }
    })
    return [classes, refetch]
};

export default useClass;