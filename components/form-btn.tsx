'use client'

import { useFormStatus } from "react-dom"

interface FormButtonProps {
    text: string
}

export default function FormButton({ text }:FormButtonProps) {
    const { pending } = useFormStatus()
    return (
        <button disabled={pending} className="
        primary-btn h-10
        disabled:bg-neutral-300
        disabled:text-gray-100
        disabled:cursor-not-allowed
        ">{pending ? "로딩중..." : text}</button>
    )
}