import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced';
import Header from "@/components/customHeader";
import StandardMessageForm from "@/components/customMessageForms/StandardMessageForm";
import Ai from "@/components/customMessageForms/Ai";
import AiCode from "@/components/customMessageForms/AiCode";
import AiAssist from "@/components/customMessageForms/AiAssist";



const projectId = "ba722814-35b1-43b2-a5b7-c560f9928cf3";
const username = "testuser";
const secret = "1234";

const Chat = () => {
    const chatProps = useMultiChatLogic(
        projectId, username, secret
      );

  return (
    <div style={{ flexBasis: "100%" }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {
          if (chatProps.chat?.title.startsWith("AiChat_")) {
            return <Ai props={props} activeChat={chatProps.chat} />;
          }
          if (chatProps.chat?.title.startsWith("AiCode_")) {
            return <AiCode props={props} activeChat={chatProps.chat} />;
          }
          if (chatProps.chat?.title.startsWith("AiAssist_")) {
            return <AiAssist props={props} activeChat={chatProps.chat} />;
          }


          return (
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
          )
        }}
        />
    </div>
  )
}

export default Chat