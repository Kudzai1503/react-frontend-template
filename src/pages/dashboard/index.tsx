import React from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import {ShdBarChart} from "@/components/charts/BarChart";
import {FunkyChart} from "@/components/charts/FunkyCharts";


function Dashboard() {
    return (
        <DashboardLayout>
            <div className={"h-40 w-screen p-5"}>
                <FunkyChart/>
            </div>

        </DashboardLayout>

    )

}
export default Dashboard
