"use client";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaComment } from "react-icons/fa";
type Props = {
  data: any;
};
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";

function PostCard({ data }: Props) {
  const router = useRouter();
  const { isLogedInStatus } = useSelector((state: IRootState) => state.auth);
  return (
    <div>
      <div className="mb-4">
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              {" "}
              <div className="flex items-center gap-2">
                <CgProfile size={30} /> {data?.user?.name}
              </div>
              <div className="bg-sky-400 w-[100px] flex p-1 rounded-md">
                {data?.tags.map((da: any) => (
                  <div>
                    <span className="text-[15px]  ">{da.name},</span>
                  </div>
                ))}
              </div>
            </CardTitle>
            <CardDescription>{data?.title}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{data.content}</p>
          </CardContent>
          <CardFooter>
            <div>
              <div>
                <div className="flex items-center gap-2 text-center">
                  {data?.comments.length}
                  <FaComment />
                </div>
                <div className="ms-[150px]">
                  {isLogedInStatus && (
                    <Button
                      variant="outline"
                      onClick={() => router.push(`posts/${data?.id}`)}
                    >
                      {" "}
                      Tap to Comment
                    </Button>
                  )}
                </div>
              </div>
              <div className="mt-4 flex flex-col justify-center">
                {data?.comments?.map((da: any) => {
                  return (
                    <div className="shadow-md w-[450px] mb-3">
                      <div className="flex items-center gap-2">
                        <CgProfile size={30} /> {da?.user?.name}
                      </div>
                      <h1>{da.content}</h1>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default PostCard;
