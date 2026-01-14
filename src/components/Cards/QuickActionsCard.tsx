import { FiClock } from "react-icons/fi";

const QuickActionsCard = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
    <div className="space-y-3">
      <ActionButton label="Approve Job" bg="blue" icon={
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      } />

      <ActionButton label="Mark as Pending" bg="yellow" icon={<FiClock className="w-5 h-5" />} />
      <ActionButton label="Reject Job" bg="red" icon={
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      } />
      <ActionButton label="Archive Job" bg="gray" icon={
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      } />
    </div>
  </div>
);

const ActionButton = ({ label, bg, icon }: { label: string; bg: string; icon: React.ReactNode }) => (
  <button
    className={`w-full px-4 py-3 bg-${bg}-50 text-${bg}-700 font-medium rounded-lg hover:bg-${bg}-100 transition-colors flex items-center justify-between`}
  >
    <span>{label}</span>
    {icon}
  </button>
);

export default QuickActionsCard;
