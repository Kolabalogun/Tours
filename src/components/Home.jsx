import React from "react";
import Lists from "./Lists";
import Loading from "./Loading";
import "./Style.css";

const URL = "https://course-api.com/react-tours-project";

const Home = () => {
  const [isloading, isloadingF] = React.useState(true);
  const [readMore, readMoreF] = React.useState(false);
  const [Array, ArrayF] = React.useState([]);



  const getApi = async () => {
    const res = await fetch(`${URL}`);
    const data = await res.json();

    ArrayF(data);
  };

  




  React.useEffect(() => {
    getApi();
  

    isloadingF(false);
  }, []);



  const ArrayElement = Array.map((A) => (
    <Lists
      key={A.id}
      id={A.id}
      img={A.image}
      name={A.name}
      info={A.info}
      price={A.price}
      handleDelete={handleDelete}
      handleInfo={handleInfo}
      readMore={readMore}
    />
  ));

  function handleDelete(id) {
    const newArray = Array.filter((nA) => nA.id !== id);
    ArrayF(newArray);
  }

  function handleInfo(id) {
    readMoreF((prev) => !prev);
  }

  return (
    <div className="container">
      <h1>Tours</h1>
      <div className="line"></div>

      <div className="main">{isloading ? <Loading /> : ArrayElement}</div>

      <div className=""></div>
    </div>
  );
};

export default Home;
