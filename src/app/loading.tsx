"use client";
import { TailSpin } from "react-loader-spinner";

export default function Loading() {
    return (
        <TailSpin
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperClass="d-flex justify-content-center align-items-center flex-grow-1"
            visible={true}
        />
    );
}
