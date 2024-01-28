import { RiTelegramLine } from "react-icons/ri";
const HeroBtn = () => {
  return (
    <div className="border bg-[#45bbd8]  rounded-lg h-12 w-28 flex items-center justify-around px-2">
      <RiTelegramLine color={"#ffffff"} fontSize={"28px"} />
      <a
        href="https://t.me/vica_trainings_bot"
        className="text-md text-white text-bold"
      >
        Vica Bot
      </a>
    </div>
  );
};
export default HeroBtn;
