import { Variants } from "framer-motion";

/**
 * Fade In and Slide Up
 * Best for: Initial page load or new content appearing in the feed.
 */
export const fadeInUp: Variants = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1.0], // Smooth cubic-bezier
        }
    },
    exit: {
        opacity: 0,
        y: 10,
        transition: { duration: 0.2 }
    }
};

/**
 * Stagger Container
 * Best for: The parent <div> of your Feed. 
 * It ensures cards animate in one after another rather than all at once.
 */
export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

/**
 * Card Hover & Tap
 * Best for: Interactive Content Cards.
 */
export const cardHover: Variants = {
    initial: {
        scale: 1,
        boxShadow: "0px 0px 0px rgba(0,0,0,0)"
    },
    hover: {
        scale: 1.02,
        y: -5,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20
        }
    },
    tap: {
        scale: 0.98
    },
};

/**
 * Sidebar Slide
 * Best for: Mobile navigation or drawer menus.
 */
export const sidebarVariant: Variants = {
    closed: {
        x: "-100%",
        transition: { type: "spring", stiffness: 400, damping: 40 }
    },
    open: {
        x: 0,
        transition: { type: "spring", stiffness: 400, damping: 40 }
    }
};