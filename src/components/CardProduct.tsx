type CardProductProps = {
  title: string;
  description: string;
  imageSrc: string;
  alt?: string;
};

const CardProduct = ({
  title,
  description,
  imageSrc,
  alt = "image",
}: CardProductProps) => {
  return (
    <div className="flex items-center gap-5">
      <img src={imageSrc} className="w-24" alt={alt} />
      <div className="flex flex-col gap-1">
        <h1 className="text-white text-2xl font-semibold">{title}</h1>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default CardProduct;
