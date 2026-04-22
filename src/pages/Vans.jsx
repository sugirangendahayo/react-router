import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);
  async function fetchVans() {
    try {
      const response = await fetch("/api/vans");
      const data = await response.json();

      setVans(data.vans || data);
    } catch (error) {
      console.error("Error fetching vans:", error);
    }
  }

  useEffect(() => {
    fetchVans();
  }, []);
  const vanElements = Array.isArray(vans) ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-5">
      {vans.map((van) => (
        <div
          key={van.id}
          className="border border-gray-300 p-4 rounded cursor-pointer 
          transition-all duration-200 ease-in-out 
          hover:-translate-y-1 hover:shadow-lg  "
        >
          <Link to={`/vans/${van.id}`}>
            <img
              src={van.imageUrl}
              alt={van.name}
              className="w-full h-48 object-cover"
            />
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">{van.name}</h3>

              <div>
                <p className="text-lg font-semibold">${van.price}</p>

                <span>/day</span>
              </div>
            </div>
            <p
              className={`${van.type === "simple" ? "bg-yellow-500" : van.type === "luxury" ? "bg-blue-500" : "bg-green-500"} text-white p-1 rounded w-fit px-2`}
            >
              {van.type}
            </p>
          </Link>
        </div>
      ))}
    </div>
  ) : (
    <div>Loading vans...</div>
  );

  return <div>{vanElements}</div>;
};

export default Vans;
