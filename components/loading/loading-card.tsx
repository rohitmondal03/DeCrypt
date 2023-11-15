import classNames from "classnames";

import { Card, Skeleton } from "@nextui-org/react";


export default function LoadingCard() {
  return (
    <div className={classNames({
      "flex items-center justify-center h-[80vh]": true,
    })}>
      <Card className="w-[200px] space-y-5 p-4" radius="lg">
        <Skeleton className="rounded-lg">
          <div className="h-24 rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </Card>
    </div>
  );
}
