import { gql } from "apollo-server";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GQL

  # creating the the GQL Object to query Sitters

  """
  Where a sitting can be held
  """
  type Location {
    id: String!
    country: String!
    region: String!
    county: String!
  }

  """
  The person that will be hired to take care of the kids
  """
  type Sitter {
    id: String!
    firstName: String!
    lastName: String!
    age: Int!
    formation: String
    experience: [String]
    educationalModels: [String]!
    location: [Location]!
    hourlyRate: Int
  }

  """
  Parent of a child
  """
  type Parent {
    id: String!
    firstName: String!
    lastName: String!
    children: [Child]!
  }

  """
  Child object that will hold the childs info
  """
  type Child {
    id: String!
    name: String!
    age: Int!
    parents: [Parent]!
  }

  """
  Its the product of the match between
  a Sitter and a Sitted person
  """
  type Sitting {
    id: String!
    sitter: Sitter!
    sitted: [Child]!
    duration: Int!
    location: Location!
    cost: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each.

  type Query {
    locations: [Location!]!
    sitters: [Sitter!]!
    sittings: [Sitting!]!
    parents: [Parent!]!
    children: [Child!]!
    getBestSitter: Sitter!
  }
`;

// In order to try this i will hard code some
// Sitters, Sitteds, locations and Sittings

const locations = [
  {
    id: 1,
    country: "Chile",
    region: "Metropolitana",
    county: "Providencia",
  },
  {
    id: 2,
    country: "Chile",
    region: "Metropolitana",
    county: "Las Condes",
  },
  {
    id: 3,
    country: "Chile",
    region: "Metropolitana",
    county: "Ñuñoa",
  },
  {
    country: "Chile",
    region: "Metropolitana",
    county: "Renca",
  },
  {
    id: 4,
    country: "Chile",
    region: "Metropolitana",
    county: "El Bosque",
  },
  {
    id: 5,
    country: "Chile",
    region: "Metropolitana",
    county: "Santiago Centro",
  },
];

const sitters = [
  {
    id: 1,
    firstName: "Constanza",
    lastName: "Sepulveda",
    age: 28,
    formation: "P. U. Catolica",
    experience: ["Jardin Waldorf Sophia", "Sename", "Padre Pedro Arruque"],
    educationalModels: ["Tradicional", "Waldorf"],
    location: [locations[0], locations[1]],
    hourlyRate: 8000,
  },
  {
    id: 2,
    firstName: "Josefina",
    lastName: "Kitto",
    age: 26,
    formation: "P. U. Catolica",
    experience: ["Jardin Waldorf Sophia"],
    educationalModels: ["Tradicional", "Waldorf"],
    location: [locations[0], locations[1]],
    hourlyRate: 7000,
  },
  {
    id: 3,
    firstName: "Bianca",
    lastName: "Spianghero",
    age: 21,
    formation: "Seminario Arche",
    experience: ["Waldorf Gabriela Mistral"],
    educationalModels: ["Tradicional", "Waldorf"],
    location: [locations[0], locations[1]],
    hourlyRate: 7000,
  },
];

const parents = [
  {
    id: 1,
    firstName: "Kena",
    lastName: "Lorenzini",
    children: ["Camila"],
  },
  {
    id: 2,
    firstName: "Roberto",
    lastName: "Villarroel",
    children: ["Max", "Lautaro", "Gabriela"],
  },
  {
    id: 3,
    firstName: "Loreto",
    lastName: "Villarroel",
    children: ["Max", "Lautaro", "Gabriela"],
  },
];

const children = [
  {
    id: 1,
    name: "Max",
    age: 8,
    parents: [parents[1], parents[2]],
  },
  {
    id: 2,
    name: "Lautaro",
    age: 11,
    parents: [parents[1], parents[2]],
  },
  {
    id: 3,
    name: "Gabriela",
    age: 11,
    parents: [parents[1], parents[2]],
  },
  {
    id: 4,
    name: "Camila",
    age: 7,
    parents: [parents[0]],
  },
];

const sittings = [
  {
    id: 1,
    sitter: sitters[0],
    sitted: [children[0], children[1], children[2]],
    duration: 4,
    location: locations[0],
    cost: 20000,
  },
  {
    id: 2,
    sitter: sitters[1],
    sitted: [children[3]],
    duration: 5,
    location: locations[3],
    cost: 20000,
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    // getSitters: () => {
    //   sittings;
    // },
    locations: () => locations,
    sitters: () => sitters,
    sittings: () => sittings,
    parents: () => parents,
    children: () => children,
    getBestSitter: () => {
      sitters.sort();
    },
  },
};

export default typeDefs;
