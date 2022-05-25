const TitleWrapper = ({ children }) => {
  return (
    <div className="text-center">
      <h3 className="mx-auto mb-16 flex w-fit justify-center whitespace-nowrap rounded bg-slate-100 p-1 px-2 pt-2 text-center align-middle text-xl font-extrabold text-red-600 shadow-md shadow-red-300">
        {children}
      </h3>
    </div>
  );
};

export default TitleWrapper;
