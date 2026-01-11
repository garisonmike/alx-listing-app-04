import { Property } from "@/interfaces";
import ReviewSection from "./ReviewSection";

interface PropertyDetailProps {
    property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                {/* Property Image */}
                <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                    <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-96 object-cover"
                    />
                </div>

                {/* Property Details */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800 mb-2">
                                {property.title}
                            </h1>
                            <p className="text-xl text-gray-600 flex items-center">
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                {property.location}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-4xl font-bold text-blue-600">
                                ${property.price}
                            </p>
                            <p className="text-gray-500">per night</p>
                        </div>
                    </div>

                    {/* Rating and Property Stats */}
                    <div className="flex items-center gap-8 mb-6 pb-6 border-b">
                        {property.rating && (
                            <div className="flex items-center">
                                <svg
                                    className="w-6 h-6 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="ml-2 text-xl font-semibold text-gray-800">
                                    {property.rating.toFixed(1)}
                                </span>
                            </div>
                        )}
                        {property.bedrooms && (
                            <div className="flex items-center">
                                <span className="text-lg text-gray-700">
                                    <strong>{property.bedrooms}</strong> Bedroom{property.bedrooms > 1 ? 's' : ''}
                                </span>
                            </div>
                        )}
                        {property.bathrooms && (
                            <div className="flex items-center">
                                <span className="text-lg text-gray-700">
                                    <strong>{property.bathrooms}</strong> Bathroom{property.bathrooms > 1 ? 's' : ''}
                                </span>
                            </div>
                        )}
                        {property.guests && (
                            <div className="flex items-center">
                                <span className="text-lg text-gray-700">
                                    <strong>{property.guests}</strong> Guest{property.guests > 1 ? 's' : ''}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                            About this place
                        </h2>
                        <p className="text-gray-700 leading-relaxed">{property.description}</p>
                    </div>

                    {/* Amenities */}
                    {property.amenities && property.amenities.length > 0 && (
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                Amenities
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {property.amenities.map((amenity, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center p-3 bg-gray-50 rounded-lg"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="text-gray-700">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Booking Button */}
                    <div className="mt-8">
                        <a
                            href="/booking"
                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Book Now
                        </a>
                    </div>
                </div>

                {/* Reviews Section */}
                <ReviewSection propertyId={property.id} />
            </div>
        </div>
    );
}
