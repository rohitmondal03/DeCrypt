import { Skeleton } from "@nextui-org/react";
import classNames from "classnames";


export default function LoadingStandalone() {
  return (
    <div className={classNames({
      "max-w-[300px] mx-auto h-[80vh] w-full flex items-center justify-center gap-3": true,
    })}>
      <div>
        <Skeleton className="flex rounded-full w-12 h-12" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-3 w-3/5 rounded-lg" />
        <Skeleton className="h-3 w-4/5 rounded-lg" />
      </div>
    </div>
  );
}
