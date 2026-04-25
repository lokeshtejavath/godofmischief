import { useEffect, useRef, useState } from "react"
import "./Landing.css"

export default function Landing() {
    const phrases = [
        'passionate software developer.',
        'full-stack engineer.',
        'problem solver.',
        'open-source enthusiast.',
        'AI Engineer.',
    ]

    const [wordIndex, setWordIndex] = useState(0)
    const currentPhrase = phrases[wordIndex]

    const getPrefix = (phrase: string) => {
        const firstChar = phrase.trim().charAt(0).toLowerCase()
        return ['a', 'e', 'i', 'o', 'u'].includes(firstChar) ? "I'm an " : "I'm a "
    }
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    const containerRef = useRef<HTMLDivElement | null>(null)
    const imgRef = useRef<HTMLImageElement | null>(null)
    const cloneRef = useRef<HTMLImageElement | null>(null)

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>
        const current = currentPhrase
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

    useEffect(() => {
        const container = containerRef.current
        const img = imgRef.current
        const nav = typeof document !== 'undefined' ? document.getElementById('site-navbar') : null
        if (!container || !img || !nav) return

        const moveToNav = (toNav: boolean) => {
            // If moving to nav: create a fixed-position clone and animate it to the navbar's top-right
            if (toNav) {
                if (cloneRef.current) return // already animating
                const imgRect = img.getBoundingClientRect()
                const navRect = nav.getBoundingClientRect()
                // don't store original rect; we'll compute the live position when returning

                const clone = img.cloneNode(true) as HTMLImageElement
                clone.className = 'floating-clone'
                cloneRef.current = clone
                clone.style.position = 'fixed'
                clone.style.top = `${imgRect.top}px`
                clone.style.left = `${imgRect.left}px`
                clone.style.width = `${imgRect.width}px`
                clone.style.height = `${imgRect.height}px`
                clone.style.transition = 'all 1200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                clone.style.zIndex = '9999'
                clone.style.borderRadius = getComputedStyle(img).borderRadius || '50%'
                clone.style.objectFit = 'cover'
                // start invisible so it can fade in
                clone.style.opacity = '0'
                document.body.appendChild(clone)
                // fade original out to avoid duplicate
                img.style.opacity = '0'

                // compute small size and position at navbar top-right (padding a bit)
                const targetSize = Math.min(56, imgRect.width * 0.16)
                const padding = 12
                const targetTop = navRect.top + padding
                const targetLeft = navRect.right - targetSize - padding

                // allow layout, then animate
                requestAnimationFrame(() => {
                    clone.style.top = `${targetTop}px`
                    clone.style.left = `${targetLeft}px`
                    clone.style.width = `${targetSize}px`
                    clone.style.height = `${targetSize}px`
                    clone.style.borderRadius = '8px'
                    clone.style.boxShadow = '0 6px 18px rgba(0,0,0,0.12)'
                    clone.style.opacity = '1'
                })
            } else {
                const clone = cloneRef.current
                if (!clone) return
                // compute current position of original image (it may have moved while scrolling)
                const targetRect = img.getBoundingClientRect()
                // animate back to the live original rect
                clone.style.top = `${targetRect.top}px`
                clone.style.left = `${targetRect.left}px`
                clone.style.width = `${targetRect.width}px`
                clone.style.height = `${targetRect.height}px`
                clone.style.borderRadius = getComputedStyle(img).borderRadius || '50%'
                // fade clone out while moving back
                clone.style.opacity = '0'

                const cleanup = () => {
                    // restore original's opacity so the observer can control it again
                    img.style.opacity = ''
                    if (clone && clone.parentElement) clone.parentElement.removeChild(clone)
                    cloneRef.current = null
                    clone.removeEventListener('transitionend', cleanup)
                }

                // ensure cleanup happens even if transitionend doesn't fire
                const timeout = setTimeout(() => {
                    cleanup()
                }, 800)

                clone.addEventListener('transitionend', () => {
                    clearTimeout(timeout)
                    cleanup()
                })
            }
        }

        const observer = new IntersectionObserver((entries) => {
            const e = entries[0]
            if (!e) return
            const ratio = e.intersectionRatio
            // drive the original image opacity by intersection ratio when no clone is active
            if (!cloneRef.current && img) {
                // clamp and apply a slight scale so it fades sooner
                const visible = Math.max(0, Math.min(1, ratio))
                img.style.opacity = String(visible)
            }

            // When the landing container scrolls upward out of view, move image to nav
            if (e.boundingClientRect.top < 0 && !e.isIntersecting) {
                moveToNav(true)
            } else {
                moveToNav(false)
            }
        }, { threshold: Array.from({ length: 11 }, (_, i) => i / 10), root: null })

        observer.observe(container)

        return () => {
            observer.disconnect()
            // cleanup clone if present
            if (cloneRef.current && cloneRef.current.parentElement) {
                cloneRef.current.parentElement.removeChild(cloneRef.current)
                cloneRef.current = null
            }
            if (img) img.style.visibility = ''
        }
    }, [])

    return (
        <div className="landing-wrapper">
            <div className="landing-container glass" ref={containerRef}>

                <div className="Left">
                    <div className="Name">
                        <span className="NamePrimary" style={{ color: 'var(--primary)' }}>
                            Hi I'm <strong style={{color:'var(--accent)'}}>Lokesh Tejavath </strong>
                        </span>
                        <span className="NameAKA">a.k.a GodOfMischief</span>
                    </div>

                    <div className="Description">
                        <p>
                            <span className="typing" aria-live="polite">
                                {getPrefix(currentPhrase)}
                                <strong>{currentPhrase.slice(0, charIndex)}</strong>
                            </span>
                            <span className="cursor" aria-hidden="true"></span>
                        </p>
                    </div>
                </div>

                <div className="ImageContainer">
                    <img ref={imgRef} src="src/assets/imageedit_2_4659955430.jpg" alt="Lokesh Tejavath" className="ProfileImage" />
                    <svg className="ArcaneRing" viewBox="0 0 500 500">
                    <defs>
                        {/* This path defines the perfect circle the text will follow */}
                        <path id="circlePath" d="M 250, 250 m -235, 0 a 235,235 0 1,1 470,0 a 235,235 0 1,1 -470,0" />
                    </defs>
                    <text className="ArcaneText">
                        <textPath href="#circlePath" startOffset="0%">
                            // ZERO TRUST ARCHITECTURE // DECENTRALIZED PROTOCOLS // FULL-STACK ENGINEERING // STEGANOGRAPHY ACTIVE //
                        </textPath>
                    </text>
                </svg>
                </div>

            </div>
        </div>
    )
}