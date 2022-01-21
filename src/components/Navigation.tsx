import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div
      style={{
        background: "#6499FF",
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        gap: "20px",
      }}
    >
      <Link to="/">
        <img
          style={{ width: "88px", height: "32px" }}
          src={require("assets/images/logo.png")}
          alt="배너"
        />
      </Link>
      <Link to="/community">
        <img
          style={{ width: "30px" }}
          src={require("assets/images/icons/ic_person.png")}
          alt="배너"
        />
      </Link>
    </div>
  );
};

export default Navigation;
