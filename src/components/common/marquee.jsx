import { Bell } from "lucide-react";

const Marquee = () => {
    return (
        <div className="mt-3 flex items-center w-full">
            <div className="g-card px-3 py-1 flex gap-1 items-center font-bold"><Bell size={20}/> Notice</div>
            <div className="w-full g-card">
                <marquee className="pt-1 text-black dark:text-white font-semibold">Registration open for admission in classes LKG, UKG and I for the session (2025-26)</marquee>
            </div>
        </div>
    );
};

export default Marquee;