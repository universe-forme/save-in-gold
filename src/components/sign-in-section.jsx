import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';

import galaxyForBigScreenImage from '../assets/galaxy.svg';
import galaxyForSmallScreenImage from '../assets/galaxy-for-mobile.svg';
// hello


const SignInSection = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', { email, password, rememberMe });
    };

    return (
        <div className="bg-black text-white min-h-screen overflow-hidden relative">
            <div className="hidden lg:block relative min-h-screen">
                <div className="absolute inset-0">
                    <img
                        src={galaxyForBigScreenImage}
                        alt="Sign-In Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 flex items-center justify-start min-h-screen pl-16">
                    <div className="max-w-md w-full">
                        <div className="mb-8">
                            <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
                            <p className="text-gray-300 text-lg">
                                To keep Connected with us please<br />
                                login with your personal info.
                            </p>
                        </div>

                        <div className="form-container rounded-2xl p-8">
                            <h2 className="text-2xl font-semibold mb-6" style={{ color: '#D4AF37' }}>
                                Sign in to Save in Gold
                            </h2>

                            <div className="space-y-6">
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

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            className="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                                        />
                                        <span className="ml-2 text-sm text-gray-300">Remember me</span>
                                    </label>
                                    <button
                                        type="button"
                                        className="text-sm"
                                        style={{ color: '#D4AF37' }}
                                    >
                                        Forgot Password
                                    </button>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="gold-button w-full py-3 rounded-lg text-black font-semibold text-lg transition-all duration-300 hover:scale-105"
                                >
                                    Sign in
                                </button>

                                <p className="text-center text-gray-400">
                                    Don't have an account?{' '}
                                    <button type="button" className="text-yellow-500">
                                        Sign up
                                    </button>
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
                            <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
                            <p className="text-gray-300">
                                To keep Connected with us please login with your personal info.
                            </p>
                        </div>

                        <div className="form-container rounded-2xl p-6">
                            <h2 className="text-xl font-semibold mb-6 text-center" style={{ color: '#D4AF37' }}>
                                Sign in to Save in Gold
                            </h2>

                            <div className="space-y-5">
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

                                <div className="flex items-center justify-between text-sm">
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            className="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                                        />
                                        <span className="ml-2 text-gray-300">Remember me</span>
                                    </label>
                                    <button
                                        type="button"
                                        style={{ color: '#D4AF37' }}
                                    >
                                        Forgot Password
                                    </button>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="gold-button w-full py-3 rounded-lg text-black font-semibold transition-all duration-300"
                                >
                                    Sign in
                                </button>

                                <p className="text-center text-gray-400 text-sm">
                                    Don't have an account?{' '}
                                    <a href={"/sign-up"} className="text-yellow-500">
                                        Sign up
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInSection;