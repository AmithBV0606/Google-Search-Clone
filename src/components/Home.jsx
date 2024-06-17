import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="flex h-[100vh] flex-col">
            {/* Navbar or Header : */}
            <HomeHeader /> 

            {/* Home Body :  */}
            <main className="grow flex justify-center">
                <div className="flex flex-col items-center w-full mt-44 px-5">

                    <img src={Logo} alt="" className="w-[172px] md:w-[272px] mb-8"/>

                    <SearchInput />

                    <div className="flex gap-2 text-[#3c4043] mt-8">
                        <button className="bg-[#f8f9fa] h-9 px-4 text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                            Google Search
                        </button>

                        <button className="bg-[#f8f9fa] h-9 px-4 text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                            I'm Feeling Lucky
                        </button>
                    </div>
                    
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;