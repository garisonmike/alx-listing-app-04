# ALX Listing App 04 - API Integration

A Next.js-based Airbnb clone with full API integration for property listings, details, bookings, and reviews.

## 🚀 Features

- **Property Listing Page**: Dynamically fetches and displays properties from API
- **Property Detail Page**: Shows detailed information for individual properties with dynamic routing
- **Booking System**: Complete booking form with POST request to API
- **Reviews Section**: Fetches and displays property reviews from API
- **Loading States**: Smooth loading indicators for all async operations
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **TypeScript**: Full type safety with custom interfaces
- **Tailwind CSS**: Modern, responsive UI design

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alx-listing-app-04
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```

The application will start on [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm start
```

## 📁 Project Structure

```
alx-listing-app-04/
├── components/
│   └── property/
│       ├── PropertyCard.tsx       # Property card component for listings
│       ├── PropertyDetail.tsx     # Detailed property view component
│       └── ReviewSection.tsx      # Reviews display component
├── interfaces/
│   └── index.ts                   # TypeScript interfaces
├── pages/
│   ├── _app.tsx                   # Next.js app entry point
│   ├── index.tsx                  # Property listing page (API integration)
│   ├── booking/
│   │   └── index.tsx              # Booking form page (API integration)
│   └── property/
│       └── [id].tsx               # Dynamic property detail page (API integration)
├── styles/
│   └── globals.css                # Global styles with Tailwind
├── public/                        # Static assets
├── next.config.js                 # Next.js configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies and scripts
```

## 🔌 API Endpoints

The application integrates with the following API endpoints:

### Properties
- `GET /api/properties` - Fetch all properties
- `GET /api/properties/:id` - Fetch single property details
- `GET /api/properties/:id/reviews` - Fetch property reviews

### Bookings
- `POST /api/bookings` - Submit booking information

## 📝 API Integration Details

### 1. Property Listing Page
**File**: `pages/index.tsx`
- Fetches property list from `/api/properties`
- Displays properties in a responsive grid
- Shows loading state while fetching
- Handles errors gracefully

### 2. Property Detail Page
**File**: `pages/property/[id].tsx`
- Uses Next.js dynamic routing with `[id]`
- Fetches property details from `/api/properties/:id`
- Displays comprehensive property information
- Includes reviews section

### 3. Booking Page
**File**: `pages/booking/index.tsx`
- Complete booking form with validation
- Submits data via POST to `/api/bookings`
- Shows success/error messages
- Form includes:
  - Personal information (name, email, phone)
  - Payment details (card number, expiration, CVV)
  - Billing address

### 4. Reviews Section
**File**: `components/property/ReviewSection.tsx`
- Fetches reviews from `/api/properties/:id/reviews`
- Displays user ratings and comments
- Shows loading state
- Handles empty reviews state

## 🎨 Components

### PropertyCard
Reusable card component that displays:
- Property image
- Title and location
- Price per night
- Rating
- Bedroom/bathroom/guest count

### PropertyDetail
Comprehensive property view showing:
- Large property image
- Full description
- Amenities list
- Property statistics
- Embedded reviews section
- Book now button

### ReviewSection
Reviews display featuring:
- User avatars
- Ratings
- Comments
- Timestamps

## 🔧 TypeScript Interfaces

```typescript
interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  image: string;
  bedrooms?: number;
  bathrooms?: number;
  guests?: number;
  rating?: number;
  amenities?: string[];
}

interface Review {
  id: string;
  propertyId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
}

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  billingAddress: string;
  propertyId?: string;
  checkIn?: string;
  checkOut?: string;
}
```

## 🌟 Key Features

### Loading States
All API calls include loading indicators:
- Spinner animations
- Loading text
- Disabled buttons during submission

### Error Handling
Comprehensive error handling:
- Try-catch blocks for all API calls
- User-friendly error messages
- Console logging for debugging
- Fallback UI for failed requests

### Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Adaptive typography
- Touch-friendly interactive elements

## 📦 Dependencies

- **next**: ^14.0.4 - React framework
- **react**: ^18.2.0 - UI library
- **react-dom**: ^18.2.0 - React DOM renderer
- **axios**: ^1.6.5 - HTTP client
- **typescript**: ^5.3.3 - Type safety
- **tailwindcss**: ^3.4.0 - Utility-first CSS

## 🚦 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🎯 Assignment Requirements

This project fulfills all requirements for Milestone 5:

✅ **Task 0**: API Integration for Property Listing Page
- `pages/index.tsx` - Fetches properties from `/api/properties`
- `components/property/PropertyCard.tsx` - Displays dynamic property data

✅ **Task 1**: API Integration for Property Detail Page
- `pages/property/[id].tsx` - Fetches property by ID
- `components/property/PropertyDetail.tsx` - Displays detailed property information

✅ **Task 2**: API Integration for Booking Page
- `pages/booking/index.tsx` - POST request to `/api/bookings`
- Complete form validation and error handling

✅ **Task 3**: API Integration for Reviews
- `components/property/ReviewSection.tsx` - Fetches reviews from `/api/properties/:id/reviews`
- Dynamic display with loading and error states

## 📚 Learning Outcomes Achieved

- ✅ Implemented API calls using axios in Next.js
- ✅ Fetched data dynamically based on route parameters
- ✅ Handled loading and error states in React components
- ✅ Submitted form data to API endpoints (POST requests)
- ✅ Displayed API-fetched data dynamically in UI components
- ✅ Connected multiple pages and components to different API endpoints

## 🔗 Repository

**GitHub repository**: alx-listing-app-04

## 📄 License

This project is part of the ALX Software Engineering program.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
