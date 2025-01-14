
const Footer = () => {
    return (
        <footer className="bg-black text-[#FFFF]">
            <div className="max-w-7xl mx-auto py-5 md:py-8 lg:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center *:flex *:flex-col *:mx-auto border-b border-b-white">
                <div className="text-center space-y-5">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-opacity-100 ">Reserve<span className="text-primary">Nest</span></h3>
                    <div>
                        <p className="text-sm font-semibold text-opacity-80">
                            123 Dhanmondi , Dhanmondi City, Dhaka
                            Phone: +123-456-7890
                            Email: info@servenest.com</p>
                    </div>
                </div>
                <div>
                    <h6 className="mb-5 uppercase text-lg font-bold text-opacity-80">Services</h6>
                    <a className="link link-hover opacity-55">Branding</a>
                    <a className="link link-hover opacity-55">Design</a>
                    <a className="link link-hover opacity-55">Marketing</a>
                    <a className="link link-hover opacity-55">Advertisement</a>
                </div>
                <div>
                    <h6 className="mb-5 uppercase text-lg font-bold text-opacity-80">Company</h6>
                    <a className="link link-hover opacity-55">About us</a>
                    <a className="link link-hover opacity-55">Contact</a>
                    <a className="link link-hover opacity-55">Jobs</a>
                    <a className="link link-hover opacity-55">Press kit</a>
                </div>
                <div>
                    <h6 className="mb-5 uppercase text-lg font-bold text-opacity-80">Legal</h6>
                    <a className="link link-hover opacity-55">Terms of use</a>
                    <a className="link link-hover opacity-55">Privacy policy</a>
                    <a className="link link-hover opacity-55">Cookie policy</a>
                    <a className="link link-hover opacity-55">Cookie policy</a>
                </div>
            </div>
            <div className="footer footer-center p-4">
                <aside>
                    <p className="text-sm md:text-lg opacity-55">Copyright © 2024 - All right reserved by Serve Nest Private Co.</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;