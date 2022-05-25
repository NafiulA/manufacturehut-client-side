import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <div className='bg-base-200'>
            <footer className="w-full lg:w-3/4 mx-auto footer p-10 text-base-content">
                <div>
                    <p className='text-2xl font-semibold'>ManufactureHut Industries Ltd.</p>
                    <p>Providing reliable tech since 2002</p>
                </div>
                <div>
                    <span className="footer-title">Menu</span>
                    <Link to="/dashboard" className="link link-hover">Dashboard</Link>
                    <Link to="/blogs" className="link link-hover">Blogs</Link>
                    <Link to="/portfolio" className="link link-hover">Portfolio</Link>
                    <Link to="/login" className="link link-hover">Login</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/#about" className="link link-hover">About us</Link>
                    <Link to="/#contact" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Jobs</Link>
                    <Link to="/" className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/" className="link link-hover">Terms of use</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link>
                    <Link to="/" className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <div>
                <p className='text-center py-4 text-neutral'>Copyright &copy; ManufactureHut-{currentYear}</p>
            </div>
        </div>
    );
};

export default Footer;