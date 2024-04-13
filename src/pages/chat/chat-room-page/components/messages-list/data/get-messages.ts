import { MessageStatus } from "common/types/common.type";

export type Message = {
  id: string;
  body: string;
  date: string;
  timestamp: string;
  messageStatus: MessageStatus;
  isOpponent: boolean;
};

const messages: Message[] = [
  {
    id: "1",
    body: "Will you go to college Tomorrow ",
    date: "19/02/2023",
    timestamp: "08:58",
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "2",
    body: "Yes.",
    date: "20/02/2023",
    timestamp: "09:01",
    messageStatus: "READ",
    isOpponent: false,
  },
  {
    id: "3",
    body: "Will you attend all the classes",
    date: "20/02/2023",
    timestamp: "09:05",
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "4",
    body: "No, i'll come back after lunch",
    date: "20/02/2023",
    timestamp: "12:30",
    messageStatus: "READ",
    isOpponent: false,
  },
  {
    id: "5",
    body: "Okay Okay",
    date: "21/02/2023",
    timestamp: "15:42",
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "6",
    body: "Mere sath chalna ",
    date: "22/02/2023",
    timestamp: "10:12",
    messageStatus: "READ",
    isOpponent: false,
  },
  {
    id: "7",
    body: "Okay",
    date: "23/02/2023",
    timestamp: "18:03",
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "8",
    body: "Sorry,Nahi jaa sakta",
    date: "24/02/2023",
    timestamp: "13:25",
    messageStatus: "READ",
    isOpponent: false,
  },
  {
    id: "9",
    body: "Kyu",
    date: "25/02/2023",
    timestamp: "16:08",
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "10",
    body: "Kaam se jana hain bhar",
    date: "26/02/2023",
    timestamp: "20:12",
    messageStatus: "READ",
    isOpponent: false,
  },
  {
    id: "11",
    body: "Chalo theke",
    date: "27/02/2023",
    timestamp: "09:52",
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "12",
    body: "Sham me milte hian",
    date: "28/02/2023",
    timestamp: "14:27",
    messageStatus: "READ",
    isOpponent: false,
  },
  {
    id: "13",
    body: "Okay bhai",
    date: "28/02/2023",
    timestamp: "14:30",
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "14",
    body: "Minor Project submit kar diya",
    date: "01/03/2023",
    timestamp: "11:45",
    messageStatus: "READ",
    isOpponent: false,
  },
  {
    id: "15",
    body: "Nahi kal karunga",
    date: "01/03/2023",
    timestamp: "11:47",
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "16",
    body: "Okayyy",
    date: "01/03/2023",
    timestamp: "11:50",
    messageStatus: "READ",
    isOpponent: false,
  },
  {
    id: "17",
    body: "Have you looked at my new project",
    date: "01/03/2023",
    timestamp: "11:55",
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "18",
    body: "No, send me the link ",
    date: "02/03/2023",
    timestamp: "16:35",
    messageStatus: "READ",
    isOpponent: false,
  },
  {
    id: "19",
    body: "Okay , i'll send you",
    date: "02/03/2023",
    timestamp: "16:40",
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "20",
    body: "what are you doing",
    date: "02/03/2023",
    timestamp: "16:42",
    messageStatus: "READ",
    isOpponent: false,
  },
  {
    id: "21",
    body: "Nothing much ",
    date: "03/03/2023",
    timestamp: "09:20",
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "22",
    body: "Lets go for a hackathon",
    date: "03/03/2023",
    timestamp: "09:23",
    messageStatus: "DELIVERED",
    isOpponent: false,
  },
];

export function getMessages(): Message[] {
  const totalMessagesLength = messages.length;
  let randomNumber = Math.floor(Math.random() * totalMessagesLength);

  if (randomNumber > totalMessagesLength) randomNumber = totalMessagesLength;
  if (randomNumber === 1) randomNumber = 2; // so we always have atleast 1-2 messages.

  return messages.slice(0, randomNumber);
}
