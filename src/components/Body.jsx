import React,{useEffect, useState} from 'react'
import ResCard from './ResCard'
import Shimmer from './ShimmerUI';


function Body() {
  const[listRes,setListRes]=useState([]);
  const[search,setSearch]=useState([]);

  const filteredlist=()=>{
   const filterRes= listRes.filter((res)=>{
         return res.info.avgRating > 4
    })
    console.log(filterRes)
    setListRes(filterRes)
  }

  // const handleSearch=(e)=>{
    
  //      const searchList=listRes.filter((res)=>{
  //       return res.info.name.toLowerCase().includes(search.toLowerCase())
  //      })
  //      setListRes(searchList)
  //      console.log(listRes)
  //      console.log("searchhhh",search)
     
  //   }

  //   const handleSearchChange=(e)=>{
  //      setSearch(e.target.value)
  //      console.log(search)
  //   }
  
  useEffect(()=>{
   fetchData()
  },[])
const fetchData=async ()=>{
  const data= await fetch(
"/api/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
)
   
  const json= await data.json()

  console.log(json.data.cards[1].card.card.gridElements.infoWithStyle);
  const restaurants=  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  setListRes(restaurants )
  
  }
  // if(listRes.length===0){
  //   return <h1 className='text-xl'>Loading....</h1>
  // }

 return listRes.length===0 ?  (<Shimmer/>):(
    <>
    
      <div>
        {/* <input className="border p-1 m-2" placeholder="Search"
        value={search}
        onChange={handleSearchChange}
        ></input>
        <button onClick={handleSearch}>search</button> */}

        <button className="border shadow-lg bg-gray-50  p-1 m-2 rounded-lg cursor-pointer" onClick={filteredlist}>
          Top Rated
        </button>
      </div>
      <div className="flex flex-wrap items-stretch  justify-center">
        {listRes.map((res,idx) => {
          return <ResCard key={res.info.id} resList={res} />;
        })}
      </div>
    </>
  );
}

export default Body
