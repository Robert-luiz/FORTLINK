
interface PlanCardProps {
  title: string;
  speed: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export default function PlanCard({
  title,
  speed,
  price,
  features,
  isPopular = false,
}: PlanCardProps) {
  return (
    <div className={`w-full flex flex-col items-center justify-between rounded-lg shadow-lg ${isPopular ? "bg-gradient-to-r from-[#020e24] to-[#001A41] border-2 border-black scale-[1.05]" : "border border-gray-200"}`}>
      {isPopular && (
        <div className="w-full bg-black text-white text-center py-2 rounded mb-4">
          Mais Popular!
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold mb-2 p-4">{speed}</h3>
        <p className="text-sm text-gray-600 mb-4">{title}</p>
      </div>
      <div className="w-full space-y-5 mb-4 px-8">
        {features.map((feature: string, index: number) => (
          <div key={index} className="flex items-center space-x-2">
            <span className="text-lg">{feature}</span>
          </div>
        ))}
      </div>
      <div className="w-full text-center p-6">
        <p className="w-full flex justify-end text-3xl font-bold mb-4">{price}</p>
        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          Contratar
        </button>
      </div>
    </div>
  );
}
