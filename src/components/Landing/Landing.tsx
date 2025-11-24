import { useEffect, useState } from "react"
import "./Landing.css"

export default function Landing() {
    const prefix = "I'm a "
    const phrases = [
        'passionate software developer.',
        'full-stack engineer.',
        'problem solver.',
        'open-source enthusiast.'
    ]

    const [wordIndex, setWordIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>
        const current = phrases[wordIndex]
        const typingSpeed = 60
        const deletingSpeed = 30
        const pauseAfterTyping = 1000

        if (!isDeleting) {
            if (charIndex < current.length) {
                timer = setTimeout(() => setCharIndex((c) => c + 1), typingSpeed)
            } else {
                timer = setTimeout(() => setIsDeleting(true), pauseAfterTyping)
            }
        } else {
            if (charIndex > 0) {
                timer = setTimeout(() => setCharIndex((c) => c - 1), deletingSpeed)
            } else {
                setIsDeleting(false)
                setWordIndex((w) => (w + 1) % phrases.length)
            }
        }

        return () => clearTimeout(timer)
    }, [charIndex, isDeleting, wordIndex])

    return (
        <div className="landing-container">

            <div className="Left">
                <div className="Name">
                    <span className="NamePrimary">Hi I'm <strong>Lokesh Tejavath</strong> </span>
                    <span className="NameAKA">a.k.a GodOfMischief</span>
                </div>

                <div className="Description">
                    <p>
                        <span className="typing" aria-live="polite">
                            {prefix}
                            <strong>{phrases[wordIndex].slice(0, charIndex)}</strong>
                        </span>
                        <span className="cursor" aria-hidden="true"></span>
                    </p>
                </div>
            </div>

            <div className="ImageContainer">
                <img src="src/assets/20240509_171131.jpg" alt="Lokesh Tejavath" className="ProfileImage" />
            </div>

        </div>
    )
}