import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Valluna() {
  const router = useRouter()
  useEffect(()=>{
    if(router.pathname == "/"){
      router.push("/home")
    }
  },[])
  return (
    <Layout>
      </Layout>
  )
}
