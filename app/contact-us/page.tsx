'use client'
import { useRef, useState } from "react"
import {SubmitHandler, useForm} from "react-hook-form"

interface FormInputs {
    name: string,
    surname: string,
    email: string,
    company: string,
    details: string
}

export default function ContactUs() {
    const formRef = useRef();
    const { register, handleSubmit, formState: {errors}} = useForm<FormInputs>();
    const onSubmit: SubmitHandler<FormInputs> = data => {

    }

    return (
        <main>
            <div>
                <form className="bg-white/40 rounded-3xl w-full group" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                    <div>
                        <label htmlFor="name" className="block after:content-['*'] after:ml-0.5 after:text-red-500 font-bold">Ad</label>
                        <input type="text" pattern="[a-zA-Z]{3,}" id="name" required/>
                    </div>
                    <div>
                        <label htmlFor="surname" className="block after:content-['*'] after:ml-0.5 after:text-red-500 font-bold">Soyad</label>
                        <input type="text" pattern="[a-zA-Z]{3,}" id="surname" required/>
                    </div>
                    <div>
                        <label htmlFor="email" className="">E-posta</label>
                        <input type="email" id="email"/>
                    </div>
                    <div>
                        <label htmlFor="company">Firma Adı</label>
                        <input type="text" minLength={3}/>
                    </div>
                </form>
            </div>
        </main>
    )
}