import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_CMS_API_URL,
  cache: new InMemoryCache(),
});

export const getAllPosts = () =>
  client.query({
    query: gql`
      query getAllPosts {
        posts(orderBy: createdAt_DESC) {
          id
          slug
          title
          coverImage {
            url
          }
          categories {
            id
            name
          }
          createdAt
        }
      }
    `,
  });

export const getHomePageInfo = (slug: string, locales: any) =>
  client.query({
    query: gql`
      query getHomePageInfo($slug: String!, $locales: [Locale!]!) {
        homepage(where: { slug: $slug }, locales: $locales) {
          id
          slug
          title
          pageType

          contentSection1 {
            title
            subtitle
            description
            id
          }
          services {
            title
            content
            bgColor
            accentColor
          }
          testimonials {
            testimonialText
            highlightedQuote
            autorName
            autorRole
            projectName
            bgColor
            accentColor
            image(locales: es) {
              url
            }
          }
          projects {
            title
            description
            image(locales: es) {
              url
            }
          }
        }
      }
    `,
    variables: {
      slug,
      locales,
    },
  });
export const getServicePageInfo = (slug: string, locales: any) =>
  client.query({
    query: gql`
      query getServicePageInfo($slug: String!, $locales: [Locale!]!) {
        service(where: { slug: $slug }, locales: $locales) {
          id
          slug
          title

          services1 {
            title
            content
            bgColor
            accentColor
          }
          serviceCard2 {
            title
            content
            bgColor
            accentColor
          }
          serviceCard3 {
            title
            content
            bgColor
            accentColor
          }
          serviceCard4 {
            title
            content
            bgColor
            accentColor
          }
        }
      }
    `,
    variables: {
      slug,
      locales,
    },
  });
