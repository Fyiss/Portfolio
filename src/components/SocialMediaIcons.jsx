const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/darshith-t-n-71467b253/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={require("../assets/linkedin.png")} />
      </a>
      
      
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img  src={require("../assets/instagram.png")} alt="instagram-link"/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
