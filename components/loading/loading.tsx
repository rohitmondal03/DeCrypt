import { Skeleton } from "../ui/skeleton";
import classNames from "classnames";


export default function LoadingComponent() {
  return (
    <div className={classNames({
      "max-w-[300px] mx-auto h-[80vh] w-full flex items-center justify-center gap-3": true,
    })}>
      <Skeleton  />
    </div>
  );
}
