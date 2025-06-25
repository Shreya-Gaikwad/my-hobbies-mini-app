import { useNavigate } from "react-router-dom";
import Greeting from "./Greeting";

function Home() {
  const users = [{ name: "Shreya", location: "Pune" }];
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid min-vh-100 bg-light d-flex flex-column justify-content-center align-items-center">
        <div className="text-center p-4">
          <Greeting name="Shreya" isDarkMode />
          <p className="text-muted fs-5">Welcome 🌼</p>
        </div>

        <div className="row justify-content-center w-100">
          {users.map((user, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm border-0 bg-white">
                <div className="card-body text-center">
                  <h4 className="card-title text-primary">{user.name}</h4>
                  <p className="card-text text-secondary">📍 {user.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button
            className="btn btn-outline-primary fw-bold px-4 py-2 fs-5 rounded-pill shadow-sm"
            onClick={() => navigate("/hobbies")}
          >
            Explore My Hobbies →
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
