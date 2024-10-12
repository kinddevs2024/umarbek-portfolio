import React, { useLayoutEffect, useState } from 'react'
import axios from 'axios';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Rule from './Rule';
import gsap from 'gsap';

const MessageDialog = () => {



  useLayoutEffect(() =>{
    gsap.to("Button",{rotation:0,  delay:2});
    gsap.to(".mess",{ scale:1,  delay:1.4},);
    gsap.to(".mess",{ scale:0 , delay:0},);

});

  const { t } = useTranslation("global");


  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const BOT_TOKEN = "8024482870:AAFq-p_4ZZ6MGK_fy-Fog51T530H6Em3BiE"
  const MY_MOM = "6348045547"
  const [name, setName] = useState("")
  const [tel, setTel] = useState("")



  const sapshenia = `
Name : ${name} 
Massage : ${tel} `
  const sent_mesj = () => {
    axios
      .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: MY_MOM,
        text: sapshenia,
      })
      .then((response) => {
        console.log("Message sent:", response.data);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      }).then(() => {
        setOpen(!open);
      })
  };

  return (
    <div className=' '>
      <Button  className='dark:bg-gray-100 mess cursor-none dark:text-black' onClick={handleOpen}>{t("mess")}</Button>
      <Dialog className='   ' open={open} size="xs" handler={handleOpen}>
        <div className="flex   items-center justify-between">
          <DialogHeader className="flex flex-col items-start ">
            <Typography className="mb-1 max-w-64 text-wrap " variant="h4">
              {t("message")}<Link to={"https://t.me/kinddevs"}>{"kinddevs"}</Link>
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody>
          <Typography className="mb-10 text-md -mt-7  " variant="lead">
              <Rule/>
          </Typography>
          <div className="grid gap-6">
            <Input

              label={t("tel")}
              className=' '
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Textarea
              value={tel}
              className=''
              onChange={(e) => setTel(e.target.value)}
              label={t("mes")} />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2 ">
          <Button variant="text" className='text-red-700' onClick={handleOpen}>
            cancel
          </Button>
          <Button variant="gradient" className='text-white bg-gradient-to-tr from-green-400 to-green-700' onClick={sent_mesj}>
            send message
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  )
}

export default MessageDialog;