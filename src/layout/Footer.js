// Svg
import githubSvg from "../assets/footer/github-fill.svg";
import telegramSvg from "../assets/footer/telegram-fill.svg";
import linkdinSvg from "../assets/footer/linkedin-box-fill.svg";
import WhatsappSvg from "../assets/footer/whatsapp-fill.svg";

const Footer = () => {
  return (
    <footer className="h-auto mt-20 w-full border border-t-slate-200 bg-slate-50 p-1">
      <div className="flex flex-col items-center justify-around p-2 md:flex-row">
        <span className="my-2 font-serif font-bold text-red-300 md:my-0">
          Designed by Nima Moghadam
        </span>
        <div className="my-1 flex md:my-0">
          <a href="https://github.com/nima-moghaddam" className="mx-2">
            <img src={githubSvg} alt="git" className="w-8" />
          </a>
          <a href="https://t.me/NimaSm73" className="mx-2">
            <img src={telegramSvg} alt="telegram" className="w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/nima-moghaddam-61622321a/"
            className="mx-2"
          >
            <img src={linkdinSvg} alt="linkdin" className="w-8" />
          </a>
          <a href="https://wa.me/+989156969259" className="mx-2">
            <img src={WhatsappSvg} alt="whatsapp" className="w-8" />
          </a>
        </div>
        <div className="my-1 flex flex-col md:my-0">
          <span className="font-sans font-bold text-red-300">
            Tell : +989156969259
          </span>
          <span className="font-sans font-bold text-red-300">
            Email : nima.73sm@yahoo.com
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
