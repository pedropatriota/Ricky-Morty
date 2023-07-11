# Welcome to Appspace React FE Challenge


### Decisions:

**Pattern**
- For this project, I decided to use the Headless UI Pattern, where I can decouple logic from the UI. With this in mind, I created custom hooks for both pages, where all the dependencies were injected into the components, increasing testability, flexibility, reusability potential, and ability to improve the codebase.
---

**Fetch requests**

For this project, I've used two endpoints:
- https://rickandmortyapi.com/api/character (Home page)
- https://rickandmortyapi.com/api/character/:id (Details page)
- https://rickandmortyapi.com/api/location/:id (Details page)
- https://rickandmortyapi.com/api/epsideo/:id (Details page)

I choose react-query to handle these requests. I created custom hooks, and whole logic regarding filtering and sorting ware developed using the select property provided by react query.
For the Home page I used useInfiniteQuery, where while the window was scrolling down, the next page was fetched.
---

**Testing**

- Both unit and integrating tests were created using the libraries Jest and React-Testing-Library.
---

**Style**

- The whole project was styled using the styled-components library.
---

**Router**

- For the routes and navigation it was user React-router-dom v6.
---

## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm test`

### `npm run build`


