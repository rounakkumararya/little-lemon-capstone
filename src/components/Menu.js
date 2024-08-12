import React from "react";
import recipes from "../recipes";
import Swal from "sweetalert2";

export default function Menu() {
  const handleOrder = (id) => {
    Swal.fire({
      title: "Do you want to order this item?",
      text: "",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Ordered",
          text: "Your order is being processed",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This week specials</h2>
        <button>Order menu</button>
      </div>

      <div className="cards ">
        {recipes.map((receipe) => (
          <div key={receipe.id} className="menu-items">
            <img src={receipe.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{receipe.title}</h5>
                <p>{receipe.price}</p>
              </div>
              <p>{receipe.description}</p>
              <button className="orderbtn" onClick={handleOrder}>
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
