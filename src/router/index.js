

import Layout from "@/pages/Layout"
import New from "@/pages/New"
import Year from "@/pages/Year"
import Month from "@/pages/Month"
//创建路由实例绑定path和element
import { createBrowserRouter } from "react-router-dom"
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Month />
            },
            {
                path: 'year',
                element: <Year />
            }
        ]
    },
    { path: '/new', element: <New /> }
])
export default router