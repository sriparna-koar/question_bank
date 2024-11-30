
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex flex-grow items-center justify-center">
        {children}
      </main>
    </div>
  );
}
