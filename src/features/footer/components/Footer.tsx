
export default function Footer() {
  return (
    <footer className="w-full pt-12 pb-12 bg-[#1B2632] border-t-1 border-[#70747E]">
      <div className="container mx-auto flex flex-row gap-6 items-center align-center justify-center">
        <div id="logo">
            <img src="logo-loomlogic.png" alt="logo-loomlogic" />
        </div>
        <div id="text">
            <p className="text-5xl font-semibold text-[#2C3B4E]">Where logic meets creativity.</p>
            <p className="text-2xl font-semibold text-[#2C3B4E]">Contact us : xxxxxxx@loomlogic.com</p>
        </div>
        <div id="foot-nav">
            <ul className="flex gap-5">
                <li className="text-white"><a href="#">Service</a></li>
                <li className="text-white"><a href="#">Team</a></li>
            </ul>
        </div>
      </div>
    </footer>
  );
}
