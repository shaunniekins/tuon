"use client";

import { Button } from "@nextui-org/react";
import { IoAdd } from "react-icons/io5";
import { useRouter } from "next/navigation";

const DashboardComponent = () => {
  const router = useRouter();

  return (
    <>
      <div className="h-[100svh] w-screen relative container mx-auto">
        <div className="absolute inset-0 z-10 flex justify-end my-5">
          <Button
            startContent={<IoAdd />}
            onClick={() => {
              router.push(`/new`);
            }}
          >
            New
          </Button>
        </div>
        <div className="absolute inset-0 z-0 flex justify-center items-center">
          <h1 className="text-gray-500">NO COURSE YET</h1>
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
