"use client"
import React from "react";
import {NextUIProvider} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function(){
    return(
        <NextUIProvider>
          <div className="test1 max-h-screen" style={{paddingBottom:"150px"}}>
            <Card className="py-4 max-h-screen" isPressable="true" style={{margin:"3%", width:'94%'}}>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Yulchon</p>
                <small className="text-default-500">image test</small>
                <h4 className="font-bold text-large">LOGO</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="/images/logo1.png"
                  width={270}
                />
              </CardBody>
            </Card>
            <Card style={{margin:"3%", width:'94%'}}>
              <CardBody>
                <h4 className="font-bold text-large">Card Test</h4>
                <Card isPressable="true" >
                  <CardBody>
                    <p>Make beautiful websites regardless of your design experience.</p>
                  </CardBody>
                  <CardFooter className="text-small justify-between">
                    <b>테스트중</b>
                    <p className="text-default-500">테스트</p>
                  </CardFooter>
                </Card>
              </CardBody>
            </Card>

            <Card style={{margin:"3%", width:'94%'}}>
              <CardBody>
                <Card isPressable="true" radius="none" shadow="sm" fullWidth="true">
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

            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard /> 
            <CustomCard />
            <CustomCard /> 
            <CustomCard />
            <CustomCard /> 
            <CustomCard /> 
            <CustomCard />
            <CustomCard /> 
            <CustomCard />
            <CustomCard /> 
          </div>
        </NextUIProvider>
    )
}

function CustomCard(){
    return (
    <Card isPressable="true" style={{margin:"3%", width:'94%'}}>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
    </Card>
    )
}

function CustomCard2(){
    return (
    <Card>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
    </Card>
    )
}