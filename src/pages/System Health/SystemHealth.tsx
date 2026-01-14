import { FiActivity, FiAlertCircle, FiClock } from "react-icons/fi";
import Header from "../../layouts/partials/Header";

const systemData = [
  {
    id: 1,
    service: "API Server",
    uptime: "99.9%",
    errors: 2,
    performance: "Good",
  },
  {
    id: 2,
    service: "Database",
    uptime: "99.5%",
    errors: 0,
    performance: "Average",
  },
  {
    id: 3,
    service: "Authentication Service",
    uptime: "100%",
    errors: 1,
    performance: "Excellent",
  },
  {
    id: 4,
    service: "Payment Gateway",
    uptime: "98.7%",
    errors: 5,
    performance: "Poor",
  },
];
const SystemHealth = () => {
  return (
    <div>
      <Header header="System Health" link="/" />
      <div className="max-w-screen-2xl mx-auto px-4 py-6">
        <div className="overflow-x-auto bg-white rounded-xl border border-gray-200/70">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-200/70">
              <tr>
                <th className="px-6 py-3">Service</th>
                <th className="px-6 py-3">Uptime</th>
                <th className="px-6 py-3">Errors</th>
                <th className="px-6 py-3">Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/60">
  {systemData.map((item) => (
    <tr
      key={item.id}
      className="bg-white hover:bg-gray-50 transition-colors duration-150 ease-in-out"
    >
      <td className="px-6 py-3 font-medium text-gray-700/90">{item.service}</td>
      <td className="px-6 py-3 text-gray-700/90">
        <span className="flex items-center gap-1">
          <FiClock className="text-gray-400" /> {item.uptime}
        </span>
      </td>
      <td className="px-6 py-3 text-gray-700/90">
        <span className="flex items-center gap-1">
          <FiAlertCircle className="text-red-400" /> {item.errors}
        </span>
      </td>
      <td
        className={`px-6 py-3 font-medium ${
          item.performance === "Excellent"
            ? "text-green-700"
            : item.performance === "Good"
            ? "text-blue-700"
            : item.performance === "Average"
            ? "text-amber-700"
            : "text-red-700"
        }`}
      >
        <span className="flex items-center gap-1">
          <FiActivity className="inline" /> {item.performance}
        </span>
      </td>
    </tr>
  ))}
        </tbody>

          </table>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "Total Uptime",
              value: "99.6%",
              icon: <FiClock className="text-blue-600 w-6 h-6" />,
            },
            {
              title: "Total Errors",
              value: "8",
              icon: <FiAlertCircle className="text-red-600 w-6 h-6" />,
            },
            {
              title: "Overall Performance",
              value: "Good",
              icon: <FiActivity className="text-green-600 w-6 h-6" />,
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 flex items-center gap-4"
            >
              <div className="p-3 bg-gray-50 rounded-full">{card.icon}</div>
              <div>
                <p className="text-gray-500 text-sm">{card.title}</p>
                <p className="text-gray-900 font-bold text-lg">{card.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SystemHealth