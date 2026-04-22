import { createServer, Model } from "miragejs";

export function makeServer() {
  createServer({
    models: {
      van: Model,
    },

    seeds(server) {
      server.create("van", {
        id: "1",
        name: "Camper Van",
        price: 80,
        description:
          "Perfect for road trips and camping adventures with basic comfort.",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/camper-van.png",
        type: "simple",
      });

      server.create("van", {
        id: "2",
        name: "Luxury Cruiser",
        price: 150,
        description: "A premium van with leather seats, AC, and extra comfort.",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/luxury-cruiser.png",
        type: "luxury",
      });

      server.create("van", {
        id: "3",
        name: "Mini Explorer",
        price: 60,
        description: "Small and efficient van for city travel and short trips.",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/mini-explorer.png",
        type: "simple",
      });

      server.create("van", {
        id: "4",
        name: "Green Wanderer",
        price: 110,
        description: "Eco-friendly van designed for sustainable travel.",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/green-wanderer.png",
        type: "rugged",
      });

      server.create("van", {
        id: "5",
        name: "The Cruiser",
        price: 120,
        description:
          "Spacious interior, smooth ride, and perfect for long journeys.",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
        type: "luxury",
      });

      server.create("van", {
        id: "6",
        name: "Mountain Rider",
        price: 100,
        description: "Built for rough terrains and mountain adventures.",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/mountain-rider.png",
        type: "rugged",
      });

      server.create("van", {
        id: "7",
        name: "Urban Glide",
        price: 70,
        description: "Compact van ideal for city commuting and easy parking.",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/urban-glide.png",
        type: "simple",
      });

      server.create("van", {
        id: "8",
        name: "Safari Beast",
        price: 130,
        description:
          "Strong and durable van made for safari and off-road travel.",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/safari-beast.png",
        type: "rugged",
      });

      server.create("van", {
        id: "9",
        name: "Royal Ride",
        price: 180,
        description: "Top-tier luxury van with advanced comfort features.",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/royal-ride.png",
        type: "luxury",
      });

      server.create("van", {
        id: "10",
        name: "Budget Buddy",
        price: 50,
        description: "Affordable and reliable van for everyday travel.",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/budget-buddy.png",
        type: "simple",
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/vans", (schema) => {
        return schema.vans.all();
      });

      this.get("/vans/:id", (schema, request) => {
        let id = request.params.id;
        return schema.vans.find(id);
      });
    },
  });
}
