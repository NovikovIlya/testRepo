type propsTestComp = {
  count: number;
};

const TestComp = ({ count }: propsTestComp) => {
  return (
    <>
      <div>count: {count}</div>
    </>
  );
};

export default TestComp;
