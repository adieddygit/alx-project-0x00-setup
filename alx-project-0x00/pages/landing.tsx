import React from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-light text-gray-800">Landing Page</h1>

      <Card />

      <div className="flex flex-wrap gap-4">
        <Button title="Add" styles="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md" />
        <Button title="Delete" styles="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md" />
        <Button title="Submit" styles="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md" />
      </div>
    </div>
  );
};

export default Landing;
