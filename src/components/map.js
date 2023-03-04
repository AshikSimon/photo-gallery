import React from "react";
const AddressMap = () => {
  return (
    <div className="map-responsive">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15695.449265313373!2d76.2693185!3d10.4324987!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9342b24e046e45c7!2sGlobal%20Pvt%20ITI!5e0!3m2!1sen!2sus!4v1609103404547!5m2!1sen!2sus"
        width="600"
        height="450"
        frameBorder="0"
        style={{border:0}}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};
export default AddressMap;
