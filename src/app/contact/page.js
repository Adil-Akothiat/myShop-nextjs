import React, { Suspense } from "react";
import Contact from "./contact";
import HeadFoot from "@/components/headFoot/headFoot";
import Loader from "../loader/loader";

const ContactPage = () => {
    return (
        <HeadFoot>
            <main style={{minHeight:"100vh"}}>
                <Suspense fallback={<Loader />}>
                    <Contact />
                </Suspense>
            </main>
        </HeadFoot>
    );
}

export default ContactPage;