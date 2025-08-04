

export const SectionTitle = ({ leftText, rightText, className = "", }) => {
  return (
    <div
      className={`font-minima leading-9 sm:leading-16 w-full flex flex-col lg:flex-row justify-between text-[#333333] text-[45px] sm:text-[80px] lg:text-[80px] xl:text-[100px] 2xl:text-[100px] px-3 sm:px-10 text-wrap ${className}`}
    >
      <p className="w-full text-start">{leftText}</p>
      <p className="w-full text-end">{rightText}</p>
    </div>
  );
};
