import { Review } from "@/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";

interface ReviewSectionProps {
    propertyId: string;
}

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`/api/properties/${propertyId}/reviews`);
                setReviews(response.data);
                setError(null);
            } catch (error) {
                console.error("Error fetching reviews:", error);
                setError("Failed to load reviews.");
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [propertyId]);

    if (loading) {
        return (
            <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reviews</h2>
                <p className="text-gray-600">Loading reviews...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reviews</h2>
                <p className="text-red-600">{error}</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Reviews ({reviews.length})
            </h2>

            {reviews.length === 0 ? (
                <p className="text-gray-600">No reviews yet. Be the first to review this property!</p>
            ) : (
                <div className="space-y-6">
                    {reviews.map((review) => (
                        <div key={review.id} className="border-b pb-6 last:border-b-0">
                            <div className="flex items-start gap-4">
                                {review.userAvatar ? (
                                    <img
                                        src={review.userAvatar}
                                        alt={review.userName}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                                        {review.userName.charAt(0).toUpperCase()}
                                    </div>
                                )}
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <div>
                                            <h4 className="font-semibold text-gray-800">
                                                {review.userName}
                                            </h4>
                                            <p className="text-sm text-gray-500">{review.date}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <svg
                                                className="w-5 h-5 text-yellow-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="ml-1 font-semibold text-gray-800">
                                                {review.rating.toFixed(1)}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ReviewSection;
