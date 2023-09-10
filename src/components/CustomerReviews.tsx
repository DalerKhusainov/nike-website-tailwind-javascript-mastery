// FROM CONSTANTS
import { reviews } from "@/constants";
// COMPONENTS
import ReviewCard from "./ReviewCard";

const CustomerReviews = () => {
  return (
    <section id="customer-reviews" className="bg-pale-blue padding">
      <div className="max-container">
        <h3 className="text-center font-palanquin text-4xl font-bold">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h3>
        <p className="text-info m-auto mt-4 max-w-lg text-center">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review) => (
            <ReviewCard key={review.customerName} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
