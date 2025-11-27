import Main from "@/components/Main";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start font-sans">
            {/* [모바일 뷰] 실제 청첩장 내용이 들어가는 하얀색 영역 (최대 너비 448px = max-w-md) */}
            <div className="w-full max-w-md bg-white min-h-screen shadow-xl overflow-hidden">
                {/* 1. 메인 히어로 섹션 */}
                <Main />
                {/* 2. 초대 문구 섹션 */}
                <section className="py-16 px-8 text-center flex flex-col items-center">
                    <div className="text-sm text-red-400 mb-4 tracking-widest">INVITATION</div>
                    <h2 className="text-2xl font-serif font-bold mb-8 text-gray-800 leading-relaxed">
                        소중한 분들을
                        <br />
                        초대합니다
                    </h2>
                    <p className="text-gray-600 leading-loose text-sm whitespace-pre-wrap font-light">
                        서로의 다름을 이해하고
                        <br />
                        같은 곳을 바라보며 걸어가려 합니다.
                        <br />
                        저희 두 사람의 새로운 시작을
                        <br />
                        함께 축복해 주시면 감사하겠습니다.
                    </p>

                    <div className="mt-10 w-full flex justify-center gap-8 text-gray-700">
                        <div className="text-center">
                            <span className="block text-sm text-gray-500">신랑</span>
                            <strong className="text-lg">김철수</strong>
                        </div>
                        <div className="text-center">
                            <span className="block text-sm text-gray-500">신부</span>
                            <strong className="text-lg">이영희</strong>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-100 mx-6" />

                {/* 3. 캘린더 및 일시 */}
                <section className="py-16 px-6 bg-stone-50 text-center">
                    <h3 className="text-xl font-serif text-gray-800 mb-6">2025년 5월 24일</h3>
                    <div className="bg-white p-6 rounded-lg shadow-sm inline-block max-w-xs w-full">
                        {/* 달력 UI (간략화) */}
                        <div className="grid grid-cols-7 gap-2 text-sm text-gray-600">
                            <div className="text-red-400">일</div>
                            <div>월</div>
                            <div>화</div>
                            <div>수</div>
                            <div>목</div>
                            <div>금</div>
                            <div>토</div>
                            {/* ... 날짜들 ... */}
                            <div className="col-span-6"></div>
                            <div className="bg-red-100 rounded-full text-red-500 font-bold">24</div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <p className="text-lg font-bold text-gray-800">토요일 오후 12시 30분</p>
                    </div>
                </section>

                {/* 4. 갤러리 (Grid Layout) */}
                <section className="py-16 px-4">
                    <h3 className="text-center font-serif text-xl mb-8">Gallery</h3>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gray-200 h-40 rounded"></div>
                        <div className="bg-gray-200 h-40 rounded"></div>
                        <div className="bg-gray-200 h-40 rounded col-span-2"></div>
                        <div className="bg-gray-200 h-40 rounded"></div>
                        <div className="bg-gray-200 h-40 rounded"></div>
                    </div>
                </section>

                {/* 5. 오시는 길 (Map Placeholder) */}
                <section className="py-16 px-6 bg-gray-50">
                    <h3 className="text-center font-serif text-xl mb-4">Location</h3>
                    <p className="text-center text-gray-600 mb-6">
                        서울 강남구 웨딩로 123, 그랜드 웨딩홀
                    </p>

                    {/* 지도 영역 */}
                    <div className="w-full h-64 bg-gray-300 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                        네이버/카카오 지도 API 영역
                    </div>

                    <div className="flex gap-2 mt-4">
                        <button className="flex-1 py-3 bg-yellow-300 text-black rounded text-sm font-bold hover:bg-yellow-400 transition">
                            카카오네비
                        </button>
                        <button className="flex-1 py-3 bg-green-500 text-white rounded text-sm font-bold hover:bg-green-600 transition">
                            네이버지도
                        </button>
                    </div>
                </section>

                {/* 6. 마음 전하실 곳 (Accordion) */}
                <section className="py-16 px-6 mb-10">
                    <button
                        // onClick={() => setIsAccountOpen(!isAccountOpen)}
                        className="w-full py-4 bg-gray-100 rounded-lg flex justify-between items-center px-6 text-gray-700 hover:bg-gray-200 transition"
                    >
                        <span className="font-bold">마음 전하실 곳</span>
                        {/* <span>{isAccountOpen ? "▲" : "▼"}</span> */}
                    </button>

                    {/* {isAccountOpen && ( */}
                    <div className="mt-2 bg-gray-50 p-6 rounded-lg border border-gray-100 animate-fade-in-down">
                        <div className="flex justify-between items-center mb-3">
                            <div>
                                <p className="text-xs text-gray-500">신랑측 (김철수)</p>
                                <p className="text-sm text-gray-800">국민 123-4567-8900</p>
                            </div>
                            <button className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-600">
                                복사
                            </button>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xs text-gray-500">신부측 (이영희)</p>
                                <p className="text-sm text-gray-800">신한 110-123-456789</p>
                            </div>
                            <button className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-600">
                                복사
                            </button>
                        </div>
                    </div>
                    {/* )} */}
                </section>

                {/* Footer */}
                <footer className="bg-gray-100 py-10 text-center text-xs text-gray-400">
                    <p className="mb-2">Share this invitation</p>
                    <button className="bg-yellow-300 text-black px-6 py-2 rounded-full font-bold text-sm mb-6">
                        카카오톡 공유하기
                    </button>
                    <p>© 2025 Cheolsu & Younghee. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}
