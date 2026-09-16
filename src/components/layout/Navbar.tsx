export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <span className="font-bold text-lg">MyApp</span>
      <ul className="flex gap-4 text-sm text-gray-600">
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
