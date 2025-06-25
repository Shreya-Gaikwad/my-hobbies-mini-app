import HobbyCard from "./HobbyCard";
import { useNavigate } from "react-router-dom";

function Hobbies() {
  const navigate = useNavigate();
  const hobbies = [
    {
      hobby: "Reading",
      reason: "Lets me explore new worlds and ideas without leaving my room.",
    },
    {
      hobby: "Dancing",
      reason: "Because flailing my limbs counts as therapy, right?",
    },
    {
      hobby: "Coding",
      reason: "Lets me build, break, and learn — all in one go",
    },
    {
      hobby: "Driving",
      reason:
        "Where I solve all of life’s problems while pretending I'm in a music video.",
    },
    {
      hobby: "Music",
      reason:
        "Because sometimes lyrics explain my emotions better than I can..",
    },
    {
      hobby: "Journalling",
      reason: "My private space to rant so I don’t do it publicly.",
    },
    {
      hobby: "Singing",
      reason: "Because I deserve a Grammy in the bathroom at least.",
    },
    {
      hobby: "Travelling",
      reason:
        "Collecting memories, pictures, and existential crises one trip at a time.",
    },
    {
      hobby: "Exploring Cuisines",
      reason:
        "Each dish tells a story, and I'm just here for the plot... and the dessert.",
    },
  ];

  return (
    <div className="container py-5 min-vh-100 bg-light">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-primary">🌟 My Hobbies</h2>
        <p className="text-muted">Here’s what I enjoy doing in my free time</p>
      </div>

      <div className="row justify-content-center">
        {hobbies.length > 0 ? (
          hobbies.map((user, index) => (
            <div key={index} className="col-md-4 mb-4">
              <HobbyCard hobby={user.hobby} reason={user.reason} />
            </div>
          ))
        ) : (
          <h3 className="text-center text-danger">No Hobbies Found 😔</h3>
        )}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-outline-primary fw-bold px-4 py-2 fs-5 rounded-pill shadow-sm"
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default Hobbies;
