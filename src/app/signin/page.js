import React, { Suspense } from "react";
import Loader from "../loader/loader";
import HeadFoot from "@/components/headFoot/headFoot";
import SignIn from "./components/signin";

const SignInPage = ()=> {
    return (
        <Suspense fallback={<Loader />}>
            <HeadFoot>
                <main className="grid grid-cols-1 gap-y-16">
                    <SignIn />
                </main>
            </HeadFoot>
        </Suspense>
    );
}

export default SignInPage;