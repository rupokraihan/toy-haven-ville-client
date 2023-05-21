import { useEffect } from "react"

const useTabTitle = title => {
  useEffect (() => {
    document.title = `toyHaven | ${title}`;
    
  },[title])
}

export default useTabTitle;