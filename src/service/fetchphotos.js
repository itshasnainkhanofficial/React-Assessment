export const getData = async (URL) => {
    
  
    const response = await fetch(URL);

      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }

      return  response.json();
  
  };

  export default getData