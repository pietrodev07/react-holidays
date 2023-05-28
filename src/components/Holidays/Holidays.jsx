import { useEffect, useState } from "react";
import SingleHoliday from "../SingleHoliday/SingleHoliday";
import Loading from "../Utils/Loading/Loading";
import Error from "../Utils/Error/Error";
import './Holidays.css'

const Holidays = () => {

  const url = 'https://basic-api-kugm.onrender.com/holidays';

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [holiday, setHoliday] = useState([]);
  const [selected, setSelected] = useState(0);

  const nextHoliday = () => {

    setSelected((prevValue) => {

      if (prevValue + 1 === holiday.length) {
        return 0;
      } else {
        return prevValue + 1;
      }

    });

  }

  const prevHoliday = () => {

    setSelected((prevValue) => {

      if (prevValue - 1 < 0) {
        return holiday.length - 1;
      } else {
        return prevValue - 1;
      }

    });

  }

  const getData = async () => {

    setIsLoading(true);
    setIsError(false);

    try {

      const response = await fetch(url);
      const result = await response.json();
      setHoliday(result.data);
      setIsLoading(false);

    } catch (error) {

      setIsError(true);
      setIsLoading(false);

    }

  }

  useEffect(() => {

    getData();

  }, []);

  return (

    <main className="main">

      <div className="card">

        {holiday && !isLoading && !isError && <SingleHoliday {...holiday[selected]} next={nextHoliday} prev={prevHoliday} />}

        {isLoading && <Loading />}

        {isError && <Error />}

      </div>

    </main>

  )

}

export default Holidays