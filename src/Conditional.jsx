import React from "react";

const Conditional = ({ title }) => {
//   if (title === "user") {
    // return <div>user page</div>;
//   }
//   if (title === "admin") {
//     return <div>admin page</div>;
//   }
  return (
    <div>
      {title === "user" && <div>user page</div>}
      {title === "admin" && <div>admin page</div>}
    </div>
  );
};

export default Conditional;
