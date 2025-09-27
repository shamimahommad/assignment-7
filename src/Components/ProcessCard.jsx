import React from 'react';

const ProcessCard = ({inProgressCount, resolvedCount}) => {
    console.log(inProgressCount, resolvedCount);
    
    return (
        <>
            <div className="container mx-auto">
                <div className="py-10 md:py-20 flex justify-center gap-5 px-10">
                    {/* In-Progress Card */}
                    <div className="bg-linear-to-r from-[#632ee3] to-[#9f62f2] w-[150px] md:w-[700px] h-[100px] md:h-[250px] flex items-center justify-between rounded-2xl">
                        <img className="w-1/4 h-full" alt="" src="/public/vector1.png" />
                        <div className="w-1/4 flex flex-col items-center justify-center">
                            <p className="text-[20px] md:text-[24px] text-white whitespace-nowrap">In-Progress</p>
                            <h1 className="text-[50px] md:text-[60px] font-bold text-white">{inProgressCount}</h1>
                        </div>
                        <img className="scale-x-[-1] w-1/4 h-full" alt="" src="/public/vector1.png" />
                    </div>

                    {/* Resolved Card */}
                    <div className="bg-linear-to-r from-[#54cf68] to-[#00827a] w-[150px] md:w-[700px] h-[100px] md:h-[250px] flex items-center justify-between rounded-2xl">
                        <img className="w-1/4 h-full" alt="" src="/public/vector1.png" />
                        <div className="w-1/4 flex flex-col items-center justify-center">
                            <p className="text-[20px] md:text-[24px] text-white">Resolved</p>
                            <h1 className="text-[50px] md:text-[60px] font-bold text-white">{resolvedCount}</h1>
                        </div>
                        <img className="scale-x-[-1] w-1/4 h-full" alt="" src="/public/vector1.png" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProcessCard;