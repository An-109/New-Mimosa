
  
  const Test = () => {
    return (
      <div className="w-full">
        {/* Navbar */}
        <nav className="bg-[#602F6B] text-[#F4E3C1] p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Restaurant Name</h1>
          <ul className="flex space-x-6">
            <li className="hover:text-[#C49A6C] cursor-pointer">About</li>
            <li className="hover:text-[#C49A6C] cursor-pointer">Menu</li>
            <li className="hover:text-[#C49A6C] cursor-pointer">Contact</li>
          </ul>
        </nav>
  
        {/* Hero Section */}
        <header className="bg-[#F4E3C1] text-center py-20">
          <h2 className="text-4xl text-[#602F6B] font-semibold">Welcome to Our Restaurant</h2>
          <p className="text-lg text-[#2E2E2E] mt-4">Experience timeless flavors in a modern setting.</p>
          <button className="mt-6 bg-[#C49A6C] text-[#2E2E2E] px-6 py-2 rounded-xl shadow-lg hover:bg-[#7D3C36] hover:text-[#F4E3C1]">
            View Menu
          </button>
        </header>
  
        {/* About Section */}
        <section className="bg-[#7D3C36] text-[#F4E3C1] p-10 text-center">
          <h3 className="text-3xl font-semibold">About Us</h3>
          <p className="mt-4">Bringing authentic Vietnamese cuisine with a touch of elegance.</p>
        </section>
  
        {/* Menu Section */}
        <section className="bg-[#F4E3C1] text-center p-10">
          <h3 className="text-3xl text-[#602F6B] font-semibold">Our Menu</h3>
          <div className="mt-6 space-y-4">
            <div className="text-[#2E2E2E]">Pho Bo - <span className="text-[#C49A6C]">$12.99</span></div>
            <div className="text-[#2E2E2E]">Banh Mi - <span className="text-[#C49A6C]">$6.99</span></div>
            <div className="text-[#2E2E2E]">Spring Rolls - <span className="text-[#C49A6C]">$5.99</span></div>
          </div>
        </section>
  
        {/* Contact Section */}
        <section className="bg-[#602F6B] text-[#F4E3C1] p-10 text-center">
          <h3 className="text-3xl font-semibold">Contact Us</h3>
          <p className="mt-4">123 Main Street, City, State</p>
          <p className="mt-2">Phone: (123) 456-7890</p>
        </section>
  
        {/* Footer */}
        <footer className="bg-[#2E2E2E] text-[#F4E3C1] text-center p-4">
          <p>&copy; 2025 Restaurant Name. All Rights Reserved.</p>
        </footer>
      </div>
    );
  };
  
  export default Test;
