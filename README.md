# WEATHER (React Native)

This project is about the weather for today and the weather forecast for five days

![app-screen](https://i.postimg.cc/wH8HczFD/weather.jpg, "app")

## Base dependencies
- `RTK-Query` for data fetching and caching.
- `react-navigation` navigation library.
- `redux-toolkit` for state management.
- `react-redux` for interact with the Redux store.

## Folder structure

- `App.js`: Main component that starts your whole app.
- `assets`: Asset folder to store all images, etc.
- `src`: This folder is the main container of all the code inside your application.
    - `api`: This folder contains the setting RTK-Query.
    - `components`: Folder to store component that you use through your app.
    - `constants`: Folder to store any kind of constant that you have.
    - `enum`: Folder to store enum files.
    - `hooks`: Folder to store hooks files.
    - `store`: Folder to put all redux middlewares and the store.
    - `types`: Folder to store file types.
    - `utils`: Folder to store various auxiliary functions
    - `Main.tsx`: Tab navigation file.