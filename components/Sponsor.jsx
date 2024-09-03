import Image from "next/image";
import React from "react";

const Sponsor = () => {
  return (
    <div className="flex gap-10 items-center justify-center -mt-6 z-10">
      <div>
        <Image
          className=""
          src="/Home/microsoft.png"
          alt="logo"
          width={150}
          height={100}
        />
      </div>
      <div>
        <Image
          className=""
          src="/Home/newfrontiers.svg"
          alt="logo"
          width={150}
          height={50}
        />
      </div>
      <div>
        <Image
          className=""
          src="/Home/msitek.png"
          alt="logo"
          width={150}
          height={50}
        />
      </div>
    </div>
  );
};

export default Sponsor;
