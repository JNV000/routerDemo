import Button from "../components/FormButton";
import Nav from "../components/Nav";
import Search from "../components/Search";

export default function Home() {
  return (
    <div className="h-screen w-1/5 bg-slate-200 pl-10">
      <h1>React Router Contacts</h1>
      <div className="flex items-center border-b border-black">
        <Search />
        <Button />
      </div>
      <Nav />
    </div>
  );
}
