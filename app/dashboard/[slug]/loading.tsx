import dynamic from "next/dynamic";

const LoadingCard= dynamic(() => import("@/components/loading/loading-card"))


export default function Loading() {
  return (
    <LoadingCard />
  )
}