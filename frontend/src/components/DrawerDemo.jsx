/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import DetailedInfo from "./DetailedInfo";

export function DrawerDemo({
    image,
    videoUrl,
    title,
    views,
    likes,
    creators,
    platforms
}) {

    return (
        <Drawer>
            <DrawerTrigger asChild>
                {/* <Button variant="outline">Open Drawer</Button> */}
                <Card className="w-full max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-sm xl:max-w-sm">
                    <CardHeader>
                        {image && (
                            <div className="mb-2 sm:mb-4 rounded-xl overflow-hidden">
                                <img
                                    src={image}
                                    alt={title || "Project Image"}
                                    className="w-full h-auto object-cover rounded-t-md"
                                />
                            </div>
                        )}
                        <div className="mb-2 sm:mb-4">
                            <Badge variant="outline" className="text-xs sm:text-sm">
                                {platforms}
                            </Badge>
                        </div>
                        <CardTitle className="pt-2 sm:pt-2 mb-0 text-lg sm:text-xl md:text-2xl">
                            {title || "Create project"}
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base">
                            {videoUrl && (
                                <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    Watch Demo
                                </a>
                            )}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                            <div className="w-full sm:w-1/2 text-left truncate">{creators || "N/A"}</div>
                            <div className="flex items-center gap-3 w-full sm:w-1/2 justify-start sm:justify-end">
                                <div className='flex items-center gap-1'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0.5 0.5 16 16" className="Appreciations-icon-Z4i ProjectCover-icon-QsA ProjectCover-appreciations-hIS">
                                            <path fill="none" d="M.5.5h16v16H.5z"></path>
                                            <path d="M.5 7.5h3v8h-3zM7.207 15.207c.193.19.425.29.677.293H12c.256 0 .512-.098.707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1c0-.553-.447-1-1-1l-1 2-4 4v6l1.707 1.707z"></path>
                                        </svg>
                                    </span>
                                    <span>
                                        {likes || 0}
                                    </span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16" className="ProjectCover-icon-QsA ProjectCover-views-Euf">
                                            <path d="M8.5 3.5c-5 0-8 5-8 5s3 5 8 5 8-5 8-5-3-5-8-5zm0 7c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z"></path>
                                        </svg>
                                    </span>
                                    <span>
                                        {views || 0}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </DrawerTrigger>
            <DrawerContent>
                <section className="text-gray-600 max-h-[600px] sm:max-h-[480px] md:max-h-[720px] lg:max-h-[720px] overflow-y-auto body-font custom-scrollbar" style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1' }}>
                    <div className="container mx-auto flex flex-wrap px-5 py-12 md:flex-row flex-col items-center">
                        <div className="w-full md:w-1/2 mb-10 md:mb-0">
                            <img className="object-cover w-full object-center rounded-2xl" alt="hero" src={image} />
                        </div>
                        <div className="lg:pl-12 md:pl-8 w-full md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                {title}
                            </h1>
                            <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, quibusdam facere. Autem, non! Architecto dolor tempora doloribus rerum neque maiores.</p>
                        </div>
                        <DetailedInfo />
                    </div>
                </section>
            </DrawerContent>
        </Drawer>
    );
}