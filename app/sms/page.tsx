import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS 로그인</h1>
        <h2 className="text-xl">인증해주세요!</h2>
      </div>
      <form className="flex flex-col gap-3">
      <FormInput 
        type="number"
        placeholder="phone number"
        required
        errors={[]}
        name="phone"
      />
      <FormInput 
        type="number"
        placeholder="인증번호"
        required
        errors={[]}
        name="verify"
      />
      <FormButton
        text="인증"
      />
      </form>
    </div>
  );
}