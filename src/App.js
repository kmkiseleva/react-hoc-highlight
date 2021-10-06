import { useState } from "react";
import List from "./components/List";
import fakeData from "./fakeData";

export default function App() {
  const [list, setList] = useState(fakeData);

  return <List list={list} />;
}
