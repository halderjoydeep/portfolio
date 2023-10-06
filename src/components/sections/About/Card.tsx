import Image from "next/image";

interface CardProps {
  icon: any;
  title: string;
}

const Card: React.FC<CardProps> = ({ icon, title }) => {
  return (
    <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5">
      <div className="relative h-16 w-16">
        <Image
          src={icon}
          alt={`${title} Icon`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h2 className="text-center text-xl font-bold text-white">{title}</h2>
    </div>
  );
};

export default Card;
