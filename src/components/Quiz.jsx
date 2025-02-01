import React, { useEffect , useState, useContext} from 'react'
import axios from 'axios'

import { AuthContext } from '../context/AuthContext';

const Quiz = () => {
 const [questions, setQuestions]=useState([]);
 const [loading, setLoading]= useState(true);
 const [error, setError]=useState(null);
 const {user} = useContext(AuthContext);

   useEffect(()=>{
    const fetchQuestions = async()=>{
      try{
        const response = await axios.get('https://maple-flying-lavender.glitch.me/questions')
        setQuestions(response.data);
      }
      catch(err){
        setError(err);
      }
    };
    fetchQuestions();
    setLoading(false);
    
   })
   const handleSubmit= async()=>{
    try{
      await axios.post(('https://maple-flying-lavender.glitch.me/submit'),
      {userId:user.id, answer:questions});

    }catch(err){
      console.err("failed")
    }
   }

  return (
    <div>
      <h2>Take the Quiz</h2>
      {loading ? (<p>loading questions</p>):
      (
        <div>
           {
            questions.map((question, index)=>(
          <QuizItem key= {index} question={questions} index={index}/>


            )) }
            <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  )
}

export default Quiz;
