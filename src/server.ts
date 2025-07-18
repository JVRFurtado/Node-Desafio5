import fastify from "fastify";
import cors from "@fastify/cors"

const server = fastify({ logger: true });

server.register(cors, {
    origin: "*",
});

const teams = [
    { id: 1, name: "MacLaren", engine: "Mercedes", drivers: ["Oscar Piastri", "Lando Norris"], base: "Woking, United Kingdom"},
    { id: 2, name: "Ferrari", engine: "Ferrari", drivers: ["Charles Leclerc", "Lewis Hamilton"], base: "Maranello, Italy"},
    { id: 3, name: "Mercedes", engine: "Mercedes", drivers: ["George Russell", "Kimi Antonelli"], base: "Brackley, United Kingdom"},
    { id: 4, name: "Red Bull Racing", engine: "Honda RBPT", drivers: ["Max Verstappen", "Yuki Tsunoda"], base: "Milton Keynes, United Kingdom"},
    { id: 5, name: "Williams", engine: "Mercedes", drivers: ["Alexander Albon", "Carlos Sainz"], base: "Grove, United Kingdom"},
    { id: 6, name: "Kick Sauber", engine: "Ferrari", drivers: ["Nico Hulkenberg", "Gabriel Bortoleto"], base: "Hinwil, Switzerland"},
    { id: 7, name: "Racing Bulls", engine: "Honda RBPT", drivers: ["Liam Lawson", "Isack Hadjar"], base: "Faenza, Italy"},
    { id: 8, name: "Aston Martin", engine: "Mercedes", drivers: ["Lance Stroll", "Fernando Alonso"], base: "Silverstone, United Kingdom"},
    { id: 9, name: "Haas", engine: "Ferrari", drivers: ["Esteban Ocon", "Oliver Bearman"], base: "Kannapolis, United States"},
    { id: 10, name: "Alpine", engine: "Renault", drivers: ["Pierre Gasly", "Franco Colapinto"], base: "Enstone, United Kingdom"},
];

const drivers = [
    { id: 1, name: "Oscar Piastri", team: "McLaren", birth: "06/04/2001", place: "Melbourne, Victoria"},
    { id: 2, name: "Lando Norris", team: "McLaren", birth: "13/11/1999", place: "Bristol, England"},
    { id: 3, name: "Charles Leclerc", team: "Ferrari", birth: "16/10/1997", place: "Monte Carlo, Monaco"},
    { id: 4, name: "Lewis Hamilton", team: "Ferrari", birth: "07/01/1985", place: "Stevenage, England"},
    { id: 5, name: "George Russell", team: "Mercedes", birth: "15/02/1998", place: "King's Lynn, England"},
    { id: 6, name: "Kimi Antonelli", team: "Mercedes", birth: "25/08/2006", place: "Bologna, Italy"},
    { id: 7, name: "Max Verstappen", team: "Red Bull Racing", birth: "30/09/1997", place: "Hasselt, Belgium"},
    { id: 8, name: "Yuki Tsunoda", team: "Red Bull Racing", birth: "11/05/2000", place: "Sagamihara, Japan"},
    { id: 9, name: "Alexander Albon", team: "Williams", birth: "23/03/1996", place: "London, England"},
    { id: 10, name: "Carlos Sainz", team: "Williams", birth: "01/09/1994", place: "Madrid, Spain"},
    { id: 11, name: "Nico Hulkenberg", team: "Kick Sauber", birth: "19/08/1987", place: "Emmerich am Rhein, Germany"},
    { id: 12, name: "Gabriel Bortoleto", team: "Kick Sauber", birth: "14/10/2004", place: "São Paulo, Brazil"},
    { id: 13, name: "Liam Lawson", team: "Racing Bulls", birth: "11/02/2002", place: "Hastings, New Zealand"},
    { id: 14, name: "Isack Hadjar", team: "Racing Bulls", birth: "28/09/2004", place: "Paris, France"},
    { id: 15, name: "Lance Stroll", team: "Aston Martin", birth: "29/10/1998", place: "Montreal, Canada"},
    { id: 16, name: "Fernando Alonso", team: "Aston Martin", birth: "29/07/1981", place: "Oviedo, Spain"},
    { id: 17, name: "Esteban Ocon", team: "Haas", birth: "17/09/1996", place: "Évreux, Normandy"},
    { id: 18, name: "Oliver Bearman", team: "Haas", birth: "08/05/2005", place: "Chelmsford, England"},
    { id: 19, name: "Pierre Gasly", team: "Alpine", birth: "07/02/1996", place: "Rouen, France"},
    { id: 20, name: "Franco Colapinto", team: "Alpine", birth: "27/05/2003", place: "Buenos Aires, Argentina"},
];

server.get("/teams", async(request, response)=>{
    response.type("application/json").code(200);
    return { teams };
});

server.get("/drivers", async(request, response)=>{
    response.type("application/json").code(200);
    return { drivers };
});

interface DriverParams{
    id: string
}

server.get<{Params: DriverParams}>("/drivers/:id", async(request, response)=>{
    const id = parseInt(request.params.id);
    const driver = drivers.find( (d) => d.id === id );

    if(!driver){
        response.type("application/json").code(404);
        return {message: "Driver Not Found"};
    }else{
        response.type("application/json").code(200);
        return { driver };
    }
});

server.listen({port: 3636}, ()=>{
    console.log("Server init");
});