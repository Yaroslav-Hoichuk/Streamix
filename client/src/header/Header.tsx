export function Header() {
  return (
    <header className="grid  grid-cols-4 grid-rows-2 grid- p-1.5 justify-between">
        <div className="col-span-2 row-span-1 text-3xl text-amber-50">
            <span className="font-semibold">Stream</span>
            <span className="text-red-700 font-semibold">ix</span>
        </div>
        <input
            type="text"
            placeholder="Search..."
            className="text-amber-50 outline-none row-2 col-span-3"
        />
        <div id="dropdown-list" className="inline-block group relative col-start-4">
            <span className="">Profile</span>
            <div id="dropDown-content" className="hidden group-hover:block absolute bg-blue-300 min-w-24 z-50">
                <button className="block w-full text-left pl-1 hover:bg-blue-500">Profile</button>
                <button className="block w-full text-left pl-1 hover:bg-blue-500">Settings</button>
                <button className="block w-full text-left pl-1 hover:bg-blue-500">Exit</button>
            </div>
        </div>
    </header>
  );
}
