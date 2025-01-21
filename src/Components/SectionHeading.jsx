
const SectionHeading = ({title, heading}) => {
  return (
    <div className="w-64 mx-auto text-center mt-5">
    <h4 className="text-orange-400">---{title}---</h4>
    <hr/>
    <h1 className="font-bold text-2xl my-4">{heading}</h1>
    <hr className="mb-10"/>
    </div>
  );
};

export default SectionHeading;