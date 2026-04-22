import { useEffect, useState } from "react";

const Vans = () => {
  const [vans, setVans] = useState([]);
  async function fetchVans() {
    try {
      const response = await fetch("/api/vans");
      const data = await response.json();
      console.log(data);
      setVans(data);
    } catch (error) {
      console.error("Error fetching vans:", error);
    }
  }

  useEffect(() => {
    fetchVans();
  }, []);

  return <div>Vans</div>;
};

export default Vans;
