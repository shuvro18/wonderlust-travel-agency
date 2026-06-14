export const getDestination = async () => {
  const res = await fetch("http://localhost:5000/destination");
  const data = await res.json();
  return data;
};

export const getDestinationId = async (id) =>{
    const res = await fetch(`http://localhost:5000/destination/${id}`);
    return await res.json();
}