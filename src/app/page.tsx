import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
        <h1>Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue ligula a ligula porttitor accumsan. 
          Donec vel nibh malesuada elit tempor pellentesque. Praesent sit amet varius dolor. Fusce mauris mauris, pharetra ornare 
          justo tincidunt, accumsan malesuada urna. Suspendisse varius euismod lacus non feugiat. Nulla posuere lacinia libero ac 
          lobortis. Sed diam lacus, facilisis at felis eu, egestas volutpat leo. Morbi fermentum cursus lectus, eu laoreet nisi pharetra at.
        </p>
        <Image
          src="/man.jpg"
          alt="static content"
          width={500}
          height={300}
        />

        <p>Curabitur a est efficitur, porta augue vel, imperdiet enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Pellentesque eu consequat ligula, in maximus purus. Aenean rhoncus mi ut sagittis pulvinar. Suspendisse maximus lectus 
          faucibus enim mattis, et mollis augue ornare. Integer mattis luctus orci sed aliquet. Proin vel sollicitudin nibh.
          Integer vitae risus venenatis, facilisis est sit amet, viverra mi. Integer id ultrices turpis. Fusce sed lorem consequat, mattis 
          mi ut, tincidunt leo. Aliquam pellentesque gravida lorem, congue bibendum lacus facilisis vitae. Curabitur aliquet purus non convallis 
          vehicula. Nunc ac quam dignissim, mattis eros quis, venenatis quam.
        </p>
        <p>Nulla ex enim, molestie nec ante a, venenatis facilisis mauris. Integer porta massa non tortor egestas, vel sodales metus luctus. 
          Cras laoreet, turpis non aliquet interdum, nibh leo maximus nunc, at congue turpis nunc vel justo. Don
          ec tincidunt pulvinar felis, quis convallis odio tempus et. Duis a finibus odio. Mauris feugiat augue ac ante elementum porttitor. 
          Praesent eget nisi aliquet sapien tincidunt malesuada. Sed ornare, odio quis ullamcorper congue, magna nulla ultrices tellus, non aliquam 
          mi purus quis tellus. Fusce vel sapien sed est rutrum gravida.
        </p>

        <Image
          src="/task-img.jpg"
          alt="static content"
          width={500}
          height={300}
        />
    </div>
  );

}
