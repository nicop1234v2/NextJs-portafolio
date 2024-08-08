import Prueba from '../../components/utils/Prueba'
import { postInterface } from '../../components/interfaces/posts-interfaces';

async function getData(): Promise<postInterface>  {
    const res = await fetch("http://backend-portafolio-env.eba-zctb2xa2.us-east-2.elasticbeanstalk.com/api/posts", {
      cache: "no-store",
    });
    const data: postInterface = await res.json();
    return data;
  }



export default async function Home() {
    const posts = await getData();

    

  return (
    <div>
        <Prueba data={posts} />
    </div>
  )}
