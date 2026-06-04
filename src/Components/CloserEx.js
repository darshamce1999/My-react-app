import { useEffect, useState } from "react";
import {CustomHook} from "./CustomHook"

export function CloserEx() {
    const studentName = ["Darshan", "Akashay", "Abhisek", "Bhavana", "Danver", "Akay"]
    const searchText = "Aka"
    const filter = CustomHook(searchText, studentName);

    console.log(filter)
    return <h2>Example comp</h2>

}
