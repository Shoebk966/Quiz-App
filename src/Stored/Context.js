import { createContext, useContext , useState} from "react";

const AppContext = createContext();


export const AppProvider = ({children}) => {
    const [startGame , setStartGame] = useState('startgame')
    const [score , setScore] = useState(0)
    const [name , setName] = useState('');


return(

    <AppContext.Provider value={{

    startGame , 
    setStartGame,
    score ,
     setScore,
     name ,
      setName,
    }}>
        {children}
    </AppContext.Provider>
)


}


export const useGlobalContext = () => {
    return useContext(AppContext)
}