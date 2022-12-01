import React from "react";

export default function Page({ params }) {
  return (
    <div className="mt-10">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-5xl leading-relaxed">Page {params.slug}</h1>
      </div>
    </div>
  );
}
