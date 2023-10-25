"use client";
import InstallPrompt from "../framework/InstallPrompt";
import { Button } from "@nextui-org/react";

export default function () {
  const reload = () => {
    window.location.reload();
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <Button
        className="bg-gradient-to-tr from-green-500 to-blue-500 text-white shadow-lg"
        style={{ marginTop: "30vh" }}
        color="default"
        onPress={reload}
      >
        다시 시도
      </Button>
      <InstallPrompt />
    </div>
  );
}
