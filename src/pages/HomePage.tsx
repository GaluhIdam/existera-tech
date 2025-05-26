import CardPlan from "../components/CardPlan";
import CardProduct from "../components/CardProduct";
import { ChevronRight } from "lucide-react";
import previewApp from "/images/preview-app.png";

const HomePage = () => {
  return (
    <div className="w-full mt-30">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-6xl font-bold text-white max-w-3xl">
          Where <span className="text-rose-500">People</span> Connect, Work
          Comes <span className="text-rose-500">Together</span>.
        </h1>
        <p className="text-center text-white mt-10 text-2xl max-w-4xl">
          Existera brings all your business apps into one connected platform
          helping teams of all sizes work closer, move faster, and stay human at
          every step.
        </p>
      </div>
      <div className="flex gap-3 items-center justify-center mt-10">
        <button
          className="
          cursor-pointer 
          bg-rose-500 
          hover:bg-rose-500 
          text-white 
          py-2 px-4 
          rounded-lg 
          transition 
          duration-300 
          shadow-lg
         hover:shadow-[0_0_25px_rgba(244,63,94,0.6)] 
          active:scale-95 
          focus:outline-none
        "
        >
          Get Started
        </button>

        <button className="cursor-pointer text-white py-2 px-4 hover:bg-white hover:text-rose-600 rounded-lg transition duration-300 active:scale-95 ">
          Learn More
        </button>
      </div>

      <img src={previewApp} alt="img" className="shadow-lg rounded-2xl mt-20" />

      <div className="flex flex-col items-center justify-center mt-40">
        <h1 className="text-white text-4xl font-bold">
          One Platform. Every Team. Fully Connected.
        </h1>
        <p className="text-center text-white mt-5 text-2xl max-w-4xl">
          Most businesses juggle disconnected apps across teams. The result?
          Slower workflows, broken communication, and scattered data. Existera
          solves this by unifying your tools, your people, and your work.
        </p>
      </div>

      <div className="w-full backdrop-blur-md bg-rose-500/10 border border-rose-500/20 shadow-lg rounded-2xl p-10 mt-15">
        <div className="grid grid-cols-3 gap-10 ">
          <CardProduct
            title="User Management"
            description="Control users and access."
            imageSrc="/images/user.svg"
          />
          <CardProduct
            title="CRM"
            description="Track and manage customers."
            imageSrc="/images/crm.svg"
          />
          <CardProduct
            title="Social Media"
            description="Plan and post content."
            imageSrc="/images/social.svg"
          />
          <CardProduct
            title="Timesheet"
            description="Log and monitor work hours."
            imageSrc="/images/timesheet.svg"
          />
          <CardProduct
            title="Finance"
            description="Handle billing and expenses."
            imageSrc="/images/finance.svg"
          />
          <CardProduct
            title="Inventory"
            description="Track stock and supplies."
            imageSrc="/images/inventory.svg"
          />
        </div>
      </div>
      <a
        href=""
        className="text-white text-md flex items-center gap-1 w-fit mt-5 hover:bg-white/10 px-3 rounded-md py-1 hover:shadow-lg"
      >
        See more <ChevronRight size={18} />
      </a>

      <div className="flex justify-between mt-40 gap-10">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-white text-4xl font-bold text-center">
            Start building with Existera today
          </h1>
        </div>
        <div className="backdrop-blur-md bg-white/5 border border-white/20 shadow-lg rounded-2xl p-10">
          <h1 className="text-white text-3xl font-semibold mb-10">
            Choose Your Plan
          </h1>
          <div className="flex flex-col gap-5">
            <CardPlan
              title="Starter"
              price="50"
              description="Up to 10 users — ideal for small teams, freelancers, or early-stage startups."
            />
            <hr className="border-white/20" />
            <CardPlan
              title="Growth"
              price="250"
              description="Up to 50 users — great for scaling teams and growing businesses."
              must={true}
            />
            <hr className="border-white/20" />
            <CardPlan
              title="Pro"
              price="500"
              description="Up to 100 users — designed for large teams and enterprises environments."
            />
            <hr className="border-white/20" />
            <a
              href=""
              className="text-white text-md flex items-center gap-1 w-fit mt-5 hover:bg-white/10 px-3 rounded-md py-1 hover:shadow-lg"
            >
              Create My Plan <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-40">
        <h1 className="text-white text-4xl font-bold">
          One Platform. Every Team. Fully Connected.
        </h1>
        <p className="text-center text-white mt-5 text-2xl max-w-4xl">
          Most businesses juggle disconnected apps across teams. The result?
          Slower workflows, broken communication, and scattered data. Existera
          solves this by unifying your tools, your people, and your work.
        </p>
      </div>
    </div>
  );
};
export default HomePage;
