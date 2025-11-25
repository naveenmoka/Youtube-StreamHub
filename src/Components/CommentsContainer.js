import React from "react";

const CommentData = [
  {
    name: "Rohit Verma",
    text: "Absolutely loved this video! The editing is on point 🔥",
    replies: [],
  },
  {
    name: "Priya Nanduri",
    text: "The background music is so addictive. Anyone knows the track name?",
    replies: [
      {
        name: "Sanjay Kumar",
        text: "Check the description! It's mentioned there.",
        replies: [],
      },
      {
        name: "Ayesha Khan",
        text: "I Shazamed it — It's from the movie OST. Amazing pick!",
        replies: [
          {
            name: "Priya Nanduri",
            text: "Ahhh thank you! Been searching everywhere 😭",
            replies: [
              {
                name: "Harsha P",
                text: "This song deserves to be on Spotify asap!",
                replies: [
                  {
                    name: "Rishi Patel",
                    text: "It is already uploaded, check the official channel 🙂",
                    replies: [
                      {
                        name: "Ayesha Khan",
                        text: "You're a lifesaver! ❤️",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Harsha P",
                    text: "Ohh thanks da macha! Will check now.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Naveen Moka",
    text: "This deserves way more views! So underrated.",
    replies: [],
  },
  {
    name: "Sneha Reddy",
    text: "Watched this like 10 times today 😂 Can't get over it!",
    replies: [],
  },
  {
    name: "Karthik Raj",
    text: "Director nailed the visuals. Such a vibe video!",
    replies: [],
  },
  {
    name: "Chandana S",
    text: "Perfect blend of music and cinematography. Loved it ❤️",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text} </p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={CommentData} />
    </div>
  );
};

export default CommentsContainer;
