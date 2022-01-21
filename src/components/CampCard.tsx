import { Link } from "react-router-dom";

import { ICamp } from "types/type";

const CampCard = ({ camp }: { camp: ICamp }) => {
  return (
    <Link to={`/camp/${camp.id}`}>
      <div
        style={{
          backgroundImage: `url(${camp.thumbnail})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "20px",
        }}
      >
        <div>{camp.status}</div>
        <div>{camp.name}</div>
        <div>{camp.startDate}</div>
      </div>
    </Link>
  );
};

export default CampCard;
