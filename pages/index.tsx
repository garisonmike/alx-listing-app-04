import PropertyCard from "@/components/property/PropertyCard";
import { Property } from "@/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get("/api/properties");
                setProperties(response.data);
                setError(null);
            } catch (error) {
                console.error("Error fetching properties:", error);
                setError("Failed to load properties. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-xl text-gray-600">Loading properties...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-xl text-red-600">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        Find Your Perfect Stay
                    </h1>
                    <p className="text-gray-600">
                        Discover amazing places to stay around the world
                    </p>
                </header>

                {properties.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-600">No properties available at the moment.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {properties.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
