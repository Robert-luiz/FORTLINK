import { title } from "process";
import PlanCard from "./PlanCard";

export default function PlansSection()  {
            const plans = [
                {   
                    title: "",
                    speed: "300 MEGA",
                    price: "R$ 79,90",
                    features: ["Lorem Express", "Lorem Ipsum", "Lorem Premium", "Lorem Ipsum", "Lorem 24h", "Lorem Ipsum"]
                },
                {
                    title: "",
                    speed: "600 MEGA", 
                    price: "R$ 99,90",
                    features: ["Lorem Express", "Lorem Ipsum", "Lorem Premium", "Lorem Ipsum", "Lorem 24h", "Lorem Ipsum"],
                    isPopular: true
                },
                {
                    title: "",
                    speed: "1000 MEGA",
                    price: "R$ 129,90", 
                    features: ["Lorem Express", "Lorem Ipsum", "Lorem Premium", "Lorem Ipsum", "Lorem 24h", "Lorem Ipsum"]
                }
            ];

            return (
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl text-[#001A41] animate-pulse font-bold text-center mb-12">Planos de Internet</h2>
                        <div className="grid md:grid-cols-3 gap-12">
                            {plans.map((plan, index) => (
                                <PlanCard key={index} {...plan}/>
                            ))}
                        </div>
                    </div>
                </section>
            );
        };