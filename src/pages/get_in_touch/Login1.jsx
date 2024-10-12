import React, { useEffect, useLayoutEffect, useState } from "react";

// @components
import {
    Card,
    Input,
    Button,
    CardBody,
    CardHeader,
    Typography,
    Textarea,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Rule from "../about_me/Rule";
import gsap from "gsap";
import { Link } from "react-router-dom";

// @icons

function Login1() {
    const { t } = useTranslation("global");

    const BOT_TOKEN = "8024482870:AAFq-p_4ZZ6MGK_fy-Fog51T530H6Em3BiE"
    const MY_MOM = "6348045547"
    const [name, setName] = useState("")
    const [tel, setTel] = useState("")




    const sapshenia = `
  Name : ${name} 
  Massage : ${tel}`
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
        <section className="  mb-20 .section px-8">
            <div className="container mx-auto h-screen grid place-items-center">
                <Card
                    shadow={false}
                    className="md:px-24 md:py-14 py-8 border border-gray-300"
                >
                    <CardHeader shadow={false} floated={false} className="text-center">
                        <Typography
                            variant="h1"
                            color="blue-gray"
                            className="mb-4 !text-3xl lg:text-4xl"
                        >
                            {t("getintouch")}
                        </Typography>
                        <Typography className="!text-gray-600 text-[18px] font-normal md:max-w-sm">

                                {t("otp")}
                        </Typography>
                    </CardHeader>
                    <CardBody>
                        <form
                            action="#"
                            className="flex flex-col gap-4 md:mt-12"
                        >
                            <div>
                                
                                <div className="  max-w-96 mb-2">

                                    <Rule />
                                </div>
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

                            </div>
                            <Button variant="gradient" className='text-white flex justify-center items-center gap-3 bg-gradient-to-tr from-green-400 to-green-700' onClick={sent_mesj}>
                                send message
                                <img className="h-6" src="https://img.icons8.com/color/480/telegram-app--v1.png" alt="telegram" />
                            </Button>
                            <Link to={"https://www.instagram.com/uumar_bek/"}>
                                <Button
                                    variant="outlined"
                                    size="lg"
                                    className="flex h-12 cursor-none border-blue-gray-200 items-center justify-center gap-2"
                                    fullWidth
                                >
                                    <img
                                        src={`https://img.icons8.com/fluency/48/instagram-new.png`}
                                        alt="google"
                                        className="h-6 w-6"
                                    />
                                    instagram
                                </Button>
                            </Link>
                            <Link to={"https://www.facebook.com/tohirbek.mansurov?locale=ru_RU"}>
                                <Button
                                    variant="outlined"
                                    size="lg"
                                    className="flex h-12 cursor-none border-blue-gray-200 items-center justify-center gap-2"
                                    fullWidth
                                >
                                    <img
                                        src={`https://img.icons8.com/fluency/48/facebook-new.png`}
                                        alt="google"
                                        className="h-6 w-6"
                                    />
                                    facebook
                                </Button>
                            </Link>
                            <Link className=" cursor-none" to={"https://www.youtube.com/@kind_devs"}>
                                <Button
                                    variant="outlined"
                                    size="lg"
                                    className="flex cursor-none h-12 border-blue-gray-200 items-center justify-center gap-2"
                                    fullWidth
                                >
                                    <img
                                        src={`https://img.icons8.com/color/480/youtube-play.png`}
                                        alt="google"
                                        className="h-6 w-6"
                                    />
                                    youtube
                                </Button>
                            </Link>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </section>
    );
}

export default Login1;
