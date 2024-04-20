import "./globals.css";
import { LinksPanel } from "./linksPanel";

export default function Home() {
    return (
        <>
            <p className="text-magenta" style={{ fontWeight: "bold" }}></p>
            <LinksPanel />
        </>
    );
}