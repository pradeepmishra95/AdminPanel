import React, { useState } from 'react';
import '../src/AddFoodData.css';
import {db,storage} from './Firebase/FirebaseConfig';
import {addDoc, collection} from 'firebase/firestore';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';


const AddFoodData = () => {
    const [foodName, setFoodname] = useState("")
    const [foodPrice, setFoodPrice] = useState("")
    const [foodImage, setFoodImage] = useState(null)
    const [foodCategory, setFoodCategory] = useState("")
    const [foodDescription , setFoodDescription] = useState("")
   
 
    const [foodImageUrl, setFoodImageUrl] = useState("")

    const [foodType, setFoodType] = useState("")
    const [mealType, setMealType] =  useState("")
    const [foodAddon ,setFoodAddon]=  useState("")
    const [foodAddonPrice, setFoodAddonPrice] = useState("")

    const [restaurantName, setRestaurantName ] = useState("")
    const [restaurantPhone, setRestaurantPhone] = useState("")
    const [restaurantEmail, setRestaurantEmail] = useState("")
    const [restaurantAddressBuilding, setRestaurantAddressBuilding] = useState("")
    const [restaurantAddressStreet, setRestaurantAddressStreet] = useState("")
    const [restaurantAddressCity, setRestaurantAddressCity] = useState("")
    const [restaurantAddressPincode, setRestaurantAddressPincode] = useState("")
    

    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!foodImage) {
        alert('Please select an image');
        return;
      }

      else{
        const imageRef = ref(storage, `FoodImages/${foodImage.name}`)
        uploadBytes(imageRef, foodImage)
        .then(() => {
        alert("Image Uploaded Succesfully")
        getDownloadURL(imageRef)
        .then((url) => {
      console.log(url)
      setFoodImageUrl(url)
      const foodData = {
        foodName,
        foodPrice,
        foodImageUrl : url,
        foodCategory,
        foodDescription,
        restaurantName,
       foodType,
       mealType,
       foodAddon,
       foodAddonPrice,
       restaurantEmail,
       restaurantAddressBuilding,
       restaurantAddressStreet,
       restaurantAddressCity,
       restaurantAddressPincode,
        restaurantPhone,
      };

      if (foodImage == null){
        alert('Please Select an Image')
        return
      }
      console.log(foodData);
      try{
        const docRef = addDoc(collection(db, "FoodData"), foodData);
        alert("Data added successfully", docRef.id);
      }
      catch(error){
     alert("Error adding document:", error)
   }

        })
         })
         .catch((error) =>{
          alert(error.message)
         })
      }

    }
  
  return (
    <div className='form-outer'>
        <h1 style={{alignSelf:'center'}}>Add Food Data</h1>
        <form className='form-inner'>
            <label>Food Name</label>
            <input type='text' name="food-name" 
            onChange={(e)=> {setFoodname(e.target.value)}}
            />
            <br />

            <label>Food Description</label>
            <input type='text' name="food-description" 
              onChange={(e)=> { setFoodDescription(e.target.value)}}
            />
            <br />

             <div className='form-row'>
               <div className='form-col'>
               <label>Food Price</label>
               <input type='number' name='food-price' onChange={(e) => {setFoodPrice(e.target.value)}} />
                 </div>
            <div className='form-col'> 
            <label>Food Type</label>
            <select name='food-type' onChange={(e)=> {setFoodType(e.target.value)}}>
            <option value="null">Select Food Type</option>
            <option value="veg">Veg</option>
            <option value="non-veg">Non-Veg</option>
            </select>
        </div>
  </div> 

  <div className='form-row'>
               <div className='form-col'>
               <label>Food Category</label>
            <select name='food-category' onChange={(e)=> {setFoodCategory(e.target.value)}}>
            <option value="null">Select Food Category</option>
            <option value="indian">Indian</option>
            <option value="italian">Italian</option>
            <option value="chinese">Chinese</option>
            <option value="mexican">Mexican</option>
            <option value="american">American</option>
</select>
        </div>

        <div className='form-col'>
               <label>Meal Type</label>
            <select name='meal-type' onChange={(e)=> {setMealType(e.target.value)}}>
            <option value="null">Select Meal type</option>
            <option value="dinner">Dinner</option>
            <option value="starters">Starters</option>
            <option value="breakfasts">Breakfasts</option>
            <option value="liquid">Liquid</option>
</select>
        </div>
  </div> 
<br/>
  <div className='form-row'>
               <div className='form-col'>
               <label>Add On Name</label>
               <input type='text' name='food_addon'  
               onChange={(e) => (setFoodAddon(e.target.value))}
               />
        </div>

        <div className='form-col'>
               <label>Add On Price</label>
               <input type='text' name='food_addon_price'  
               onChange={(e) => (setFoodAddonPrice(e.target.value))}
               />
        </div>
</div>

            <br />

            <label>Food Image</label>
            <input type='file' name="food-image"
              onChange={(e)=> {setFoodImage(e.target.files[0])}}
            />
            <br />

            <label>Restaurant Name</label>
            <input type='text' name="restaurant-name"
              onChange={(e)=> {setRestaurantName(e.target.value)}}
            />
            <br />

            <div className='form-row'>
               <div className='form-col'>
               <label>Restaurant building name /number</label>
               <input type='text' name='restaurant_address_building'  
               onChange={(e) => (setRestaurantAddressBuilding(e.target.value))}
               />
        </div>

        <div className='form-col'>
               <label>Restaurant Street/ Area Name </label>
               <input type='text' name='frestaurant_address_street'  
               onChange={(e) => (setRestaurantAddressStreet(e.target.value))}
               />
        </div>

</div>

<br />

<div className='form-row'>
               <div className='form-col'>
               <label>Restaurant City</label>
               <input type='text' name='restaurant_address_building'  
               onChange={(e) => (setRestaurantAddressCity(e.target.value))}
               />
        </div>

        <div className='form-col'>
               <label>Restaurant Pin-Code </label>
               <input type='text' name='frestaurant_address_street'  
               onChange={(e) => (setRestaurantAddressPincode(e.target.value))}
               />
        </div>

</div>
<br />
<div className='form-row'>
               <div className='form-col'>
               <label>Restaurant Phone</label>
               <input type='number' name='restaurant_phone'  
               onChange={(e) => (setRestaurantPhone(e.target.value))}
               />
        </div>

        <div className='form-col'>
               <label>Restaurant Email </label>
               <input type='text' name='restaurant_email'  
               onChange={(e) => (setRestaurantEmail(e.target.value))}
               />
        </div>

</div>
<br/>

          <button onClick={handleSubmit} style={{backgroundColor:'green'}}>Submit</button>
        
        </form>
     </div>
  )
}

export default AddFoodData