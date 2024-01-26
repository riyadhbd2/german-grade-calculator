import { useState } from "react";

const Value = () => {
  const [maximum, setMaximum] = useState("");
  const [minimum, setMinimum] = useState("");
  const [result, setResult] = useState("");
  const [final, setFinal] = useState("");

  // console.log(newFinal);

  const handleSubmit = () => {
    const result1 = parseFloat(maximum) - parseFloat(result);
    const result2 = parseFloat(maximum) - parseFloat(minimum);
    const result3 = result1 / result2;
    const result4 = result3 * 3;
    const result5 = result4 + 1;
    setFinal(result5.toFixed(2));
  };

  //   (Nmax – Nd / Nmax – Nmin)*3 + 1

  return (
    <div className="mt-12 text-center">

      <h1 className="text-2xl font-bold text-purple-600">
        German Grade Calculator
      </h1>
      <form className="mt-10">
        <label>
          <h1>Maximum grade of your university:</h1>
          <input
            className="border border-lime-500 "
            type="text"
            value={maximum}
            onChange={(e) => setMaximum(e.target.value)}
          />
        </label>
        <br />
        <label>
        Minimum grade of your university:
          <br />
          <input
            className="border border-lime-500 "
            type="text"
            value={minimum}
            onChange={(e) => setMinimum(e.target.value)}
          />
        </label>
        <br />
        <label>
          Enter your result from university:
          <br />
          <input
            className="border border-lime-500 "
            type="text"
            value={result}
            onChange={(e) => setResult(e.target.value)}
          />
        </label>
      </form>
      <br />
      <div>
        <h1>Your result grade in german system is: <span className="bg-blue-400 p-1 text-white rounded-md">{final}</span></h1>
      </div>
      <br />
      <button
        onClick={handleSubmit}
        className="border rounded-lg bg-orange-400 p-1 text-white"
      >
        Convert
      </button>
    </div>
  );
};

export default Value;
