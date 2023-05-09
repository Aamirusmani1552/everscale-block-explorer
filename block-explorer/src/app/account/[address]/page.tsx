"use client";
import { useRouter } from "next/router";
import { FC, ReactElement } from "react";

const Account:FC = ():ReactElement=>{
    const router = useRouter();

    console.log(router)
    return <div>hello there</div>
}

export default Account