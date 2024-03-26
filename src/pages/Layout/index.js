import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { getBillList } from "@/store/modules/billStore"
import { useDispatch } from "react-redux"


const Layout = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBillList())
    }, [dispatch])
    return <div>layput
        <Outlet />
    </div>
}
export default Layout
