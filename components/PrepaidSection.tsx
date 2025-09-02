import WireframeImage from "./WireframeImage";

export default function PrepaidSection() {
  const prepaidPlans = [
    { speed: "10 MEGA", price: "R$10,00",  },
    { speed: "100 MEGA", price: "R$50,00",  },
    { speed: "600 MEGA", price: "R$100,00",  },
    { speed: "800 MEGA", price: "R$130,00",  },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Outros Planos
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {prepaidPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6 text-center"
            >
              <h3 className="text-xl font-bold mb-2">{plan.speed}</h3>
              <WireframeImage
                height="100px"
                width=""
                className="mx-auto mb-4"
              />
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-center space-x-2">
                  <WireframeImage width="16px" height="16px" />
                  <span className="text-sm">Lorem Express</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <WireframeImage width="16px" height="16px" />
                  <span className="text-sm">Lorem Ipsum</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <WireframeImage width="16px" height="16px" />
                  <span className="text-sm">Lorem Premium</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
