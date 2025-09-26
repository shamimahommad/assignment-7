import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-neutral">
            <div className='footer sm:footer-horizontal container  mx-auto p-10  text-neutral-content'>
                <nav>
                    <h6 className="font-bold text-xl">CS — Ticket System</h6>
                    <p className='max-w-[300px] mt-4 text-[14px] text-[gray]'>Ticket System is simply dummy text of the printing and typesetting industry. Ticket system has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </nav>
                <nav>
                    <h6 className="font-bold text-[15px] text-[white]">Services</h6>
                    <a className="text-[gray] link-hover">About Us</a>
                    <a className="text-[gray] link-hover">Our Mission</a>
                    <a className="text-[gray] link-hover">Contact Saled</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-[15px] text-[white]">Company</h6>
                    <a className="text-[gray] link-hover">Products & Services</a>
                    <a className="text-[gray] link-hover">Customer Stories</a>
                    <a className="text-[gray] link-hover">Download Apps</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-[15px] text-[white]">Legal</h6>
                    <a className="text-[gray] link-hover">Privacy policy</a>
                    <a className="text-[gray] link-hover">Terms & Conditions</a>
                    <a className="text-[gray] link-hover">Join Us</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-[15px] text-[white]">Legal</h6>
                    <div className='flex gap-1'>
                        <img src="./x.png" alt="" />
                        <a className="text-[gray] link-hover">@CS — Ticket System</a>
                    </div>
                    <div className='flex gap-1'>
                        <img src="./lkn.png" alt="" />
                        <a className="text-[gray] link-hover">@CS — Ticket System</a>
                    </div>
                    <div className='flex gap-1'>
                        <img src="./fb.png" alt="" />
                        <a className="text-[gray] link-hover">@CS — Ticket System</a>
                    </div>
                    <div className='flex gap-1'>
                        <img src="./mail.png" alt="" />
                        <a className="text-[gray] link-hover">@CS — Ticket System</a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;