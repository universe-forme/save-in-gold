import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

import galaxyForBigScreenImage from '../assets/galaxy.svg';
import galaxyForSmallScreenImage from '../assets/galaxy-for-mobile.svg';
// hello

const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', { fullName, email, password, rememberMe });
    };

    return (
        <div className="bg-black text-white min-h-screen overflow-hidden relative">
            <style jsx>{`
                .form-container {
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .input-field-email {
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                }
                
                .input-field-email:focus {
                    outline: none;
                    border-color: #D4AF37;
                    box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.2);
                }
                
                .gold-button {
                    background: linear-gradient(135deg, #D4AF37, #FFD700);
                    color: black;
                    font-weight: 600;
                }
                
                .gold-button:hover {
                    background: linear-gradient(135deg, #FFD700, #FFA500);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
                }
            `}</style>

            {/* Desktop Layout */}
            <div className="hidden lg:block relative min-h-screen">
                <div className="absolute inset-0">
                    <img
                        src={galaxyForBigScreenImage}
                        alt="Sign-Up Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 flex items-center justify-start min-h-screen pl-16">
                    <div className="max-w-md w-full">
                        <div className="mb-8">
                            <h1 className="text-4xl font-bold mb-4">Join Us Today!</h1>
                            <p className="text-gray-300 text-lg">
                                Create your account to start your<br />
                                golden investment journey with us.
                            </p>
                        </div>

                        <div className="form-container rounded-2xl p-8">
                            <h2 className="text-2xl font-semibold mb-6" style={{ color: '#D4AF37' }}>
                                Sign up to Save in Gold
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Full Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            className="input-field-email w-full pl-10 pr-4 py-3 rounded-lg text-white placeholder-gray-400"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="input-field-email w-full pl-10 pr-4 py-3 rounded-lg text-white placeholder-gray-400"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="input-field-email w-full pl-10 pr-4 py-3 rounded-lg text-white placeholder-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            className="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                                        />
                                        <span className="ml-2 text-gray-300">Remember me</span>
                                    </label>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="gold-button w-full py-3 rounded-lg text-black font-semibold text-lg transition-all duration-300 hover:scale-105"
                                >
                                    Create Account
                                </button>

                                <p className="text-center text-gray-400">
                                    Already have an account?{' '}
                                    <Link to="/sign-in" className="text-yellow-500">
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 text-sm text-center text-gray-500">
                            © Copyright 2025 Save in Gold Company
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout - Visible on mobile and tablet */}
            <div className="lg:hidden relative min-h-screen">
                {/* Background Galaxy Design */}
                <div className="absolute inset-0">
                    <img
                        src={galaxyForSmallScreenImage}
                        alt="Galaxy Background"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-8">
                    <div className="w-full max-w-sm">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold mb-4">Join Us Today!</h1>
                            <p className="text-gray-300">
                                Create your account to start your golden investment journey.
                            </p>
                        </div>

                        <div className="form-container rounded-2xl p-6">
                            <h2 className="text-xl font-semibold mb-6 text-center" style={{ color: '#D4AF37' }}>
                                Sign up to Save in Gold
                            </h2>

                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Full Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            className="input-field-email w-full pl-10 pr-4 py-3 rounded-lg text-white placeholder-gray-400"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="input-field-email w-full pl-10 pr-4 py-3 rounded-lg text-white placeholder-gray-400"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="input-field-email w-full pl-10 pr-4 py-3 rounded-lg text-white placeholder-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-start text-sm">
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            className="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                                        />
                                        <span className="ml-2 text-gray-300">Remember me</span>
                                    </label>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="gold-button w-full py-3 rounded-lg text-black font-semibold transition-all duration-300"
                                >
                                    Create Account
                                </button>

                                <p className="text-center text-gray-400 text-sm">
                                    Already have an account?{' '}
                                    <Link to="/sign-in" className="text-yellow-500">
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;