import React, { Suspense } from "react";
import Contact from "./contact";
import HeadFoot from "@/components/headFoot/headFoot";
import Loader from "../loader/loader";

const ContactPage = () => {
    return (
        <Suspense fallback={<Loader />}>
            <HeadFoot>
                <main>
                    <Contact />
                </main>
            </HeadFoot>
        </Suspense>
    );
}

export default ContactPage;