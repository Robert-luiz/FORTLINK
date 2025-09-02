import WireframeImage from "./WireframeImage";

export default function Footer() {
    return(
        <footer className="bg-black text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Lorem Lorem</h3>
                            <p className="text-gray-300">Lorem lorem lorem</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Lorem Lorem</h3>
                            <p className="text-gray-300">lorem@lorem.lorem</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Lorem</h3>
                            <p className="text-gray-300">Lorem lorem Lorem: 9:00 lorem 18:00,</p>
                            <p className="text-gray-300">Lorem: 9:00 lorem 13:00</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Lorem lorem lorem lorem</h3>
                            <form className="space-y-4">
                                <input 
                                    type="text" 
                                    placeholder="Lorem" 
                                    className="w-full p-2 rounded text-black"
                                />
                                <input 
                                    type="email" 
                                    placeholder="Lorem" 
                                    className="w-full p-2 rounded text-black"
                                />
                                <button className="w-full bg-white text-black py-2 rounded hover:bg-gray-200">
                                    Lorem
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="flex items-center justify-center border-t border-gray-700 mt-8 pt-8">
                        <h3 className="text-xl font-bold">Desenvolvedores: Robert Luiz & Vitor Brito</h3>
                    </div>
                </div>
            </footer>
    );
}
            