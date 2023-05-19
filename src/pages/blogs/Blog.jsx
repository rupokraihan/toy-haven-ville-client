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
          vary depending on the specific requirements of application and
          the security measures provided by the authentication framework or
          libraries using. Always follow best practices and consult
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
          </div>{" "}
          <br />
          <br />
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
        <p className="text-xl font-medium">
          Answer:Express.js and Nest.js are both popular frameworks for building
          web applications with Node.js. Express.js is a lightweight framework
          that provides a minimal set of features, while Nest.js is a more
          opinionated framework that provides a more structured and feature-rich
          environment. <br />
          Express.js is a popular choice for building simple web applications,
          while Nest.js is a better choice for building complex web applications
          with high requirements for scalability and maintainability. <br />
          Express.js is a minimal and flexible web application framework for
          Node.js. It provides a set of features for building web applications
          and APIs. Express.js is known for its simplicity and ease of use,
          making it a popular choice among developers for creating server-side
          applications with JavaScript. It allows to handle routes, manage
          middleware, and handle HTTP requests and responses. Express.js also
          has a vast ecosystem of middleware and plugins that extend its
          functionality. <br /> <br />
          Nest.js, on the other hand, is a framework for building scalable and
          efficient server-side applications. It is built on top of Express.js
          and heavily influenced by Angular's architecture and concepts. Nest.js
          provides a complete development kit for building enterprise-level
          applications, including features such as dependency injection, modular
          architecture, and built-in support for TypeScript. It promotes the use
          of decorators and follows a modular structure, making it easier to
          organize and maintain large codebases. <br />
          Nest.js incorporates many design patterns and principles from Angular,
          such as dependency injection and decorators, making it familiar for
          developers who have experience with Angular. It also offers
          out-of-the-box support for features like validation, authentication,
          and database integration. Nest.js is highly extensible and allows
          to integrate other libraries and tools easily. <br />
          <br />
          In summary, while Express.js is a lightweight and flexible framework
          for building web applications, Nest.js is a more opinionated framework
          that builds on top of Express.js and provides additional features and
          architectural patterns for building scalable and maintainable
          server-side applications.
        </p>
      </div>
      <div className="bg-[#FFFEEB]  p-6 rounded-xl mb-8">
        <h1 className="text-3xl font-bold mb-4">
          What is MongoDB aggregate and how does it work?
        </h1>
        <p className="text-xl font-medium">
          Answer:MongoDB is a database management system that allows store large
          amounts of data in documents that are held within larger structures
          known as collections. Anyone can run queries on collections to
          retrieve a subset of documents matching given conditions, but
          MongoDB’s query mechanism doesn’t allow to group or transform the
          returned data. This means options for performing meaningful data
          analysis with MongoDB’s query mechanism alone are limited. <br />
          As with many other database systems, MongoDB allows to perform a
          variety of aggregation operations. These allow to process data records
          in a variety of ways, such as grouping data, sorting data into a
          specific order, or restructuring returned documents, as well as
          filtering data as one might with a query. <br />
          MongoDB provides aggregation operations through aggregation pipelines
          — a series of operations that process data documents sequentially.
          Filter, sort, group, and transform documents, and then use all these
          features together to form a multi-stage processing pipeline. <br />
          <br />
          Here is a high-level overview of the basic stages commonly used in an
          aggregation pipeline: <br />
          <li>
            $match: This stage filters documents based on specific criteria,
            similar to the find operation. It uses the MongoDB query language to
            match documents that meet certain conditions.
          </li>
          <li>
            $project: This stage allows to shape the documents' structure by
            specifying the fields to include or exclude. It also enables the
            creation of new fields, computed values, or expressions.
          </li>
          <li>
            $sort: This stage sorts the documents based on one or more fields,
            either in ascending or descending order.
          </li>
          <li>
            $limit: This stage restricts the number of documents in the output,
            allowing to retrieve only a subset of the results.
          </li>
          <li>
            $skip: This stage skips a specified number of documents and passes
            the remaining documents to the next stage.
          </li>
          <li>
            $group: This stage groups the documents based on a specified key or
            keys. It allows to perform various aggregations like sum,
            average, count, etc., on the grouped data.
          </li>
          <li>
            $unwind: This stage deconstructs an array field from the input
            documents and generates a separate document for each element of the
            array. This is useful when want to perform operations on
            individual array elements.
          </li>
          <br />
          These are just a few examples of the stages available in the
          aggregation pipeline. MongoDB provides many other stages and operators
          to perform complex data transformations and calculations. <br />
          By combining these stages in a specific order, can perform
          sophisticated data transformations and aggregations in MongoDB. The
          result is a processed set of documents that matches the defined
          aggregation criteria. Aggregation pipelines offer flexibility and
          allow to perform complex data manipulations in a single query,
          eliminating the need for multiple database requests.
        </p>
      </div>
    </div>
  );
};

export default Blog;
