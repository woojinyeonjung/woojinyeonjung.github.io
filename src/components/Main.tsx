import Image from "next/image";

import MainImage from "@assets/8.jpg";

const Main = () => {
    return (
        <header className="relative flex justify-center items-centerrelative w-full pt-8">
            <picture className="relative flex items-center justify-center w-[80%] aspect-3/4 overflow-hidden rounded-[30%] after:absolute after:inset-0 after:rounded-[30%] after:shadow-[inset_0_0_8px_5px_rgba(255,255,255,1)]">
                <Image
                    src={MainImage}
                    alt="main image"
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                    priority
                />
            </picture>

            {/* 오버레이 텍스트 */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white/90 to-transparent pt-20 pb-10 px-6 text-center">
                <div className="text-xl text-gray-800 tracking-widest mb-2">
                    {/* KIM CHEOLSU <HeartIcon /> LEE YOUNGHEE */}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">저희 결혼합니다</h1>
                <p className="text-gray-600">2025. 05. 24 SAT PM 12:30</p>
                {/* <p className="text-gray-600">서울 그랜드 웨딩홀</p> */}
            </div>
        </header>
    );
};

export default Main;
