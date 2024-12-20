import { Accordion, AccordionBody, AccordionHeader, Typography } from '@material-tailwind/react'
import React from 'react'
import { useTranslation } from 'react-i18next';
function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const Rule = () => {
    const { t } = useTranslation("global");

    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div>
            <Accordion className='' open={open === 1} icon={<Icon id={1} open={open}/>}>
                <AccordionHeader onClick={() => handleOpen(1)} className=''>{t("ruleru")}</AccordionHeader>
                <AccordionBody  >
                    {t("rule")}
                </AccordionBody>
            </Accordion>
        </div>
    )
}

export default Rule