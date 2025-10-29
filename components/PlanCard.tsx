interface PlanCardProps {
  title: string;
  speed: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  onSelect: () => void;
}

export default function PlanCard({
  title,
  speed,
  price,
  features,
  onSelect,
  isPopular = false,
}: PlanCardProps) {
  const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.06-1.06L11.25 12.94l-1.72-1.72a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l3.75-3.75z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div
      className={`w-full flex flex-col items-center justify-between  bg-gradient-to-br from-[#020e24] to-[#001A41] border border-gray-700 hover:border-[#00D109] hover:scale-[1.01] transition-all duration-300 ${
        isPopular
          ? "bg-gradient-to-r from-[#020e24] to-[#001A41] border-2 border-black"
          : "border border-gray-200"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00B723] to-[#00D109] text-[#020e24] px-5 py-1.5 rounded-full text-sm font-bold tracking-wider transition-all duration-300">
          Mais Popular!
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold mb-2 p-4">{speed}</h3>
        <p className="text-sm text-gray-600 mb-4">{title}</p>
      </div>
      <div className="w-full space-y-5 mb-4 px-8">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center text-gray-300">
            <CheckIcon className="w-6 h-6 mr-3 text-[#00D109] flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </div>
      <div className="w-full text-center p-6">
        <p className="w-full flex justify-end text-3xl font-extrabold mb-4">
          {price}
        </p>
        <button
          onClick={onSelect}
          className="w-full py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:animate-pulse bg-gradient-to-r from-[#00B723] to-[#00D109] text-[#020e24]"
        >
          Contratar
        </button>
      </div>
    </div>
  );
}
