import WireframeImage from "./WireframeImage";

export default function GamerPlanSection() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="bg-gray-900 rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Lorem Lorem Lorem
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-5xl font-bold mb-4">1000 MEGA</h3>
              <div className="space-y-3 mb-6">
                {[
                  "Lorem Ipsum",
                  "Lorem Lorem Lorem",
                  "Lorem Lorem Lorem",
                  "Lorem",
                  "Lorem Express",
                  "Lorem Ipsum",
                  "Lorem Lorem",
                  "Lorem Lorem Lorem",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <WireframeImage width="20px" height="20px" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-4xl font-bold">Lorem Ipsum</p>
            </div>
            <div>
              <WireframeImage height="300px" width="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
