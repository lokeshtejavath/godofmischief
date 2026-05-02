import "./About.css"

export default function About() {
    return (
        <div className="about-container container my-5 p-4 bg-dark text-light rounded shadow">
            <h1 className="display-4 mb-4">About Me</h1>
            <p className="lead mb-3">
                Hello, I'm Lokesh Tejavath. I bridge the gap between theoretical computer science and enterprise-scale software.
            </p>
            <p className="mb-0">
                As a graduate of the National Institute of Technology (NIT) Warangal ('23) and a Software Engineer at Wells Fargo, I spend my days navigating the complex architecture of financial technology. By night, I explore the edges of the JavaScript ecosystem and information security. Whether I’m engineering resilient banking systems or building steganography tools to conceal digital messages, my code is driven by a passion for logic, security, and efficiency. I don't just write code; I solve problems.
            </p>
        </div>
    );
}