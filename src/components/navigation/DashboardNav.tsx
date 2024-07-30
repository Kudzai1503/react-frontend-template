import React from "react";
import {UserCircleIcon} from "@heroicons/react/24/outline";
import UserDropDown from "@/components/userdropdown/UserDropDown";

function DashboardNav(){
    return(

        <div className={"flex flex-row items-center justify-between border-b border-zinc-400/50 p-5"}>
            <div className={"flex flex-1"}>

            </div>
          <UserDropDown/>
        </div>

    )

}

export default DashboardNav
