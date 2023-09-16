"use client"
import {Button, NextUIProvider} from "@nextui-org/react";

import {User, Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function(){
    return(
        <NextUIProvider>
            <div className="test5 max-h-screen" style={{paddingBottom:"150px"}}>
                <Card style={{margin:"3%", width:'94%'}} className="max-h-screen">
                    <CardBody className="flex items-start">
                        <h4 className="font-bold text-large">프로필</h4>
                        <User
                            name="전민수"
                            description={(
                                <Link href="https://plater.kr" size="sm" isExternal>
                                @minsuJeon
                                </Link>
                            )}
                            avatarProps={{
                                src: "https://avatars.githubusercontent.com/u/79839332?v=4"
                            }}
                        />
                        
                    </CardBody>
                </Card>
                <Card style={{margin:"3%", width:'94%'}} className="max-h-screen">
                    <CardBody>
                    <h4 className="font-bold text-large">개인정보</h4>
                    <Card isPressable="true" radius="none" shadow="sm" fullWidth="true">
                        <CardBody style={{padding:"10px"}}>
                        <p>내정보</p>
                        </CardBody>
                    </Card>
                    <Card isPressable="true" radius="none" shadow="sm">
                        <CardBody style={{padding:"10px"}}>
                        <p>환경설정</p>
                        </CardBody>
                    </Card>
                    <Card isPressable="true" radius="none" shadow="sm">
                        <CardBody style={{padding:"10px"}}>
                        <p>알림</p>
                        </CardBody>
                    </Card>
                    </CardBody>
                </Card>

                <Card style={{margin:"3%", width:'94%'}} className="max-h-screen">
                    <CardBody>
                    <h4 className="font-bold text-large">신청내역</h4>

                    <Card isPressable="true" radius="none" shadow="sm">
                        <CardBody style={{padding:"10px"}}>
                        <p>휴가신청</p>
                        </CardBody>
                    </Card>
                    <Card isPressable="true" radius="none" shadow="sm">
                        <CardBody style={{padding:"10px"}}>
                        <p>권한신청</p>
                        </CardBody>
                    </Card>
                    <Card isPressable="true" radius="none" shadow="sm">
                        <CardBody style={{padding:"10px"}}>
                        <p>추가신청</p>
                        </CardBody >
                    </Card>
                    </CardBody>
                </Card>
            </div>
        </NextUIProvider>
    )
}
