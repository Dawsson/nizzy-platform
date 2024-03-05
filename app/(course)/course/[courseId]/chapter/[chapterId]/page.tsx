import { getChapter } from "@/actions/get-chapter";
import { auth } from "@/auth";
import { Banner } from "@/components/banner";
import { redirect } from "next/navigation";

import { CoursePurchaseButton } from "./_components/course-purchase-button";
import { Preview } from "@/components/preview";
import { File, Github, Lock } from "lucide-react";
import { CourseProgressButton } from "./_components/course-progress-button";
import type { SVGProps } from 'react';
import { FaDiscord } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

import Link from "next/link";

const ChapterIdPage = async ({
    params
}: {
    params: { courseId: string; chapterId: string; }
}) => {
    const session = await auth();

    if (!session) {
        return redirect("/");
    }

    const {
        chapter,
        course,
        attachments,
        nextChapter,
        userProgress,
        purchase,
        notionLink,
        githubLink
    } = await getChapter({
        userId: session.user.id ?? '',
        courseId: params.courseId,
        chapterId: params.chapterId
    })

    if(!chapter || !course) {
        return redirect("/");
    }

    const isLocked = !chapter.isFree && !purchase;
    const completeOnEnd = !!purchase && !userProgress?.isCompleted;
    

  return (
    <div className="pt-8">
        {isLocked ? (
            <div className=" bg-[#191919] relative aspect-video">
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-y-2">
                    <Lock className="h-8 w-8" />
                    <p className="text-lg">
                        Purchase course to unlock
                    </p>
                </div>

            </div>
        ) : (
        // This is the video player which will be shown when the video is not locked
        <div className="responsive-iframe-container">
          <iframe 
            src={`${chapter.vimeoVideo}`} 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
            title="Video"
            
          >
          </iframe>
        </div>
      )}
        <div className="flex flex-col">
            <div className="">
               
            </div>
            <div>
                <div className="mt-3 flex flex-col md:flex-row items-center justify-between ml-2">
                    <h2 className="font-bold text-2xl mb-2">{chapter.title}</h2>
                
                {purchase ? (
                    <CourseProgressButton 
                        chapterId={params.chapterId}
                        courseId={params.courseId}
                        nextChapterId={nextChapter?.id}
                        isCompleted={!!userProgress?.isCompleted}
                    />
                ) : (
                    <CoursePurchaseButton
                        courseId={params.courseId}
                        price={course.price!}
                    />
                )}
                </div>
                
                <div className="flex justify-end space-x-8 pt-8">
                    <Link href={`${course.githubLink}`} className="border border-slate-100/20 bg-[#131212] flex item-center justify-center w-20 py-2 rounded-xl hover:opacity-50">
                        <FaGithub className="h-12 w-12" />
                    </Link>

                    <Link href='https://discord.gg/nizar' className="border border-slate-100/20 bg-[#131212] flex item-center justify-center w-20 py-2 rounded-xl hover:opacity-50">
                        <FaDiscord className="h-12 w-12" />
                    </Link>

                    <Link href={`${course.notionLink}`} className="border border-slate-100/20 bg-[#131212] flex item-center justify-center w-20 py-3 rounded-xl hover:opacity-50">
                        <SiNotion className="h-10 w-10" />
                        <p></p>
                    </Link>
                </div>


                <div>
                    <Preview value={chapter.description!} />
                </div>
                {!!attachments.length && (
                    <>
                        <div className="p-4">
                            {attachments.map((attachment) => (
                            <a 
                                href={attachment.url}
                                key={attachment.id}
                                target="_blank"
                                className="flex items-center p-3 w-full bg-slate-200 border text-[#191919] rounded hover:underline"
                            >
                                <File />
                                {attachment.name}
                            </a>

                             ))}
                        </div>
                    </>
                )}
            </div>
        </div>

       


        
        
    </div>
  )
}

export default ChapterIdPage