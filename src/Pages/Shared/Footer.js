import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <div className='bg-base-200'>
            <footer class="w-full lg:w-3/4 mx-auto footer p-10 text-base-content">
                <div>
                    <p className='text-2xl font-semibold'>ManufactureHut Industries Ltd.</p>
                    <p>Providing reliable tech since 2002</p>
                </div>
                <div>
                    <span class="footer-title">Menu</span>
                    <Link to="/dashboard" class="link link-hover">Dashboard</Link>
                    <Link to="/blogs" class="link link-hover">Blogs</Link>
                    <Link to="/portfolio" class="link link-hover">Portfolio</Link>
                    <Link to="/login" class="link link-hover">Login</Link>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <Link to="/#about" class="link link-hover">About us</Link>
                    <Link to="/#contact" class="link link-hover">Contact</Link>
                    <Link to="/" class="link link-hover">Jobs</Link>
                    <Link to="/" class="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <Link to="/" class="link link-hover">Terms of use</Link>
                    <Link to="/" class="link link-hover">Privacy policy</Link>
                    <Link to="/" class="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <div>
                <p className='text-center py-4 text-neutral'>Copyright &copy; ManufactureHut-{currentYear}</p>
            </div>
        </div>
    );
};

export default Footer;