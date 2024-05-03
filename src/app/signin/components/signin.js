import ScrollAnimation from "@/aos/init";
import Link from "next/link";
import React from "react";

const SignIn = ()=> {
    return (
        <ScrollAnimation animation={"fade-up"} duration={"2000"}>
        <form className="grid grid-cols-1 gap-y-10">
            <h4 className="font-bold text-2xl text-center">Login</h4>
            <div className="grid grid-cols-1 gap-y-4 w-2/5 mx-auto">
                <div className="grid grid-cols-cc">
                    <label htmlFor="email">E-mail <strong className="text-red-500">*</strong></label>
                    <input type="email" name="e-mail" id="email" className="input rounded-md input-bordered input-sm" required/>
                </div>
                <div className="grid grid-cols-cc">
                    <label htmlFor="password">Password <strong className="text-red-500">*</strong></label>
                    <input type="password" name="p-assword" id="password" className="input rounded-md input-bordered input-sm" required/>
                </div>
                <div className="text-center">
                    {/* alert */}
                </div>
                <div className="grid grid-cols-1 text-center gap-y-3">
                    <Link href="#forgotpassword" className="text-stone-600 hover:text-slate-700">Forgot password?</Link>
                    <button className="btn btn-neutral w-fit mx-auto rounded-md">Connexion</button>
                </div>
                <div className="border-t text-center p-4">
                    <Link href="/signin/register" className="text-stone-600 hover:text-slate-700">Create account</Link>
                </div>
            </div>
        </form>
        </ScrollAnimation>
    );
}

export default SignIn;