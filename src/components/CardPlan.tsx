type CardPlanProps = {
  title: string;
  price: string;
  description: string;
  must?: boolean;
};

const CardPlan = ({
  title,
  price,
  description,
  must = false,
}: CardPlanProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1">
        <h1 className="text-white font-bold text-xl">{title}</h1>
        <div className="flex gap-10 items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-white font-bold flex items-end gap-1">
              <div className="flex items-start gap-1">
                <span className="text-5xl">{price}k</span>
              </div>
              <span className="text-nowrap text-md">/month</span>
            </h1>
          </div>
          <p className="text-white">{description}</p>
          {must ? (
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
                active:scale-95 
                focus:outline-none
                hover:shadow-[0_0_25px_rgba(244,63,94,0.6)] 
                text-nowrap
                h-fit
                "
            >
              Start Building
            </button>
          ) : (
            <button
              className="
              cursor-pointer 
              bg-white/5 border border-white/20
              hover:border-rose-500/20
              hover:shadow-[0_0_25px_rgba(244,63,94,0.6)] 
              text-white 
              py-2 px-4 
              rounded-lg 
              transition 
              duration-300 
              shadow-lg
              active:scale-95 
              focus:outline-none
              text-nowrap
              h-fit
              "
            >
              Start Building
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardPlan;
