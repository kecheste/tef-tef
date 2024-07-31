"use client";

import Body from "@/components/Body";
import Loader from "@/components/Loader";
import Tools from "@/components/tools";
import React, { useEffect, useState } from "react";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[800px]">
        <Loader />
      </div>
    );
  }
  return (
    <>
      <Tools />
      <Body />
    </>
  );
}

export default Home;
