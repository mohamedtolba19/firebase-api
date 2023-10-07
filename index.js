const express = require('express');
const { addDoc, getDocs , doc,updateDoc , deleteDoc } = require('firebase/firestore');
const User = require('./config');

const app = express();
const port = 4000;

app.use(express.json());
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.get('/', async(req, res) => {

  
      try{
        const snapshot =  await getDocs(User) ;
        let list =   snapshot.docs.map((doc)=>{return {id:doc.id,...doc.data()}})
        res.json({users:list})
      }
      catch (error) {
        console.error("Error adding document: ", error);
        res.status(500).send("Error adding user");
      }
    
  
   

});



app.post("/add", async (req, res) => {
    const data = req.body;
    
    try {
      const docRef = await addDoc(User, data);
      console.log("Document ID: ", docRef.id);
      res.send({msg:"added"});
    } catch (error) {
      console.error("Error adding document: ", error);
      res.status(500).send("Error adding user");
    }
  });

  app.put("/update" , async(req,res)=>{
 try{
  const id = req.header("id") ; 
  const newData = req.body ;
  const userRef = await doc(User, id);
  console.log(userRef)
  
   await updateDoc(userRef,newData) ;
   res.json({msg:"updated"})
 }
 catch (error) {
  console.error("Error updating document: ", error);
  res.status(500).send("Error updating user");
}
    

 
  })

  app.delete("/delete" , async(req,res)=>{
    try{
     const id = req.header("id") ; 
     const userRef = await doc(User, id);
  
     
      await deleteDoc(userRef) ;
      res.json({msg:"deleted"})
    }
    catch (error) {
     console.error("Error deleting document: ", error);
     res.status(500).send("Error deleteing user");
   }
       
   
    
     })