import type { Category } from "../pages/Category/Categories";
import type { JobProps } from "../pages/Jobs/Jobs";
import type { SubCategory } from "../pages/SubCategory/SubCategories";
export const getMenu = () => {
  const MENU = [
    { key: "home", label: "Home", to: "/", icon: "RiHome9Line" },
    { key: "users", label: "User", to: "/user", icon: "RiUserLine" },
    { key: "category", label: "Category", to: "/category", icon: "RiListCheck2" },
    { key: "subcategory", label: "Sub-Category", to: "/sub-category", icon: "RiMenu2Line" },
    { key: "service", label: "Service", to: "/service", icon: "RiServiceLine" },
    { key: "jobs", label: "Jobs", to: "/job", icon: "RiBriefcaseLine" },
    { key: "system", label: "System health", to: "/system", icon: "RiHeartLine" },
    { key: "content", label: "Content", to: "/content", icon: "RiFileTextLine" },
  ];
  return MENU
};
export const categoriesData: Category[] = [
  {
    id: 1,
    title: "Construction",
    hexCode:'#ADDF2F',
    dateAndTime: "April 10, 2025, 10:00 AM",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Domestic Work",
    hexCode:'#1ecbe1',
    dateAndTime: "April 10, 2025, 12:00 PM",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Tailoring",
    hexCode:'#bd4276',
    dateAndTime: "April 11, 2025, 09:30 AM",
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "Gardening",
     hexCode:'#e51a43',
    dateAndTime: "April 11, 2025, 02:15 PM",
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    title: "Dog Sitting - Pet Care",
    hexCode:'#d800ff',
    dateAndTime: "April 12, 2025, 11:45 AM",
    image:
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Hospitality - Catering",
    hexCode:'#42bd7d',
    dateAndTime: "April 12, 2025, 04:20 PM",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=60",
  },
];

export const subCategoriesData: SubCategory[] = [
  // Subcategories for Construction
  {
    id: 1,
    categoryId: 1,
    title: "Masonry",
    description: "Brickwork, stonework, and structural building services.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    dateAndTime: "April 12, 2025, 10:00 AM",
  },
  {
    id: 2,
    categoryId: 1,
    title: "Painting & Finishing",
    description: "Interior and exterior painting and surface finishing services.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    dateAndTime: "April 12, 2025, 11:30 AM",
  },

  // Subcategories for Domestic Work
  {
    id: 3,
    categoryId: 2,
    title: "House Cleaning",
    description: "Full home cleaning including kitchen, bathrooms, and living spaces.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    dateAndTime: "April 13, 2025, 09:15 AM",
  },
  {
    id: 4,
    categoryId: 2,
    title: "Cooking & Meal Prep",
    description: "Homemade meals and cooking services for daily needs.",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=60",
    dateAndTime: "April 13, 2025, 01:45 PM",
  },

  // Subcategories for Tailoring
  {
    id: 5,
    categoryId: 3,
    title: "Custom Stitching",
    description: "Tailored clothing made to measure for perfect fit.",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=60",
    dateAndTime: "April 14, 2025, 10:30 AM",
  },
  {
    id: 6,
    categoryId: 3,
    title: "Alterations & Repairs",
    description: "Clothing adjustments and repairs to extend garment life.",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=60",
    dateAndTime: "April 14, 2025, 12:00 PM",
  },

  // Subcategories for Gardening
  {
    id: 7,
    categoryId: 4,
    title: "Landscaping",
    description: "Design and installation of beautiful outdoor spaces.",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=60",
    dateAndTime: "April 15, 2025, 09:00 AM",
  },
  {
    id: 8,
    categoryId: 4,
    title: "Plant Care & Maintenance",
    description: "Watering, pruning, and general care for indoor and outdoor plants.",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=60",
    dateAndTime: "April 15, 2025, 11:15 AM",
  },

  // Subcategories for Dog Sitting - Pet Care
  {
    id: 9,
    categoryId: 5,
    title: "Dog Walking",
    description: "Daily or occasional dog walking services for pets of all sizes.",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=800&q=60",
    dateAndTime: "April 16, 2025, 10:00 AM",
  },
  {
    id: 10,
    categoryId: 5,
    title: "Pet Sitting",
    description: "In-home or daycare pet sitting services for cats and dogs.",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=800&q=60",
    dateAndTime: "April 16, 2025, 12:30 PM",
  },

  // Subcategories for Hospitality - Catering
  {
    id: 11,
    categoryId: 6,
    title: "Event Catering",
    description: "Catering services for weddings, parties, and corporate events.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=60",
    dateAndTime: "April 17, 2025, 11:00 AM",
  },
  {
    id: 12,
    categoryId: 6,
    title: "Beverage & Dessert Services",
    description: "Specialized drinks and dessert preparation for events.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=60",
    dateAndTime: "April 17, 2025, 02:00 PM",
  },
];
export const usersData = [
  // Service Provider (Individual)
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "+123456789",
    address: "Street 4, Islamabad",
    profilePicture:
      "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1600",
    profileImage:
      "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1600",
    logo:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600",
    idCardImage:
      "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=1600",
    businessLicense:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dob: "1990-05-20",
    country: "Pakistan",
    city: "Islamabad",
    taxId: "SP-123456",
    vatNumber: "VAT-987654",
    language: ["English", "Urdu"],
    subscriptionPlan: "Premium",
    status: "Active",
    type: "ServiceProvider",
    reported:false
  },

  // Service Provider Company
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: "+987654321",
    address: "Street 4, Islamabad",
    profilePicture:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600",
    companyName: "Jane's Catering Co.",
    registeredOffice: "Office 12, Blue Area, Islamabad",
    taxDomicile: "Pakistan",
    uniqueCode: "SPC-654321",
    vatNumber: "VAT-123456",
    taxId: "TAX-987654",
    status: "Inactive",
    type: "ServiceProviderCompany",
    reported:true
  },

  // Another Service Provider
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phoneNumber: "+1122334455",
    address: "Street 4, Islamabad",
    profilePicture:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    profileImage:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    logo:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600",
    idCardImage:
      "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=1600",
    businessLicense:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dob: "1988-11-15",
    country: "Pakistan",
    city: "Lahore",
    taxId: "SP-789012",
    vatNumber: "VAT-654321",
    language: ["English"],
    subscriptionPlan: "Basic",
    status: "Active",
    type: "ServiceProvider",
    reported:false
  },
  {
    id: 4,
    name: "Bob Williams",
    email: "bob.williams@example.com",
    phoneNumber: "+9988776655",
    address: "Street 10, Karachi",
    profilePicture:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600",
    status: "Active",
    type: "Customer",
    reported:false
  },
];
export const servicesData = [
  {
    id: 1,
    type: "Construction",
    name: "Plumbing",
    pricePerHour: 20,
    details: "Full plumbing services including leak repairs, pipe replacement, and maintenance.",
    images: [
      "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
    ],
    certifications: [
      {
        name: "Certified Plumber",
        image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ]
  },
  {
    id: 2,
    type: "Domestic Work",
    name: "House Cleaning",
    pricePerHour: 15,
    details: "Professional cleaning service for homes, kitchens, bathrooms, and offices.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    ],
    certifications: [
      {
        name: "Professional Cleaner",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c"
      }
    ]
  },
  {
    id: 3,
    type: "Domestic Work",
    name: "House Cleaning",
    pricePerHour: 15,
    details: "Professional cleaning service for homes, kitchens, bathrooms, and offices.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    ],
    certifications: [
      {
        name: "Professional Cleaner",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c"
      }
    ]
  }
];
export const dummyJobs: JobProps[] = [
  {
    id: 1,
    title: "Construction of Residential Building",
    category: "Construction",
    description: "Building a 3-storey residential house with modern design.",
    price: 5000000,
    location: "Karachi, Pakistan",
    urgency: "Urgent",
    images: ["https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62"],
    likes: 12,
    comments: 4,
    dateAndTime: "Jan 10, 2026, 10:00 AM",
    postedBy: "Muhammad Bilal",
    likedUsers: [
      { id: 1, name: "Ali Khan", avatar: "https://i.pravatar.cc/40?img=1" },
      { id: 2, name: "Sara Ahmed", avatar: "https://i.pravatar.cc/40?img=2" },
    ],
    commentsList: [
      {
        id: 1,
        user: "Ali Khan",
        avatar: "https://i.pravatar.cc/40?img=1",
        comment: "Great work! Keep it up.",
        dateAndTime: "Jan 10, 2026, 12:00 PM",
        replies: [
          {
            id: 101,
            user: "Muhammad Bilal",
            avatar: "https://i.pravatar.cc/40?img=7",
            comment: "Thanks Ali! We are working hard.",
            dateAndTime: "Jan 10, 2026, 12:30 PM",
          },
        ],
      },
      {
        id: 2,
        user: "Sara Ahmed",
        avatar: "https://i.pravatar.cc/40?img=2",
        comment: "When will the project complete?",
        dateAndTime: "Jan 10, 2026, 1:30 PM",
        replies: [
          {
            id: 102,
            user: "Muhammad Bilal",
            avatar: "https://i.pravatar.cc/40?img=7",
            comment: "Expected completion is by March 2026.",
            dateAndTime: "Jan 10, 2026, 2:00 PM",
          },
          {
            id: 103,
            user: "Ali Khan",
            avatar: "https://i.pravatar.cc/40?img=1",
            comment: "Looking forward to seeing it finished!",
            dateAndTime: "Jan 10, 2026, 2:15 PM",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "House Cleaning Service",
    category: "Domestic Work",
    description: "Professional cleaning service for 3-bedroom houses.",
    price: 5000,
    location: "Lahore, Pakistan",
    urgency: "Normal",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c"],
    likes: 8,
    comments: 2,
    dateAndTime: "Jan 12, 2026, 12:00 PM",
    postedBy: "Ayesha Tariq",
    likedUsers: [
      { id: 3, name: "Ahmed Raza", avatar: "https://i.pravatar.cc/40?img=3" },
    ],
    commentsList: [
      {
        id: 1,
        user: "Ahmed Raza",
        avatar: "https://i.pravatar.cc/40?img=3",
        comment: "Cleaners arrived on time!",
        dateAndTime: "Jan 12, 2026, 2:00 PM",
        replies: [
          {
            id: 201,
            user: "Ayesha Tariq",
            avatar: "https://i.pravatar.cc/40?img=8",
            comment: "Glad to hear that, Ahmed!",
            dateAndTime: "Jan 12, 2026, 2:15 PM",
          },
        ],
      },
    ],
  },
];
