import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>
            Get Interview Ready with Mockmate and Ace Your Next Interview with
            Ai powered Mock Interviews
          </h2>
          <p className="text-lg">
            Practise coding interviews with AI-powered mock interviews. Get
            personalized feedback and improve your skills with Mockmate.
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robo-image"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="grid grid-cols-4 gap-6 max-w-7xl">
        <h2>Your Interviews</h2>
        <div className="col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dummyInterviews.map((interview) => {
            return <InterviewCard {...interview} key={interview.id} />;
          })}
        </div>
      </section>
      <section className="flex flex-col gap-6 max-w-7xl">
        <h2>Take a Interview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dummyInterviews.map((interview) => {
            return <InterviewCard {...interview} key={interview.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default page;
