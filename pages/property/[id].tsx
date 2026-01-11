import PropertyDetail from "@/components/property/PropertyDetail";
import { Property } from "@/interfaces";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PropertyDetailPage() {
    const router = useRouter();
    const { id } = router.query;
    const [property, setProperty] = useState<Property | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProperty = async () => {
            if (!id) return;
            try {
                const response = await axios.get(`/api/properties/${id}`);
                setProperty(response.data);
                setError(null);
            } catch (error) {
                console.error("Error fetching property details:", error);
                setError("Failed to load property details.");
            } finally {
                setLoading(false);
            }
        };

        fetchProperty();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-xl text-gray-600">Loading property...</p>
                </div>
            </div>
        );
    }

    if (error || !property) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-xl text-red-600">{error || "Property not found"}</p>
                    <a href="/" className="mt-4 inline-block text-blue-600 hover:underline">
                        ← Back to listings
                    </a>
                </div>
            </div>
        );
    }

    return <PropertyDetail property={property} />;
}
