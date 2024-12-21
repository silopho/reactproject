import { RotatingLines } from "react-loader-spinner"



export function Loading() {
    return (
        <div id="loading">
            <RotatingLines
                strokeColor="white"
                width="52"
                strokeWidth="4"
            />
        </div>
    )
}