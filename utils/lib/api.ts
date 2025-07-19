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

export const getHomePageInfo = (slug: string, locales: string[]) =>
  client.query({
    query: gql`
      query getHomePageInfo($slug: String!, $locales: [Locale!]!) {
        homepage(where: { slug: $slug }, locales: $locales) {
          id
          slug
          title
          pageType
          contentSection1(locales: $locales) {
            title
            subtitle
            description
            id
          }
          sectionHero(locales: $locales) {
            title
            subtitle
            description
          }
          section1(locales: $locales) {
            title
            subtitle
            description
          }
          services(locales: $locales) {
            title
            content
            bgColor
            accentColor
          }
          trustedClients(locales: es) {
            id
            url
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
          section2(locales: $locales) {
            title
            subtitle
            description
          }
          projects(locales: $locales) {
            title
            description
            url
            videoId
          }
          section3(locales: $locales) {
            title
            subtitle
            description
          }
        }
      }
    `,
    variables: {
      slug,
      locales,
    },
  });

export const getServicePageInfo = (slug: string, locales: string[]) =>
  client.query({
    query: gql`
      query getServicePageInfo($slug: String!, $locales: [Locale!]!) {
        service(where: { slug: $slug }, locales: $locales) {
          id
          slug
          title
          heroSection(locales: $locales) {
            title
            subtitle
            description
          }
          services1(locales: $locales) {
            title
            content
            bgColor
            accentColor
          }
          serviceCard2(locales: $locales) {
            title
            content
            bgColor
            accentColor
          }
          serviceCard3(locales: $locales) {
            title
            content
            bgColor
            accentColor
          }
          serviceCard4(locales: $locales) {
            title
            content
            bgColor
            accentColor
          }
          section1(locales: $locales) {
            title
            subtitle
            description
          }
          testimonial(locales: $locales) {
            testimonialText
            autorName
            autorRole
            projectName
            image(locales: es) {
              url
            }
          }
          content
        }
      }
    `,
    variables: {
      slug,
      locales,
    },
  });
