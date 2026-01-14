import { useParams} from "react-router-dom";
import Header from "../../layouts/partials/Header";
import { servicesData } from "../../components/data";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData.find((s) => s.id === Number(serviceId));
  if (!service) {
    return (
      <div className="p-6">
        <Header header="Service Detail" link="/services" />
        <div className="bg-white rounded-lg shadow p-6 mt-4">
          <p className="text-red-500 font-medium">Service not found!</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header header={"Manage Services Detail"} link='/service'/>
       <div className="max-w-screen-2xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 border border-gray-100">
          <div className="p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.images.map((img, idx) => (
                    <div key={idx} className="relative group">
                      <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 aspect-square">
                        <img
                          src={img}
                          alt={`Service ${idx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      {idx === 0 && (
                        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Information */}
              <div className="lg:w-3/5">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-gray-900">{service.name}</h2>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                        {service.type}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-lg font-semibold text-gray-900">${service.pricePerHour}</span>
                      <span className="text-gray-500 ml-1">/ hour</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Active
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div className="bg-gray-50 rounded-xl p-5 mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Service Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{service.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
      {service.certifications.length > 0 && (
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8">
    <div className="flex items-center justify-between mb-6">
      <div>
        <h3 className="text-2xl font-bold text-gray-900">Certifications & Credentials</h3>
        <p className="text-gray-600 mt-1">Verified credentials and certifications held by this service</p>
      </div>
      <span className="px-4 py-2 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-lg">
        {service.certifications.length} Certifications
      </span>
    </div>

    {/* Wrap both sections in a single responsive grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {service.certifications.map((cert, idx) => (
          <div key={idx} className="group relative">
            <div className="bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-300 hover:shadow-md transition-all duration-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center mb-4 p-3">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-600 mb-3">Issued by Certified Authority</p>
                <div className="flex items-center text-sm text-green-600 font-medium">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Verified
                </div>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Service Statistics Card */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-gray-800">Service Statistics</h4>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Total Bookings</p>
            <p className="text-2xl font-bold text-gray-900">124</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Customer Rating</p>
            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-semibold text-gray-900">4.8</span>
              <span className="text-gray-500 text-sm ml-1">(48 reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


        {/* Stats and Actions Footer */}
        
      </div>
    </div>
  );
};

export default ServiceDetail;
