import WireframeImage from "./WireframeImage";

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <WireframeImage height="400px" width=""/>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Lorem Ipsum?</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Lorem</h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit!
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Lorem</h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Lorem</h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum, dolor, Lorem, Lorem, Lorem Lorem Lorem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
