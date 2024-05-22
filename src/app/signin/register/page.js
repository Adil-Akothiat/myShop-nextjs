import Loader from "@/app/loader/loader";
import HeadFoot from "@/components/headFoot/headFoot";
import React, { Suspense } from "react";
import Register from "./register";

const RegisterPage = ()=> {
    return (
        <Suspense fallback={<Loader />}>
            <HeadFoot>
                <main className="grid grid-cols-1 gap-y-16 my-10 px-4 md:px-10 lg:px-16 xl:px-24">
                    <Register />
                </main>
            </HeadFoot>
        </Suspense>
    );
}

export default RegisterPage;