interface FormButtonProps {
    loading: boolean,
    text: string
}

export default function FormButton({ loading, text }:FormButtonProps) {
    return (
        <button disabled={loading} className="
        primary-btn h-10
        disabled:bg-neutral-300
        disabled:text-gray-100
        disabled:cursor-not-allowed
        ">{loading ? "로딩중..." : text}</button>
    )
}