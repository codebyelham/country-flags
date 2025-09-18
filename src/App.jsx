import { Suspense } from "react";
import "./App.css";
import Countries from "./componenets/countries/Countries";

function App() {
  const countriesPromise = fetch(
    "https://openapi.programming-hero.com/api/all"
  ).then((res) => res.json());
  return (
    <>
      <Suspense fallback={<p>Nadir on the goo...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
