'use client'

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import { handleLogin } from "./action";
import { useFormState } from "react-dom";

export default function CreateAccount() {

const [state, action] = useFormState(handleLogin, null)

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">로그인</h1>
        <h2 className="text-xl">Fill in the form below to login!</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
      <FormInput 
        type="email"
        placeholder="이메일"
        required
        errors={state?.error ?? []}
        name="email"
      />
      <FormInput 
        type="password"
        placeholder="비밀번호"
        required
        errors={state?.error ?? []}
        name="password"
      />
      <FormButton 
        text="로그인"
      />
      </form>
      <SocialLogin />
    </div>
  );
}