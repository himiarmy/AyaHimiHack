import React from "react";

const Delivery = () => {
  return (
    <div
      style={{
        paddingTop: "150px",
        paddingBottom: "50px",
        paddingRight: "30px",
      }}
    >
      <h5>Professional Delivery Service for Building Supplies</h5>
      <p>
        FVBS has high standards when it comes to getting products out to our
        customers. It needs to be done quickly, safely, correctly and on time to
        satisfy the demands of our busy network of home owners and builders. We
        have an extensive fleet of vehicles ranging from pickups, covered vans,
        flat decks and massive crane trucks. It doesn’t matter if you need a
        couple of cans of paint or supplies to build an entire structure, we
        have the vehicles and trained professionals to complete your job. All of
        our vehicles use GPS tracking which allows us to dispatch our jobs more
        efficiently and plans out routes to ensure your products arrive on time.
        We also have the capability of tracking our vehicles to give you
        accurate, real time ETA’s. If you need goods delivered to site, leave it
        to the professionals at FVBS. We Make It Easy!
      </p>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            style={{ width: "80%", height: "600px" }}
            allowfullscreen=""
            loading="lazy"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA%20%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5&t=&z=9&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
