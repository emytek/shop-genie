"use client";

import { UserButton } from "@clerk/nextjs";

// import { useEffect } from "react";
// import { useParams } from "next/navigation";

// import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () => {
//   const onOpen = useStoreModal((state) => state.onOpen);
//   const isOpen = useStoreModal((state) => state.isOpen);

//   useEffect(() => {
//     if (!isOpen) {
//       onOpen();
//     }
//   }, [isOpen, onOpen]);

  return (
    <div className="p-4">
        <h1 className="text-2xl font-bold text-center">Setup</h1>
        <p className="text-center text-gray-500">
          Please setup your account to get started In Protected route.
        </p>
        <UserButton afterSignOutUrl="/"/>
    </div>
  );
};
 
export default SetupPage;