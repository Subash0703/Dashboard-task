import React from "react";
import img from "../assets/img1.jpg";

const Feedback = () => {
  const feedbacks = [
    {
      name: "Jenny Wilson",
      rating: 4,
      comment: "The food was excellent and so was the service...",
    },
    {
      name: "Dianne Russell",
      rating: 5,
      comment:
        "We enjoyed the Eggs Benedict served on homemade focaccia bread...",
    },
    {
      name: "Devon Lane",
      rating: 4,
      comment:
        "Normally wings are wings, but theirs are lean meaty and tender...",
    },
    {
      name: "Wade Warren",
      rating: 5,
      comment: "Amazing service and delicious food. Highly recommend!",
    },
    {
      name: "Jane Cooper",
      rating: 3,
      comment: "Food was good, but service could be improved.",
    },
    {
      name: "Guy Hawkins",
      rating: 4,
      comment: "Nice ambiance and tasty dishes.",
    },
    {
      name: "Kristin Watson",
      rating: 5,
      comment: "Excellent place for a family dinner.",
    },
    {
      name: "Cody Fisher",
      rating: 4,
      comment: "Great food and friendly staff.",
    },
    {
      name: "Savannah Nguyen",
      rating: 5,
      comment: "Exceptional dining experience.",
    },
  ];

  const renderStars = (rating) => {
    return (
      <span className="text-warning bg-custom">
        {"★".repeat(rating)}
        <span className="text-white bg-custom">{"★".repeat(5 - rating)}</span>
      </span>
    );
  };

  return (
    <div
      className="card bg-custom text-white customerReview"
      style={{
        height: "56vh",
        overflowY: "scroll",
        overflowX: "hidden",
        scrollBehavior: "smooth",
      }}
    >
      <div className="bg-custom card-body">
        <h5 className="bg-custom card-title">Customer's Feedback</h5>
        {feedbacks.map((feedback, index) => (
          <div className="mb-4 bg-custom" key={index}>
            <p className="mb-0 bg-custom">
              <img
                src={img}
                alt=""
                className="rounded-circle img-fluid me-2"
                style={{ width: 30, height: 30 }}
              />
              <strong className="bg-custom">{feedback.name}</strong>
            </p>
            {renderStars(feedback.rating)}
            <p className="bg-custom">{feedback.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
