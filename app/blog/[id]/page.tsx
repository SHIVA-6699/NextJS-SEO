import { useParams } from "next/navigation";
import React from "react";

interface paramsProps {
  params: { id: number };
}
const page = ({ params }: paramsProps) => {
  return <div>page {params.id}</div>;
};

export default page;
