import { Property } from "@/interfaces";
import Link from "next/link";

interface PropertyCardProps {
    property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
    return (
        <Link href={`/property/${property.id}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="relative h-48 w-full">
                    <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {property.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{property.location}</p>
                    <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                        {property.description}
                    </p>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-blue-600">
                            ${property.price}
                            <span className="text-sm text-gray-500 font-normal">/night</span>
                        </span>
                        {property.rating && (
                            <div className="flex items-center">
                                <svg
                                    className="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="ml-1 text-gray-700 font-semibold">
                                    {property.rating.toFixed(1)}
                                </span>
                            </div>
                        )}
                    </div>
                    {(property.bedrooms || property.bathrooms || property.guests) && (
                        <div className="mt-3 flex gap-4 text-sm text-gray-600">
                            {property.bedrooms && (
                                <span>{property.bedrooms} bed{property.bedrooms > 1 ? 's' : ''}</span>
                            )}
                            {property.bathrooms && (
                                <span>{property.bathrooms} bath{property.bathrooms > 1 ? 's' : ''}</span>
                            )}
                            {property.guests && (
                                <span>{property.guests} guest{property.guests > 1 ? 's' : ''}</span>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}
