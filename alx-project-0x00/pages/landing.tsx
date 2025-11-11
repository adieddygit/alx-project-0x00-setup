import React from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-light text-gray-800">Landing Page</h1>

      <Card />

      <div className="flex flex-wrap justify-center gap-4">
        {/* Small Buttons */}
        <Button title="Small Rounded-sm" styles="text-sm px-3 py-1 rounded-sm" />
        <Button title="Small Rounded-md" styles="text-sm px-3 py-1 rounded-md" />
        <Button title="Small Rounded-lg" styles="text-sm px-3 py-1 rounded-lg" />

        {/* Medium Buttons */}
        <Button title="Medium Rounded-sm" styles="text-base px-4 py-2 rounded-sm" />
        <Button title="Medium Rounded-md" styles="text-base px-4 py-2 rounded-md" />
        <Button title="Medium Rounded-lg" styles="text-base px-4 py-2 rounded-lg" />

        {/* Large Buttons */}
        <Button title="Large Rounded-sm" styles="text-lg px-6 py-3 rounded-sm" />
        <Button title="Large Rounded-md" styles="text-lg px-6 py-3 rounded-md" />
        <Button title="Large Rounded-full" styles="text-lg px-6 py-3 rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
