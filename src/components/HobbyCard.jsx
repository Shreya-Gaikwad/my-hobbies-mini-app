function HobbyCard({ hobby, reason }) {
  return (
    <div className="card h-100 shadow-sm border-0 rounded-4">
      <div className="card-body text-center">
        <h4 className="card-title text-primary fw-bold mb-3">
          {getEmoji(hobby)} {hobby}
        </h4>
        <p className="card-text text-secondary fst-italic px-2">“{reason}”</p>
      </div>
    </div>
  );
}

// Helper function to assign emojis
function getEmoji(hobby) {
  switch (hobby) {
    case "Reading":
      return "📚";
    case "Dancing":
      return "💃";
    case "Coding":
      return "💻";
    case "Driving":
      return "🚗";
    case "Music":
      return "🎵";
    case "Journalling":
      return "📝";
    case "Singing":
      return "🎙️";
    case "Travelling":
      return "🏞️";
    case "Exploring Cuisines":
      return "🍣";
    default:
      return "⭐";
  }
}

export default HobbyCard;
