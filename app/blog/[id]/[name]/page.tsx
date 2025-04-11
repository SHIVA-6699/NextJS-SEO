import React from "react";
interface paramObject {
  params: { name: string; id: string };
}
const page = ({ params }: paramObject) => {
  return (
    <div>
      {params.name}
      {params.id}
    </div>
  );
};

export default page;
