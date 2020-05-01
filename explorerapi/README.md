# Explorer API
Spring boot application that loads a simple harry potter character data set into an H2 database and then exposes the information using GraphQL

To build this application you need jdk 11

Use maven to build and run the spring boot application.

###Install dependencies
```
    mvn install
```

###Build
```
    mvn compile
```

###Run
```
    mvn spring-boot:run
```

This application runs on port 8080 by default so make sure 8080 is available.
Once the application is up and running navigate to http://localhost:8080/graphiql
You should see the graphiql editor in your browser.

Try the query
```
query {
    characters {
        id
        name
        bio
     }
}
```
You should get the list of Harry Potter characters in the result pane.
