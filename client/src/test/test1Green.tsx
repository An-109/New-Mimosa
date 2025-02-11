export default function RestaurantUI() {
    return (
        <div className="bg-[#E7CBA9] min-h-screen flex flex-col justify-center items-center text-[#485941] font-serif">
      {/* Navbar */}
      <nav className="bg-[#475840] text-[#FFD54F] p-6 w-full flex justify-between items-center shadow-lg rounded-b-xl fixed top-0 left-0 right-0">
        <h1 className="text-2xl font-bold tracking-wider">Small Vietnamese Restaurant</h1>
        <ul className="flex space-x-8 text-lg">
          <li><a href="#menu" className="hover:text-[#D32F2F] transition-colors">Menu</a></li>
          <li><a href="#about" className="hover:text-[#D32F2F] transition-colors">About</a></li>
          <li><a href="#contact" className="hover:text-[#D32F2F] transition-colors">Contact</a></li>
        </ul>
      </nav>
      
      {/* Main Content */}
      <main className="flex flex-col items-center text-center py-40 w-full">
        <h2 className="text-5xl font-serif text-[#FFD54F] tracking-wide">Experience Authentic Vietnamese Cuisine</h2>
        <p className="mt-6 max-w-2xl text-lg">Delicious flavors, warm ambiance, and a taste of tradition crafted with love.</p>
        <button className="mt-8 bg-[#D32F2F] text-white py-3 px-8 rounded-full text-lg shadow-lg hover:bg-[#B71C1C] transition-all">
          Browse Menu
        </button>
      </main>
      
      {/* Footer */}
      <footer className="bg-[#1B5E20] text-[#FFD54F] text-center py-6 w-full rounded-t-xl fixed bottom-0 left-0 right-0">
        <p>&copy; 2025 Small Vietnamese Restaurant. All rights reserved.</p>
      </footer>
    </div>
    );
  }