import React, { useLayoutEffect } from 'react'
import { Card, Typography } from "@material-tailwind/react";
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';



const Table = () => {

  useLayoutEffect(() => {
    gsap.to(".tyu", { rotation: 0, delay: 2 });
    gsap.to(".tyu", { scale: 1, delay: 1.4 },);
    gsap.to(".tyu", { scale: 0, delay: 0 },);

  });

  const { t } = useTranslation("global");

  const TABLE_HEAD = [t("name"), t("period"), t("date")];

  const TABLE_ROWS = [
    {
      name: "0+",
      job: t("infancy"),
      date: "10/05/11",
    },
    {
      name: "4-6+",
      job: t("kindergarten"),
      date: "14/06/23",
    },
    {
      name: "6-11+",
      job: t("firstschool"),
      date: "16/09/01",
    },
    {
      name: "12-14+",
      job: t("highschool"),
      date: "22/09/03",
    },
  ];
  return (
    <div className='container tyu '>
      <Card className="h-full bg-blue-gray-50 w-full overflow-scroll ">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ name, job, date }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-100";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {job}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}



export default Table;