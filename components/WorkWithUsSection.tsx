import WireframeImage from "./WireframeImage";

export default function WorkWithUsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Lorem lorem lorem lorem!
            </h2>
            <h3 className="text-2xl font-semibold mb-4">Lorem Lorem</h3>
            <p className="text-gray-600 mb-6">
              Lorem lorem lorem lorem lorem lorem lorem lorem.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded">
              Lorem Lorem
            </button>
          </div>
          <div>
            <WireframeImage height="400px" width="" />
          </div>
        </div>
      </div>
    </section>
  );
}
