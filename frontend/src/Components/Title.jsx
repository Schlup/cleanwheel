const Title = ({ title, subtitle }) => {
  return (
    <div className="w-full h-[232px] bg-c11 align-middle px-100px py-[60px]">
      <p className="font-roboto text-c5 text-2-sl uppercase">{title}</p>
      <p className="font-poppins text-w text-1-xxl">
        {subtitle}
        <span className="text-p1">.</span>
      </p>
    </div>
  );
};

export default Title;
