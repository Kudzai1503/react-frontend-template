import React from "react";
import {dashboard_nav_items} from "@/lib/data";
import {useRouter} from "next/router";
import {active_link_color, inactive_link_color} from "@/lib/constants";
import Link from "next/link";

function DashboardSideBar() {

    const router = useRouter()
    return (
        <div className={"flex flex-col space-y-6 border-r border-amber-300 h-full  p-8"}>
            <p>LOGO</p>
            {dashboard_nav_items.sideBar.map(item=>(
                <Link href={item.location} className={`${item.location===router.pathname?active_link_color:inactive_link_color} flex flex-row items-center space-x-4`} key={item.id}>
                    <item.Icon height={20} width ={20}/>
                    {item.name}</Link>
            ))}

        </div>

    )

}

export default DashboardSideBar
