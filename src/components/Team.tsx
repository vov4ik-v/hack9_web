'use client'

import { Swiper, SwiperSlide, useSwiperSlide, useSwiper } from 'swiper/react';
import { EffectCoverflow, Keyboard, Mousewheel, Autoplay } from 'swiper/modules';

import 'swiper/css';

import { press_start } from '@/app/fonts';

import 'swiper/css/effect-coverflow';
import { useState, useEffect } from 'react';


export default function Team() {
    const team = ['tanya', 'vanya', 'rostik', 'roma', 'yulik', 'illia', 'maria', 'vika', 'sasha', 'bodya', 'zakhar'];

    const [curr, setCurr] = useState(1);

    return (
        <div className="min-h-screen relative w-full py-20" id='team'>
            <h2 className={`${press_start.className} relative text-hack-green text-xl lg:text-3xl z-10 text-center lg:text-end my-20  mx-5 lg:mr-10`}>Команда організаторів:</h2>
            <div className='border-2 border-hack-green border-l-0 border-r-0 py-5 z-10'>
                <Swiper
                    className='w-full flex items-center relative z-10 h-64'
                    autoHeight={true}
                    slidesPerView={1}
                    resizeObserver={true}
                    centerInsufficientSlides={true}
                    initialSlide={1}
                    autoplay={true}
                    mousewheel={false}
                    keyboard={{
                        enabled: true,
                    }}
                    grabCursor={true}
                    speed={500}
                    loop={true}
                    centeredSlides={true}
                    watchSlidesProgress={true}
                    modules={[EffectCoverflow, Autoplay, Keyboard, Mousewheel]}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    breakpoints={{
                        550: {
                            slidesPerView: 2,
                            spaceBetween: -10
                        },
                        780: {
                            slidesPerView: 2,
                            spaceBetween: -10
                        },
                        890: {
                            slidesPerView: 3,
                            spaceBetween: -10
                        },
                        1260: {
                            slidesPerView: 4,
                            spaceBetween: -5
                        },
                        1800: {
                            slidesPerView: 6,
                            spaceBetween: -5
                        }
                    }}
                >

                    <SwiperSlide className=" ">
                        <div className='border p-4 py-8 rounded-xl mx-5 flex flex-col justify-between items-center h-[500px] gap-3'>
                            <img src="Tetiana.png" alt="tania" className='rounded-xl'/>
                            <h1 className={`${press_start.className} text-xl text-white lg:text-2xl text-center `}>Main Organizer</h1>
                            <h1 className={`${press_start.className} text-hack-green text-lg lg:text-xl text-center `}>Тетяна Панчук</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=" ">
                        <div className='border p-4 py-8 rounded-xl mx-5 flex flex-col justify-between items-center h-[500px] gap-3'>
                            <img src="Vanya.png" alt="vanya" className='rounded-xl'/>
                            <h1 className={`${press_start.className} text-xl text-white lg:text-2xl text-center `}>Human Resourses</h1>
                            <h1 className={`${press_start.className} text-hack-green text-lg lg:text-xl text-center `}>Іванка Карабан</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=" ">
                        <div className='border p-4 py-8 rounded-xl mx-5 flex flex-col justify-between items-center h-[500px] gap-3'>
                            <img src="Rostik.png" alt="rostik" className='rounded-xl'/>
                            <h1 className={`${press_start.className} text-xl text-white lg:text-2xl text-center `}>Logist</h1>
                            <h1 className={`${press_start.className} text-hack-green text-lg lg:text-xl text-center `}>Ростислав Мінчак</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=" ">
                        <div className='border p-4 py-8 rounded-xl mx-5 flex flex-col justify-between items-center h-[500px] gap-3'>
                            <img src="Roman.png" alt="roma" className='rounded-xl'/>
                            <h1 className={`${press_start.className} text-lg text-white lg:text-xl text-center `}>Content Responsible</h1>
                            <h1 className={`${press_start.className} text-hack-green text-md lg:text-lg text-center `}>Роман Фігель</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=" ">
                        <div className='border p-4 py-8 rounded-xl mx-5 flex flex-col justify-between items-center h-[500px] gap-3'>
                            <img src="Yulik.png" alt="yulik" className='rounded-xl'/>
                            <h1 className={`${press_start.className} text-xl text-white lg:text-2xl text-center `}>IT Responsible</h1>
                            <h1 className={`${press_start.className} text-hack-green text-lg lg:text-xl text-center `}>Юлія Синичак</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=" ">
                        <div className='border p-4 py-8 rounded-xl mx-5 flex flex-col justify-between items-center h-[500px] gap-3'>
                            <img src="Illia.png" alt="illia" className='rounded-xl'/>
                            <h1 className={`${press_start.className} text-xl text-white lg:text-2xl text-center `}>FundRaising</h1>
                            <h1 className={`${press_start.className} text-hack-green text-lg lg:text-xl text-center `}>Ілля Шестак</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=" ">
                        <div className='border p-4 py-8 rounded-xl mx-5 flex flex-col justify-between items-center h-[500px] gap-3'>
                            <img src="Maria.png" alt="maria" className='rounded-xl'/>
                            <h1 className={`${press_start.className} text-xl text-white lg:text-2xl text-center `}>FundRaising</h1>
                            <h1 className={`${press_start.className} text-hack-green text-lg lg:text-xl text-center `}>Марія Зарванська</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=" ">
                        <div className='border p-4 py-8 rounded-xl mx-5 flex flex-col justify-between items-center h-[500px] gap-3'>
                            <img src="Sasha.png" alt="sasha" className='rounded-xl'/>
                            <h1 className={`${press_start.className} text-xl text-white lg:text-2xl text-center `}>Public Relations</h1>
                            <h1 className={`${press_start.className} text-hack-green text-lg lg:text-x text-center `}>Олександра Оленчук</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=" ">
                        <div className='border p-4 py-8 rounded-xl mx-5 flex flex-col justify-between items-center h-[500px] gap-3'>
                            <img src="Vika.png" alt="vika" className='rounded-xl'/>
                            <h1 className={`${press_start.className} text-xl text-white lg:text-2xl text-center `}>Design</h1>
                            <h1 className={`${press_start.className} text-hack-green text-lg lg:text-x text-center `}>Вікторія Бодоряк</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=" ">
                        <div className='border p-4 py-8 rounded-xl mx-5 flex flex-col justify-between items-center h-[500px] gap-3'>
                            <img src="Zakhar.png" alt="zakhar" className='rounded-xl'/>
                            <h1 className={`${press_start.className} text-xl text-white lg:text-2xl text-center `}>Mentor</h1>
                            <h1 className={`${press_start.className} text-hack-green text-lg lg:text-x text-center `}>Захар Підлісецький</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=" ">
                        <div className='border p-4 py-8 rounded-xl mx-5 flex flex-col justify-between items-center h-[500px] gap-3'>
                            <img src="Bodya.png" alt="bodya" className='rounded-xl'/>
                            <h1 className={`${press_start.className} text-xl text-white lg:text-2xl text-center `}>Mentor</h1>
                            <h1 className={`${press_start.className} text-hack-green text-lg lg:text-x text-center `}>Богдан Баран</h1>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </div >
    )
}
