export interface PillProps{
    title: string
}

export interface ButtonProps{
    title?: string; // Button text;
    size?: "small" | "medium" | "large" ;// Determines padding;
    shape?: "rounded-sm" | "rounded-md" | "rounded-full"; // Determines border-radius;
    className?: string; // For passing custom CSS classes.
    styles: string; // For custom inline styles.
    onClick?: ()=> void; // Event handler for click events.
}