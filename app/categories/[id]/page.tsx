async function getCategoryData( id : string ) {
    const res = await fetch(`http://localhost:9000/category/${id}`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      console.log("Failed to fetch data");
      throw new Error('Failed to fetch data');
      
    }
   
    return res.json();
  }
   
  export default async function Page( { params } ) {
    const data = await getCategoryData( params.id);
   
    return <main></main>;
  }