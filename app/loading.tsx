import dynamic from "next/dynamic";

const LoadingStandalone = dynamic(() => import("@/components/loading/loading-standalone"));


export default function Loading() {
  return (
    <LoadingStandalone />
  )
}