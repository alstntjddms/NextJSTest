"use client"
import React from "react";
import {NextUIProvider} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function(){
    return(
        <NextUIProvider>
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />

            {/* <CustomCard2 />

            <CustomCard /> */}


        </NextUIProvider>
    )
}

function CustomCard(){
    return (
    <Card isPressable="true" style={{margin:"3%"}}>
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