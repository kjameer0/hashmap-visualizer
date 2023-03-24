import HomeIcon from 'components/HomeIcon';
import { baseUrl } from 'main';
export default function Home() {
  const structures = [
    { name: 'Array', src: 'src/assets/array.png', link: baseUrl + 'arr' },
    { name: 'Hashmap', src: 'src/assets/hashmap.png', link: baseUrl + 'hashmap' },
    { name: 'Binary Tree', src: 'src/assets/binary-tree.png', link: baseUrl + 'binary-tree' },
  ];
  return (
    <section className="container home-container">
      <h1 className="container-title">Data Structure Visualizer</h1>
      {structures.map((e, idx) => {
        return <HomeIcon name={e.name} key={idx} src={e.src} link={e.link} />;
      })}
    </section>
  );
}
