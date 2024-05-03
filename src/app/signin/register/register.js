import ScrollAnimation from "@/aos/init";
import Link from "next/link";
import React from "react";

const Register = () => {
    return (
        <ScrollAnimation animation={"fade-up"} duration={"2000"}>
            <form className="grid grid-cols-1 gap-y-10">
                <h4 className="font-bold text-2xl text-center">Create Account</h4>
                <div className="grid grid-cols-1 gap-y-4 w-2/5 mx-auto">
                    <div className="grid grid-cols-cc">
                        <label htmlFor="fname">First name <strong className="text-red-500">*</strong></label>
                        <input type="text" name="f-name" id="fname" className="input rounded-md input-bordered input-sm" required/>
                    </div>
                    <div className="grid grid-cols-cc">
                        <label htmlFor="lname">Last name <strong className="text-red-500">*</strong></label>
                        <input type="text" name="l-name" id="lname" className="input rounded-md input-bordered input-sm" required/>
                    </div>
                    <div className="grid grid-cols-cc">
                        <label htmlFor="email">E-mail <strong className="text-red-500">*</strong></label>
                        <input type="email" name="e-mail" id="email" className="input rounded-md input-bordered input-sm" required/>
                    </div>
                    <div className="grid grid-cols-cc">
                        <label htmlFor="password">Password <strong className="text-red-500">*</strong></label>
                        <input type="password" name="p-assword" id="password" className="input rounded-md input-bordered input-sm" required/>
                    </div>
                    <div className="grid grid-cols-cc">
                        <label htmlFor="gender">Gender</label>
                        <div className="flex items-center">
                            <div className="mr-8">
                                <input type="radio" name="gender" id="male" />
                                <label htmlFor="male" className="ml-2">Male</label>
                            </div>
                            <div>
                                <input type="radio" name="gender" id="female"/>
                                <label htmlFor="female" className="ml-2">Female</label>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-cc">
                        <label htmlFor="birthdate">Birth date</label>
                        <input type="date" name="b-irthdate" id="birthdate" className="input rounded-md input-bordered input-sm" />
                    </div>
                    <div className="text-center">
                        {/* alert */}
                    </div>
                    <div className="grid grid-cols-1 text-center gap-y-3">
                        <button className="btn btn-neutral w-fit mx-auto rounded-md">Register</button>
                    </div>
                    <div className="border-t text-center p-4">
                        <Link href="/signin" className="text-stone-600 hover:text-slate-700">Already have account?</Link>
                    </div>
                </div>
            </form>
        </ScrollAnimation>
    );
}

export default Register;