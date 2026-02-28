import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import { indianVoices } from "src/data/indianVoices";

export default function IndianAIVoicesPage() {
    const [activeAudio, setActiveAudio] = useState<string | null>(null);
    const [filterIndustry, setFilterIndustry] = useState("All");
    const [filterGender, setFilterGender] = useState("All");
    const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

    const industries = ["All", ...Array.from(new Set(indianVoices.map((v) => v.industry)))];

    const filteredVoices = indianVoices.filter((voice) => {
        const matchInd = filterIndustry === "All" || voice.industry === filterIndustry;
        const matchGen = filterGender === "All" || voice.gender === filterGender;
        return matchInd && matchGen;
    });

    const handlePlay = (id: string) => {
        // pause existing playing audio if any
        if (activeAudio && activeAudio !== id && audioRefs.current[activeAudio]) {
            audioRefs.current[activeAudio]?.pause();
        }

        const audioEl = audioRefs.current[id];
        if (!audioEl) return;

        if (activeAudio === id) {
            if (audioEl.paused) {
                audioEl.play().catch(console.error);
            } else {
                audioEl.pause();
                setActiveAudio(null);
            }
        } else {
            setActiveAudio(id);
            audioEl.play().catch(console.error);
        }
    };

    const handleEnded = () => setActiveAudio(null);

    // Stop all playing audio on unmount
    useEffect(() => {
        return () => {
            Object.values(audioRefs.current).forEach((a) => {
                if (a) a.pause();
            });
        };
    }, []);

    return (
        <>
            <Head>
                <title>Indian AI Voices Library | Agentic AI Labs</title>
                <meta name="description" content="Explore our library of premium, production-grade AI voices designed for the Indian market." />
            </Head>

            <div className="min-h-screen bg-[#F9F6F4] font-sfpro text-slate-900 pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="text-center mb-16 space-y-6">
                        <span className="text-red-500 font-bold text-xs tracking-widest uppercase border border-red-200 bg-red-50 rounded-full py-1.5 px-4 inline-block">
                            Voice Directory
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-mondwest leading-tight text-[#0A1128]">
                            Production-Grade AI Voices <br />
                            <span className="text-red-500">For the Indian Market</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                            Listen to our highly localized, conversational agents designed for different industries and roles. From banking to healthcare, find the perfect voice for your workflows.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-white p-4 rounded-xl shadow-sm border border-gray-100 mx-auto max-w-5xl transition-all">
                        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                            <div className="w-full md:w-auto">
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5 pl-1">
                                    Industry
                                </label>
                                <select
                                    value={filterIndustry}
                                    onChange={(e) => setFilterIndustry(e.target.value)}
                                    className="w-full md:w-48 bg-gray-50 border border-gray-200 text-slate-700 rounded-lg focus:ring-red-500 focus:border-red-500 px-3 py-2.5 outline-none text-sm font-medium transition-colors"
                                >
                                    {industries.map((ind) => (
                                        <option key={ind} value={ind}>{ind}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="h-12 w-px bg-gray-100 mx-2 hidden md:block" />
                            <div className="w-full md:w-auto">
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5 pl-1">
                                    Gender
                                </label>
                                <select
                                    value={filterGender}
                                    onChange={(e) => setFilterGender(e.target.value)}
                                    className="w-full md:w-40 bg-gray-50 border border-gray-200 text-slate-700 rounded-lg focus:ring-red-500 focus:border-red-500 px-3 py-2.5 outline-none text-sm font-medium transition-colors"
                                >
                                    <option value="All">All Genders</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="text-sm font-medium text-slate-500 w-full md:w-auto text-center md:text-right mt-4 md:mt-0 px-4">
                            Showing <span className="text-red-500 font-bold">{filteredVoices.length}</span> voices
                        </div>
                    </div>

                    {/* Voice Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {filteredVoices.map((voice) => {
                            const isPlaying = activeAudio === voice.id;

                            return (
                                <div
                                    key={voice.id}
                                    className={`group bg-white rounded-2xl p-6 border transition-all duration-300 ${isPlaying
                                            ? 'border-red-400 shadow-md ring-1 ring-red-100 scale-[1.02] translate-y-[-4px]'
                                            : 'border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 hover:translate-y-[-2px]'
                                        }`}
                                >
                                    <div className="flex justify-between items-start mb-5">
                                        <div>
                                            <h3 className="text-2xl font-bold text-[#0A1128] font-mondwest tracking-wide">{voice.name}</h3>
                                            <p className="text-sm font-medium text-red-500 mt-0.5 capitalize">{voice.gender} &middot; {voice.industry}</p>
                                        </div>

                                        <button
                                            onClick={() => handlePlay(voice.id)}
                                            className={`h-12 w-12 flex items-center justify-center rounded-full transition-all duration-300 shadow-sm flex-shrink-0 ${isPlaying
                                                    ? 'bg-red-500 text-white shadow-red-200 scale-105'
                                                    : 'bg-red-50 text-red-600 hover:bg-red-100 hover:scale-105'
                                                }`}
                                            aria-label={isPlaying ? "Pause voice" : "Play voice"}
                                        >
                                            {isPlaying ? (
                                                <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                                                    <rect x="6" y="4" width="4" height="16" rx="1" />
                                                    <rect x="14" y="4" width="4" height="16" rx="1" />
                                                </svg>
                                            ) : (
                                                <svg className="w-6 h-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" />
                                                </svg>
                                            )}
                                        </button>

                                        <audio
                                            ref={(el) => { if (el) audioRefs.current[voice.id] = el; }}
                                            src={voice.audioUrl}
                                            onEnded={handleEnded}
                                            onPause={() => {
                                                if (activeAudio === voice.id) setActiveAudio(null);
                                            }}
                                            onPlay={() => setActiveAudio(voice.id)}
                                        />
                                    </div>

                                    <div className="mb-6 line-clamp-3 min-h-[4rem]">
                                        <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                            "{voice.description}"
                                        </p>
                                    </div>

                                    <div className="pt-5 border-t border-gray-100 flex flex-wrap gap-2">
                                        <span className="inline-flex items-center px-2.5 py-1 rounded border border-gray-200 bg-gray-50 text-[11px] font-semibold tracking-wide text-gray-700 uppercase">
                                            {voice.role}
                                        </span>
                                        {voice.tags.map((tag) => (
                                            <span key={tag} className="inline-flex items-center px-2.5 py-1 rounded border border-red-100 bg-red-50 text-[11px] font-semibold tracking-wide text-red-600 uppercase">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {filteredVoices.length === 0 && (
                        <div className="text-center py-24 bg-white rounded-2xl border border-dashed border-gray-300 max-w-3xl mx-auto mt-8">
                            <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">No voices found</h3>
                            <p className="text-gray-500 font-medium max-w-sm mx-auto">We couldn't find any voices matching your selected criteria.</p>
                            <button
                                onClick={() => { setFilterIndustry("All"); setFilterGender("All"); }}
                                className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
