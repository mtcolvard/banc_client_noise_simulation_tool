'use client';
import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-6 py-28 md:p-24 xl:px-56">
      <div className="md:mt-12 mb-32 grid  lg:mb-0  lg:text-left font-mono">
        <h2 className={`mb-6 text-3xl opacity-50`}>You must hit Play before adjusting Noise Levels!</h2>
        <button className={`mb-6 mt-32 text-2xl opacity-90 rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600`} onClick={() => reset()}>Reload page</button>
      </div>
    </div>
  );
}



