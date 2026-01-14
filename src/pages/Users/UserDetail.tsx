import { useParams } from "react-router-dom";
import { usersData } from "../../components/data";
import Header from "../../layouts/partials/Header";
import { FiPhone } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { useState } from "react";


const UserDetail = () => {
     const { userId } = useParams();
  const user = usersData.find((u) => u.id == Number(userId));
  const [userStatus, setUserStatus] = useState(
    usersData.find((u) => u.id === Number(userId))?.status
  );
  const handleApprove = () => {
    setUserStatus("Active");
    alert(`${user?.name}'s account has been approved!`);
  };
   if (!user) {
    return (
      <div className="p-6">
        <Header header="User Details" link="/user" />
        <div className="bg-white rounded-lg shadow p-6 mt-4">
          <p className="text-red-500 font-medium">User not found!</p>
        </div>
      </div>
    );
  }

  return (
     <div>
      <Header header="Manage User Detail" link="/" />

      <div className="max-w-screen-2xl mx-auto px-4 py-6">
        {/* Approve Button */}
        {(user.type === "ServiceProvider" || user.type === "ServiceProviderCompany") &&
          userStatus !== "Active" && (
            <div className="flex justify-end mb-4">
              <button
                onClick={handleApprove}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors my-4"
              >
                Approve Account
              </button>
            </div>
          )}
        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border-0 my-5">
          <div className="p-6 md:p-8">
            {/* Profile Section */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
              {/* Profile Image */}
              <div className="flex flex-col items-center lg:items-start space-y-4">
                <div className="relative">
                  <img
                    src={user.profileImage || user.profilePicture || "/default-avatar.png"}
                    alt="Profile"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover ring-4 ring-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 shadow-md">
                      {user.type}
                    </span>
                  </div>
                </div>
                
                {/* Subscription Badge if available */}
                {user.subscriptionPlan && (
                  <div className="mt-4 text-center">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {user.subscriptionPlan}
                    </span>
                  </div>
                )}
              </div>

              {/* User Info */}
              <div className="flex-1">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                  <div className="flex flex-wrap gap-3 md:gap-4 mt-3">
                    <div className="flex items-center text-gray-600">
                      <MdEmail />
                      <span className="truncate mx-1">{user.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                     <FiPhone />
                      <span className="truncate mx-1">{user.phoneNumber}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 md:p-5 mb-6">
                  <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
                   <HiLocationMarker className="mr-1"  />
                    Contact Information
                  </h3>
                  <p className="text-gray-600">{user.address}</p>
                  {(user.country || user.city) && (
                    <p className="text-gray-600 mt-1">
                      {user.city && user.country ? `${user.city}, ${user.country}` : user.city || user.country}
                    </p>
                  )}
                </div>

                {/* Languages */}
                {user.language && user.language?.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-700 mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {user.language.map((lang, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Separator */}
            <div className="border-t border-gray-200 my-6 md:my-8"></div>

            {/* Service Provider Details */}
            {user.type === "ServiceProvider" && (
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 md:mb-6 pb-2 border-b border-gray-200">
                    Service Provider Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {/* Personal Information */}
                    <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-5 shadow-sm">
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                        <FaUser className="mr-1" />
                        Personal Information
                      </h4>
                      <div className="space-y-3">
                        {user.dob && (
                          <div>
                            <p className="text-sm text-gray-500">Date of Birth</p>
                            <p className="font-medium">{user.dob}</p>
                          </div>
                        )}
                        {user.taxId && (
                          <div>
                            <p className="text-sm text-gray-500">Tax ID</p>
                            <p className="font-medium">{user.taxId}</p>
                          </div>
                        )}
                        {user.vatNumber && (
                          <div>
                            <p className="text-sm text-gray-500">VAT Number</p>
                            <p className="font-medium">{user.vatNumber}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Images Section */}
                    <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-5 shadow-sm md:col-span-2">
                      <h4 className="font-semibold text-gray-800 mb-4">Documents & Images</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {user.idCardImage && (
                          <div>
                            <p className="text-sm font-medium text-gray-600 mb-2">ID Card</p>
                            <div className="rounded-lg overflow-hidden border border-gray-200">
                              <img
                                src={user.idCardImage}
                                alt="ID Card"
                                className="w-full h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-200"
                              />
                            </div>
                          </div>
                        )}
                        
                        {user.businessLicense && (
                          <div>
                            <p className="text-sm font-medium text-gray-600 mb-2">Business License</p>
                            <div className="rounded-lg overflow-hidden border border-gray-200">
                              <img
                                src={user.businessLicense}
                                alt="Business License"
                                className="w-full h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-200"
                              />
                            </div>
                          </div>
                        )}
                        
                        {user.logo && (
                          <div>
                            <p className="text-sm font-medium text-gray-600 mb-2">Company Logo</p>
                            <div className="rounded-lg overflow-hidden border border-gray-200 p-4 bg-white">
                              <img
                                src={user.logo}
                                alt="Logo"
                                className="w-full h-32 object-contain"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Company Details */}
            {user.type === "ServiceProviderCompany" && (
              <div className="space-y-6 md:space-y-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 md:mb-6 pb-2 border-b border-gray-200">
                  Company Details
                </h3>
                
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="p-4 md:p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-4">Company Information</h4>
                        <div className="space-y-4">
                          {user.companyName && (
                            <div>
                              <p className="text-sm text-gray-500">Company Name</p>
                              <p className="font-medium text-lg">{user.companyName}</p>
                            </div>
                          )}
                          {user.registeredOffice && (
                            <div>
                              <p className="text-sm text-gray-500">Registered Office</p>
                              <p className="font-medium">{user.registeredOffice}</p>
                            </div>
                          )}
                          {user.taxDomicile && (
                            <div>
                              <p className="text-sm text-gray-500">Tax Domicile</p>
                              <p className="font-medium">{user.taxDomicile}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-4">Tax Information</h4>
                        <div className="space-y-4">
                          {user.uniqueCode && (
                            <div>
                              <p className="text-sm text-gray-500">Unique Code</p>
                              <p className="font-medium font-mono text-gray-800">{user.uniqueCode}</p>
                            </div>
                          )}
                          {user.vatNumber && (
                            <div>
                              <p className="text-sm text-gray-500">VAT No (P.IV)</p>
                              <p className="font-medium">{user.vatNumber}</p>
                            </div>
                          )}
                          {user.taxId && (
                            <div>
                              <p className="text-sm text-gray-500">Tax ID Code</p>
                              <p className="font-medium">{user.taxId}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserDetail