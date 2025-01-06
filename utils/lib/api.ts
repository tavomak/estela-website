import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_CMS_API_URL,
  cache: new InMemoryCache(),
});

export const getServices = () =>
  client.query({
    query: gql`
      query Services {
        services {
          id
          slug
          description
          title
          cardImage {
            url
            id
          }
        }
      }
    `,
  });

export const getServiceBySlug = (slug: string) =>
  client.query({
    query: gql`
      query Service($slug: String!) {
        service(where: { slug: $slug }) {
          description
          heroImage {
            url
          }
          heroImageMobile {
            url
          }
          review {
            markdown
          }
          title
          serviceContent {
            id
            color
            title
            image {
              url
            }
            content {
              text
            }
          }
          cardImage {
            url
          }
          serviceFaq {
            text
            title
          }
          serviceProcess {
            description
            subtitle
          }
        }
      }
    `,
    variables: {
      slug,
    },
  });

export const getAllCategories = () =>
  client.query({
    query: gql`
      query getAllPosts {
        categories {
          id
          slug
          name
        }
      }
    `,
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

export const getPostAndMorePosts = (slug: string) =>
  client.query({
    query: gql`
      query Articles($slug: String!) {
        post(where: { slug: $slug }) {
          id
          content {
            html
          }
          title
          slug
          video
          coverImage {
            url
          }
        }
        morePosts: posts(
          orderBy: createdAt_DESC
          first: 3
          where: { NOT: { slug: $slug } }
        ) {
          id
          title
          slug
          coverImage {
            url
          }
        }
      }
    `,
    variables: {
      slug,
    },
  });

export const getPageBySlug = (slug: string, locales: any) =>
  client.query({
    query: gql`
      query getPageBySlug($slug: String!, $locales: [Locale!]!) {
        page(where: { slug: $slug }, locales: $locales) {
          id
          slug
          title
          pageType
          locale
          subtitle
        }
      }
    `,
    variables: {
      slug,
      locales,
    },
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
          testimonials {
            testimonialText
            highlightedQuote
            autorName
            autorRole
            projectName
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

export const getTeamMembers = () =>
  client.query({
    query: gql`
      query Teams {
        teams {
          team {
            description
            email
            id
            linkedinUrl
            name
            photo {
              url
            }
            position
          }
          directors {
            id
            linkedinUrl
            name
            photo {
              url
            }
            position
          }
          managers {
            description
            email
            id
            linkedinUrl
            name
            photo {
              url
            }
            position
          }
        }
      }
    `,
  });
