const Footer = () => {
  return (
    <>
      <div className="mt-20 pb-20 px-5 max-w-[976px] mx-auto">
        <h1 className="font-playfair mb-10 text-lg">Contact me</h1>
        <div className="flex flex-col gap-7">
          <p className="text-gray-500 text-lg">
            Have a question about my work? Want to work together? Don't hesitate
            to reach out!
          </p>
          <p className="text-gray-500 text-lg">
            Email me at <span className="underline">hello@samsonzhang.com</span>
            , or message me on Twitter{" "}
            <span className="underline">@wwsalmon</span>.
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
