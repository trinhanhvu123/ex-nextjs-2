import { useRouter } from "next/router";
import React from "react" 

export interface AboutProps {
}

export default function About (props: AboutProps) {

  const router = useRouter()

  console.log('About: ' ,router.query)
  return (
    <div>
        About page!
    </div>
  );
}


