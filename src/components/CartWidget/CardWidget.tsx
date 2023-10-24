import React from "react";

import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";

const CartWidget = () => {
  return (
    <div
      style={{
        padding: "0px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "end",
      }}
    >
      <RestoreFromTrashIcon />
      <span>0</span>
    </div>
  );
};

export default CartWidget;
