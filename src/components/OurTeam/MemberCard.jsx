import React from "react";
import "./OurTeam.scss";

const MemberCard = (props) => {
    const { name, image, position } = props;

  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
      <div className="team-box text-center mb-60">
        <div className="team-thumb mb-45 pos-rel">
          <img
            className="member__image"
            src={image}
            alt=""
          />
          <a className="team__link" href="/doctorDetails">
            +
          </a>
        </div>
        <div className="content__member">
          <h3 className="member__name">{name}</h3>
          <h6 className="member__position">{position}</h6>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
