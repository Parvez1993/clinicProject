import React from "react";
import axios from "axios";

function Doctors() {
  const [count, setCount] = React.useState(false);
  const [doctors, setDoctors] = React.useState("");

  React.useEffect(() => {
    if (count === false) {
      const getSpeciality = async () => {
        try {
          const { data } = await axios.get(
            "http://localhost:4000/api/specialties"
          );
          setDoctors(data);
        } catch (error) {
          console.log(error);
        }
      };

      getSpeciality();
    }
  }, [count]);

  return <></>;
}

export default Doctors;
