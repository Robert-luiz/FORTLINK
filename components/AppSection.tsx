import WireframeImage from "./WireframeImage";

export default function AppSection () {
    return(
        <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center space-x-6 mb-8">
                        <WireframeImage width="150px" height="50px" />
                        <WireframeImage width="150px" height="50px" />
                    </div>
                    <WireframeImage height="200px" width="" className="mx-auto max-w-md" />
                </div>
            </section>
    );
}