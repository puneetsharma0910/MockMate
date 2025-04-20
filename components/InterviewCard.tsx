import dayjs from 'dayjs';
import Image from "next/image";
import {getRandomInterviewCover} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import DisplayTechIcons from "@/components/DisplayTechIcons";

const InterviewCard = ({ interviewId, userId, role, type, techstack, createdAt }: InterviewCardProps) => {
    const feedback = null as Feedback | null;
    const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY');

    return (
        <div className="card-border w-full min-h-96 hover:scale-[1.02] transition-transform duration-300">
            <div className="card-interview">
              <div>
                  <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-primary-100">
                      <p className="badge-text text-white">{normalizedType}</p>
                  </div>

                  <Image src={getRandomInterviewCover()} alt="cover image" width={90} height={90} className="rounded-full object-fit size-[90px] border-2 border-primary-100/30" />

                  <h3 className="mt-5 capitalize text-white">
                      {role} Interview
                  </h3>

                  <div className="flex flex-row gap-5 mt-3">
                      <div className="flex flex-row gap-2">
                          <Image src="/calendar.svg" alt="calendar" width={22} height={22} />
                          <p className="text-light-100">{formattedDate}</p>
                      </div>

                      <div className="flex flex-row gap-2 items-center">
                          <Image src="/star.svg" alt="star" width={22} height={22} />
                          <p className="text-light-100">{feedback?.totalScore || '---'}/100</p>
                      </div>
                  </div>

                  <p className="line-clamp-2 mt-5 text-light-400">
                      {feedback?.finalAssessment || "You haven't taken the interview yet. Take it now to improve your skills."}
                  </p>
              </div>

                <div className="flex flex-row justify-between items-center">
                    <DisplayTechIcons techStack={techstack} />

                    <Button className="btn-primary">
                        <Link href={feedback
                            ? `/interview/${interviewId}/feedback`
                            : `/interview/${interviewId}`
                        }>
                            {feedback ? 'Check Feedback' : 'View Interview'}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default InterviewCard