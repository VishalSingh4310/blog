import { DefaultAvatarImage } from "@utils/constant";
import React, { FC } from "react";
import Image from "next/image";
import moment from "moment";


const CommentCard: FC<any> = ({
  id,
  comment,
  date,
  username = "Anynomous",
}) => {
  return (
    <div key={id} className="flex items-start space-x-3 border-b pb-2 mb-4">
      <Image
        src={DefaultAvatarImage}
        alt={`${username}'s avatar`}
        className="w-10 h-10 rounded-full"
        width={100}
        height={100}
      />
      <div>
        <div className="flex items-center">
          <span className="font-semibold">{username}</span>
          <span className="text-gray-500 text-sm ml-2">{moment(date).fromNow()}</span>
        </div>
        <p className="mt-1">{comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
