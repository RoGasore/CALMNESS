const Footer = () => {
  return (
    <footer className="bg-secondary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-secondary-300">
            © {new Date().getFullYear()} Calmness Trading. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;