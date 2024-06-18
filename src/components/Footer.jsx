import { quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
    return (
        <div className="bg-[#DDE0E3]">

            <div className="flex p-[15px] md:px-[30px] border-b border-slate-400">
                <span className="text-black/[0.87] text-[15px] leading-none">
                    India
                </span>
            </div>

            <div className="flex flex-col md:flex-row py-3 md:py-0 md:px-[15px] justify-between">
                <div className="flex justify-center md:gap-0">
                    {quickLinks.map((menu, index) => (
                        <span 
                            key={index}
                            className="text-black/[0.87] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px]"
                        >
                            {menu}
                        </span>
                    ))}
                </div>

                <div className="flex justify-center">
                    {settingMenu.map((setting, index) => (
                        <span
                            key={index}
                            className="text-black/[0.87] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px]"
                        >
                            {setting}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Footer;