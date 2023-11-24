const useGreet = (name, place) => {
  const title = () => {
    return `Chief & Lolo ${name} Ph.D`;
  };

  const welcome = () => {
    return `Hello Sir ${name}. We're happy to have here at ${place}`;
  };

  return [title, welcome];
};

export default useGreet;
