import React, {ReactNode} from "react";
import DashboardNav from "@/components/navigation/DashboardNav";
import DashboardFooter from "@/components/navigation/DashboardFooter";
import DashboardSideBar from "@/components/navigation/DashboardSideBar";


interface Props {
    children: ReactNode
}

function DashboardLayout({children}: Props) {
    return (

        <div className={"flex flex-row min-h-screen relative"}>
            <div className={"sidebar sticky top-0  h-screen w-1/4"}>
                <DashboardSideBar/>
            </div>
            <div className={"other  min-h-screen  w-3/4 flex-col"}>
                <DashboardNav/>
                <div className={"flex min-h-screen"}>
                    {children}
                </div>
                <DashboardFooter/>
            </div>

        </div>

    )

}

export default DashboardLayout
