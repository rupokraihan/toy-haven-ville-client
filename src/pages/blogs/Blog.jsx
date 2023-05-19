import React, { useRef } from "react";

const Blog = () => {
  const blogRef = useRef();

  return (
    <div ref={blogRef} className="my-container">
      <div className="bg-[#FFFEEB]  p-6 rounded-xl mb-8">
        <h1 className="text-3xl font-bold mb-4">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h1>
        <p className="text-xl font-medium">
          Answer: An access token and a refresh token are both used in
          authentication and authorization protocols, typically in the context
          of web applications and APIs.Access tokens and refresh tokens are used
          in the OAuth 2.0 authorization framework. OAuth 2.0 is a popular
          authorization framework that allows third-party applications to access
          protected resources on behalf of a user. <br />
          Access tokens and refresh tokens should be stored securely on the
          client-side. They should not be stored in a way that is accessible to
          the user, as this could allow the user to access protected resources
          without authorization. Access tokens and refresh tokens should be
          stored in a secure location, such as a database or a file system.
          <br />
          An access token is a credential that is used to access protected
          resources, such as API endpoints, on behalf of an authenticated user.
          It is usually a string of characters that represents the user's
          authorization and permissions. Access tokens are time-limited and have
          a shorter lifespan compared to refresh tokens.
          <br />
          When the application needs to access a protected resource, it sends
          the access token to the authorization server. The authorization server
          validates the access token and returns the requested resource. <br />
          A refresh token is a credential that is used to obtain a new access
          token after the previous one expires. It is typically issued alongside
          the access token during the authentication process. Refresh tokens
          have a longer lifespan and are used to maintain a persistent session
          and avoid the need for the user to reauthenticate frequently.
          <br />
          When the access token expires, the application can use the refresh
          token to obtain a new access token. The authorization server validates
          the refresh token and returns a new access token. <br /> <br />
          Access tokens and refresh tokens should be stored securely on the
          client-side. The access token should be stored in a secure location,
          such as a password manager. The refresh token should be stored in a
          secure location, such as a hardware security module. <br /> <br />
          It's important to note that token storage and security practices can
          vary depending on the specific requirements of your application and
          the security measures provided by the authentication framework or
          libraries you're using. Always follow best practices and consult
          relevant security guidelines when implementing token-based
          authentication and authorization.
        </p>
      </div>
      <div className="bg-[#FFFEEB]  p-6 rounded-xl mb-8">
        <h1 className="text-3xl font-bold mb-4">
          Compare SQL and NoSQL databases?
        </h1>
        <p className="text-xl font-medium">
          Answer: SQL (Structured Query Language) and NoSQL (Not only SQL)
          databases are two different types of databases that store and retrieve
          data. SQL databases are relational databases, which means that data is
          stored in tables with rows and columns. NoSQL databases are
          non-relational databases, which means that data can be stored in a
          variety of ways, such as key-value pairs, documents, or graphs. <br />
          SQL databases are the most common type of database. They are used by a
          wide variety of applications, including web applications, e-commerce
          applications, and enterprise applications. SQL databases are known for
          their reliability, performance, and scalability. <br />
          NoSQL databases are a newer type of database that are becoming
          increasingly popular. They are designed to store and retrieve
          unstructured data, which is becoming increasingly common. NoSQL
          databases are known for their flexibility and scalability. <br />
          <br />
          Here's a comparison between SQL and NoSQL databases: <br /> <br />
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              {/* head */}
              <thead className="">
                <tr>
                  <th></th>

                  <th className="text-xl">SQL Database</th>
                  <th className="text-xl">NoSQL Database</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>

                  <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                  <td>Non-relational or distributed database system.</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>

                  <td>
                    These databases have fixed or static or predefined schema{" "}
                  </td>
                  <td>They have a dynamic schema</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>

                  <td>
                    These databases are not suited for hierarchical data
                    storage.
                  </td>
                  <td>
                    These databases are best suited for hierarchical data
                    storage.
                  </td>
                </tr>
                {/* row 4 */}
                <tr>
                  <th>4</th>

                  <td>Vertically Scalable</td>
                  <td>Horizontally scalable</td>
                </tr>
                {/* row 5 */}
                <tr>
                  <th>5</th>

                  <td>
                    Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server, etc
                  </td>
                  <td>
                    Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra, etc
                  </td>
                </tr>
              </tbody>
            </table>
          </div> <br /><br />
          It's worth noting that the lines between SQL and NoSQL databases have
          become more blurred over time, as many SQL databases now offer support
          for JSON data and provide features inspired by NoSQL databases, while
          some NoSQL databases have incorporated SQL-like querying capabilities.
        </p>
      </div>
      <div className="bg-[#FFFEEB]  p-6 rounded-xl mb-8">
        <h1 className="text-3xl font-bold mb-4">
          What is express js? What is Nest JS?
        </h1>
        <p className="text-xl font-medium">Answer:</p>
      </div>
      <div className="bg-[#FFFEEB]  p-6 rounded-xl mb-8">
        <h1 className="text-3xl font-bold mb-4">
          What is MongoDB aggregate and how does it work?
        </h1>
        <p className="text-xl font-medium">Answer:</p>
      </div>
    </div>
  );
};

export default Blog;
