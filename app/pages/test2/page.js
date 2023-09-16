"use client"
import {Button, NextUIProvider} from "@nextui-org/react";

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function(){
    return(
        <NextUIProvider>
            <Card style={{margin:"3%", width:'94%', height:"79vh"}}>
                <CardBody>
                <Card isPressable="true" radius="none" shadow="sm" fullWidth="true" >
                    <CardBody>
                    <p>테스트111</p>
                    </CardBody>
                </Card>
                <Card isPressable="true" radius="none" shadow="sm">
                    <CardBody>
                    <p>테스트111</p>
                    </CardBody>
                </Card>
                <Card isPressable="true" radius="none" shadow="sm">
                    <CardBody>
                    <p>테스트111</p>
                    </CardBody>
                </Card>
                </CardBody>
            </Card>
        </NextUIProvider>
    )
}
