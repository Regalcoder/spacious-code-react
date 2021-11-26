import {Row} from "react-bootstrap"; 
//import AddPlanet from "./AddPlanet"; 
import Planet from "./Planet"; 


const Planets = () => {
  const allPlanets = [
    {
      name: "Mercury",
      population: 1900400,
      imageUrl: 'images/planet-1.svg',
      id: 1,
      characters: [
        {
          planetname: "Mercury",
          description:
        "Mercury is the smallest planet in our solar system. It's a little bigger than Earth's Moon. It is the closest planet to the Sun.",
          name: "Dariene Robertson",
          friends: 29,
          image: 'images/character-1.png',
        },
        {
          name: "Kathryn Robertson",
          friends: 11,
          image: 'images/character-2.png',
        },
        {
          name: "Murphy Wilson",
          friends: 30,
          image: 'images/character-3.png',
        },
        {
          name: "Ariene Jack",
          friends: 3,
          image: 'images/character-4.png',
        },
        {
          name: "Bessie McCoy",
          friends: 40,
          image: 'images/character-13.png',
        },
      ],
    },
    {
      name: "Venus",
      population: 245677889900,
      imageUrl: 'images/planet-2.svg',
      description:
        "Venus is the second planet from the Sun and Earth's closest planetary neighbor. Even though Mercury is closer to the Sun, Venus is the hottest planet in our solar system.",
      id: 2,
      characters: [
        {
          planet_name: "Venus",
          description:
        "Venus is the second planet from the Sun and Earth's closest planetary neighbor. Even though Mercury is closer to the Sun, Venus is the hottest planet in our solar system.",
          name: "Dariene Robertson",
          friends: 29,
          image: 'images/character-16.png',
        },
        {
          name: "Kathryn Robertson",
          friends: 11,
          image: 'images/character-12.png',
        },
        {
          name: "Murphy Wilson",
          friends: 30,
          image: 'images/character-15.png',
        },
        {
          name: "Ariene Jack",
          friends: 3,
          image: 'images/character-14.png',
        },
        {
          name: "Bessie McCoy",
          friends: 40,
          image: 'images/character-12.png',
        },
      ],
    },
    {
      name: "Earth",
      population: 3000999000004,
      imageUrl: 'images/planet-3.svg',
      description:
        "Earth is the fifth-largest planet in the solar system. It's smaller than the four gas giants — Jupiter, Saturn, Uranus and Neptune.",
      id: 3,
      characters: [
        {
          planet_name: "Earth",
          description:
        "Earth is the fifth-largest planet in the solar system. It's smaller than the four gas giants — Jupiter, Saturn, Uranus and Neptune.",
          name: "Dariene Robertson",
          friends: 29,
          image: 'images/character-4.png',
        },
        {
          name: "Kathryn Robertson",
          friends: 11,
          image: 'images/character-5.png',
        },
        {
          name: "Murphy Wilson",
          friends: 30,
          image: 'images/character-6.png',
        },
        {
          name: "Ariene Jack",
          friends: 3,
          image: 'images/character-7.png',
        },
        {
          name: "Bessie McCoy",
          friends: 40,
          image: 'images/character-8.png',
        },
      ],
    },
    {
      name: "Mars",
      population: 40600009999,
      imageUrl: 'images/planet-4.svg',
      description:
        "Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons.",
      id: 4,
      characters: [
        {
          planet_name: "Mars",
          description:
        "Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons.",
          name: "Dariene Robertson",
          friends: 29,
          image: 'images/character-10.png',
        },
        {
          name: "Kathryn Robertson",
          friends: 11,
          image: 'images/character-12.png',
        },
        {
          name: "Murphy Wilson",
          friends: 30,
          image: 'images/character-14.png',
        },
        {
          name: "Ariene Jack",
          friends: 3,
          image: 'images/character-16.png',
        },
        {
          name: "Bessie McCoy",
          friends: 40,
          image: 'images/character-1.png',
        },
      ],
    },
    {
      name: "Jupiter",
      population: 530748660845300,
      imageUrl: 'images/planet-5.svg',
      description:
        "Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets.",
      id: 5,
      characters: [
        {
          name: "Dariene Robertson",
          friends: 29,
          image: 'images/character-9.png',
        },
        {
          name: "Kathryn Robertson",
          friends: 11,
          image: 'images/character-8.png',
        },
        {
          name: "Murphy Wilson",
          friends: 30,
          image: 'images/character-7.png',
        },
        {
          name: "Ariene Jack",
          friends: 3,
          image: 'images/character-6.png',
        },
        {
          name: "Bessie McCoy",
          friends: 40,
          image: 'images/character-5.png',
        },
      ],
    },
    {
      name: "Saturn",
      population: 6000099977766551,
      imageUrl: 'images/planet-6.svg',
      description:
        "Saturn is the sixth planet from our Sun (a star) and orbits at a distance of about 886 million miles (1.4 billion kilometers) from the Sun.",
      id: 6,
      characters: [
        {
          name: "Dariene Robertson",
          friends: 29,
          Image: 'images/character-12.png',
        },
        {
          name: "Kathryn Robertson",
          friends: 11,
          Image: 'images/character-13.png',
        },
        {
          name: "Murphy Wilson",
          friends: 30,
          image: 'images/character-11.png',
        },
        {
          name: "Ariene Jack",
          friends: 3,
          image: 'images/character-10.png',
        },
        {
          name: "Bessie McCoy",
          friends: 40,
          image: 'images/character-9.png',
        },
      ],
    },
    {
      name: "Uranus",
      population: 7239048366583,
      imageUrl: 'images/planet-7.svg',
      description:
        "Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system.",
      id: 7,
      characters: [
        {
          name: "Dariene Robertson",
          friends: 29,
          image: 'images/character-14.png',
        },
        {
          name: "Kathryn Robertson",
          friends: 11,
          image: 'images/character-15.png',
        },
        {
          name: "Murphy Wilson",
          friends: 30,
          image: 'images/character-1.png',
        },
        {
          name: "Ariene Jack",
          friends: 3,
          image: 'images/character-2.png',
        },
        {
          name: "Bessie McCoy",
          friends: 40,
          image: 'images/character-5.png',
        },
      ],
    },
    {
      name: "Neptune",
      population: 8986567709,
      imageUrl: 'images/planet-8.svg',
      description:
        "Neptune is dark, cold, and very windy. It's the last of the planets in our solar system.",
      id: 8,
      characters: [
        {
          name: "Dariene Robertson",
          friends: 29,
          image: 'images/character-5.png',
        },
        {
          name: "Kathryn Robertson",
          friends: 11,
          image: 'images/character-10.png',
        },
        {
          name: "Murphy Wilson",
          friends: 30,
          image: 'images/character-9.png',
        },
        {
          name: "Ariene Jack",
          friends: 3,
          image: 'images/character-2.png',
        },
        {
          name: "Bessie McCoy",
          friends: 40,
          image: 'images/character-6.png',
        },
      ],
    },
    {
      name: "Pluto",
      population: 9198876541,
      imageUrl: 'images/planet-9.svg',
      description:
        " In August 2006 the International Astronomical Union (IAU) downgraded the status of Pluto to that of “dwarf planet.",
      id: 9,
      characters: [
        {
          name: "Dariene Robertson",
          friends: 29,
          image: 'images/character-5.png',
        },
        {
          name: "Kathryn Robertson",
          friends: 11,
          image: 'images/character-10.png',
        },
        {
          name: "Murphy Wilson",
          friends: 30,
          image: 'images/character-2.png',
        },
        {
          name: "Ariene Jack",
          friends: 3,
          image: 'images/character-10.png',
        },
        {
          name: "Bessie McCoy",
          friends: 40,
          image: 'images/character-15.png',
        },
      ],
    },
   
];

return(
<>
<Row >
{allPlanets.map((planet) =>(
<Planet planet={planet} />
))}
</Row>
</>
);
};

export default Planets; 