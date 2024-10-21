import { client } from "./sanity";

let sanityQuery = (query, params) => client.fetch(query, params);

export const getFeaturedSanityQuery = () => {
  return sanityQuery(`*[_type=='featured']{
        ...,
        restaurant[]->{
          ...,
          dish[]->{
            ...,
          }
        }
      }
      `);
};

export const getCategories = () => {
  return sanityQuery(`*[_type=='category']{
    ...,
  }`);
};
