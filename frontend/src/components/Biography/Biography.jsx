import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Our Story</p>
          <h3>Pokhara Medical Institute: A Legacy of Care</h3>
          <p>
            Pokhara Medical Institute has been a beacon of healthcare excellence
            in Pokhara for over 10 years. Founded with a vision of providing
            comprehensive and compassionate medical services, we have grown into
            a trusted healthcare partner for generations of families.
          </p>
          <p>
            Our team of highly skilled and experienced doctors, nurses, and
            medical professionals is dedicated to providing personalized care
            tailored to each patient's unique needs. We believe in fostering a
            patient-centered approach that prioritizes your well-being and
            ensures a harmonious journey towards optimal health and wellness.
          </p>
          <p>At Pokhara, we are committed to:</p>
          <ul>
            <li>Providing cutting-edge medical services</li>
            <li>Utilizing the latest medical technologies</li>
            <li>
              Employing compassionate and skilled healthcare professionals
            </li>
            <li>Creating a welcoming and supportive environment</li>
            <li>
              Continuously improving our services to meet the evolving needs of
              our community
            </li>
          </ul>
          <p>
            We are proud to be a part of the Pokhara community and are committed
            to providing the highest quality healthcare services to our
            patients. If you are seeking compassionate and personalized care, we
            invite you to experience the Pokhara difference.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
