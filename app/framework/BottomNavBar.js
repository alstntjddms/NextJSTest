'use client'
import Link from 'next/link';
import React, {useState} from 'react';
import { AiOutlineHome, AiOutlineSearch, AiOutlineFieldTime, AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';

function BottomNavBar(){
    // 현재 활성화된 아이콘을 추적하기 위한 상태 변수
    const [activeIcon, setActiveIcon] = useState('home');
  
    // 아이콘 클릭 이벤트 핸들러
    const handleIconClick = (iconName) => {
      setActiveIcon(iconName);
    }
    return(
        <nav className="bg-yc-logo-color text-white p-4 fixed bottom-0 left-0 right-0 rounded-t-lg">
            <div className="container mx-auto flex justify-between items-center" style={{ marginBottom: '5%' }}>
                <div className="flex space-x-4 flex-1">
                <Link href="/pages/test1" className={`text-3xl flex-1 flex items-center justify-center ${
                        activeIcon === 'home' ? 'text-yellow-500' : ''
                    }`}
                    onClick={() => handleIconClick('home')}>
                    <AiOutlineHome />
                </Link>
                <Link href="/pages/test2" className={`text-3xl flex-1 flex items-center justify-center ${
                        activeIcon === 'search' ? 'text-yellow-500' : ''
                    }`}
                    onClick={() => handleIconClick('search')}>
                    <AiOutlineSearch />
                </Link>
                <Link href="/pages/test3" className={`text-3xl flex-1 flex items-center justify-center ${
                        activeIcon === 'time' ? 'text-yellow-500' : ''
                    }`}
                    onClick={() => handleIconClick('time')}>
                    <AiOutlineFieldTime />
                </Link>
                <Link href="/pages/test4" className={`text-3xl flex-1 flex items-center justify-center ${
                        activeIcon === 'test' ? 'text-yellow-500' : ''
                    }`}
                    onClick={() => handleIconClick('test')}>
                    <AiOutlineHeart />
                </Link>
                <Link href="/pages/test5" className={`text-3xl flex-1 flex items-center justify-center ${
                        activeIcon === 'info' ? 'text-yellow-500' : ''
                    }`}
                    onClick={() => handleIconClick('info')}>
                    <AiOutlineUser />
                </Link>
                </div>
            </div>
        </nav>
    )
}

export default BottomNavBar;
