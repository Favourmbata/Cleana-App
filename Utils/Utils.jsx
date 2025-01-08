import { ClipLoader } from "react-spinners"

export const ButtonLoader = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <ClipLoader size={20} color="text-auth_bg" />
    </div>
  )
}