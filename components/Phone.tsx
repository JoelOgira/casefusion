/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string,
    dark?: boolean,
    className?: string
}

export default function Phone({ imgSrc, dark = false, className, ...props }: PhoneProps) {
    return (
        <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)}
            {...props}
        >
            <img
                src={dark ? "/phone-template-dark-edges.png" : "/phone-template-white-edges.png"}
                alt="Phone Image"
                className="pointer-events-none italic z-50 select-none"
            />

            <div className="absolute -z-10 inset-0">
                <img
                    src={imgSrc}
                    alt="Overlaying image"
                    className="object-cover italic"
                />
            </div>
        </div>
    )
}
