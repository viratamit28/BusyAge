import { useState } from "react";
import { ThumbsUp, ThumbsDown, Smile, Frown } from "lucide-react";

const FeedbackSection = () => {
  const [feedback, setFeedback] = useState(null);

  return (
    <div className="bg-gradient-to-r from-green-300 to-cyan-300 p-10 rounded-3xl shadow-md mt-10 mx-auto max-w-6xl">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Did you find the information on this page helpful?
      </h2>
      <p className="text-xl text-gray-800 mb-8">
        Let us know so we can improve the quality of the content on our pages
      </p>

      {feedback === null ? (
        <div className="flex  gap-6 flex-wrap">
          <button
            onClick={() => setFeedback("yes")}
            className="bg-gray-900 text-white px-8 py-4 rounded-full flex items-center gap-3 hover:scale-105 transition"
          >
            <span className="font-semibold">Yes</span>
            <ThumbsUp size={30} />
          </button>
          <button
            onClick={() => setFeedback("no")}
            className="bg-gray-900 text-white px-8 py-4 rounded-full flex items-center gap-3 hover:scale-105 transition"
          >
            <span className="font-semibold">No</span>
            <ThumbsDown size={30} />
          </button>
        </div>
      ) : (
        <div className="mt-6 flex items-center gap-4 text-lg font-semibold text-gray-800">
          {feedback === "yes" ? (
            <>
              <Smile size={56} className="text-green-600" />
              <span>Glad you found it helpful!</span>
            </>
          ) : (
            <>
              <Frown size={56} className="text-red-500" />
              <span>Sorry to hear that. We'll work on it!</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default FeedbackSection;
