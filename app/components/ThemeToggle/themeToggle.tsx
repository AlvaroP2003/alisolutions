import { useRef, useState } from "react"



export default function ToggleTheme() {

    const toggleRef = useRef(null);
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
        if (toggleRef.current) {
        toggleRef.current.style.left = isOn ? "2.5px" : "calc(100% - 22.5px)";
        }
    };

    return (
        <div
        onClick={handleToggle}
         className="relative border w-[60px] h-[28px] rounded-full border-neutral-200">

            <div ref={toggleRef} className="transition-all ease-in-out cursor-pointer absolute left-[2.5px] top-[2.5px] h-[20px] w-[20px] bg-white rounded-full"></div>
        </div>
    )
}