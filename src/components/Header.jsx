
export default function Header() {
    return (
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Question App</h1>
        <div className="space-x-4">
          <a href="/login" className="px-4 py-2 border border-purple-500 text-white rounded">
            Login
          </a>
          <a href="/signup" className="px-4 py-2 border border-orange-500 text-white rounded">
            Sign Up
          </a>
        </div>
      </header>
    );
  }
  