import { useState } from "react";
import { useEffect } from 'react';
import './SortingVisualization.css';
import sortingAlgo from "../sortingalgos/sortingAlgo";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { InputLabel } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { textAlign } from "@mui/system";


const SortingVisualization = () => {
    const[numbers,setNumbers] = useState([])
    const[speed,setSpeed] = useState(10)
    const[flag,setFlag] = useState(true)
    const[play,setPlay] = useState(true)
    const[pointerEvent,setPointerEvent] = useState(false)
    const RANGE_OF_NUMBERS = 100;
    const PRIMARY_COLOR = "#298F85";
    const SECONDARY_COLOR = "red";


    useEffect(()=>{
        generateNumbers();
        if(numbers.length !== null) {
            setFlag(false)
        }

        console.log("generated")
        setPlay(true)
    },[])

    useEffect(()=> {
        console.log("changing speed",speed)
    },[speed])

    useEffect(()=> {
        console.log("changing point",pointerEvent)
        setPointerEvent(false)
    },[flag])

    const generateNumbers = () => {
        const array = [];
        for(let i = 0; i < RANGE_OF_NUMBERS; i++) {
            array.push(randomIntFromInterval(5,600));
        }
  
        setNumbers(array)
      
        
    }

    const reset = () => {
        window.location.reload();
    }

    const updateNumbers = (numbers) => {
        setNumbers(numbers)
    }

    const randomIntFromInterval= (min,max) => {
        return Math.floor(Math.random() * (max-min + 1) + min)
    }

    if(flag) {
        return (
            <div>
                "loading.."
            </div>
        )
    }


    const bubbleSort = () => {
        const animations = sortingAlgo.getBubbleSortAnimation(numbers)
        console.log(pointerEvent)
        let count = 0;
    
    if(play) {
        for(let i = 0; i < animations.length; i++) {
            setPointerEvent(true)
            const isColorChange = animations[i][0] === "compare1" ||
            animations[i][0] === "compare2";
            const arrayBars = document.getElementsByClassName("array-bar")
            if(isColorChange) {
                const color = animations[i][0] === "compare1" ? SECONDARY_COLOR : PRIMARY_COLOR
                const [,barOneIdx,barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(()=> {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i*speed)
             } else {
                const[,barIdx,newHeight] = animations[i]
                if(barIdx === -1) continue;
                const barStyle = arrayBars[barIdx].style;
                setTimeout(()=>{
                    barStyle.height= `${newHeight}px`
                },i*speed)
            }
            
       }
    }


       
 


      

       //
}

    const insertionSort = () => {
        const animations = sortingAlgo.getInsertionSortAnimation(numbers)
        for(let i = 0; i < animations.length; i++) {
            const isColorChange = animations[i][0] === "compare1" ||
            animations[i][0] === "compare2";

            const arrayBars = document.getElementsByClassName("array-bar")
            if(isColorChange) {
                const color = animations[i][0] === "compare1" ? SECONDARY_COLOR : PRIMARY_COLOR
                const [,barOneIdx,barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(()=> {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i*speed)
             } else {
                const[,barIdx,newHeight] = animations[i]
                if(barIdx === -1) continue;
                const barStyle = arrayBars[barIdx].style;
                setTimeout(()=>{
                    barStyle.height= `${newHeight}px`
                },i*speed)
            }
       }
    }

    const quickSort = () => {
        const animations = sortingAlgo.getQuickSortAnimations(numbers)
        for(let i = 0; i < animations.length; i++) {
            const isColorChange = animations[i][0] === "compare1" ||
            animations[i][0] === "compare2";

            const arrayBars = document.getElementsByClassName("array-bar")
            if(isColorChange) {
                const color = animations[i][0] === "compare1" ? SECONDARY_COLOR : PRIMARY_COLOR
                const [,barOneIdx,barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(()=> {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i*speed)
             } else {
                const[,barIdx,newHeight] = animations[i]
                if(barIdx === -1) continue;
                const barStyle = arrayBars[barIdx].style;
                setTimeout(()=>{
                    barStyle.height= `${newHeight}px`
                },i*speed)
            }
       }
    }

    const mergeSort = () => {
        const animations = sortingAlgo.getMergeSortAnimation(numbers)
        for(let i = 0; i < animations.length; i++) {
            const isColorChange = animations[i][0] === "compare1" ||
            animations[i][0] === "compare2";

            const arrayBars = document.getElementsByClassName("array-bar")
            if(isColorChange) {
                const color = animations[i][0] === "compare1" ? SECONDARY_COLOR : PRIMARY_COLOR
                const [,barOneIdx,barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(()=> {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i*speed)
             } else {
                const[,barIdx,newHeight] = animations[i]
                if(barIdx === -1) continue;
                const barStyle = arrayBars[barIdx].style;
                setTimeout(()=>{
                    barStyle.height= `${newHeight}px`
                },i*speed)
            }
       }       
    }

    const handleSpeedChange = (speedChange) => {
        setSpeed(speedChange)
        console.log("intial",speed)
    }






    return (
        <>
        <div>      
            <div className = "toolbar-container"  style ={{
            pointerEvents: pointerEvent ? 'none' : 'auto'
        }}>
            
                <div className = "toolbar">
                    <Stack spacing ={2} direction = "row">
                        <Button variant = "outlined" onClick={()=>bubbleSort()}>Bubble Sort</Button>
                        <Button variant = "outlined"  onClick={()=>insertionSort()}>Insertion Sort</Button>
                        <Button variant = "outlined"  onClick={()=>quickSort()}>Quick Sort</Button>
                        <Button variant = "outlined"  onClick={()=>mergeSort()}>Merge Sort</Button>
                    </Stack>

                </div>

            </div>

            <div className="array-container">
            {numbers.map((numbers,idx)=> (
                <div className ="array-bar" key={idx} style={{
                    backgroundColor: PRIMARY_COLOR,
                    height: `${numbers}px`,
                }}>
                </div>
            ))}


            </div>

            <div className = "animation-container">
            <Button variant = "outlined" onClick={()=>reset()} style ={{marginBottom:'15px'}}>Reset</Button>
            
            <Box component="span" sx={{ p: 2, border: '1px #298F85'}}>
            <InputLabel
            style = {{textAlign: 'center',color:'white'}}
            >Animation Speed</InputLabel>
                <Button onClick={()=>handleSpeedChange(50)}>Slow</Button>
                <Button onClick={()=>handleSpeedChange(10)}>Normal</Button>
                <Button onClick={()=>handleSpeedChange(1)}>Fast</Button>
            </Box>
           
            </div>
        </div>


       
        </>


    )

}
        












export default SortingVisualization