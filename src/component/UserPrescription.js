import axios from "axios";
import React, { useEffect } from "react";

import { useUserContext } from "../contextApi/userContext";
function UserPrescription() {
  const { user } = useUserContext();
  const [pdf, setPdf] = React.useState("");

  useEffect(() => {
    const id = Object.values(user)[0];
    const getpdf = async () => {
      if (user) {
        try {
          const { data } = await axios.get(
            `http://localhost:4000/api/prescriptions/${id}`
          );

          setPdf(data);
          console.log("pdf", pdf);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getpdf();
  }, [user]);
  return (
    <div>
      {pdf && user
        ? pdf.map((item) => {
            return (
              <iframe
                src={item}
                frameBorder="0"
                scrolling="auto"
                height="100%"
                width="100%"
                title="pdf"
              ></iframe>
            );
          })
        : "loading"}
    </div>
  );
}

export default UserPrescription;
