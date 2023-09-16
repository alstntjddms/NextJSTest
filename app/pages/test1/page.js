"use client"
import React from "react";
import {NextUIProvider} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function(){
    return(
        <NextUIProvider>
          <Card className="py-4" isPressable="true" style={{margin:"3%", width:'94%'}}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large">Frontend Radio</h4>
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
          <CustomCard /> 
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