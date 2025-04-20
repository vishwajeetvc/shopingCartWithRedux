import { Outlet } from "react-router";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
