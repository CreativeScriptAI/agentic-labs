import { GetServerSideProps } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { NextPageWithLayout } from "src/types";

const ClarityPage = dynamic(
    () => import("src/components/sections/Clarity/ClarityPage"),
    { ssr: true, loading: () => <div style={{ minHeight: "100vh", backgroundColor: "#F9F6F4", display: "flex", alignItems: "center", justifyContent: "center" }}><div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-200 border-t-blue-600" /></div> }
);

export interface ClarityPageProps {
    isBooked: boolean;
    name: string | null;
    email: string | null;
    date: string | null;
}

export const getServerSideProps: GetServerSideProps<ClarityPageProps> = async (ctx) => {
    const { name, email, date } = ctx.query;

    // Cal.com forwards ?name=&email=&date= when "Forward parameters" is on.
    // We treat having any of these (or an explicit ?booked=true) as a confirmed booking.
    const isBooked =
        ctx.query.booked === "true" ||
        typeof name === "string" ||
        typeof email === "string" ||
        typeof date === "string";

    return {
        props: {
            isBooked,
            name: typeof name === "string" ? name : null,
            email: typeof email === "string" ? email : null,
            date: typeof date === "string" ? date : null,
        },
    };
};

const Clarity: NextPageWithLayout<ClarityPageProps> = (props) => {
    const title = props.isBooked
        ? `You're booked${props.name ? `, ${props.name}` : ""} — Agentic AI Labs`
        : "Free AI Clarity Call — Agentic AI Labs";

    const description =
        "We build AI systems that run parts of your business autonomously. Voice. Memory. Automation. Built in production — not just demos. Book your free 30-minute AI Clarity Call.";

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="robots" content="noindex, follow" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content="https://www.tryagentikai.com/thankyou" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://www.tryagentikai.com/thankyou" />
                {/* Preconnect to external resources for faster loading */}
                <link rel="preconnect" href="https://www.youtube.com" />
                <link rel="preconnect" href="https://i.ytimg.com" />
                <link rel="dns-prefetch" href="https://d34gt69eepjr0b.cloudfront.net" />
            </Head>
            <ClarityPage {...props} />
        </>
    );
};

// ── Bypass the global RootLayout (no nav/header) ──────────────────
// This is a conversion-only page; the global nav is a distraction.
Clarity.getLayout = (page) => page;

export default Clarity;
