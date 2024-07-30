import React from "react";
import {Button} from "@/components/ui/button";

type Props ={}

function Login({}:Props){
    return(
        <div className={"flex justify-center bg-zinc-300 w-screen h-screen "}>
            <div className={"flex-1 flex items-center content-center justify-center bg-gradient-to-r from-emerald-200 from-10% via-green-100 via-30% to-emerald-500 to-90% ... "}>
                LOGIN
            </div>
            <div className={"flex-1 flex-col p-24 justify-center bg-zinc-100"} >
                <div className={"flex flex-col w-3/4 space-y-6 "}>
                    <p>LOGO</p>
                    <div>
                        <p className={"text-lg font-bold text-zinc-950"}>Hello Damba</p>
                        <p className={"text-sm text-zinc-400"}>Lorem abfakljf lsafkljhjlejf hhfhhaghfa</p>
                    </div>

                    <div>
                        <p className={"text-sm text-zinc-700"}> Email</p>
                        <input/>
                    </div>
                    <div>
                        <p className={"text-sm text-zinc-700"}> Password</p>
                        <input/>
                    </div>
                    <div className={"flex flex-row space-x-4 "}>
                        <p className={"text-zinc-400 text-xs"}>Forget Password</p>
                        <p className={"text-zinc-400 text-xs"}>Forget Password</p>
                    </div>
                    <Button>ytgrfed</Button>
                </div>

            </div>
        </div>


    )

}

export default Login