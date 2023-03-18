import React from 'react'
import Link from 'next/link';
export default function index({data}) {
  console.log(data);
  return (
    <div>
      {
        data.map(val=>
          <div sx={{ maxWidth: 345 }}>
                <img
                  
                  src={val.path}
                  style={{ objectFit: "contain" }}
                />

                <div>
                  <span gutterBottom variant="h6" component="div">
                    {val.category}
                  </span>
                  <span variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam laboriosam explicabo repellat enim, sint natus!
                    Possimus harum minus doloremque quisquam.
                  </span>
                </div>
                <div>
                  <Link href="">
                    <button variant="contained">View</button>
                  </Link>
                </div>
              </div>
        )
      }
    </div>
  )
}


export async function getStaticProps(){
  const res=await fetch("http://localhost:8000/images");
  const data=await res.json()
  

  return{
    props:{
      data
    }
  }
}
