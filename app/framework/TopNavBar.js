'use client'
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import Link from 'next/link';

function TopBar(){
    return (
        <nav className="bg-white text-yc-logo-color p-4 top-0 left-0 right-0" style={{ display: 'block', padding: '8px'}}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    {/* 왼쪽에 이미지 */}
                    <img src="/images/logo1.png" alt="logo" className="w-20" />
                </div>

                <div className="flex items-center space-x-4 justify-end">
                    <div className="text-2xl text-yc-logo-color">
                        <AiOutlineSearch />
                    </div>
                    <div className="text-2xl text-yc-logo-color">
                        <Link href="/pages/test5" >
                            <AiOutlineUser />
                        </Link>
                    </div>
                    
                </div>

            </div>
            <style>{`
                nav {
                    border-bottom: 1px solid #ccc; /* 테두리 스타일 및 색상 설정 */
                }
            `}</style>
        </nav>

    )
}

export default TopBar;
