import React, { useState } from "react";
import {useRouter} from 'next/router'
export default function postimage() {
  const router=useRouter()


  let [formdata, setformdata] = useState({
    name: "",
    category: "",
    description: "",
    path: "",
    rating: "",
  });

  const SetDatas = (e) => {
    const { name, files, value } = e.target;

    // if name is equal to path that it convert into data url
    if (name === "path") {
      const src = URL.createObjectURL(files[0]);
      setformdata({ ...formdata, [name]: src });
    } else {
      setformdata({ ...formdata, [name]: value });
    }
  };

  const PostFormDatas = async (e) => {
    e.preventDefault();
    const { name, category, description, path, rating } = formdata;
    if (
      name!=="" && category!=="" && description!=="" && path!=="" && rating!==""
    ) {
      
      const res = await fetch("http://localhost:8000/postimages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          category,
          description,
          path,
          rating,
        }),
      });
      const data = await res.json();
       alert("data is posted")
       router.redirect("/")
    }else{
      alert("please fill the data")
    }

    
  };
  return (
    <div className="images-form">
      <form method="post">
        <div>
          <label name="">Image Name</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Name.."
            required
            onChange={SetDatas}
          />
        </div>
        <div>
          <label name="">Image category</label>
          <br />
          <input
            type="text"
            name="category"
            placeholder="Category.."
            required
            onChange={SetDatas}
          />
        </div>
        <div>
          <label name="">Image Description</label>
          <br />
          <input
            type="text"
            name="description"
            placeholder="Description.."
            required
            onChange={SetDatas}
          />
        </div>
        <div>
          <label name="">Image Path</label>
          <br />
          <input type="file" name="path" required onChange={SetDatas} />
        </div>
        <div>
          <label name="">Image Rate</label>
          <br />
          <input
            type="number"
            name="rating"
            placeholder="Rate between 1 To 5"
            max={5}
            min={1}
            required
            onChange={SetDatas}
          />
        </div>
        <div>
          <input type="submit" onClick={PostFormDatas} />
        </div>
      </form>
    </div>
  );
}
